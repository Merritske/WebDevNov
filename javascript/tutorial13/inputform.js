let addBtn = document.getElementById("add-movie")
const [title,director,coverLink] = document.querySelectorAll("input")
let list = []
let tableBody = document.getElementById("films")


let clearAll = document.getElementById("clear-films")
clearAll.addEventListener("click", clearbtn=>{
    tableBody.innerHTML =""
    localStorage.removeItem("list")
})


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
//zie onderaan voor andere oplossing

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

//andere oplossing => window.addEventListener kan hiermee weg
// let allmovies = JSON.parse(localStorage.getItem('Addtable-data'))
//         allmovies.push(obj)
//         localStorage.setItem('Addtable-data',JSON.stringify(allmovies))

//         table.innerHTML += `<td>${obj.movie}</td>
//         <td>${obj.director}</td>
//         <td>${obj.link}</td>
//         <td><a href="#" id = "delete-film" class = "btn btn-danger" onClick="TestRemove(this)">Delete Movie</a></td>`
        
//     })

