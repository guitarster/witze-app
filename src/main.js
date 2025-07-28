import { getJoke } from "./getjoke.js";
import { saveJoke, checkSavedJokes } from "./storing.js";
import { renderJoke, renderJokes } from "./render.js";
import { deleteJoke } from "./delete.js";

const addcurrentJoke = document.querySelector(".current-joke__text");
const newJokeBtn = document.querySelector(".current-joke__new-joke");
const saveJokeBtn = document.querySelector(".current-joke__save-joke");

document.addEventListener("DOMContentLoaded", renderJokes());

let currentJoke = "";
let id = 0;

newJokeBtn.addEventListener("click", async () => {
  currentJoke = await getJoke();
  addcurrentJoke.innerHTML = currentJoke;
  saveJokeBtn.classList.remove("current-joke__save-joke--disabled");
});

saveJokeBtn.addEventListener("click", () => {
  if (checkSavedJokes(currentJoke)) {
    alert("Witz ist schon gespeichert.");
  } else {
    id = saveJoke(currentJoke);
    renderJoke(currentJoke, id);
  }
});

window.deleteJoke = deleteJoke;
