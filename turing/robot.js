let input = 'GRGRGRG'
let rules = {
"U": {"v": 0, "a": "y", e: + 1},
"L": {"v": 1, "a": "x", e: - 1},
"D": {"v": 2, "a": "y", e: - 1},
"R": {"v": 3, "a": "x", e: +1 },
}
let location = {
"S": {"x":0, "y":0},
"C": {"x":0, "y":0},
"F": "D",
"V": 3
}

let findEnd = (test)=>{
  for(i = 0; i < test.length; i++){
    if (test[i] === "L" && location.F === "R"){
      location.F = "U"
    }
    if(test[i] === "G"){
      if(location.F === "D"){
         if (location.F === "D") location.C.y -=1 
         if (location.F === "U") location.C.y +=1
      }
      if (location.F === )
    console.log(location.C, rules[location.F].a)
    }
  }
  
}
findEnd(input)
