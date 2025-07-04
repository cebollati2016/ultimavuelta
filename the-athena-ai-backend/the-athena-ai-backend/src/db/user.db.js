import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const upsertUser = async ({
  googleId,
  fullName,
  email,
  photo,
  languageId,
}) => {
  return await prisma.googleUser.upsert({
    where: {
      googleId,
    },
    update: {
      user: {
        update: {
          fullName,
          email,
          photo,
          languageId,
        },
      },
    },
    create: {
      googleId,
      user: {
        create: {
          fullName,
          email,
          photo,
          languageId,
        },
      },
    },
    select: {
      user: {
        select: {
          id: true,
          fullName: true,
          email: true,
          photo: true,
          languageId: true,
        },
      },
    },
  });
};

export const getUser = async ({ userId }) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      photo: true,
      languageId: true,
      language: {
        select: {
          value: true,
        },
      },
    },
  });
};
