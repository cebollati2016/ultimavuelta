import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const createCourseTag = async ({ insertedLanguages }) => {
  const tags = [
    { value: "web-development" },
    { value: "mobile-apps" },
    { value: "react-js" },
    { value: "node-js" },
    { value: "python-programming" },
    { value: "data-visualization" },
    { value: "machine-learning" },
    { value: "devops-tools" },
    { value: "cybersecurity-basics" },
    { value: "artificial-intelligence" },
    { value: "ux-ui-design" },
    { value: "graphic-design" },
    { value: "2d-animation" },
    { value: "game-development" },
    { value: "digital-illustration" },
    { value: "business-intelligence" },
    { value: "product-management" },
    { value: "agile-project-management" },
    { value: "digital-marketing-strategy" },
    { value: "social-media-management" },
    { value: "growth-marketing" },
    { value: "entrepreneurship" },
    { value: "instructional-design" },
    { value: "mentoring-skills" },
    { value: "online-teaching" },
    { value: "career-development" },
    { value: "quality-assurance" },
    { value: "scrum-methodology" },
    { value: "software-architecture" },
    { value: "blockchain-fundamentals" },
    { value: "cloud-computing-aws" },
    { value: "react-basics" },
    { value: "jsx" },
    { value: "components-and-props" },
    { value: "state-management" },
    { value: "usestate-hook" },
    { value: "useeffect-hook" },
    { value: "usecontext-hook" },
    { value: "custom-hooks" },
    { value: "component-reusability" },
    { value: "high-order-components" },
    { value: "react-router" },
    { value: "react-forms" },
    { value: "controlled-vs-uncontrolled" },
    { value: "react-context-api" },
    { value: "redux" },
    { value: "react-query" },
    { value: "testing-react" },
    { value: "vite-and-webpack" },
    { value: "next-js" },
    { value: "server-side-rendering" },
    { value: "static-site-generation" },
    { value: "api-integration" },
    { value: "axios-and-fetch" },
    { value: "responsive-design" },
    { value: "css-in-js" },
    { value: "tailwind-css" },
    { value: "design-systems" },
    { value: "accessibility-in-react" },
    { value: "performance-optimization" },
    { value: "code-splitting" },
    { value: "deployment-netlify-vercel" },
  ];

  const courseTagCount = await prisma.courseTag.createMany({
    data: tags,
    skipDuplicates: true,
  });

  console.log("courseTagCount", courseTagCount);

  const insertedCourseTag = await prisma.courseTag.findMany({
    where: {
      value: { in: tags.map((t) => t.value) },
    },
  });

  console.log("insertedCourseTag", insertedCourseTag);

  const courseTagLabelCount = await prisma.courseTagLabel.createMany({
    data: [
      {
        label: "Web Development",
        courseTagId: insertedCourseTag[0].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Mobile Applications",
        courseTagId: insertedCourseTag[1].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "React.js",
        courseTagId: insertedCourseTag[2].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Node.js",
        courseTagId: insertedCourseTag[3].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Python Programming",
        courseTagId: insertedCourseTag[4].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Data Visualization",
        courseTagId: insertedCourseTag[5].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Machine Learning",
        courseTagId: insertedCourseTag[6].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "DevOps Tools",
        courseTagId: insertedCourseTag[7].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Cybersecurity Basics",
        courseTagId: insertedCourseTag[8].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Artificial Intelligence",
        courseTagId: insertedCourseTag[9].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "UX/UI Design",
        courseTagId: insertedCourseTag[10].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Graphic Design",
        courseTagId: insertedCourseTag[11].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "2D Animation",
        courseTagId: insertedCourseTag[12].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Game Development",
        courseTagId: insertedCourseTag[13].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Digital Illustration",
        courseTagId: insertedCourseTag[14].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Business Intelligence",
        courseTagId: insertedCourseTag[15].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Product Management",
        courseTagId: insertedCourseTag[16].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Agile Project Management",
        courseTagId: insertedCourseTag[17].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Digital Marketing Strategy",
        courseTagId: insertedCourseTag[18].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Social Media Management",
        courseTagId: insertedCourseTag[19].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Growth Marketing",
        courseTagId: insertedCourseTag[20].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Entrepreneurship",
        courseTagId: insertedCourseTag[21].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Instructional Design",
        courseTagId: insertedCourseTag[22].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Mentoring Skills",
        courseTagId: insertedCourseTag[23].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Online Teaching",
        courseTagId: insertedCourseTag[24].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Career Development",
        courseTagId: insertedCourseTag[25].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Quality Assurance",
        courseTagId: insertedCourseTag[26].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Scrum Methodology",
        courseTagId: insertedCourseTag[27].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Software Architecture",
        courseTagId: insertedCourseTag[28].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Blockchain Fundamentals",
        courseTagId: insertedCourseTag[29].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Cloud Computing with AWS",
        courseTagId: insertedCourseTag[30].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "React Basics",
        courseTagId: insertedCourseTag[31].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "JSX Syntax",
        courseTagId: insertedCourseTag[32].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Components and Props",
        courseTagId: insertedCourseTag[33].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "State Management",
        courseTagId: insertedCourseTag[34].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "useState Hook",
        courseTagId: insertedCourseTag[35].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "useEffect Hook",
        courseTagId: insertedCourseTag[36].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "useContext Hook",
        courseTagId: insertedCourseTag[37].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Custom Hooks",
        courseTagId: insertedCourseTag[38].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Component Reusability",
        courseTagId: insertedCourseTag[39].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "High Order Components",
        courseTagId: insertedCourseTag[40].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "React Router",
        courseTagId: insertedCourseTag[41].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "React Forms",
        courseTagId: insertedCourseTag[42].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Controlled vs Uncontrolled",
        courseTagId: insertedCourseTag[43].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "React Context API",
        courseTagId: insertedCourseTag[44].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Redux",
        courseTagId: insertedCourseTag[45].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "React Query",
        courseTagId: insertedCourseTag[46].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Testing in React",
        courseTagId: insertedCourseTag[47].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Vite and Webpack",
        courseTagId: insertedCourseTag[48].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Next.js",
        courseTagId: insertedCourseTag[49].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Server Side Rendering",
        courseTagId: insertedCourseTag[50].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Static Site Generation",
        courseTagId: insertedCourseTag[51].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "API Integration",
        courseTagId: insertedCourseTag[52].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Axios and Fetch",
        courseTagId: insertedCourseTag[53].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Responsive Design",
        courseTagId: insertedCourseTag[54].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "CSS-in-JS",
        courseTagId: insertedCourseTag[55].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Tailwind CSS",
        courseTagId: insertedCourseTag[56].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Design Systems",
        courseTagId: insertedCourseTag[57].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Accessibility in React",
        courseTagId: insertedCourseTag[58].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Performance Optimization",
        courseTagId: insertedCourseTag[59].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Code Splitting",
        courseTagId: insertedCourseTag[60].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Deployment to Netlify and Vercel",
        courseTagId: insertedCourseTag[61].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Desarrollo Web",
        courseTagId: insertedCourseTag[0].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Aplicaciones Móviles",
        courseTagId: insertedCourseTag[1].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "React.js",
        courseTagId: insertedCourseTag[2].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Node.js",
        courseTagId: insertedCourseTag[3].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Programación en Python",
        courseTagId: insertedCourseTag[4].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Visualización de Datos",
        courseTagId: insertedCourseTag[5].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Aprendizaje Automático",
        courseTagId: insertedCourseTag[6].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Herramientas DevOps",
        courseTagId: insertedCourseTag[7].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Ciberseguridad Básica",
        courseTagId: insertedCourseTag[8].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Inteligencia Artificial",
        courseTagId: insertedCourseTag[9].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Diseño UX/UI",
        courseTagId: insertedCourseTag[10].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Diseño Gráfico",
        courseTagId: insertedCourseTag[11].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Animación 2D",
        courseTagId: insertedCourseTag[12].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Desarrollo de Videojuegos",
        courseTagId: insertedCourseTag[13].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Ilustración Digital",
        courseTagId: insertedCourseTag[14].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Inteligencia de Negocios",
        courseTagId: insertedCourseTag[15].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Gestión de Productos",
        courseTagId: insertedCourseTag[16].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Gestión Ágil de Proyectos",
        courseTagId: insertedCourseTag[17].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Estrategia de Marketing Digital",
        courseTagId: insertedCourseTag[18].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Gestión de Redes Sociales",
        courseTagId: insertedCourseTag[19].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Marketing de Crecimiento",
        courseTagId: insertedCourseTag[20].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Emprendimiento",
        courseTagId: insertedCourseTag[21].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Diseño Instruccional",
        courseTagId: insertedCourseTag[22].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Habilidades de Mentoría",
        courseTagId: insertedCourseTag[23].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Educación en Línea",
        courseTagId: insertedCourseTag[24].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Desarrollo Profesional",
        courseTagId: insertedCourseTag[25].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Control de Calidad",
        courseTagId: insertedCourseTag[26].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Metodología Scrum",
        courseTagId: insertedCourseTag[27].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Arquitectura de Software",
        courseTagId: insertedCourseTag[28].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Fundamentos de Blockchain",
        courseTagId: insertedCourseTag[29].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Computación en la Nube con AWS",
        courseTagId: insertedCourseTag[30].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Fundamentos de React",
        courseTagId: insertedCourseTag[31].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Sintaxis JSX",
        courseTagId: insertedCourseTag[32].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Componentes y Props",
        courseTagId: insertedCourseTag[33].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Gestión de Estado",
        courseTagId: insertedCourseTag[34].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Hook useState",
        courseTagId: insertedCourseTag[35].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Hook useEffect",
        courseTagId: insertedCourseTag[36].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Hook useContext",
        courseTagId: insertedCourseTag[37].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Hooks Personalizados",
        courseTagId: insertedCourseTag[38].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Reutilización de Componentes",
        courseTagId: insertedCourseTag[39].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Componentes de Orden Superior",
        courseTagId: insertedCourseTag[40].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "React Router",
        courseTagId: insertedCourseTag[41].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Formularios en React",
        courseTagId: insertedCourseTag[42].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Controlados vs No Controlados",
        courseTagId: insertedCourseTag[43].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "API de Contexto de React",
        courseTagId: insertedCourseTag[44].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Redux",
        courseTagId: insertedCourseTag[45].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "React Query",
        courseTagId: insertedCourseTag[46].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Pruebas en React",
        courseTagId: insertedCourseTag[47].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Vite y Webpack",
        courseTagId: insertedCourseTag[48].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Next.js",
        courseTagId: insertedCourseTag[49].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Renderizado del Lado del Servidor",
        courseTagId: insertedCourseTag[50].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Generación de Sitios Estáticos",
        courseTagId: insertedCourseTag[51].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Integración de APIs",
        courseTagId: insertedCourseTag[52].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Axios y Fetch",
        courseTagId: insertedCourseTag[53].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Diseño Responsivo",
        courseTagId: insertedCourseTag[54].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "CSS en JS",
        courseTagId: insertedCourseTag[55].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Tailwind CSS",
        courseTagId: insertedCourseTag[56].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Sistemas de Diseño",
        courseTagId: insertedCourseTag[57].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Accesibilidad en React",
        courseTagId: insertedCourseTag[58].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Optimización de Rendimiento",
        courseTagId: insertedCourseTag[59].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "División de Código",
        courseTagId: insertedCourseTag[60].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Despliegue en Netlify y Vercel",
        courseTagId: insertedCourseTag[61].id,
        languageId: insertedLanguages[1].id,
      },
    ],
    skipDuplicates: true,
  });

  console.log("courseTagLabelCount", courseTagLabelCount);

  return insertedCourseTag;
};
