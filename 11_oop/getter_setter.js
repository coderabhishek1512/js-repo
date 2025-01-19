class User {
    constructor(username,password){
        this.username=username
        this.password=password
    }
    get username(){
        return this._username.toUpperCase()
    }
    set username(value){
        return this._username=value
    }
}
const Abhishek=new User("Abhi123","abhi@123")
console.log(`UserName is :${Abhishek.username} and Password is :${Abhishek.password}`);

