const params = new URLSearchParams(window.location.search);

const subject = params.get("subject");

const categoryTitle = document.getElementById("categoryTitle");

const classGrid = document.getElementById("classGrid");

/* SUBJECT TITLES */

const subjectNames = {
  algebra: "Алгебра",

  geometry: "Геометрия",

  arithmetic: "Арифметика",

  logic: "Логика",
};

/* CLASSES */

const subjectClasses = {
  algebra: [5, 6, 7, 8],

  geometry: [5, 6, 7, 8],

  arithmetic: [1, 2, 3, 4, 5],

  logic: [5, 6, 7],
};

/* CHECK */

if (!subject || !subjectClasses[subject]) {
  categoryTitle.innerHTML = "Категория не найдена";
} else {
  /* TITLE */

  categoryTitle.innerHTML = `${subjectNames[subject]} — доступные классы`;

  /* SHOW CLASSES */

  subjectClasses[subject].forEach((item) => {
    classGrid.innerHTML += `

      <div class="class-card">

        <h3>

          ${item} класс

        </h3>

        <a
          href="tests.html?subject=${subject}&class=${item}"
          class="btn"
        >

          Открыть тесты

        </a>

      </div>

    `;
  });
}
