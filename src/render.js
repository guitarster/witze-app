const savedJokesList = document.querySelector(".saved-jokes__jokes-list");
const saveJokesPlaceholder = document.querySelector(
  ".saved-jokes__placeholder"
);

export function renderJoke(value) {
  let jokeHTML = `<div class="saved-joke">
            <p class="saved-joke__text">${value}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="saved-joke__delete-image"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5"
              />
            </svg>
          </div>`;
  savedJokesList.innerHTML += jokeHTML;
  saveJokesPlaceholder.classList.add("saved-jokes__placeholder--disabled");
}

export function renderJokes() {
  const savedJokes = JSON.parse(localStorage.getItem("jokes"));

  if (savedJokes) {
    savedJokes.forEach((element) => {
      renderJoke(element.text);
    });
    saveJokesPlaceholder.classList.add("saved-jokes__placeholder--disabled");
  }
}
