// Arrays Part 2

const marvel=["Iron Man","Ant Man","Spider Man","Hulk","Thor"]
const  dc=["batman","superman","flash"]

// marvel.push(dc)
// console.log(marvel)

// const combined=marvel.concat(dc)  //returns new array
// console.log(combined)

// const allheros=[...marvel,...dc]
// console.log(allheros)

const multiArr=[1,2,3,[4,5,6],[7,[8,9,10],11]]
const solvedmultiArr=multiArr.flat(Infinity)
// console.log(multiArr)
// console.log(solvedmultiArr)


// console.log(Array.isArray("Abhishek"))
// console.log(Array.from("Abhishek"))
// console.log(Array.from({name:"Abhishek"}))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))