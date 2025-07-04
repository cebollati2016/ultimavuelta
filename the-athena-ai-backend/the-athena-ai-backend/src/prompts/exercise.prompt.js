import Exercise from "../enums/Exercises.enum.js";
import { getContent } from "../utils/prompt.util.js";

export const getExerciseMessages = ({
  numberOfExercises,
  type,
  difficulty,
  text,
  numberOfOptions,
}) => {
  return [
    {
      role: "system",
      content: getContent(
        getSystemPrompt({
          numberOfExercises,
          type,
          difficulty,
          numberOfOptions,
        })
      ),
    },
    {
      role: "user",
      content: getContent(getUserPrompt({ text })),
    },
  ];
};

const getSystemPrompt = ({
  numberOfExercises,
  type,
  difficulty,
  numberOfOptions,
}) => {
  return `
      Genera un conjunto de ejercicios en formato JSON utilizando las siguientes especificaciones:
      - Estructura: Sigue el formato del siguiente ejemplo: ${
        Exercise.example[type]
      }.
      - Cantidad de ejercicios: ${numberOfExercises}.
      - Tipo de ejercicio: ${Exercise.typePrompt[type]}.
      ${
        Exercise.type.MULTIPLE_CHOICE === type
          ? `- Opciones por pregunta: ${numberOfOptions}.`
          : ""
      }
      - Dificultad: ${difficulty}.
      - Formato de respuesta: JSON (sin markdown).
      Asegúrate de que los ejercicios sean claros, coherentes y estén relacionados con el texto proporcionado.
      Asegúrate de responder solo el JSON pedido sin texto extra.
    `;
};

const getUserPrompt = ({ text }) => {
  return `Genera ejercicios relacionados con el siguiente texto: ${text}`;
};
