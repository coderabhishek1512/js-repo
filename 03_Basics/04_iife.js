//Immediate Invoke Function Expression

(function (){
    //named IIFE
console.log("This is IIFE");

})
(); //two run two IIFE we need to add semicolon explicitly

((name)=>{
    //unamed IIFE
    console.log(`It is IIFE Arrow Function of ${name}`);
})('Abhishek')