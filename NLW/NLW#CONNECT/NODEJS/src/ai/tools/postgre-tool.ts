import { tool } from "ai";
import z from "zod";
import { pg } from "../../drizzle/client";

export const postgreTool = tool({
	description: `Realiza uma query no postgres para buscar informações sobre as tabelas do banco de dados.
    Só pode realizar operaçãoes de busca(SELECT), não é permitido a geração de qualquer operação de escrita.
    
    
    Tables:
    """
    CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT now()
    );

    """
    Todas operações devem retornar um máximo de 50 itens.
    `,

	parameters: z.object({
		query: z.string().describe("A query do PostgreSQL para ser executado"),
		params: z.array(z.string()).describe("Os parâmetros da query"),
	}),
	execute: async ({ query, params }) => {
		console.log(query, params);
		const subscribers = await pg.unsafe(query, params);
		return JSON.stringify(subscribers);
	},
});
