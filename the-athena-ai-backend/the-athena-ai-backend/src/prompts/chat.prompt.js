import { getContent } from "../utils/prompt.util.js";

export const getAnswerMessages = ({ context, message }) => {
  const messages = [];

  messages.push({
    role: "system",
    content: getContent(getSystemPrompt({ context, message })),
  });

  if (context.length > 0) {
    messages.concat(context.map((c) => ({ role: c.role, content: c.content })));
  }

  messages.push({
    role: "user",
    content: getContent(getUserPrompt({ context, message })),
  });

  return messages;
};

const getSystemPrompt = ({ message }) => {
  return ``;
};

const getUserPrompt = ({ message }) => {
  return `${message}`;
};
