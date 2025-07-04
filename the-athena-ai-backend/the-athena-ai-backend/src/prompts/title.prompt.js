import { getContent } from "../utils/prompt.util.js";
import { GenerationTitleType } from "../enums/GenerationTitleType.enum.js";

const titleExample = {
  title: "Aquí el titulo",
};

export const getTitleMessages = ({ generationTitleType, keywords, title }) => {
  return [
    {
      role: "system",
      content: getContent(
        getSystemPrompt({ generationTitleType, keywords, title })
      ),
    },
    {
      role: "user",
      content: getContent(
        getUserPrompt({ generationTitleType, keywords, title })
      ),
    },
  ];
};

const getSystemPrompt = ({ generationTitleType, keywords, title }) => {
  return `
    Genera un nuevo título para mi curso utilizando las siguientes especificaciones:
    - Estructura: Sigue el formato del siguiente ejemplo: ${JSON.stringify(
      titleExample
    )}
    ${
      generationTitleType === GenerationTitleType.KEYWORDS
        ? `- Puedes utilizar alguna de las palabras más importante de las siguientes: ${JSON.stringify(
            keywords
          )}`
        : ""
    }
    ${
      generationTitleType === GenerationTitleType.SHORTER
        ? `- Debes hacer mas corto el título para que contenga menos de ${title.length} caracteres intentando mantener los significados del antiguo título.`
        : ""
    }
    ${
      generationTitleType === GenerationTitleType.BY_TITLE
        ? `- Debes rehacer el título basado en el eníguo título.`
        : ""
    }
    Asegurate que el nuevo título del curso no sea igual al anterior, dale una mejora y cambialo.
    Asegurate que el nuevo título del curso sea amigable con usuarios y el SEO de la página web.
    Inspirate en los mejores videos de youtube para generar el nuevo título.
    Asegúrate de responder solo el JSON pedido sin texto extra.
  `;
};

const getUserPrompt = ({ generationTitleType, keywords, title }) => {
  return `- El título anterior es: "${title}"`;
};
