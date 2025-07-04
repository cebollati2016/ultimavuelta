import Keypoints from "../enums/Keypoints.enum.js";
import { getContent } from "../utils/prompt.util.js";

export const getKeypointsMessages = ({ sections, path, numberOfKeypoints }) => {
  return [
    {
      role: "system",
      content: getContent(
        getSystemPrompt({
          sections,
          path,
          numberOfKeypoints,
        })
      ),
    },
    {
      role: "user",
      content: getContent(getUserPrompt({ sections, path, numberOfKeypoints })),
    },
  ];
};

const getSystemPrompt = ({ sections, path, numberOfKeypoints }) => {
  return `
      Genera un conjunto de keypoints a tratar en la sección especificada en formato JSON utilizando las siguientes especificaciones:
      - Estructura: Sigue el formato del siguiente ejemplo: ${JSON.stringify(
        Keypoints.example
      )}.
      - Cantidad de keypoints: ${numberOfKeypoints}.
      - Formato de respuesta: JSON (sin markdown).
      - Asegúrate de que los keypoints sean claros, coherentes y estén relacionados con la sección proporcionada.
      - Asegúrate de que los keypoints sean no sean abarcados en las demás secciones, para no repetir el contenido.
      - Asegúrate de responder solo el JSON pedido sin texto extra.
    `;
};

const getUserPrompt = ({ sections, path, numberOfKeypoints }) => {
  return `
  - Esta es la estructura de secciones de mi curso: ${JSON.stringify(sections)}
  - Genera keypoints relacionados con la siguiente sección: ${path.join(" > ")}
  `;
};
