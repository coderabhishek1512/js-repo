function setUserName(username){
    this.username=username
    console.log("Called");
}
function createUserName(username,email,password){
    setUserName.call(this, username)
    this.email=email
    this.password=password
}
const chai= new createUserName("Abhishek","a@gmail.com","abhi@123")
console.log(chai);
