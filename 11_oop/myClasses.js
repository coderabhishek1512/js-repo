//ES6

// class user{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptPassword(){
        
//         return `${this.password}123`
       
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai= new user("Abhishek","a@gmail.com","abc")

// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());


//Behind the scenes

function User(username,email,password){
    this.currentusername=username
    this.email=email
    this.currentpassword=password
}

User.prototype.encryptPassword=function(){
    return `${this.currentpassword}123`
}
User.prototype.changeUserName=function(){
    return `${this.currentusername.toUpperCase()}`
}

const coffee= new User("Abhi","ak@gmail.com","Abhishek@")

console.log(coffee.encryptPassword());
console.log(coffee.changeUserName());