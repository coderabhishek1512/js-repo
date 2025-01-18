const user={
    name:"Abhishek",
    email:"abhishek@gmail.com",
    loginCount:8,

    getUserDetails:function(){
// console.log("Got user detail from database");
// console.log(`User name:${this.name} , Email:${this.email} `);
// console.log(this);

    }
}
// console.log(user.name);
// console.log(user.getUserDetails());
// console.log(this);

function User(name,email,loginCount){
    this.name=name,
    this.email=email,
    this.loginCount=loginCount

    this.greeting=function(){
        console.log(`Welcome : ${this.name}`);
        
    }

    return this
}
const userOne=new User("Abhi","abhishek@gmail.com",8)
const userTwo=new User("Abhishek","ak@gmail.com",11)
console.log(userOne);
console.log(userTwo);
