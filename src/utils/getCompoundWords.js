const getCompoundWords = (list) => {
  const result = [];
  const set = new Set(list);

  for (let word of list) {
    set.delete(word);
    let tempList = wordBreak(word, set);
    if (tempList !== null && tempList.length !== 0) {
      for (let temp of tempList) {
        result.push(temp.split(' '));
      }
    }
    set.add(word);
  }
  return result;
};

const wordBreak = (s, wordDict) => {
  const ans = [];
  dfs(s, 0, new Set(wordDict), ans, '');
  return ans;
};

const dfs = (s, start, wordSet, ans, tmp) => {
  if (start === s.length) {
    ans.push(tmp.trim());
    return;
  }
  for (let i = start; i < s.length; i++) {
    if (wordSet.has(s.substring(start, i + 1))) {
      dfs(s, i + 1, wordSet, ans, tmp + ' ' + s.substring(start, i + 1));
    }
  }
};

export default getCompoundWords;
