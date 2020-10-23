export const FlattenIterative = (array) => {
  for (let i = 0; i <= array.length; i++) {
    while (true) {
      if (array[i] !== undefined && array[i].constructor === Array) {
        array.splice(i, 1, ...array[i]);
      } else break;
    }
  }
  return array;
};

export const FlattenRecursion = (array) => {
  const reducedArray = array.reduce((acc, curr) => {
    const temp = curr.constructor === Array ? FlattenRecursion(curr) : curr;
    const value = acc.concat(temp);
    return value;
  }, []);
  return reducedArray;
};

export const FlattenShortest = (a) => (Array.isArray(a) ? [].concat(...a.map(FlattenShortest)) : a);
