const minimumNumber = (n, password) => {
  const numbers = "0123456789";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialCharacters = "!@#$%^&*()-+";

  const store = {
    hasNumbers: false,
    hasLowerCase: false,
    hasUpperCase: false,
    hasSpecialCharacters: false,
  };

  for (let char of password) {
    if (numbers.includes(char)) {
      store.hasNumbers = true;
    }

    if (lowerCase.includes(char)) {
      store.hasLowerCase = true;
    }
    if (upperCase.includes(char)) {
      store.hasUpperCase = true;
    }
    if (specialCharacters.includes(char)) {
      store.hasSpecialCharacters = true;
    }
  }

  const minNum = Object.values(store).reduce((prev, current) => {
    if (!current) return prev + 1;
    return prev;
  }, 0);

  return minNum + Math.max(6 - (pass.length + minNum), 0);
};

const pass = "#HackerRank";
const n = 5;

// console.log(Object.values(store));
// console.log({ minNum });

// minNum + pass.length;
// console.log("minNum", minNum);

// console.log(minNum + Math.max(6 - (pass.length + minNum), 0));

console.log({
  min: minimumNumber(n, pass),
});
