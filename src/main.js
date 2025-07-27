import { getJoke } from "./getjoke.js";

const addJokeText = document.querySelector(".current-joke__text");
const orderNewJoke = document.querySelector(".current-joke__new-joke");

orderNewJoke.addEventListener("click", async () => {
  addJokeText.innerHTML = await getJoke();
});
