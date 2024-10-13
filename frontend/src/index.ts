const form = document.querySelector("#keyForm");
const amountOfCharsElement = document.querySelector(
  "#amountOfCharacters",
) as HTMLFormElement;

const displayKeyElement = document.querySelector(
  "#displayKey"
) as HTMLParagraphElement;

const rangeValueElement = document.querySelector("#rangeValue") as HTMLElement;

const requestGeneratedKey = async (amountOfChars: number) => {
  const fetchKey = await fetch("http://localhost:3000", {
    method: "post",
    body: `${amountOfChars}`,
  });
  const data = await fetchKey.json();
  return data.turingKey.join('');
};

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const amountOfChars = amountOfCharsElement.value;
  const generatedKey = await requestGeneratedKey(amountOfChars);
  displayKeyElement.textContent = generatedKey;

});

amountOfCharsElement.addEventListener("input", (event) => {
    const amountOfChars = amountOfCharsElement.value;
    rangeValueElement.textContent = amountOfChars;
});