export const checkAllVocalsInWord = (word) => {
  const vocals = ["a", "e", "i", "o", "u"];

  const lowerCaseWordIncludesVocals = vocals.every((vocal) =>
    word.toLowerCase().includes(vocal)
  );
  return lowerCaseWordIncludesVocals;
};

export const checkIfNumberIsEven = (number) => number % 2 === 0;

export const checkIfIsPrime = () => {};
