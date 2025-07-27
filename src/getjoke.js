export async function getJoke() {
  const url = "https://witzapi.de/api/joke/";

  const response = await fetch(url);

  const json = await response.json();

  return json[0].text;
}
