import OpenAI from "openai";
import { OpenAIEmbeddingFunction } from "@chroma-core/openai";

const API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: API_KEY,
});

async function* chat(messages) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages,
      stream: true,
    });

    for await (const chunk of response) {
      if (chunk.choices[0].delta.content) {
        yield chunk.choices[0].delta.content;
      }
    }
  } catch (err) {
    console.log("Error in chat function:", err);
  }
}

export const embeddingFunction = new OpenAIEmbeddingFunction({
  apiKey: API_KEY,
  modelName: "text-embedding-3-small",
});

export default { chat };
