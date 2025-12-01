const loadWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWord(data.data));
};

const displayWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  words.forEach((word) => {
    const newWord = document.createElement("div");
    newWord.innerHTML = `<div class="bg-white p-5 text-center rounded-xl shadow-sm">
          <h1 class="font-bold text-xl">${word.word}</h1>
          <p class="font-semibold mt-2">Meaning /Pronounciation</p>
          <p class="font-semibold text-[18181B] text-xl font-bangla mt-2">${word.meaning}</p>
           <div class="justify-between flex">
        <button class="bg-gray-100 w-12  h-12 rounded-xl  hover:bg-gray-400" ><i class="fa-solid fa-circle-info"></i></button>
        <button class="bg-gray-100  w-12  h-12  rounded-xl hover:bg-gray-400"><i class="fa-solid fa-volume-low"></i></button>
      </div>
        </div>`;
    wordContainer.appendChild(newWord);
  });
};

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
        <button onclick="loadWord(${lesson.level_no})" class="btn btn-outline btn-primary">
              <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
            </button>
      `;
    lessonContainer.appendChild(newLesson);
  }
};
loadLesson();
