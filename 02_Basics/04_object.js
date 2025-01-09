//const tinderUser=new Object()

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Abhi"
tinderUser.isLoggedIn=false

//console.log(tinderUser)

const regularUser={
    email:"abhishekkannam47@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Abhishek",
            lastname:"Kannam"

        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign(obj1,obj2)
//const obj3={...obj1,...obj2}
// console.log(obj3)//

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


const course={
    courseName:"Javascript",
    price:"999",
    courseInstructor:"Abhishek"
}

const {courseInstructor: instructor}=course
//console.log(courseInstructor);
console.log(instructor);
