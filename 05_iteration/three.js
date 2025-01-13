// const arr=[1,2,3,4,5,6]

// for (const num of arr) {
//     console.log(num);
    
// }


// const greeting="Hello World"
// for (const greet of greeting) {
//     console.log(`The Value of Greet is ${greet}`);
    
// }

///--------Maps-------------//
const map=new Map()
map.set('IN',"India")
map.set('US',"United States")
map.set('UK',"United Kingdom")

//console.log(map);
// for (const [key,value] of map) {
//     //console.log(key);
//     console.log(value);
    
// }

// const myObj={
//     js:'Javascript',
//     cpp:'C++',
//     rb:'ruby',
//     swift:'swift by apple'
// }
// for (const key in myObj) {
//    //console.log(`${key} my object for Key ${myObj[key]}`);
   
// }


//-----------For Each Loop----------//

// const arr=["js","python","java","SQl","python","CPP"]
// arr.forEach(function (item){
//     console.log(item);
    
// })
// arr.forEach(function (item,index,Array){
//     console.log(item);
//     console.log(index);
//     console.log(Array);
    
// })


const myCoding=[
    {
    languageName:"javascript",
    languageFileName:"js"
},
    {
    languageName:"java",
    languageFileName:"java"
},
    {
    languageName:"python",
    languageFileName:"py"
},
    {
    languageName:"MySQl",
    languageFileName:"SQL"
}
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})