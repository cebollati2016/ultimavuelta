import { readFile } from "../utils/file.util.js";
import {
  delDocument,
  getDocuments,
  postDocument,
  queryDocuments,
} from "../chroma/documents.chroma.js";
import { getAnswer, getAnswerByContext } from "../services/ai.chat.services.js";

export const postChatController = async (req, res) => {
  const { id: userId, languageId } = req.user;
  const { conversationId, message } = req.body;

  if (!message) {
    res.json({ err: "" });
  }

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Transfer-Encoding", "chunked");

  for await (const chunk of getAnswer({ conversationId, message })) {
    res.write(JSON.stringify({ done: false, answer: chunk }) + "\n");
  }

  res.end();
};

export const postChatDocumentsController = async (req, res) => {
  const { id: userId, languageId } = req.user;
  const { filesIds, message } = req.body;

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Transfer-Encoding", "chunked");

  console.log("here?", filesIds);

  const { context, fileNames } = await queryDocuments({
    userId,
    filesIds,
    message,
  });

  for await (const chunk of getAnswerByContext({
    context,
    message,
  })) {
    res.write(JSON.stringify({ done: false, answer: chunk }) + "\n");
  }

  const refs = context.map((c, i) => ({
    text: c,
    fileName: fileNames[i],
  }));

  res.end(JSON.stringify({ done: true, refs }));
};

export const getChatDocumentsController = async (req, res) => {
  const { id: userId, languageId } = req.user;

  const files = await getDocuments({ userId });

  res.json({ data: { files } });
};

export const postChatDocumentController = async (req, res) => {
  const { id: userId, languageId } = req.user;
  const { originalname: fileName, path: filePath } = req.file;

  const content = await readFile(fileName, filePath);

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Transfer-Encoding", "chunked");

  const { fileId } = await postDocument({
    userId,
    fileName,
    content,
    onProgress: ({ process, fileId, progress }) => {
      res.write(JSON.stringify({ process, progress, fileId, fileName }) + "\n");
    },
  });

  res.end(
    JSON.stringify({ process: "FINISHED", progress: 100, fileId, fileName }) +
      "\n"
  );
};

export const delChatDocumentController = async (req, res) => {
  const { id: userId, languageId } = req.user;
  const fileId = req.params.id;

  const data = await delDocument({ userId, fileId });

  res.json({ data });
};
