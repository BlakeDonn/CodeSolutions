const input1 = "azABaabza"; // return 5
const input2 = "TacoCat"; // return -1
const input3 = "AcZCbaBz"; // return 8
const input4 = "abcdefghijklmnop"; // return -1

// take in string
// iterate over
// at current iteration, check if lower case counterpart exists
// if not, wipe current stored substring, move to next
// if end and no current stored substring, return -1
//

let balancedStrings = (input) => {
  let currentString = "";
  let currentBiggestString = 0;
  for (i = 0; i < input.length; i++) {
    if (
      input.includes(input[i].toLowerCase()) &&
      input.includes(input[i].toUpperCase())
    ) {
      currentString += input[i];
      if (currentString.length > currentBiggestString) {
        currentBiggestString = currentString.length;
      }
    } 
    else {
      currentString = "";
    }
  }
  return currentBiggestString 
};

balancedStrings(input4);
