import { getContent } from "../utils/prompt.util.js";
import Sections from "../enums/Sections.enum.js";

export const getSectionsMessages = ({ title, description, sectionsLength }) => {
  return [
    {
      role: "system",
      content: getContent(
        getSystemPrompt({ title, description, sectionsLength })
      ),
    },
    {
      role: "user",
      content: getContent(
        getUserPrompt({ title, description, sectionsLength })
      ),
    },
  ];
};

const getSystemPrompt = ({ title, description, sectionsLength }) => {
  return `
    A partir de ahora eres un experto generador de secciones para cursos online.
    Tu tarea es generar la estructura de las secciones para un curso.
    - Genera una salida en formato JSON con la siguiente estructura recursiva: ${JSON.stringify(
      Sections.example
    )}

    - La estructura debe tener un estilo atractivo y util como el de un curso de Coursera.
  ${
    Sections.sectionsLength.MAXIMUM_LENGTH == sectionsLength &&
    title &&
    title.length > 0
      ? `
        - El curso debe ser lo más largo posible para abarcar todos los temas relacionados con el título y con la temática descripta en general, para ello puedes hacer las listas lo más largas posibles.
        - El curso debe ser lo más estructurado recursivamente posible para abarcar todos los temas relacionados con el título y con la temática descripta en general, para ello puedes anidar estructuras lo más profundas posibles.
      `
      : ""
  }
  ${
    Sections.sectionsLength.MAXIMUM_LENGTH == sectionsLength &&
    description &&
    description.length > 0
      ? `
        - El curso debe ser lo más largo posible para abarcar todos los temas relacionados con la descripción y con la temática descripta en general, para ello puedes hacer las listas lo más largas posibles.
        - El curso debe ser lo más estructurado recursivamente posible para abarcar todos los temas relacionados con la descripción y con la temática descripta en general, para ello puedes anidar estructuras lo más profundas posibles.
      `
      : ""
  }
      ${
        Sections.sectionsLength.AS_NEEDED == sectionsLength &&
        title &&
        title.length > 0
          ? `
          - El curso debe ser lo suficientemente largo posible para abarcar todos los temas posibles relacionados con el título, para ello puedes hacer las listas tan largas como sea necesario.
          - El curso debe ser lo suficientemente estructurado recursivamente posible para abarcar todos los temas posibles relacionados con el título, para ello puedes anidar estructuras lo suficientemente profundas.

      `
          : ""
      }
      ${
        Sections.sectionsLength.AS_NEEDED == sectionsLength &&
        description &&
        description.length > 0
          ? `
          - El curso debe ser lo suficientemente largo posible para abarcar todos los temas posibles relacionados con la descripción, para ello puedes hacer las listas tan largas como sea necesario.
          - El curso debe ser lo suficientemente estructurado recursivamente posible para abarcar todos los temas posibles relacionados con la descripción, para ello puedes anidar estructuras lo suficientemente profundas.
          `
          : ""
      }
    - La estructura debe permitir desarrollar un curso completo, paso a paso
    - La estructura debe ser tan atómica como se pueda.
    - La estructura debe ser de calidad y mostrar la completitud de los temas involucrados.
    - Incluye secciones para revisar el conocimiento de los consumidores del curso, mediante ejercicios.
    - Asegúrate de responder solo con un JSON parseable, sin texto adicional.
    - La respuesta NO debe inclur markdown en tu mensaje y retorna solo un JSON.
    `;
};

const getUserPrompt = ({ title, description, sectionsLength }) => {
  return `
    ${title && title.length > 0 ? `- Este es el título: ${title}` : ""}
    ${
      description && description.length > 0
        ? `- Esta es la descripción: ${description}`
        : ""
    }
        - Recuerda: responde únicamente con JSON parseable, sin texto adicional, sin markdown, sin explicaciones.
  `;
};
