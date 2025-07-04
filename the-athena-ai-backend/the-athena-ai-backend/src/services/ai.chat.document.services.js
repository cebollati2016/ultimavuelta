// import {
//   getDocuments as getDocumentsChroma,
//   addDocument as addDocumentChroma,
//   delDocument as delDocumentChroma,
// } from "../chroma/documents.chroma.js";

// import { readFile } from "../utils/file.util.js";

// export const getDocuments = async ({ userId }) => {
//   const documents = await getDocumentsChroma({ userId });

//   return documents; 
// };

// export const postDocument = async ({ userId, fileName, filePath }) => {
//   const fileContent = await readFile(fileName, filePath);

//   await addDocumentChroma({ userId, fileId: file.id, content: fileContent });

//   return { id: file.id, fileName };
// };

// export const delDocument = async ({ userId, fileId }) => {
  
//   await delDocumentChroma({ userId, fileId });

//   return { fileId }
// };
