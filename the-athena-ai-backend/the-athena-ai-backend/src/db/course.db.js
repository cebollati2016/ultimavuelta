import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const postCourse = async ({ userId }) => {
  const course = await prisma.course.create({
    data: {
      active: true,
      createdById: userId,
    },
  });

  return course;
};

export const delCourse = async ({ userId, courseId }) => {
  const course = await prisma.course.update({
    where: {
      id: courseId,
      createdById: userId,
    },
    data: {
      active: false,
    },
  });

  console.log("result", course);

  return course;
};

export const getCourse = async ({ userId, courseId }) => {
  const course = await prisma.course.findUnique({
    where: {
      id: courseId,
      active: true,
      createdById: userId,
    },
  });

  return course;
};

export const getCoursesByUser = async ({ userId }) => {
  const course = await prisma.course.findMany({
    where: {
      active: true,
      createdById: userId,
    },
    include: {
      courseDetails: {
        include: {
          courseTags: {
            include: {
              labels: true,
            },
          },
        },
      },
    },
  });

  return course;
};

export const getCourses = async ({ contains }) => {
  const courses = await prisma.course.findMany({
    where: {
      active: true,
      courseDetails: {
        some: {
          OR: [
            {
              title: {
                contains,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains,
                mode: "insensitive",
              },
            },
            {
              courseTags: {
                some: {
                  value: {
                    contains,
                    mode: "insensitive",
                  },
                },
              },
            },
            {
              courseTags: {
                some: {
                  labels: {
                    some: {
                      label: {
                        contains,
                        mode: "insensitive",
                      },
                    },
                  },
                },
              },
            },
          ],
        },
      },
    },
    include: {
      courseDetails: {
        include: {
          courseTags: {
            include: {
              labels: true,
            },
          },
        },
      },
    },
  });

  return courses;
};

export const getCourseDetails = async ({ userId, courseId, languageId }) => {
  return await prisma.course.findUnique({
    where: {
      id: courseId,
      createdById: userId,
    },
    include: {
      courseDetails: {
        include: {
          courseTags: {
            include: {
              labels: {
                where: {
                  languageId,
                },
              },
            },
          },
        },
      },
    },
  });
};

export const upsertCourseDetails = async ({
  userId,
  languageId,
  courseId,
  title,
  description,
  tagsIds,
}) => {
  const course = await prisma.course.findUnique({
    where: {
      id: courseId,
      createdById: userId,
    },
    include: {
      courseDetails: true,
    },
  });

  if (!course) return;

  await prisma.courseDetails.upsert({
    where: {
      courseId_languageId: {
        courseId: course.id,
        languageId,
      },
    },
    update: {
      ...(title && { title }),
      ...(description && { description }),
      ...(tagsIds?.length > 0 && {
        courseTags: {
          connect: tagsIds.map((id) => ({ id })),
        },
      }),
    },
    create: {
      courseId: course.id,
      languageId,
      ...(title && { title }),
      ...(description && { description }),
      ...(tagsIds?.length > 0 && {
        courseTags: {
          connect: tagsIds.map((id) => ({ id })),
        },
      }),
    },
  });

  return course;
};

export const getTags = async ({ languageId, pageSize, contains }) => {
  return await prisma.courseTag.findMany({
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
