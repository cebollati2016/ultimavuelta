import { getContent } from "../utils/prompt.util.js";
import { GenerationDescriptionType } from "../enums/GenerationDescriptionType.enum.js";

const descriptionExample = {
  description: "Aquí la descripción",
};

export const getDescriptionMessages = ({
  generationDescriptionType,
  keywords,
  title,
  description,
}) => {
  return [
    {
      role: "system",
      content: getContent(
        getSystemPrompt({
          generationDescriptionType,
          keywords,
          title,
          description,
        })
      ),
    },
    {
      role: "user",
      content: getContent(
        getUserPrompt({
          generationDescriptionType,
          keywords,
          title,
          description,
        })
      ),
    },
  ];
};

const getSystemPrompt = ({
  generationDescriptionType,
  keywords,
  title,
  description,
}) => {
  return `
    Genera una nueva descripción para mi curso utilizando las siguientes especificaciones:
    - Estructura: Sigue el formato del siguiente ejemplo: ${JSON.stringify(
      descriptionExample
    )}
    ${
      generationDescriptionType === GenerationDescriptionType.KEYWORDS
        ? `- Utiliza alguna de las palabras más importante de la siguiente lista: ${JSON.stringify(
            keywords
          )}`
        : ""
    }
    ${
      generationDescriptionType === GenerationDescriptionType.SHORTER
        ? `- Debes hacer mas corta la descripción para que contenga menos de ${description.length} caracteres intentando mantener los significados de la descripción anterior.`
        : ""
    }
    ${
      generationDescriptionType === GenerationDescriptionType.BY_TITLE
        ? `- Debes rehacer la descripción basado en el título actual.`
        : ""
    }
    ${
      generationDescriptionType === GenerationDescriptionType.BY_DESCRIPTION
        ? `- Debes rehacer la descripción basado en la antígua descripción.`
        : ""
    }
    Asegurate que la nueva descripción del curso no sea igual a la anterior, dale una mejora y cámbiala.
    Asegurate que la nueva descripción del curso sea amigable con usuarios y el SEO de la página web.
    Inspirate en las mejores descripciónes de videos de youtube para generar la nueva descripción.
    Asegúrate de responder solo el JSON pedido sin texto extra.
  `;
};

const getUserPrompt = ({
  generationDescriptionType,
  keywords,
  title,
  description,
}) => {
  return `
    - El título actual es: "${title}"
    - La descripción anterior es: "${description}"
  `;
};
