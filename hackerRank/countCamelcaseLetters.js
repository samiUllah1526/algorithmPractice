const countCamelCase = (s) => {
  const letters = s.split("");
  const wordCount = letters.reduce((count, letter) => {
    if (letter === letter.toUpperCase()) return count + 1;
    return count + 0;
  }, 1);

  return wordCount;
};

// const wordCount = letters.reduce((count, letter) => {
//   if (letter === letter.toUpperCase()) return count + 1;
//   return count + 0;
// }, 0);

const s = "saveChangesInTheEditor";
const letters = s.split("");

console.log("countCamelCase", countCamelCase(s));
