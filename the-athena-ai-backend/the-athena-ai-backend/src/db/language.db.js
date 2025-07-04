import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getLanguage = async ({ value }) => {
  return await prisma.languageOption.findUnique({
    where: {
      value,
    },
  });
};

export const getLanguageDefault = async () => {
  return await prisma.languageOption.findUnique({
    where: { value: "en" },
  });
};
