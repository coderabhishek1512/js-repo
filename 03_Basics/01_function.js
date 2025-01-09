function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()
// sayMyName()

// function addTwoNumber(num1,num2){
//    console.log(num1+num2); 
// }

function addTwoNumber(num1,num2){
   let result=num1+num2
   return result
}
const result=addTwoNumber(6,9)
//console.log("Result: ",result);



function loginuserMessage(username){
    if (username === undefined) {
        console.log("please enter the username");
        return
    }
    return `${username} just logged in`
}
let name=loginuserMessage()
console.log(name);
