import { saveJoke, deleteJoke } from "./storing.js";
import { renderJoke, renderJokes } from "./render.js";

const addcurrentJoke = document.querySelector(".current-joke__text");
const newJokeBtn = document.querySelector(".current-joke__new-joke");
const saveJokeBtn = document.querySelector(".current-joke__save-joke");

let currentJoke = "";

async function getJoke() {
  const url = "https://witzapi.de/api/joke/";

  const response = await fetch(url);

  const json = await response.json();

  return json[0].text;
}

newJokeBtn.addEventListener("click", async () => {
  currentJoke = await getJoke();
  addcurrentJoke.innerHTML = currentJoke;
  saveJokeBtn.classList.remove("current-joke__save-joke--disabled");
});

saveJokeBtn.addEventListener("click", () => {
  const savedJokes = JSON.parse(localStorage.getItem("jokes"));
  if (savedJokes.find((element) => element.text === currentJoke)) {
    alert("Witz ist schon gespeichert.");
    return;
  } else {
    let id = saveJoke(currentJoke);
    renderJoke(currentJoke, id);
  }
});

window.deleteJoke = deleteJoke;

renderJokes();
