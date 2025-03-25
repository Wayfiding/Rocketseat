import { groq } from "@ai-sdk/groq";
import { generateText, tool } from "ai";
import z from "zod";
import { postgreTool } from "../ai/tools/postgre-tool";
import { redisTool } from "../ai/tools/redis-tool";
import { db, pg } from "../drizzle/client";
import { subscriptions } from "../drizzle/schema/subscriptions";

interface AnswerUserMessageParams {
	message: string;
}

export async function answerUserMessage({ message }: AnswerUserMessageParams) {
	const answer = await generateText({
		model: groq("llama-3.3-70b-versatile"),
		prompt: message,
		tools: {
			postgreTool,
			redisTool,
		},
		system:
			`Você é um assistente de I.A. responsável por responder dúvidas sobre um evento de programção
             Inclua na resposta somente o que o usuário pediu, sem nenhum texto adicional.
             O retorno deve ser em markdown (sem incluir \`\`\` no inicio ou no fim)
            `.trim(),
		maxSteps: 5,
	});
	return { response: answer.text };
}
