import { embeddingFunction } from "../external/chatgpt.external.js";

import { client } from "../configs/chroma.config.js";
import { getId } from "../utils/id.util.js";

import { encoding_for_model } from "@dqbd/tiktoken";

export const getDocuments = async ({ userId }) => {
  const collectionName = `${userId}`;

  let collection;

  try {
    collection = await client.getCollection({
      name: collectionName,
      embeddingFunction,
    });
  } catch (e) {
    collection = await client.createCollection({
      name: collectionName,
      embeddingFunction,
    });
  }

  const results = await collection.get({
    include: ["metadatas"],
  });

  const documentsByFile = results.metadatas.reduce(
    (acc, { fileId, fileName }) => {
      acc[fileId] = { id: fileId, fileName };
      return acc;
    },
    {}
  );

  return Object.values(documentsByFile);
};

export const postDocument = async ({
  userId,
  fileName,
  content,
  onProgress,
}) => {
  const collectionName = `${userId}`;

  let collection;

  try {
    collection = await client.getCollection({
      name: collectionName,
      embeddingFunction,
    });
  } catch (e) {
    collection = await client.createCollection({
      name: collectionName,
      embeddingFunction,
    });
  }

  const fileId = getId();
  const chunks = splitTextByTokens(fileId, content, onProgress);

  const totalChunks = chunks.length;
  let completedChunks = 0;

  const BATCH_SIZE = 500;

  for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
    const batch = chunks.slice(i, i + BATCH_SIZE);

    await Promise.all(
      batch.map((chunk, index) => {
        const chunkIndex = i + index;
        const document = {
          id: `${fileId}_chunk_${chunkIndex}`,
          document: chunk.content,
          metadata: {
            userId,
            fileId,
            fileName,
            chunkIndex: chunk.chunkIndex,
            startOffset: chunk.startOffset,
            endOffset: chunk.endOffset,
          },
        };

        return collection
          .add({
            ids: [document.id],
            documents: [document.document],
            metadatas: [document.metadata],
          })
          .then(() => {
            completedChunks++;
            if (onProgress) {
              onProgress({
                fileId,
                process: "LOADING_FILES",
                progress: Math.round((completedChunks / totalChunks) * 100),
              });
            }
          });
      })
    );
  }

  return { fileId };
};

export const delDocument = async ({ userId, fileId }) => {
  const collectionName = `${userId}`;

  const collection = await client.getCollection({
    name: collectionName,
    embeddingFunction,
  });

  const results = await collection.get({ include: ["metadatas"] });

  const idsToDelete = results.ids.filter((_, index) => {
    const metadata = results.metadatas[index];
    return metadata.fileId === fileId;
  });

  await collection.delete({ ids: idsToDelete });

  return { fileId };
};

export const queryDocuments = async ({ userId, filesIds, message }) => {
  const collectionName = `${userId}`;

  const collection = await client.getCollection({
    name: collectionName,
    embeddingFunction,
  });

  const queryEmbeddings = await embeddingFunction.generate([message]);

  const results = await collection.query({
    queryEmbeddings,
    nResults: 5,
    where: {
      fileId: { $in: filesIds },
    },
  });

  return { context: results.documents[0], fileNames: results.metadatas[0].map(m => m.fileName) };
};

function splitTextByTokens(
  fileId,
  text,
  onProgress,
  chunkSize = 400,
  overlap = 50
) {
  const chunks = [];

  const totalTokens = text.length;
  let completedTokens = 0;

  for (let i = 0; i < text.length; i += chunkSize - overlap) {
    const chunk = text.slice(i, i + chunkSize);

    chunks.push({
      content: chunk,
      chunkIndex: chunks.length,
      startOffset: i,
      endOffset: i + chunk.length,
    });

    completedTokens += chunkSize - overlap;
    if (onProgress) {
      onProgress({
        fileId,
        process: "SPLITTING_FILES",
        progress: Math.round((completedTokens / totalTokens) * 100),
      });
    }
  }
  return chunks;
}
