import { getContent } from "../utils/prompt.util.js";

const descriptionQuestionExample = {
  description: "Nueva descripción sugerida para el curso",
  question:
    "Pregunta diseñada para obtener información relevante para la descripción",
};

export const getDescriptionQuestionMessages = ({ questions, description }) => {
  return [
    {
      role: "system",
      content: getContent(getSystemPrompt({ questions, description })),
    },
    {
      role: "user",
      content: getContent(getUserPrompt({ questions, description })),
    },
  ];
};

const getSystemPrompt = ({ questions, description }) => {
  return `
    A partir de ahora eres un experto generador de descripciones para cursos online. Tu tarea es generar una nueva pregunta que permita obtener información útil para crear una desciprción más atractiva para un curso, y luego proponer un nueva nueva descripción basada en las respuestas anteriores.

    Genera una pregunta que permita obtener información que se pueda ver reflejada en la descripción del curso y una nueva descripción sobre el curso utilizando las siguientes especificaciones:
    - Genera una salida en formato JSON con la siguiente estructura:: ${JSON.stringify(
      descriptionQuestionExample
    )}
    ${
      description && description.length > 0
        ? `- Debes tener en cuenta la descripción anterior para generar la nueva descripción pero no para generar preguntas.`
        : "- Esta es la primera generación de descripción, no hay descripción anterior."
    }
    ${
      questions && questions.length > 0
        ? `- Debes tener en cuenta las respuestas anteriores para generar la nueva descripción y las viejas preguntas para no repetir sus conceptos.`
        : "- Esta es la primera pregunta, no hay preguntas anteriores."
    }
    - La nueva descripción debe generarse tomando en cuenta las respuestas anteriores (si las hay).
    - La pregunta debe ser estratégica para descubrir elementos clave del curso que se reflejen en la descripción.
    - La descripción debe tener un estilo atractivo como el de un video de YouTube o un curso de Coursera.
    - Asegúrate de responder solo con el JSON, sin texto adicional.
  `;
};

const getUserPrompt = ({ questions, description }) => {
  return `
${
  questions && questions.length > 0
    ? `- Las preguntas anteriores fueron: ${JSON.stringify(questions)}`
    : ""
}
  ${description && description.length > 0 ? `- La descripción anterior es: "${description}"` : ""}
  `;
};
