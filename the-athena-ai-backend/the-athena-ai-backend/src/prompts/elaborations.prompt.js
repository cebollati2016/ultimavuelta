import Elaborations from "../enums/Elaborations.enum.js";
import { getContent } from "../utils/prompt.util.js";

export const getElaborationsMessages = ({ topic, numberOfElaborations }) => {
  return [
    {
      role: "system",
      content: getContent(
        getSystemPrompt({
          topic,
          numberOfElaborations,
        })
      ),
    },
    {
      role: "user",
      content: getContent(getUserPrompt({ topic, numberOfElaborations })),
    },
  ];
};

const getSystemPrompt = ({ topic, numberOfElaborations }) => {
  return `
      Genera un conjunto de textos en formato JSON utilizando las siguientes especificaciones:
      - Estructura: Sigue el formato del siguiente ejemplo: ${JSON.stringify(
        Elaborations.example
      )}.
      - Cantidad de textos: ${numberOfElaborations}.
      - Cada texto debe ser un párrafo a incluir en un curso por lo tanto debe ser largo y elaborar la temátca proporcionada.
      - Formato de respuesta: JSON (sin markdown).
      - Asegúrate de que los textos sean claros, coherentes y estén relacionados con la temática proporcionada.
      - Asegúrate de responder solo el JSON pedido sin texto extra.
    `;
};

const getUserPrompt = ({ topic }) => {
  return `
  - Genera los textos relacionados con la siguiente temática: ${topic}
  `;
};
