import { getExerciseMessages } from "../prompts/exercise.prompt.js";
import openaiExternal from "../external/chatgpt.external.js";
import { getKeypointsMessages } from "../prompts/keypoints.prompt.js";
import { getElaborationsMessages } from "../prompts/elaborations.prompt.js";

export async function* getExercise({
  numberOfExercises,
  type,
  difficulty,
  text,
  numberOfOptions,
}) {
  const messages = getExerciseMessages({
    numberOfExercises,
    type,
    difficulty,
    text,
    numberOfOptions,
  });

  console.log("messagess", messages);

  for await (const chunk of openaiExternal.chat(messages)) {
    yield chunk;
  }
}

export async function* getKeypointsNumber({ sections, path }) {
  const messages = getKeypointsNumberMessages({
    sections,
    path,
    numberOfKeypoints,
  });

  for await (const chunk of openaiExternal.chat(messages)) {
    yield chunk;
  }
}

export async function* getKeypoints({ sections, path, numberOfKeypoints }) {
  const messages = getKeypointsMessages({
    sections,
    path,
    numberOfKeypoints,
  });

  console.log("messagess", messages);

  for await (const chunk of openaiExternal.chat(messages)) {
    yield chunk;
  }
}

export async function* getElaborations({ topic, numberOfElaborations }) {
  const messages = getElaborationsMessages({
    topic,
    numberOfElaborations,
  });

  console.log("messagess", messages);

  for await (const chunk of openaiExternal.chat(messages)) {
    yield chunk;
  }
}
