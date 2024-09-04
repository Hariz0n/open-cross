const config: Problem.Config = {
  title: "Задание",
  description: "Ответьте на вопросы и заполните кроссворд",
  questions: {
    row: [
      {
        question:
          "11111?",
        charactersCount: 5,
        position: {
          x: 0,
          y: 0,
        },
      },
      {
        question:
          "2222?",
        charactersCount: 4,
        position: {
          x: 3,
          y: 4,
        },
      },
      {
        question:
          "333?",
        charactersCount: 3,
        position: {
          x: 2,
          y: 2,
        },
      }
    ],
    column: [
      {
        question:
          "12342?",
        charactersCount: 5,
        position: {
          x: 3,
          y: 0,
        },
      },
      {
        question:
          "12345?",
        charactersCount: 5,
        position: {
          x: 0,
          y: 0,
        },
      },
    ],
  },
};

window.problem = config;
