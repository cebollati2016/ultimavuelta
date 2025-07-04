const example = [
  {
    title: "Sección 1",
    sections: [
      {
        title: " Sección 1.1",
      },
      {
        title: "Sección 1.2",
      },
      {
        title: "Sección 1.3",
      },
      {
        title: "Sección 1.4",
      },
    ],
  },
  {
    title: "Sección 2",
    sections: [
      {
        title: "Sección 2.1",
      },
      {
        title: "Sección 2.2",
      },
      {
        title: "Sección 2.3",
      },
    ],
  },
  {
    title: "Sección 3",
    sections: [
      {
        title: "Sección 3.1",
      },
      {
        title: "Sección 3.2",
      },
      {
        title: "Sección 3.3",
      },
    ],
  },
  {
    title: "Sección 4",
    sections: [
      {
        title: "Sección 4.1",
        sections: [
          {
            title: "Sección 4.1.1",
          },
          {
            title: "Sección 4.1.2",
          },
        ],
      },
      {
        title: "Sección 4.2",
      },
    ],
  },
];

const sectionsLength = {
  MAXIMUM_LENGTH: "MAXIMUM_LENGTH",
  AS_NEEDED: "AS_NEEDED",
};

export default {
  example,
  sectionsLength,
};
