import { getContent } from "../utils/prompt.util.js";

const titleQuestionExample = {
  title: "Nuevo título sugerido para el curso",
  question:
    "Pregunta diseñada para obtener información relevante para el título",
};

export const getTitleQuestionMessages = ({ questions, title }) => {
  return [
    {
      role: "system",
      content: getContent(getSystemPrompt({ questions, title })),
    },
    {
      role: "user",
      content: getContent(getUserPrompt({ questions, title })),
    },
  ];
};

const getSystemPrompt = ({ questions, title }) => {
  return `
    A partir de ahora eres un experto generador de títulos para cursos online. Tu tarea es generar una nueva pregunta que permita obtener información útil para crear un título más atractivo para un curso, y luego proponer un nuevo título basado en las respuestas anteriores.

    Genera una pregunta que permita obtener información que se pueda ver reflejada en el título del curso y un nuevo título sobre el curso utilizando las siguientes especificaciones:
    - Genera una salida en formato JSON con la siguiente estructura:: ${JSON.stringify(
      titleQuestionExample
    )}
    ${
      title && title.length > 0
        ? `- Debes tener en cuenta el título anterior para generar el nuevo título pero no para generar preguntas.`
        : "- Esta es la primera generación del título, no hay título anterior."
    }
    ${
      questions && questions.length > 0
        ? `- Debes tener en cuenta las respuestas anteriores para generar el nuevo título y las viejas preguntas para no repetir sus conceptos.`
        : "- Esta es la primera pregunta, no hay preguntas anteriores."
    }
    - El nuevo título debe generarse tomando en cuenta las respuestas anteriores (si las hay).
    - La pregunta debe ser estratégica para descubrir elementos clave del curso que se reflejen en el título.
    - El título debe tener un estilo atractivo como el de un video de YouTube o un curso de Coursera.
    - Asegúrate de responder solo con el JSON, sin texto adicional.
  `;
};

const getUserPrompt = ({ questions, title }) => {
  return `
${
  questions && questions.length > 0
    ? `- Las preguntas anteriores fueron: ${JSON.stringify(questions)}`
    : ""
}
  ${title && title.length > 0 ? `- El título anterior es: "${title}"` : ""}
  `;
};
