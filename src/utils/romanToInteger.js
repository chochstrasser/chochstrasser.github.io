const romanToInt = (s) => {
  const convert = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let previousNumber = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const currentNumber = convert[s[i]];
    if (currentNumber < previousNumber) {
      result -= currentNumber;
    } else {
      result += currentNumber;
      previousNumber = currentNumber;
    }
  }
  return result;
};

export default romanToInt;
