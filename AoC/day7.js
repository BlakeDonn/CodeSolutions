let endbags = [
 'pale chartreuse',
'dotted beige',
'faded beige',
'faded teal',
'dim brown',
'wavy salmon',
'muted fuchsia',
'bright turquoise',
'light crimson',
'dim fuchsia',
] 
let counter = 0;
const findBags = (input, color) =>{
  let index = 0;
  doFirst(input)
  function doFirst(input){
  for(i = 0; i < input.length; i++){
    doShit(input[i])
  }
  }
  function doShit(thing){
 if(thing == 'other bags'){
      return
    } 
  if(!result[thing] || !thing ){
    return
  }
  if(result[thing][color]){
     counter +=1
    return
  } 
  if(endbags.includes(thing)){
    return
  } 
    let theKeys = Object.keys(result[thing])
    for(y = 0; y< theKeys.length; y++){
      doShit(theKeys[y])
    }
  }
  }


let result  = test.reduce((acc, cur)=>{
  let firstSplit = cur.split(" ")
  let amount = firstSplit.length / 4
  acc[`${firstSplit[0]}` + ` ${firstSplit[1]}`] 
  if(amount > 1) {
  acc[`${firstSplit[0]}` + ` ${firstSplit[1]}`] = {
    [`${firstSplit[5]}` + ` ${firstSplit[6]}`]: +firstSplit[4],
  }
  if(amount > 2) {
  acc[`${firstSplit[0]}` + ` ${firstSplit[1]}`] = {
    [`${firstSplit[5]}` + ` ${firstSplit[6]}`]: +firstSplit[4],
    [`${firstSplit[9]}` + ` ${firstSplit[10]}`]: +firstSplit[8],
  }
  if(amount > 3) {
  acc[`${firstSplit[0]}` + ` ${firstSplit[1]}`] = {
    [`${firstSplit[5]}` + ` ${firstSplit[6]}`]: +firstSplit[4],
    [`${firstSplit[9]}` + ` ${firstSplit[10]}`]: +firstSplit[8],
    [`${firstSplit[13]}` + ` ${firstSplit[14]}`]: +firstSplit[12],
  }
  if(amount > 4) {
  acc[`${firstSplit[0]}` + ` ${firstSplit[1]}`] = {
    [`${firstSplit[5]}` + ` ${firstSplit[6]}`]: +firstSplit[4],
    [`${firstSplit[9]}` + ` ${firstSplit[10]}`]: +firstSplit[8],
    [`${firstSplit[13]}` + ` ${firstSplit[14]}`]: +firstSplit[12],
    [`${firstSplit[17]}` + ` ${firstSplit[18]}`]: +firstSplit[16],
  }
  }
  }
  }
  }
  return acc
}, {})
let keys = Object.keys(result)
findBags(keys, "shiny gold")
console.log(counter) 
