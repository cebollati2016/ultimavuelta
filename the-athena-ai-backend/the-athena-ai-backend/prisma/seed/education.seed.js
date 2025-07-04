import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const createEducation = async ({ insertedLanguages }) => {
  const education = [
    { value: "less_than_high_school" },
    { value: "high_school_graduate" },
    { value: "some_college_no_degree" },
    { value: "associate_degree" },
    { value: "bachelor_degree" },
    { value: "master_degree" },
    { value: "professional_degree" },
    { value: "doctorate_degree" },
  ];

  const educationOptionCount = await prisma.educationOption.createMany({
    data: education,
    skipDuplicates: true,
  });

  console.log("educationOptionCount", educationOptionCount);

  const insertEdeducationOption = await prisma.educationOption.findMany({
    where: {
      value: { in: education.map((l) => l.value) },
    },
  });

  console.log("insertEdeducationOption", insertEdeducationOption);

  const educationLabelCount = await prisma.educationLabel.createMany({
    data: [
      {
        label: "Less than high school ",
        educationOptionId: insertEdeducationOption[0].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "High school diploma",
        educationOptionId: insertEdeducationOption[1].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Some college, but no degree",
        educationOptionId: insertEdeducationOption[2].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Associate Degree (e.g., AA, AS)",
        educationOptionId: insertEdeducationOption[3].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Bachelor's degree (e.g., BA, AB, BS)	",
        educationOptionId: insertEdeducationOption[4].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Master's degree (e.g., MA, MS, MBA)",
        educationOptionId: insertEdeducationOption[5].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Professional school degree (e.g., MD, JD)",
        educationOptionId: insertEdeducationOption[6].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Doctorate degree (e.g., PhD, EdD)",
        educationOptionId: insertEdeducationOption[7].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Educación secundaria incompleta",
        educationOptionId: insertEdeducationOption[0].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Educación secundaria completa",
        educationOptionId: insertEdeducationOption[1].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Universidad incompleta",
        educationOptionId: insertEdeducationOption[2].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Técnico superior universitario",
        educationOptionId: insertEdeducationOption[3].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Licenciatura o título universitario de grado",
        educationOptionId: insertEdeducationOption[4].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Maestría",
        educationOptionId: insertEdeducationOption[5].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Título profesional avanzado (medicina, derecho)",
        educationOptionId: insertEdeducationOption[6].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Doctorado / PhD",
        educationOptionId: insertEdeducationOption[7].id,
        languageId: insertedLanguages[1].id,
      },
    ],
    skipDuplicates: true,
  });

  console.log("educationLabelCount", educationLabelCount);

  return insertEdeducationOption;
};
