const form = document.querySelector("#keyForm");
const amountOfCharsElement = document.querySelector("#amountOfCharacters") as HTMLFormElement;

const generateKey = async (amountOfChars: number) => {
  const fetchKey = await fetch("http://localhost:3000");
  console.log(fetchKey);
};

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const amountOfChars = amountOfCharsElement.value;
  const generatedKey = await generateKey(amountOfChars);
  console.log(generatedKey)
  console.log("submitted from addEventListener");
});
