const word = document.getElementById("main-word");
const definition = document.getElementById("definition");
const btn = document.getElementById("btn");

const getData = async () => {
  const response = await fetch("/api");
  const data = await response.json();
  const { title, description } = data;

  word.textContent = title;
  definition.textContent = description;
};

btn.addEventListener("click", getData);
