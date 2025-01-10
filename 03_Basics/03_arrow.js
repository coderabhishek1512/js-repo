const user ={
    username:"abhishek",
    price:999,

    welcomeMessage:function(){
        console.log(`Hey ${this.username},welcome to the Website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="Abhishek"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     console.log(this);
//     console.log(this.username);
    
// }
// chai()

// const chai=function (){
//    let username="abhishek"
//     console.log(this.username);
// }
// chai()
const chai= ()=>{
   let username="abhishek"
    console.log(this);
}
//chai()


// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// const sum=addTwo(2,6)
// console.log(sum);
//const addTwo=(num1,num2)=>num1+num2;
//const addTwo=(num1,num2)=>(num1+num2)
const addTwo=(num1,num2)=>({username:"Abhishek"})

const sum=addTwo(5,6)
console.log(sum);
