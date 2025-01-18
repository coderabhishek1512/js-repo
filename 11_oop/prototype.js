// let myName="Abhishek     "
// let myCollege="SSJCET   "
// console.log(myName.trueLength);


let myHeros=["thor","spiderman"]
let heroPower={
    thor:"Hammer",
    spiderman:"sling",
     
    getSpiderPower: function(){
        console.log(`Spider Man Power is : ${this.spiderman}`);
        
    }
}
Object.prototype.Abhishek=function(){
console.log(`abhishek is present in all object`);
}
Array.prototype.AbhishekArray=function(){
    console.log(`Abhishek is present inside all Array`);
    
}
// heroPower.Abhishek()  //Object can be accessed from everywhere because it is supermost
// myHeros.Abhishek()  
// myHeros.AbhishekArray() //Array,String,Function can be accessed from from them only


//#################   Inheritance #############//
const user={
    name:"Abhishek",
    email:"abhishek47@gmail.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport ={
    makeAssignment:"javascript asssignment",
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user

//Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName="Abhishek     "


String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`TrueLength is ${this.trim().length}`);   
}


anotherUserName.trueLength()
"Abhishek Kannam  ".trueLength()
"Mocha Tea    ".trueLength()