const params = new URLSearchParams(window.location.search);

const subject = params.get("subject");

const classNumber = params.get("class");

const testsTitle = document.getElementById("testsTitle");

const testsGrid = document.getElementById("testsGrid");

/* SUBJECT NAMES */

const subjectNames = {
  algebra: "Алгебра",
  geometry: "Геометрия",
  arithmetic: "Арифметика",
  logic: "Логика",
};

/* FUNCTION */

function createTests() {
  return {
    easy: [
      {
        title: "Легкий уровень",

        description: "Базовые задания по теме.",
      },
    ],

    medium: [
      {
        title: "Средний уровень",

        description: "Задания средней сложности.",
      },
    ],

    hard: [
      {
        title: "Сложный уровень",

        description: "Продвинутые задания.",
      },
    ],
  };
}

/* TESTS DATA */

const testsData = {
  algebra: {
    5: createTests(),
    6: createTests(),
    7: createTests(),
    8: createTests(),
  },

  geometry: {
    5: createTests(),
    6: createTests(),
    7: createTests(),
    8: createTests(),
  },

  arithmetic: {
    1: createTests(),
    2: createTests(),
    3: createTests(),
    4: createTests(),
    5: createTests(),
  },

  logic: {
    5: createTests(),
    6: createTests(),
    7: createTests(),
  },
};

/* CHECK */

if (!subject || !classNumber) {
  testsTitle.innerHTML = "Тесты";
} else {
  testsTitle.innerHTML = `${subjectNames[subject]} — ${classNumber} класс`;

  const currentData = testsData[subject][classNumber];

  const difficultyNames = {
    easy: "Легкий уровень",

    medium: "Средний уровень",

    hard: "Сложный уровень",
  };

  Object.keys(currentData).forEach((level) => {
    testsGrid.innerHTML += `

      <div class="difficulty-title">

        ${difficultyNames[level]}

      </div>

    `;

    currentData[level].forEach((test, index) => {
      testsGrid.innerHTML += `

        <div class="test-card">

          <span class="test-level">

            ${difficultyNames[level]}

          </span>

          <h3>

            ${test.title}

          </h3>

          <p>

            ${test.description}

          </p>

          <a
            href="test.html?subject=${subject}&class=${classNumber}&level=${level}&test=${index}"
            class="btn"
          >

            Пройти тест

          </a>

        </div>

      `;
    });
  });
}
