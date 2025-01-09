//var b=20
let a=100
if (true) {
let a=10
const c=30
//console.log("Inner",a);

}

//console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="abhishek"
    function two(){
        const website="GITHUB"
        //console.log(username);
        
    }
    two()
    //console.log(website);
    
}
one()


console.log(addone(5));
function addone(num){
    return num+1
}

//console.log(addTwo(5));
const addTwo=function(num){
    return num+2
}
