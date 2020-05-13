const isValid = (s) => {
  if (s.length === 0) return true;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (stack.pop() !== c) return false;
    }
  }
  return stack.length === 0;
};

export default isValid;
