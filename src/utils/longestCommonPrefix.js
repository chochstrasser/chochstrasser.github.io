const longestCommonPrefix = (strings) => {
  if (strings.length === 0) return "";
  let prefix = "";
  let first = strings[0];
  for (let i = 0; i < first.length; i++) {
    for (let j = 1; j < strings.length; j++) {
      if (first[i] !== strings[j][i]) {
        return prefix;
      }
    }
    prefix += first[i];
  }
  return prefix;
};

export default longestCommonPrefix;
