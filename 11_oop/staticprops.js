class User{
constructor(username){
    this.username=username
}
logMe(){
    console.log(`UserName:${this.username}`);
}
createId(){
    return `123`
}
}

const abhishek=new User("hitesh")
// const res=abhishek.createId()
//console.log(res);

class Teacher extends User{
constructor(username,email){
    super(username)
    this.email=email
}
}

const iphone= new Teacher("iphone","phone@iphone.com")
console.log(iphone.createId());
