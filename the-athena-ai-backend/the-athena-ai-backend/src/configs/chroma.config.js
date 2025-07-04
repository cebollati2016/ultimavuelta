import { ChromaClient } from "chromadb";

const URL_CHROMA = process.env.URL_CHROMA;

export const client = new ChromaClient();
