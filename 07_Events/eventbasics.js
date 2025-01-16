// document.getElementById('owl').onclick=function(){
//     alert('Owl clicked')
// }

// document.getElementById('images').addEventListener('click',function (e) {
//     //alert('You click on the owl')
//    console.log("clicked inside the ul");
// },false)
// document.getElementById('owl').addEventListener('click',function (e) {
//     //alert('You click on the owl')
//   //  console.log("owl clicked");
//     //e.stopPropagation()
// },false)

// document.getElementById('google').addEventListener('click',function (e) {
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("Google Clicked")
// },false)

document.querySelector('#images').addEventListener('click',function (e) {
//console.log(e.target.parentNode);
console.log(e.target.tagName);
if (e.target.tagName==='IMG') {
    console.log(e.target.id);
    
    let removeIt=e.target.parentNode
    removeIt.remove()
}

//removeIt.parentNode.removeChild(removeIt)
    
},false)

//type,timestamp,preventDefault
//target,toElement,srcElement,currentTarget
//clientX,ClientY,ScreenX,ScreenY
//altKey,ctrlKey,shiftKey,keyCode

//atachEvent
//JQuery -onEventListner