// let inputText = document.querySelector("#todo")
// let inputDate = document.querySelector("#datepicker-input")
// let btn = document.querySelector("#todo-form > button")
// let input= []

// //in <i> = kruisje : onclick = "btnRemove(this)"
// function btnRemove(getEl){
//   //om de hele rij te selecteren
//     getEl.parentElement.parentElement.remove()
// }

// //aanmaken nieuwe elementen in todolijst
// btn.addEventListener('click', e => {
// e.preventDefault()

// let ul = document.querySelector("ul")
//    let toDoList = document.createElement('li')
// //object creëren om values te kunnen targetten
//   obj = {
//        inputText : inputText.value,
//        inputDate :inputDate.value
//    } 
//    //invoegen van waarden inputfield in array
//    input.push(obj )

// //invoegen waarden van inputfield in HTML
//     toDoList.innerHTML = 
//      `<li class="list-group-item d-flex justify-content-between"> ${inputText.value}\t\t${inputDate.value}
//     <a href="#" class="delete-item">
//         <i class="fa fa-remove" onclick = "btnRemove(this)"></i> 
//     </a>
// </li>`
 

  
//  ul.appendChild(toDoList)
    
//  //invulvelden terug leeg maken
//    inputText.value = ""
//    inputDate.value = ""
// })

// //delete all knop
// document.querySelector('#clear-todos').addEventListener('click',e=>{
//     e.preventDefault();
//     let ul = document.querySelector("ul")
//     ul.innerHTML=""
// })


// //NOG AFMAKEN
// //FILTER /zoekfunctie

// console.log(input)




// var zoeker = document.querySelector("#filter")

//  //zoeker.addEventListener("keyup", filterItem)
//  let  toDoList= document.querySelectorAll('.list-group-item')
// let an = Array.from(zoeker)
// console.log()

// // function filterItem(){
// //      e.preventDefault;
// //      e = (zoeker.value)

// //     let  toDoList= document.querySelectorAll('.list-group-item')
// //   Array.from(toDoList).forEach(vergelijk)

// //    function vergelijk (item){
   
// // var listName = item.firstChild.textContent;
// // for(let l of e){
// //     return l }
// // if(listName.indexOf(l) != -1){
// // item.style.display = 'block'
// // }else{
// //     item.style.display = 'none'
// // }
// //    }
// //  }


//        //geeft elke letter apart die je in de search zet
 
    
   
// //     for( let z of input ){
// // if(l === z){
// //              console.log('joepie')
// //   toDoList.style = "bg-danger" 
// //  }else if(l !== toDoList){
// //      document.querySelector('#tasks-title').innerContent = "No such Thing to do"
// //  }
// //     } 

// // }
  
  

   
//  // console.log(l) 
// //  input.forEach(k){
// //      for(let k = 0; k<toDoList.length; k++) {
// //         if(l=== k){
// //        console.log(k)
// // 
// //    }
   
// // }

// //      let ul = document.querySelector("ul")
// //       console.log(ul[1])
// //    for(let l = 0; l< e.length; l++){
       


// //als zoeker gevonden is in todolist van kleur laten veranderen




//OPLOSSING ATTILA
/*
<li class="list-group-item d-flex justify-content-between"> 
                            My todo titleDELETE ME
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove" onclick = "btnRemove(this)"></i> 
                            </a>
                        </li>
*/

//find elements
const todoInput = document.querySelector("#todo")
const addTodoBtn = document.querySelector(".addBtn")
const addTodoBodyForAlert = document.querySelector('.addTodoBody')
const todoDate = document.querySelector('.todoDate')
const listGroupTodo = document.querySelector(".todolist")


//elment creeren om in alertmessage te gebruiken
let g = t=>document.createElement(t)


//dynamic alertmessage we hebben 1 groen en 1 rood nodig, daarom function ervoor maken
function responseMessage(alertType, message){

    let divAlert = g("div")
    divAlert.className = `alert alert-${alertType}`
    divAlert.setAttribute('role','alert')
    divAlert.innerHTML  = `${message}`
addTodoBodyForAlert.appendChild(divAlert)
setTimeout(function(){
   divAlert.remove()
},2000)

}

//delete item
listGroupTodo.addEventListener("click", (event)=>{
    event.preventDefault()
    console.log(event.target.classList)

    //addeventlistener scope
//enkel als op het kruisje getypt wordt kan de rij verwijderd worden
    if(event.target.className = 'fa fa-remove'){
        let findParent = event.target.parentElement
        findParent = event.target.parentElement.parentElement

        findParent.remove()
    }
      

})

//delete all knop
document.querySelector('#clear-todos').addEventListener('click',e=>{
    e.preventDefault();
    let ul = document.querySelector("ul")
    ul.innerHTML=""
})

//items toevoegen in HTML
let todos = []
addTodoBtn.addEventListener('click', e=>{
    e.preventDefault()

    let obj ={
        todo_title : todoInput.value,
        todo_date : todoDate.value,
    } 
if(todoInput.value != ""){
    responseMessage('success', 'todo added')
listGroupTodo.innerHTML += `<li class="list-group-item d-flex justify-content-between"> 
${todoInput.value} - ${todoDate.value}
<a href="#" class="delete-item">
    <i class="fa fa-remove"></i> 
</a>
</li>`



//plaats de data die ingegeven zijn in de local storage

if(localStorage.getItem("todos")=== null){
    todos = []
}else{
    todos = JSON.parse(localStorage.getItem("todos"))
}
todos.push(obj)

localStorage.setItem("todos", JSON.stringify(todos))



//als de data niet goed in de inputvelden ingegeven zijn
}else{
responseMessage('danger', "Error")
}

//  //invulvelden terug leeg maken
   todoInput.value = ""
   todoDate.value = ""

})

window.addEventListener('DOMContentLoaded', (event)=>{
    let todos = JSON.parse(localStorage.getItem('todos'))
console.log(todos)
todos.forEach(todo =>{
    listGroupTodo.innerHTML += `<li class="list-group-item d-flex justify-content-between"> 
${todo.todo_title} - ${todo.todo_date}
<a href="#" class="delete-item">
    <i class="fa fa-remove"></i> 
</a>
</li>`
})

})


//FILTER
//heel het woord moet ingegeven worden
//als je letter per letter wil -> includes()


var filter = document.querySelector("#filter")
filter.addEventListener("keyup", function(e){
//console.log(filter.value)
//compaire 2 strings
let listOfTodo = document.querySelectorAll('.list-group-item')
//console.log(listOfTodo)
listOfTodo.forEach(function(todo){
   //console.log(todo)
   let filterValue = filter.value
  // console.log(filterValue)

  //juiste value krijgen, trim witspace verwijderen + "-"
    let todoTitle = todo.textContent.trim()
    todoTitle = todoTitle.substring(0,todoTitle.length-2)
//console.log(todoTitle)

//nakijken of waarden overeenkomen
console.log(todoTitle.includes(filterValue))
// if(filterValue != ""){
if(todoTitle.includes(filterValue)){
    todo.setAttribute('style','display:flex !important')
}else{
    todo.setAttribute('style', 'display:none !important')

}})
 })




//Nakijken of waarden overeenkomen ZONDER INCLUDES
// if(filterValue != ""){

// if(filterValue.indexOf(todoTitle) === -1){
// todo.setAttribute('style', 'display:none !important')

// }else{
//     todo.setAttribute('style','display:flex !important')
// }
// }else{
//     todo.setAttribute('style', 'display:flex !important')
// }





