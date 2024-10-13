export const buildPassword = (passwordLength: number) => {
  if (passwordLength <= 0) {
    return "zero numbers";
  }
  const password = [];
  for (let i = 0; i < passwordLength; i++) {
    const randomNumbers = Math.floor(Math.random() * 10);
    password.push(randomNumbers);
  }
  return password;
};
