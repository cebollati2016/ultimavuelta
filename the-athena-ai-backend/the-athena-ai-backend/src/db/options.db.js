import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getGoalOptions = async ({ languageId }) => {
  return await prisma.goalOption.findMany({
    include: {
      labels: {
        where: {
          languageId,
        },
      },
    },
  });
};

export const getRoleOptions = async ({
  languageId,
  page,
  pageSize,
  contains,
}) => {
  const skip = page * pageSize;

  return await prisma.roleOption.findMany({
    where: {
      labels: {
        some: {
          languageId,
          label: {
            contains,
            mode: "insensitive",
          },
        },
      },
    },
    include: {
      labels: {
        where: {
          languageId,
          label: {
            contains,
            mode: "insensitive",
          },
        },
      },
    },
    orderBy: {
      id: "asc",
    },
    skip: skip,
    take: pageSize,
  });
};

export const getJobOptions = async ({ languageId, pageSize, contains }) => {
  return await prisma.jobOption.findMany({
    where: {
      labels: {
        some: {
          languageId: languageId,
          label: {
            contains,
            mode: "insensitive",
          },
        },
      },
    },
    include: {
      labels: {
        where: {
          languageId,
          label: {
            contains,
            mode: "insensitive",
          },
        },
      },
    },
    orderBy: {
      id: "asc",
    },
    take: pageSize,
  });
};

export const getEducationOptions = async ({ languageId }) => {
  return await prisma.educationOption.findMany({
    include: {
      labels: {
        where: {
          languageId,
        },
      },
    },
  });
};
