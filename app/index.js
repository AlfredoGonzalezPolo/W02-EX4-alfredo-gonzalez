export const checkAllVocalsInWord = (word) => {
  const vocals = ["a", "e", "i", "o", "u"];

  const lowerCaseWordIncludesVocals = vocals.every((vocal) =>
    word.toLowerCase().includes(vocal)
  );
  return lowerCaseWordIncludesVocals;
};

export const checkIfNumberIsEven = (numberValue) => numberValue % 2 === 0;

// Export const checkIfNumberIsPrime = (numberValue) => {
//   if (numberValue % numberValue === 1 && )
// };

export const checkGreatestNumber = (numberList) => numberList.sort().pop();
