export const buildPassword = (passwordLength: number): string[] => {
  if (passwordLength <= 0) {
    throw new Error("Invalid length");
  }
  if (passwordLength === 1) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber > 5) {
      const password = generateRandomNumbers(passwordLength);
      console.log({ password })
      return password;
    }
    const password = generateRandomLetters(passwordLength);
    return password;
  }
  const amountOfNumbers = Math.floor(Math.random() * passwordLength + 1);
  const amountOfLetters = passwordLength - amountOfNumbers;
  const randomNumbers = generateRandomNumbers(amountOfNumbers);
  const randomLetters = generateRandomLetters(amountOfLetters);
  const password = [...randomLetters, ...randomNumbers];

  return password;
};

export const generateRandomNumbers = (amountOfNumbers: number) => {
  if (amountOfNumbers <= 0) {
    throw new Error("Invalid amount of numbers");
  }
  const password = [];
  for (let i = 0; i < amountOfNumbers; i++) {
    const randomNumbers = Math.floor(Math.random() * 10).toString();
    password.push(randomNumbers);
  }

  return password;
};

export const generateRandomLetters = (amountOfLetters: number): string[] => {
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