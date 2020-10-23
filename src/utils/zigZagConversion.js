export const ZigZagConversionOne = (s, numRows) => {
  if (numRows === 1) return s;
  let rows = [];
  for (let i = 0; i < numRows; i++) {
    rows[i] = '';
  }
  let index = 0;
  let isDown = false;
  for (let i = 0; i < s.length; i++) {
    rows[index] += s[i];
    if (index === 0 || index === numRows - 1) {
      isDown = !isDown;
    }
    index += isDown ? 1 : -1;
  }
  return rows.join('');
};

export const ZigZagConversionTwo = (s, numRows) => {
  if (numRows === 1) return s;
  let result = '';
  const stringLen = s.length;
  const cycleLen = 2 * numRows - 2;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < stringLen; j += cycleLen) {
      result += s[j + i];
      if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < stringLen) result += s[j + cycleLen - i];
    }
  }
  return result;
};
