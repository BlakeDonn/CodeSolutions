let input = [1, 2, 3, [[4], 5], [[[6]]]]

let recursiveFunct = (input ,  index = 0, output = []) =>{
  if (index === 5) return
  if (output.lenth === input.length){
    return output
  }
  if (typeof(input[index]) === "object"){
    input[index].forEach(x => typeof(x) === "object" 
      ? output.push(x) 
      : recursiveFunct(x, 0, output))
  }
  else {
    output.push(input[index])
  }
  index+=1
  recursiveFunct(input, index, output)
}
recursiveFunct(input)
