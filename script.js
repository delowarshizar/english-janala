const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => diplayLesson(json.data));
};

const diplayLesson = (lessons) => {
  const lessonContainer = document.getElementById("lesson-container");
  lessonContainer.innerHTML = "";
  for (const lesson of lessons) {
    const newLesson = document.createElement("div");
    newLesson.innerHTML = `
        <button class="btn btn-outline btn-primary">
              <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
            </button>
      `;
    lessonContainer.appendChild(newLesson);
  }
};
loadLesson();
