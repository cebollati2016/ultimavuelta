import { getContent } from "../utils/prompt.util.js";

export const getAnswerByContextMessages = ({ context, message }) => {
  const messages = [
    {
      role: "system",
      content: getContent(getSystemPrompt({ context, message })),
    },
    {
      role: "user",
      content: getContent(getUserPrompt({ context, message })),
    },
  ];

  return messages;
};

const getSystemPrompt = () => {
  return `
    Responde al mensaje del usuario utilizando solo el contexto proportcionado.
    No utlices en tu respuesta lo que no concideres importante.
    Elimina de tu respuesta lo que concideres fuera del contexto o que no responda la pregunta. 
    En caso que el contexto no permita responder el mensaje debes decir que no tienes información para responder.
  `;
};

const getUserPrompt = ({ context, message }) => {
  return `
    El siguiente es el contexto a utilizar para elaborar la respuesta "${context}".
    El siguiente es el mensaje del usuario a responder: "${message}".
  `;
};
