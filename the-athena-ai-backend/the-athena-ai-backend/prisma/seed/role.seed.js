import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createRoleOptions = async ({ insertedLanguages }) => {
  const role = [
    { value: "frontend" },
    { value: "backend" },
    { value: "full-stack" },
    { value: "data-engineer" },
    { value: "data-scientist" },
    { value: "data-analyst" },
    { value: "machine-learning-engineer" },
    { value: "devops" },
    { value: "cybersecurity" },
    { value: "artificial-intelligence" },
    { value: "ux-ui-designer" },
    { value: "graphic-designer" },
    { value: "animator" },
    { value: "game-designer" },
    { value: "art-director" },
    { value: "business-analyst" },
    { value: "product-manager" },
    { value: "project-manager" },
    { value: "digital-marketing" },
    { value: "community-manager" },
    { value: "growth-hacker" },
    { value: "business-consultant" },
    { value: "learning-facilitator" },
    { value: "tech-mentor" },
    { value: "online-instructor" },
    { value: "career-coach" },
    { value: "qa-tester" },
    { value: "scrum-master" },
    { value: "software-architect" },
    { value: "blockchain-specialist" },
    { value: "cloud-computing" },
  ];

  const roleOptionCount = await prisma.roleOption.createMany({
    data: role,
    skipDuplicates: true,
  });

  console.log("roleOptionCount", roleOptionCount);

  const insertedRoleOption = await prisma.roleOption.findMany({
    where: {
      value: { in: role.map((l) => l.value) },
    },
  });

  console.log("insertedRoleOption", insertedRoleOption);

  const roleLabelCount = await prisma.roleLabel.createMany({
    data: [
      {
        label: "Frontend Developer",
        roleOptionId: insertedRoleOption[0].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Backend Developer",
        roleOptionId: insertedRoleOption[1].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Full Stack Developer",
        roleOptionId: insertedRoleOption[2].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Data Engineer",
        roleOptionId: insertedRoleOption[3].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Data Scientist",
        roleOptionId: insertedRoleOption[4].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Data Analyst",
        roleOptionId: insertedRoleOption[5].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Machine Learning Engineer",
        roleOptionId: insertedRoleOption[6].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "DevOps Engineer",
        roleOptionId: insertedRoleOption[7].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Cybersecurity Specialist",
        roleOptionId: insertedRoleOption[8].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Artificial Intelligence Specialist",
        roleOptionId: insertedRoleOption[9].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "UX/UI Designer",
        roleOptionId: insertedRoleOption[10].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Graphic Designer",
        roleOptionId: insertedRoleOption[11].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Animator",
        roleOptionId: insertedRoleOption[12].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Game Designer",
        roleOptionId: insertedRoleOption[13].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Art Director",
        roleOptionId: insertedRoleOption[14].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Business Analyst",
        roleOptionId: insertedRoleOption[15].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Product Manager",
        roleOptionId: insertedRoleOption[16].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Project Manager",
        roleOptionId: insertedRoleOption[17].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Digital Marketing Specialist",
        roleOptionId: insertedRoleOption[18].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Community Manager",
        roleOptionId: insertedRoleOption[19].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Growth Hacker",
        roleOptionId: insertedRoleOption[20].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Business Consultant",
        roleOptionId: insertedRoleOption[21].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Learning Facilitator",
        roleOptionId: insertedRoleOption[22].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Tech Mentor",
        roleOptionId: insertedRoleOption[23].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Online Instructor",
        roleOptionId: insertedRoleOption[24].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Career Coach",
        roleOptionId: insertedRoleOption[25].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "QA Tester",
        roleOptionId: insertedRoleOption[26].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Scrum Master",
        roleOptionId: insertedRoleOption[27].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Software Architect",
        roleOptionId: insertedRoleOption[28].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Blockchain Specialist",
        roleOptionId: insertedRoleOption[29].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Cloud Computing Specialist",
        roleOptionId: insertedRoleOption[30].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Desarrollador Frontend",
        roleOptionId: insertedRoleOption[0].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Desarrollador Backend",
        roleOptionId: insertedRoleOption[1].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Desarrollador Full Stack",
        roleOptionId: insertedRoleOption[2].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Ingeniero de Datos",
        roleOptionId: insertedRoleOption[3].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Científico de Datos",
        roleOptionId: insertedRoleOption[4].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Analista de Datos",
        roleOptionId: insertedRoleOption[5].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Ingeniero de Machine Learning",
        roleOptionId: insertedRoleOption[6].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Ingeniero DevOps",
        roleOptionId: insertedRoleOption[7].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Especialista en Ciberseguridad",
        roleOptionId: insertedRoleOption[8].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Especialista en Inteligencia Artificial",
        roleOptionId: insertedRoleOption[9].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Diseñador UX/UI",
        roleOptionId: insertedRoleOption[10].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Diseñador Gráfico",
        roleOptionId: insertedRoleOption[11].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Animador",
        roleOptionId: insertedRoleOption[12].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Diseñador de Videojuegos",
        roleOptionId: insertedRoleOption[13].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Director de Arte",
        roleOptionId: insertedRoleOption[14].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Analista de Negocios",
        roleOptionId: insertedRoleOption[15].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Gerente de Producto",
        roleOptionId: insertedRoleOption[16].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Gerente de Proyecto",
        roleOptionId: insertedRoleOption[17].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Especialista en Marketing Digital",
        roleOptionId: insertedRoleOption[18].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Community Manager",
        roleOptionId: insertedRoleOption[19].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Growth Hacker",
        roleOptionId: insertedRoleOption[20].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Consultor de Negocios",
        roleOptionId: insertedRoleOption[21].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Facilitador de Aprendizaje",
        roleOptionId: insertedRoleOption[22].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Mentor Tecnológico",
        roleOptionId: insertedRoleOption[23].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Instructor en Línea",
        roleOptionId: insertedRoleOption[24].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Coach de Carrera",
        roleOptionId: insertedRoleOption[25].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Tester QA",
        roleOptionId: insertedRoleOption[26].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Scrum Master",
        roleOptionId: insertedRoleOption[27].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Arquitecto de Software",
        roleOptionId: insertedRoleOption[28].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Especialista en Blockchain",
        roleOptionId: insertedRoleOption[29].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Especialista en Computación en la Nube",
        roleOptionId: insertedRoleOption[30].id,
        languageId: insertedLanguages[1].id,
      },
    ],
    skipDuplicates: true,
  });

  console.log("roleLabelCount", roleLabelCount);

  return insertedRoleOption;
};
