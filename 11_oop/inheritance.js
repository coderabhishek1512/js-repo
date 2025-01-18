class User{
    constructor(username){
        this.username=username
    }

    logMe(){
console.log(`USERNAME:${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`This course was added by ${this.username} now the email is ${this.email} and password is ${this.password} `);
        
    }
}
class Student{
    constructor(username,email,password,Programm){
        this.username=username
        this.password=password
        this.email=email
        this.Programm=Programm
    
    }
    programcode(){
        console.log(`This Student name is ${this.username} and his email is ${this.email} and his password is ${this.password} and program is ${this.Programm}`);
        
    }
}


const chai =new Teacher("Abhishek","abhishek@gmail.com","abhi@123")
const tea=new Student("Shyam","shyam123@gmail.com","shyam@123","UG")
// chai.addCourse()
// tea.addCourse()
tea.programcode()
