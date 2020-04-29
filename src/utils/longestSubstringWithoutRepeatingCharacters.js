const lengthOfLongestSubstring = (s) => {
  let longest = 0;
  let start = 0;
  let seen = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in seen && start <= seen[s[i]]) {
      longest = Math.max(i - start, longest);
      start = seen[s[i]] + 1;
    }
    seen[s[i]] = i;
  }

  return Math.max(s.length - start, longest);
};

export default lengthOfLongestSubstring;
