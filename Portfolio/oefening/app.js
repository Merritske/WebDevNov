// let dropdown = document.querySelector(".hamMenu")

// function dropMenu(){
//  let menu = document.querySelector(".menu")
//  console.log(menu)
// //dropdown.innerHTML = menu
     
// }
//deze werkt wel
function dropMenu(){
  var x = document.getElementById("myDropdown")
  if(x.style.display === "block" ){
    x.style.display = "none"
  }else{
    x.style.display = "block"
  }
}


//werkt niet, geeft foutmelding: is not a function
// function dropMenu(){
//   document.getElementsById("myDropdown").classList.toggle("show")
// }
// window.onclick = function (event){
//   if(!event.target.matches(".hamMenu")){
//     var dropdowns = document.getElementById("myDropdown")
//     for(var i = 0; i<dropdowns.length ; i++){
//       var openDropdown = dropdowns[i]
//       if(openDropdown.classList.contains("show")){
//         openDropdown.classList.remove("show")
//       }
//     }
//   }
// }
