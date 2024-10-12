export const passwordGenerator = (amountOfChars: number) => {
    if(amountOfChars <= 0) {
       return "zero numbers"
    }
    const randomNumbers = Math.random() * amountOfChars;
    console.log(randomNumbers)
}
