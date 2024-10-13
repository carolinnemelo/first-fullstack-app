export const buildPassword = (passwordLength: number) => {
  if (passwordLength <= 0) {
    return "zero numbers";
  }
  const password = [];
  for (let i = 0; i < passwordLength; i++) {
    const randomNumbers = Math.floor(Math.random() * 10);
    password.push(randomNumbers);
  }
  const parsedPassword = password.join("").toString()
  return parsedPassword;
};


export const generateRandomLetters = (numberOfLetters: number) => {
  if(numberOfLetters <= 0) {
    return "zero letters"
  }
  const alphabet = [...Array(26)].map(
    (v, i) => (v = String.fromCharCode(i + 97))
  );
  const letters = [];
  for (let i = 0; i < numberOfLetters; i++) {
    const randomLetter = Math.floor(Math.random() * 10);
    letters.push(randomLetter);
  }
  return letters;
};