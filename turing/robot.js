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
"F": "D"
}

let findEnd = (test)=>{
  for(i = 0; i < test.length; i++){
    if (test[i] === "L" && location.F === "R"){
      location.F = "U"
    }
    if(test[i] === "G"){
    let rule = rules[location.F]
    location.C[rule.a] rule.e
    console.log(rule.e)
    }
  }
  
}
findEnd(input)
