import Exercise from "../enums/Exercises.enum.js";
import { getExercise } from "../services/ai.content.service.js";

export const postAIExerciseController = async (req, res) => {
  const { id: userId, languageId } = req.user;
  let { numberOfExercises, type, difficulty, text, language, numberOfOptions } =
    req.body;

  // Required fields
  if (!type) {
    return res.status(400).json({ error: "Missing required fields: 'type'." });
  }

  if (!text) {
    return res.status(400).json({ error: "Missing required fields: 'text'." });
  }

  // Optional Values
  numberOfExercises = numberOfExercises || 1;
  difficulty = difficulty || Exercise.difficulty.MEDIUM;
  language = language || Exercise.language.en_US;
  numberOfOptions = numberOfOptions || 4;

  // Type
  if (isNaN(numberOfExercises)) {
    return res.status(400).json({
      error: "Invalid value for field: 'numberOfExercises'. Expected a number.",
    });
  }
  if (isNaN(numberOfOptions)) {
    return res.status(400).json({
      error: "Invalid value for field: 'numberOfOptions'. Expected a number.",
    });
  }

  // Range
  if (numberOfExercises < 1) {
    return res.status(400).json({
      error:
        "Invalid value for field: 'numberOfExercises'. Expected a positive number.",
    });
  }
  if (numberOfOptions < 1) {
    return res.status(400).json({
      error:
        "Invalid value for field: 'numberOfOptions'. Expected a positive number.",
    });
  }

  // Enum Values
  if (!Exercise.type[type]) {
    return res.status(400).json({
      error: `Invalid value for field: 'type'. Expected one of: ${Object.values(
        Exercise.type
      )}`,
    });
  }

  if (!Exercise.difficulty[difficulty]) {
    return res.status(400).json({
      error: `Invalid value for field: 'difficulty'. Expected one of: ${Object.values(
        Exercise.type
      )}`,
    });
  }

  if (!Exercise.language[language]) {
    return res.status(400).json({
      error: `Invalid value for field: 'language'. Expected one of: ${Object.values(
        Exercise.language
      )}`,
    });
  }

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Transfer-Encoding", "chunked");

  for await (const chunk of getExercise({
    numberOfExercises,
    type,
    difficulty,
    text,
    language,
    numberOfOptions,
  })) {
    res.write(chunk);
  }
  res.end();
};
