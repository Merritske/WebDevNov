

const book_category = document.querySelector("#book_category")
const addbookbtn = document.querySelector('.addbookbtn')
const book_name = document.querySelector("#book_name")
const legend = document.querySelector("legend")

// //onchange
// book_category.addEventListener('change', function(){
//     console.log("something has changed")
// } )


// //CLICK

// addbookbtn.addEventListener('click', e=>{
//     e.preventDefault;
//     console.log("this is clickevent")
// })

// //MOUSE OVER
// book_name.addEventListener('mouseover', e =>{
//     console.log("mouseover")
// })

// //MOUSE OUT
// book_name.addEventListener('mouseout', e =>{
//     console.log("mouseout")
// })

// //ONLOAD wordt gebruikt om info in de console te geven
// document.addEventListener("DOMContentLoaded", ()=>{

// console.log("page is loaded")

// })

// //double click

// addbookbtn.addEventListener('dblclick', e=>{
//     e.preventDefault;
//     document.body.className = "bg-danger"
//     console.log("this is a double clickevent")
// })

// // //keydown -> use om vb max length te bepalen
// // book_name.addEventListener('keydown', e =>{
// //     e.preventDefault
// //     console.log(e)
// //     if(book_name.value.length >= 10){
// // alert("max character is 10")
// //     }else{
// //         console.log(book_name.value)
// //     }
// // })

// //focus

// // book_name.addEventListener('focus', (e) =>{
// //     console.log("focuss")
// //     e.target.className = "form-group  bg-warning"
// // })
// //hierna mouseout en de start layout terug plaatsen


// //select

// book_name.addEventListener('select', e =>{
//     console.log("selected")
//    legend.innerText = "Selected"
// })

// //copy
// book_name.addEventListener('copy', e =>{
//     console.log("copied")
//    legend.innerText = "KOPY"
// })

// //cut
// book_name.addEventListener('cut', e =>{
//     console.log("cut")
//    legend.innerText = "CUT"
// })

// //paste
// book_name.addEventListener('paste', e =>{
//     console.log("pasted")
//    legend.innerText = "pasted"
// })



//CLICK


addbookbtn.addEventListener('click',e=>{
    e.preventDefault();
    console.log('this is click event')
    legend.classList.toggle("text-warning") //werkt alleen als in HTML geen text kleur staat

})

