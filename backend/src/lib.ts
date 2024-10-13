export const buildPassword = (passwordLength: number) => {
  if (passwordLength <= 0) {
    return "Invalid Length";
  }
  const password = [];
  for (let i = 0; i < passwordLength; i++) {
    const randomNumbers = Math.floor(Math.random() * 10);
    password.push(randomNumbers);
  }
  const parsedPassword = password.join("").toString()
  return parsedPassword;
};

export const generateRandomNumbers = (amountOfNumbers: number) => {
  if (amountOfNumbers <= 0) {
    return "zero numbers";
  }
  const password = [];
  for (let i = 0; i < amountOfNumbers; i++) {
    const randomNumbers = Math.floor(Math.random() * 10);
    password.push(randomNumbers);
  }
  const parsedPassword = password.join("").toString();
  return parsedPassword;
};

export const generateRandomLetters = (amountOfLetters: number) => {
  if (amountOfLetters <= 0) {
    throw new Error("Invalid amount of letters");
  }
  const alphabet = [...Array(26)].map(
    (v, i) => (v = String.fromCharCode(i + 97))
  );
  const letters = [];
  for (let a = 0; a < amountOfLetters; a++) {
    const randomIndex = Math.floor(Math.random() * 26);
    const randomLetter = alphabet[randomIndex];
    letters.push(randomLetter);
  }
  return letters;
};