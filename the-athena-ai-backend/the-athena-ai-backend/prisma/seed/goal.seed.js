import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createGoals = async ({ insertedLanguages }) => {
  const goal = [
    { value: "start-career", src: "/icons/rocket.svg" },
    { value: "change-career", src: "/icons/change.svg" },
    { value: "grow-career", src: "/icons/growth.svg" },
    { value: "explore-outside-career", src: "/icons/binoculars.svg" },
  ];

  const goalOptionCount = await prisma.goalOption.createMany({
    data: goal,
    skipDuplicates: true,
  });

  console.log("goalOptionCount", goalOptionCount);

  const insertedGoalOption = await prisma.goalOption.findMany({
    where: {
      value: { in: goal.map((l) => l.value) },
    },
  });

  console.log("insertedGoalOption", insertedGoalOption);

  const goalLabelCount = await prisma.goalLabel.createMany({
    data: [
      {
        label: "Start my career",
        goalOptionId: insertedGoalOption[0].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Change my career",
        goalOptionId: insertedGoalOption[1].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Grow in my career",
        goalOptionId: insertedGoalOption[2].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Explore outside my career",
        goalOptionId: insertedGoalOption[3].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Empezar mi carrera",
        goalOptionId: insertedGoalOption[0].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Cambiar de carrera",
        goalOptionId: insertedGoalOption[1].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Crecer en mi carrera",
        goalOptionId: insertedGoalOption[2].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Explorar fuera de mi carrera",
        goalOptionId: insertedGoalOption[3].id,
        languageId: insertedLanguages[1].id,
      },
    ],
    skipDuplicates: true,
  });

  console.log("goalLabelCount", goalLabelCount);

  return insertedGoalOption;
};
