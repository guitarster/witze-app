export function saveJoke(currentJoke) {
  const savedJokes = JSON.parse(localStorage.getItem("jokes"));

  let id = 1;
  let jokes = [];

  if (savedJokes && savedJokes.length > 0) {
    id = savedJokes[savedJokes.length - 1].id + 1;
    jokes = savedJokes;
  }

  let joke = {
    text: currentJoke,
    id: id,
  };

  jokes.push(joke);
  localStorage.setItem("jokes", JSON.stringify(jokes));
  return id;
}

export function deleteJoke(id) {
  const joke = document.getElementById(id);
  joke.remove();

  const savedJokes = JSON.parse(localStorage.getItem("jokes"));
  let filteredJokes = savedJokes.filter((joke) => joke.id !== id);

  localStorage.setItem("jokes", JSON.stringify(filteredJokes));

  if (filteredJokes.length === 0) {
    const saveJokesPlaceholder = document.querySelector(
      ".saved-jokes__placeholder"
    );
    saveJokesPlaceholder.classList.remove("saved-jokes__placeholder--disabled");
  }
}
