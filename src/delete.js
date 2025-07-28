export function deleteJoke(id) {
  const joke = document.getElementById(id);
  joke.remove();
  const savedJokes = JSON.parse(localStorage.getItem("jokes"));
  let filteredJokes = savedJokes.filter((joke) => joke.id !== id);
  localStorage.setItem("jokes", JSON.stringify(filteredJokes));
}
