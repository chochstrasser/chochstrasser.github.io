const isPalindrome = (x) => {
  if (!x || x?.length === 1) return true;
  const strArray = [...`${x}`];
  while (strArray.length >= 2) {
    if (strArray.shift() !== strArray.pop()) {
      return false;
    }
  }
  return true;
};

export const palindromeNumber = (x) => {
  if (!x) return true;
  if (x < 0) return false;
  let temp = x;
  let reversed = 0;
  while (temp !== 0) {
    const r = temp % 10;
    reversed = reversed * 10 + r;
    temp = Math.floor(temp / 10);
  }
  return x === reversed;
};

export default isPalindrome;
