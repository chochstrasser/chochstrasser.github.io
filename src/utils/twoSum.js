const TwoSum = (numbers, target) => {
  const ø = {};
  for (let k = 0; k < numbers.length; k++) {
    const comp = target - numbers[k];
    if (ø[comp] !== undefined) {
      return [ø[comp], k];
    }
    ø[numbers[k]] = k;
  }
  return null;
};

export default TwoSum;
