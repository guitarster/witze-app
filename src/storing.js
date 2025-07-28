export function saveJoke(currentJoke) {
  const savedJokes = JSON.parse(localStorage.getItem("jokes"));
  let id = 1;

  let jokes = [];

  if (savedJokes) {
    id = savedJokes.length + 1;
    jokes = savedJokes;
  }

  let joke = {
    text: currentJoke,
    id: id,
  };

  jokes.push(joke);
  localStorage.setItem("jokes", JSON.stringify(jokes));
}

export function checkSavedJokes(currentJoke) {
  const savedJokes = JSON.parse(localStorage.getItem("jokes"));
  if (savedJokes) {
    if (savedJokes.length > 0) {
      for (let element of savedJokes) {
        if (element.text === currentJoke) {
          return true;
        }
      }
    }
  }
}
