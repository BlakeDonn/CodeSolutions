let test = [
  ["abc"],
  ["a", "b", "c"],
  ["ab", "ac"],
  ["a", "a", "a", "a"],
  ["b"],
];

const findResult = (input) => {
  return input.reduce((acc, cur) => {
    let word = cur[0].split("");
    let unique = word.filter((x) => cur.every((y) => y.includes(x)));
    //let unique =  [...new Set(cur.join(""))] first question
    //return acc += unique first question
    acc += unique.length;
    return acc;
  }, 0);
};

findResult(test);
