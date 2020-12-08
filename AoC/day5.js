let test = "FBFBBFFRLR"
let test1 = "BFFFBBFRRR"
let test2 ="FFFBBBFRRR" 
let test3 ="BBFFBBFRLL" 

const testResult = (input, seatID) => {
let range = [0, 127]
let row, column;
for (i = 0; i < test.length; i++){
 if(i === 0){
  input[i] === "F" ? range[1]  = Math.floor(range[1] / 2) : range[0] = Math.ceil(range[1] / 2)
   i++
 }
 if(i === 6 ){
    row = (input[6] === "F") ? range[0] : range[1]
  } 
  if (i === 9){
    column = (input[9] === "L") ? range[0] : range[1]
  }
  if(i === 7) range = [0, 7]
  if(input[i] === "F" || input[i] === "L") {
    range[1] = Math.floor(range[1] - (range[1] -range[0])/ 2)
   }
  if(input[i] === "B" || input[i] === "R") {
    range[0] += Math.ceil((range[1] - range[0]) /2)
 } 
}
  console.log(row, column)
  return row * 8 + column
}
testResult(test)

