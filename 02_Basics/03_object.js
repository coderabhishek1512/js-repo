//singleton -----> object.create()

//Object literals
const mySym= Symbol("key1")

const JsUser={
    name:"Abhishek",
    [mySym]:"mykey1",
    email:"abhishekkannam47@gmail.com",
    age:23,
    isLoggedIn:false,
    lastLoginDays:["monday","staurday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])

JsUser.email="kannamabhishek47@gmail.com"
//Object.freeze(JsUser)

//JsUser.email="ak47@gmail.com"
console.log(JsUser["email"])

JsUser.greeting=function(){
    console.log("hello js user")
}

JsUser.greeting2=function(){
    console.log(`hello js user ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())