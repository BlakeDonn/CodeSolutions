const arrayMatrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const arrayMatrix2 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]

const snailSolver = (snail) =>{
  let acc = []
  let x = 0
  let y = 0
  while(acc.length < snail.flat().length){
  if (snail[x][y]) {
    acc.push(snail[x][y])
  }
  if (!snail[x][y+1] && x < snail.length - 1){
    x++
  }
  if (!snail[x][y -1] && x !==0){
    x--
  }
  if(snail[x][y+1]){
    y++
  }
    console.log(acc, x, y)
  }
}
snailSolver(arrayMatrix1)
