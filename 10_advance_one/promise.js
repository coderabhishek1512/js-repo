const promiseOne=new Promise(function(resolved,rejected){
    //DB Calling,Cryptography,network
    //Do an scync function
    setTimeout(function(){
        // console.log("Promise is resolved");   
        resolved() 
    },1000)
})

promiseOne.then(function(){
    // console.log("Promise Consumed");
})


new Promise(function (resolved,rejected) {
    setTimeout(function(){
      //  console.log("Async task 2");
        resolved()
    },1000)
}).then(function(){
    //console.log("Async task consumed");
    
})

const promiseThree=new Promise(function(resolved,rejected){
    setTimeout(function(){
        resolved({username:'Abhishek',email:'abhishek@gmail.com'})
    },1000)
})
promiseThree.then(function(user){
   // console.log(user);
    
})


const promiseFour=new Promise(function(resolved,rejected){
    setTimeout(function(){
        let error=true
        if (!error) {
            resolved({username:'Abhishek Laxman Kannam',email:'kannam@gmail.com'})
        } else {
            rejected('ERROR : Something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
console.log(user);
return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);  
})
.finally(()=>{
    console.log("Finally :Promise is either resolvec or rejected");
    
})

const promiseFive=new Promise(function(resolved,rejected){
    setTimeout(function(){
        let error=true
        if (!error) {
            resolved({username:'React Js',email:'kannam@gmail.com'})
        } else {
            rejected('ERROR : Something went wrong')
        }
    },1000)
})

async function consumePromiseFive() {
 try {
    const response =await promiseFive
 console.log(response);
 } catch (error) {
    console.log(error);
    
 }
 
}
consumePromiseFive()


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
    
})