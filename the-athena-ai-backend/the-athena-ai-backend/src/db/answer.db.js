import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAnswers = async ({ userId }) => {
  return await prisma.userAnswers.findUnique({
    where: {
      userId,
    },
    select: {
      goalOptionId: true,
      jobOptionId: true,
      roleOptions: true,
      educationOptionId: true,
    },
  });
};

export const getGoalAnswer = async ({ userId, languageId }) => {
  return await prisma.userAnswers.findUnique({
    where: {
      userId,
    },
    select: {
      goalOption: {
        select: {
          id: true,
          src: true,
          value: true,
          labels: {
            where: {
              languageId,
            },
          },
        },
      },
    },
  });
};

export const getRoleAnswer = async ({ userId, languageId }) => {
  return await prisma.userAnswers.findUnique({
    where: {
      userId,
    },
    select: {
      roleOptions: {
        select: {
          id: true,
          value: true,
          labels: {
            where: {
              languageId,
            },
          },
        },
      },
    },
  });
};
export const getJobAnswer = async ({ userId, languageId }) => {
  return await prisma.userAnswers.findUnique({
    where: {
      userId,
    },
    select: {
      jobOption: {
        select: {
          id: true,
          value: true,
          labels: {
            where: {
              languageId,
            },
          },
        },
      },
    },
  });
};
export const getEducationAnswer = async ({ userId, languageId }) => {
  return await prisma.userAnswers.findUnique({
    where: {
      userId,
    },
    select: {
      educationOption: {
        select: {
          id: true,
          value: true,
          labels: {
            where: {
              languageId,
            },
          },
        },
      },
    },
  });
};

export const upsertGoalAnswer = async ({ userId, goalOptionId }) => {
  return await prisma.userAnswers.upsert({
    where: {
      userId,
    },
    update: {
      goalOptionId,
    },
    create: {
      userId,
      goalOptionId,
    },
  });
};

export const upsertRoleAnswer = async ({ userId, roleOptionsIds }) => {
  return await prisma.userAnswers.upsert({
    where: {
      userId,
    },
    update: {
      userId,
      roleOptions: {
        set: roleOptionsIds.map(({ id }) => ({ id })),
      },
    },
    create: {
      userId,
      roleOptions: {
        connect: roleOptionsIds.map(({ id }) => ({ id })),
      },
    }
  });
};

export const upsertJobAnswer = async ({ userId, jobOptionId }) => {
  return await prisma.userAnswers.upsert({
    where: {
      userId,
    },
    update: {
      jobOptionId,
    },
    create: {
      userId,
      jobOptionId,
    },
  });
};
export const upsertEducationAnswer = async ({ userId, educationOptionId }) => {
  return await prisma.userAnswers.upsert({
    where: {
      userId,
    },
    update: {
      educationOptionId,
    },
    create: {
      userId,
      educationOptionId,
    },
  });
};
