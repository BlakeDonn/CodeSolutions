const testResult = (input) => {
  // let counter = 0; first question
  let counter = [];
  input.forEach((pass) => {
    let range = [0, 127];
    let row, column;
    for (i = 0; i < test.length; i++) {
      if (i === 0) {
        pass[i] === "F"
          ? (range[1] = Math.floor(range[1] / 2))
          : (range[0] = Math.ceil(range[1] / 2));
        i++;
      }
      if (i === 6) {
        row = pass[6] === "F" ? range[0] : range[1];
      }
      if (i === 9) {
        column = pass[9] === "L" ? range[0] : range[1];
      }
      if (i === 7) range = [0, 7];
      if (pass[i] === "F" || pass[i] === "L") {
        range[1] = Math.floor(range[1] - (range[1] - range[0]) / 2);
      }
      if (pass[i] === "B" || pass[i] === "R") {
        range[0] += Math.ceil((range[1] - range[0]) / 2);
      }
    }

    //if (row * 8 + column > counter) { first question
    //  counter = row * 8 + column;
    // }
    counter.push(row * 8 + column);
  });
  let boi = counter.find((x) => {
    return !counter.includes(x + 1) && counter.includes(x + 2);
  });
  //return counter first question
  return boi + 1;
};
