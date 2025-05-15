import { randomUUID } from "node:crypto";
import { buildRoutePath } from "./utils/build-route-path.js";
import { Database } from "./database.js";
import { Readable } from "node:stream";
import bodyParser from "body-parser";
import csv from "csv-parser";
const textParser = bodyParser.text({ type: "text/csv" });
const database = new Database();
export const routes = [
	{
		method: "GET",
		path: buildRoutePath("/tasks"),
		handler: (req, res) => {
			let { search } = req.query;
			search = search ? decodeURIComponent(search) : null;

			const tasks = database.select("tasks", search ? { title: search } : null);

			return res.end(JSON.stringify(tasks));
		},
	},
	{
		method: "POST",
		path: buildRoutePath("/tasks"),
		handler: (req, res) => {
			const contentType = req.headers["content-type"];

			if (contentType === "application/json") {
				try {
					const { title , description  } = req.body || {};
					if (!title || !description) {
						return res.writeHead(400).end(
							JSON.stringify({
								error: "Missing title or description",
							})
						);
					}
					const task = {
						id: randomUUID(),
						title,
						description,
						completed_at: null,
						created_at: new Date(),
						updated_at: new Date(),
					};
					database.insert("tasks", task);
					return res.writeHead(201).end();
				} catch (error) {
					console.log(error);
					return res.writeHead(500).end();
				}
				
				// biome-ignore lint/style/noUselessElse: <explanation>
			} 
		},
	},
	{
		method: "POST",
		path: buildRoutePath("/tasks/csv"),
		handler: (req, res) => {
			// Configura timeout (30 segundos)
			req.setTimeout(30000, () => {
				if (!res.headersSent) {
					res.writeHead(408).end("Timeout");
				}
			});
			// 3. Processa o stream diretamente
			const chunks = [];
			req.on("data", (chunk) => {
				chunks.push(chunk);
				console.log("Recebido chunk de", chunk.length, "bytes");
			});

			req.on("end", () => {
				try {
					// 4. Converte os chunks para string
					const csvData = Buffer.concat(chunks).toString("utf8");
					console.log("Dados completos recebidos:", csvData.length, "bytes");

					if (!csvData.trim()) {
						return res.writeHead(400).end("CSV vazio");
					}

					// 5. Processa o CSV
					const results = [];
					Readable.from(csvData)
						.pipe(csv())
						.on("data", (data) => {
							const task = {
								id: randomUUID(),
								title: data.title || "Sem título",
								description: data.description || "",
								created_at: new Date(),
								updated_at: new Date(),
							};
							results.push(task);
							database.insert("tasks", task);
						})
						.on("end", () => {
							res.writeHead(200, { "Content-Type": "application/json" });
							res.end(JSON.stringify({ imported: results.length }));
						})
						.on("error", (err) => {
							console.error("Erro no CSV:", err);
							res.writeHead(500).end("Erro no processamento");
						});
				} catch (err) {
					console.error("Erro geral:", err);
					res.writeHead(500).end("Erro interno");
				}
			});

			req.on("error", (err) => {
				console.error("Erro na requisição:", err);
				res.writeHead(500).end("Erro de comunicação");
			});
		},
	},
	{
		method: "PUT",
		path: buildRoutePath("/tasks/:id"),
		handler: (req, res) => {
			try {
				const { id } = req.params;
				console.log(id);
				const { title , description  } = req.body || {};
				if (!title || !description) {
					return res.writeHead(400).end(
						JSON.stringify({
							error: "Missing title or description",
						})
					);
				}
				
				const updated = database.update("tasks", id, { title, description });
				if (!updated) {
					return res.writeHead(404).end(
					  JSON.stringify({
						error: "Task not found",
					  })
					);
				  }
				return res.writeHead(204).end();
			} catch (error) {
				return res.writeHead(500).end();
			}
			
		},
	},
	{
		method: "DELETE",
		path: buildRoutePath("/tasks/:id"),
		handler: (req, res) => {
			const { id } = req.params;
			database.delete("tasks", id);
			return res.writeHead(204).end();
		},
	},
	{
		method: "PATCH",
		path: buildRoutePath("/tasks/:id/complete"),
		handler: (req, res) => {
			const { id } = req.params;
			database.update("tasks", id, { completed_at: new Date() });
			return res.writeHead(204).end();
		},
	},
];
