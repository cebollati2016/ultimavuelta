import { PrismaClient } from "@prisma/client";

import { createLanguages } from "./seed/languages.seed.js";
import { createGoals } from "./seed/goal.seed.js";
import { createRoleOptions } from "./seed/role.seed.js";
import { createJobs } from "./seed/job.seed.js";
import { createEducation } from "./seed/education.seed.js";
import { createCourseTag } from "./seed/tags.seed.js";

const prisma = new PrismaClient();

async function main() {
  const insertedLanguages = await createLanguages();
  const insertedGoals = await createGoals({ insertedLanguages });
  const insertedRoles = await createRoleOptions({ insertedLanguages });
  const insertedJobsOption = await createJobs({ insertedLanguages });
  const insertedEdeducationOption = await createEducation({
    insertedLanguages,
  });
  const insertedCourseTag = await createCourseTag({ insertedLanguages });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
