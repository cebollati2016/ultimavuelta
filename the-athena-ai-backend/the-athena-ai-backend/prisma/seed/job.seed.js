import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createJobs = async ({ insertedLanguages }) => {
  const job = [
    { value: "education_teaching" },
    { value: "health_medicine_nursing" },
    { value: "psychology_therapy" },
    { value: "civil_engineering_construction" },
    { value: "software_engineering_technology" },
    { value: "graphic_design_web_design" },
    { value: "marketing_advertising_branding" },
    { value: "sales_commerce" },
    { value: "finance_accounting_auditing" },
    { value: "human_resources_talent_management" },
    { value: "legal_lawyer_law" },
    { value: "business_management" },
    { value: "art_music_entertainment" },
    { value: "social_sciences_social_work" },
    { value: "research_science" },
    { value: "architecture_urban_planning" },
    { value: "information_technology_web_development" },
    { value: "logistics_transport_distribution" },
    { value: "hospitality_tourism_restoration" },
    { value: "project_management_consulting" },
    { value: "public_services_public_administration" },
    { value: "security_defense" },
    { value: "agriculture_environment" },
    { value: "energy_sustainability" },
    { value: "communication_journalism" },
    { value: "international_trade_international_business" },
    { value: "entrepreneurship_startup" },
    { value: "creative_resources_digital_advertising" },
    { value: "industry_manufacturing" },
    { value: "freelance_self_employed" },
  ];

  const jobOptionCount = await prisma.jobOption.createMany({
    data: job,
    skipDuplicates: true,
  });

  console.log("jobOptionCount", jobOptionCount);

  const insertedJobOption = await prisma.jobOption.findMany({
    where: {
      value: { in: job.map((l) => l.value) },
    },
  });

  console.log("insertedJobOption", insertedJobOption);

  const jobLabelCount = await prisma.jobLabel.createMany({
    data: [
      {
        label: "Education / Teaching",
        jobOptionId: insertedJobOption[0].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Health / Medicine / Nursing",
        jobOptionId: insertedJobOption[1].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Psychology / Therapy",
        jobOptionId: insertedJobOption[2].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Civil Engineering / Construction",
        jobOptionId: insertedJobOption[3].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Software Engineering / Technology",
        jobOptionId: insertedJobOption[4].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Graphic Design / Web Design",
        jobOptionId: insertedJobOption[5].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Marketing / Advertising / Branding",
        jobOptionId: insertedJobOption[6].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Sales / Commerce",
        jobOptionId: insertedJobOption[7].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Finance / Accounting / Auditing",
        jobOptionId: insertedJobOption[8].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Human Resources / Talent Management",
        jobOptionId: insertedJobOption[9].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Legal / Lawyer / Law",
        jobOptionId: insertedJobOption[10].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Business / Management",
        jobOptionId: insertedJobOption[11].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Art / Music / Entertainment",
        jobOptionId: insertedJobOption[12].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Social Sciences / Social Work",
        jobOptionId: insertedJobOption[13].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Research / Science",
        jobOptionId: insertedJobOption[14].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Architecture / Urban Planning",
        jobOptionId: insertedJobOption[15].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Information Technology / Web Development",
        jobOptionId: insertedJobOption[16].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Logistics / Transport / Distribution",
        jobOptionId: insertedJobOption[17].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Hospitality / Tourism / Restoration",
        jobOptionId: insertedJobOption[18].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Project Management / Consulting",
        jobOptionId: insertedJobOption[19].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Public Services / Public Administration",
        jobOptionId: insertedJobOption[20].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Security / Defense",
        jobOptionId: insertedJobOption[21].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Agriculture / Environment",
        jobOptionId: insertedJobOption[22].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Energy / Sustainability",
        jobOptionId: insertedJobOption[23].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Communication / Journalism",
        jobOptionId: insertedJobOption[24].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "International Trade / International Business",
        jobOptionId: insertedJobOption[25].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Entrepreneurship / Startup",
        jobOptionId: insertedJobOption[26].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Creative Resources / Digital Advertising",
        jobOptionId: insertedJobOption[27].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Industry / Manufacturing",
        jobOptionId: insertedJobOption[28].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Freelance / Self-employed",
        jobOptionId: insertedJobOption[29].id,
        languageId: insertedLanguages[0].id,
      },
      {
        label: "Educación / Enseñanza",
        jobOptionId: insertedJobOption[0].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Salud / Medicina / Enfermería",
        jobOptionId: insertedJobOption[1].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Psicología / Terapia",
        jobOptionId: insertedJobOption[2].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Ingeniería Civil / Construcción",
        jobOptionId: insertedJobOption[3].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Ingeniería de Software / Tecnología",
        jobOptionId: insertedJobOption[4].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Diseño Gráfico / Diseño Web",
        jobOptionId: insertedJobOption[5].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Marketing / Publicidad / Branding",
        jobOptionId: insertedJobOption[6].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Ventas / Comercio",
        jobOptionId: insertedJobOption[7].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Finanzas / Contabilidad / Auditoría",
        jobOptionId: insertedJobOption[8].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Recursos Humanos / Gestión del Talento",
        jobOptionId: insertedJobOption[9].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Legal / Abogado / Derecho",
        jobOptionId: insertedJobOption[10].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Negocios / Gestión",
        jobOptionId: insertedJobOption[11].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Arte / Música / Entretenimiento",
        jobOptionId: insertedJobOption[12].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Ciencias Sociales / Trabajo Social",
        jobOptionId: insertedJobOption[13].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Investigación / Ciencia",
        jobOptionId: insertedJobOption[14].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Arquitectura / Urbanismo",
        jobOptionId: insertedJobOption[15].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Tecnologías de la Información / Desarrollo Web",
        jobOptionId: insertedJobOption[16].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Logística / Transporte / Distribución",
        jobOptionId: insertedJobOption[17].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Hostelería / Turismo / Restauración",
        jobOptionId: insertedJobOption[18].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Gestión de Proyectos / Consultoría",
        jobOptionId: insertedJobOption[19].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Servicios Públicos / Administración Pública",
        jobOptionId: insertedJobOption[20].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Seguridad / Defensa",
        jobOptionId: insertedJobOption[21].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Agricultura / Medioambiente",
        jobOptionId: insertedJobOption[22].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Energía / Sostenibilidad",
        jobOptionId: insertedJobOption[23].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Comunicación / Periodismo",
        jobOptionId: insertedJobOption[24].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Comercio Internacional / Negocios Internacionales",
        jobOptionId: insertedJobOption[25].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Emprendimiento / Startup",
        jobOptionId: insertedJobOption[26].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Recursos Creativos / Publicidad Digital",
        jobOptionId: insertedJobOption[27].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Industria / Manufactura",
        jobOptionId: insertedJobOption[28].id,
        languageId: insertedLanguages[1].id,
      },
      {
        label: "Freelance / Autónomo",
        jobOptionId: insertedJobOption[29].id,
        languageId: insertedLanguages[1].id,
      },
    ],
    skipDuplicates: true,
  });

  console.log("jobLabelCount", jobLabelCount);

  return insertedJobOption;
};
