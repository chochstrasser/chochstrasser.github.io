const reverseString1 = (str) => {
  return str.split('').reverse().join('');
};

const reverseString2 = (str) => {
  let ary = str.split('');
  let temp = '';
  let len = ary.length;
  let middle = Math.floor(len / 2);

  for (let index = 0; index < middle; index++) {
    temp = ary[index];
    ary[index] = ary[len - 1 - index];
    ary[len - 1 - index] = temp;
  }
  return ary.join('');
};

const reverseString3 = (str) => {
  let newStr = '';
  for (let index = str.length - 1; index >= 0; index--) {
    newStr += str[index];
  }
  return newStr;
};

const reverseString4 = (str) => {
  return str === '' ? '' : reverseString4(str.slice(1)) + str.charAt(0);
};

export { reverseString1, reverseString2, reverseString3, reverseString4 };
