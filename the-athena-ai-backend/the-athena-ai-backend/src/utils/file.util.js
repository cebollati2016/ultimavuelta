import fs from "fs/promises";
import { readPdfText } from "pdf-text-reader";

import PptxParser from "node-pptx-parser";

export const readFile = async (name, path) => {
  const splittedName = name.split(".");
  const extension = splittedName[splittedName.length - 1];

  if (extension == "txt") {
    return await fs.readFile(path, "utf8");
  }

  if (extension == "pptx") {
    const parser = new PptxParser(path);
    const extract = await parser.extractText();

    const ordered = extract.sort((a, b) => {
      return getSlideNumber(a.path) - getSlideNumber(b.path);
    });

    const pptxText = ordered
      .map(({ text }) => text.join(""))
      .join("")
      .split("\n")
      .filter((w) => w.length > 0)
      .join("");

    return pptxText;
  }

  if (extension == "pdf") {
    const pdfText = await readPdfText({ url: path });
    return pdfText;
  }
};

const getSlideNumber = (slidePath) =>
  parseInt(slidePath.match(/slide(\d+)\.xml/)[1], 10);
