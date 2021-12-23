let addBtn = document.getElementById("add-movie")
const [title,director,coverLink] = document.querySelectorAll("input")
let list = []
let tableBody = document.getElementById("films")

function testRemove(getEl){
getEl.parentElement.parentElement.remove()
console.log(getEl.parentElement.parentElement)
}

addBtn.addEventListener("click", addInput)
function addInput(e){
e.preventDefault();
let obj = {
    title : title.value,
    director : director.value,
    coverLink : coverLink.value
}
list.push(obj)


 tableBody.innerHTML +=`<tr>
<td><img src=${obj.coverLink} class="img-fluid img-thumbnail"></td>
<td>${obj.title}</td>
<td>${obj.director}</td>
<td><a href="#" id = "delete-film" class = "btn btn-danger" onclick="testRemove(this)">Delete Movie</a></td>
</tr>`

localStorage.setItem("list", JSON.stringify(list))

}

window.addEventListener('DOMContentLoaded', (event)=>{
    let listNew = JSON.parse(localStorage.getItem("list"))
    
    console.log(listNew)
  
      
    listNew.forEach(movieList =>{
      
 tableBody.innerHTML +=`<tr>
 <td><img src=${movieList.coverLink} class="img-fluid img-thumbnail"></td>
 <td>${movieList.title}</td>
 <td>${movieList.director}</td>
 <td><a href="#" id = "delete-film" class = "btn btn-danger" onclick="testRemove(this)">Delete Movie</a></td>
 </tr>`
   list= listNew  })
    

})

let clearAll = document.getElementById("clear-films")

