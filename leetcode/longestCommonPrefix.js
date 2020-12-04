var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  if (strs.length === 1) return strs[0];
  if (strs.every((x) => x === strs[0])) return strs[0];
  let done;
  let i = 0;
  let y = 1;
  const determineMatch = () => {
    if (y % strs.length === 0) {
      i++;
      y = 1;
    }
    if (strs[0][i] !== strs[y][i]) done = true;
    y++;
  };
  while (!done) {
    determineMatch();
  }
  return i > 1 || strs.every((x) => x[0] === strs[0][0])
    ? strs[0].slice(0, i)
    : "";
};
