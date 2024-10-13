export const passwordGenerator = (amountOfChars: number) => {
  if (amountOfChars <= 0) {
    return "zero numbers";
  }
  const password = [];
  for (let i = 0; i < amountOfChars; i++) {
    const randomNumbers = Math.floor(Math.random() * 10);
    password.push(randomNumbers);
  }
  return password;
};
