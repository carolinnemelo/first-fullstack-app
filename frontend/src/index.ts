const form = document.querySelector("#keyForm");

// const generateKey = async (amountOfChars: number) => {
//     const fetchKey = await fetch("http://localhost:3000");
//     console.log(fetchKey);
// }

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submitted from addEventListener");
});
