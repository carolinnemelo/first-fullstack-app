const form = document.querySelector("#keyForm");
const amountOfCharsElement = document.querySelector(
  "#amountOfCharacters",
) as HTMLFormElement;

const displayKeyElement = document.querySelector(
  "#displayKey"
) as HTMLParagraphElement;

const requestGeneratedKey = async (amountOfChars: number) => {
  const fetchKey = await fetch("http://localhost:3000", {
    method: "post",
    body: `${amountOfChars}`,
  });
  const data = await fetchKey.json();
  
  return data.turingKey;
};

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const amountOfChars = amountOfCharsElement.value;
  const generatedKey = await requestGeneratedKey(amountOfChars);
  displayKeyElement.textContent = generatedKey;

  //   console.log("submitted from addEventListener");
});
