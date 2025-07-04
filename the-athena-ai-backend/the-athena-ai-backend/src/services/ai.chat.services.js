import openaiExternal from "../external/chatgpt.external.js";
import { getAnswerMessages } from "../prompts/chat.prompt.js";
import { getAnswerByContextMessages } from "../prompts/chat.context.prompt.js";

// TODO
const history = {};

const getHistory = async ({ conversationId }) => {
  if (!conversationId) return [];
  return history[conversationId] || [];
};

const postHistory = async ({ conversationId, content, role }) => {
  if (!history[conversationId]) {
    history[conversationId] = [];
  }

  history[conversationId].push({ content, role });
};

export async function* getAnswer({ conversationId, message }) {
  const context = await getHistory({ conversationId });

  const messages = getAnswerMessages({ context, message });

  console.log("messages", messages);

  let answer = "";

  for await (const chunk of openaiExternal.chat(messages)) {
    answer += chunk;
    yield chunk;
  }

  await postHistory({ content: message, role: "user" });
  await postHistory({ content: answer, role: "assistant" });

  console.log("history", JSON.stringify(history));
}

export async function* getAnswerByContext({ context, message }) {
  const messages = getAnswerByContextMessages({ context, message });

  console.log("messages", messages);

  let answer = "";

  for await (const chunk of openaiExternal.chat(messages)) {
    console.log("chunk", chunk);
    answer += chunk;
    yield chunk;
  }

  await postHistory({ content: message, role: "user" });
  await postHistory({ content: answer, role: "assistant" });
}
