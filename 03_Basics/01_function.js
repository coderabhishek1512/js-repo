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
//console.log(name);
//console.log(name);

function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200,300,400));


const user ={
    username:"Abhishek",
    price:199
}

function handleObject(anyObject){
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user)

handleObject({
    username:"abhi",
    price:399
})



const myNewArr=[200,300,400,500]
function returnSecondValue(getArray){
    return getArray[3]
}
//console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200,300,400,500]));
