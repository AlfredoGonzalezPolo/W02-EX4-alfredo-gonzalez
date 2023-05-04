import { checkAllVocalsInWord, checkIfNumberIsEven } from "./index.js";

describe("Given a checkAllVocalsInWord function", () => {
  describe("When it receives 'perrazo", () => {
    test("Then it should return false", () => {
      const word = "perrazo";

      const wordToCheck = checkAllVocalsInWord(word);

      expect(wordToCheck).toBe(false);
    });
  });
});

describe("Given a checkIfIsEven function", () => {
  describe("When it receives 9", () => {
    test("Then it should return false", () => {
      const numberValue = 9;

      const checkNumber = checkIfNumberIsEven(numberValue);

      expect(checkNumber).toBe(false);
    });
  });

  describe("When it receives 8", () => {
    test("Then it should return true", () => {
      const numberValue = 8;

      const checkNumber = checkIfNumberIsEven(numberValue);

      expect(checkNumber).toBe(true);
    });
  });
});
