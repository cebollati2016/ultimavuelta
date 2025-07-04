import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createLanguages = async () => {
  const languages = [{ value: "en" }, { value: "es" }];

  const languagesCount = await prisma.languageOption.createMany({
    data: languages,
    skipDuplicates: true,
  });

  console.log("languagesCount", languagesCount);

  const insertedLanguages = await prisma.languageOption.findMany({
    where: {
      value: { in: languages.map((l) => l.value) },
    },
  });

  console.log("insertedLanguages", insertedLanguages);

  const languageLabelCount = await prisma.languageLabel.createMany({
    data: [
      {
        label: "English",
        languageOptionId: insertedLanguages[0].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Spanish",
        languageOptionId: insertedLanguages[1].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Inglés",
        languageOptionId: insertedLanguages[0].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Español",
        languageOptionId: insertedLanguages[1].id,
        languageId: insertedLanguages[1].id,
      },
    ],
    skipDuplicates: true,
  });

  console.log("languageLabelCount", languageLabelCount);

  return insertedLanguages;
};
