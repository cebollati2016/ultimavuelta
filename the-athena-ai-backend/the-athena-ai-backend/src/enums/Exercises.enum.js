const type = {
  TRUE_FALSE: "TRUE_FALSE",
  MULTIPLE_CHOICE: "MULTIPLE_CHOICE",
};

const difficulty = {
  HARD: "HARD",
  MEDIUM: "MEDIUM",
  EASY: "EASY",
};

const typePrompt = {
  TRUE_FALSE: "true or false",
  MULTIPLE_CHOICE: "multiple choice",
};

const language = {
  en_US: "en_US",
};

const example = {
  TRUE_FALSE: JSON.stringify([
    {
      type: "TRUE_FALSE",
      text: "La Tierra es el tercer planeta del sistema solar.",
      answer: true,
    },
    {
      type: "TRUE_FALSE",
      text: "El sol es un planeta.",
      answer: false,
    },
  ]),

  MULTIPLE_CHOICE: JSON.stringify([
    {
      type: "MULTIPLE_CHOICE",
      text: "¿En qué fecha nació Isaac Newton según el calendario juliano?",
      options: [
        { text: "25 de diciembre de 1642" },
        { text: "4 de enero de 1643" },
        { text: "1 de enero de 1643" },
        { text: "12 de enero de 1643" },
      ],
      answer: 0,
    },
    {
      type: "MULTIPLE_CHOICE",
      text: "¿Qué calendario se usaba en Inglaterra cuando nació Isaac Newton?",
      options: [
        { text: "Calendario gregoriano" },
        { text: "Calendario juliano" },
        { text: "Calendario lunar" },
        { text: "Calendario maya" },
      ],
      answer: 1,
    },
    {
      type: "MULTIPLE_CHOICE",
      text: "¿Por qué el nacimiento de Isaac Newton fue considerado riesgoso?",
      options: [
        { text: "Nació en un lugar remoto" },
        { text: "Fue un parto prematuro y nació muy pequeño" },
        { text: "Su familia no quería tener hijos" },
        { text: "Hubo complicaciones médicas durante el parto" },
      ],
      answer: 1,
    },
    {
      type: "MULTIPLE_CHOICE",
      text: "¿Cuándo fue bautizado Isaac Newton según el calendario gregoriano?",
      options: [
        { text: "1 de enero de 1643" },
        { text: "4 de enero de 1643" },
        { text: "12 de enero de 1643" },
        { text: "25 de diciembre de 1642" },
      ],
      answer: 2,
    },
  ]),
};

export default {
  type,
  difficulty,
  typePrompt,
  language,
  example,
};
