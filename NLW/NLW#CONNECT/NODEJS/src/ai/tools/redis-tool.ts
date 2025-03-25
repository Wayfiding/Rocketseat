import { tool } from "ai";
import z from "zod";
import { pg } from "../../drizzle/client";
import { redis } from "../../redis/client";

export const redisTool = tool({
	description: `Realiza um comando no Redis para buscar informações sobre o sistema de indicações como número de cliques no link, número de indicações (convites) realizados e ranking do indicações
    
    Só pode ser utilizado para buscar dados do Redis, não pode executar nenhum comando de escrita.

    Você pode buscar dados de:
     - Um hash chamaddo "referral:access-count" quer guarda o número de cliques/acessos no link de convites/indicação de cada usuário no formato {"SUBSCRIBER_ID": "NUMERO_DE_CLIQUES"} onde o SUBSCRIBER_ID vem do Postgres.
     - Um zset chamaddo "refferal:ranking" que guarda o total de  convites/indicação feito por cada usuário onde o score é a quantidade de convites e o conteúdo é o SUBSCRIBER_ID que vem do POSTGRES.

    `,

	parameters: z.object({
		command: z
			.string()
			.describe(
				"O commando a ser executado no redis, como GET, HGET, ZREVRANGE.",
			),
		args: z
			.array(z.string())
			.describe("Argumentos que vem logo após o comando do Redis."),
	}),
	execute: async ({ command, args }) => {
		console.log(command, args);
		const result = await redis.call(command, args);
		return JSON.stringify(result);
	},
});
