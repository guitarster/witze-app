import { getJoke } from "./getjoke.js";
import { saveJoke, checkSavedJokes } from "./storing.js";
import { renderJoke, renderJokes } from "./render.js";

const addcurrentJoke = document.querySelector(".current-joke__text");
const newJokeBtn = document.querySelector(".current-joke__new-joke");
const saveJokeBtn = document.querySelector(".current-joke__save-joke");
const savedJokes = JSON.parse(localStorage.getItem("jokes"));

let currentJoke = "";

document.addEventListener("DOMContentLoaded", renderJokes());

newJokeBtn.addEventListener("click", async () => {
  currentJoke = await getJoke();
  addcurrentJoke.innerHTML = currentJoke;
  saveJokeBtn.classList.remove("current-joke__save-joke--disabled");
});

saveJokeBtn.addEventListener("click", () => {
  if (checkSavedJokes(currentJoke)) {
    alert("Witz ist schon gespeichert.");
  } else {
    saveJoke(currentJoke);
    renderJoke(currentJoke);
  }
});
