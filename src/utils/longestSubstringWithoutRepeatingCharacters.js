const lengthOfLongestSubstring = (s) => {
  let longest = 0;
  let seen = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const index = seen.indexOf(char);
    if (index > -1) {
      seen.splice(0, index + 1);
    }
    seen.push(char);
    longest = Math.max(seen.length, longest);
  }
  return Math.max(seen.length, longest);
};

export default lengthOfLongestSubstring;
