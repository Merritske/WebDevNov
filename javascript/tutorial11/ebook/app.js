let bookName = document.getElementById("book_name")
let autor = document.getElementById("book_author")
let cat = document.getElementById("book_category")
let bookDate = document.getElementById("book_date")
let price = document.getElementById("price")
let btn = document.querySelector(".addbookbtn")
//Array met input elementen
let input = [bookName, autor, cat, bookDate,price]



//let input = function(){
btn.addEventListener("click", function(){ 
    //bij click tabel rij maken
    let table = document.querySelector("tbody")
   let tr = document.createElement("tr") 
table.appendChild(tr)
let th = document.createElement("th")
//th nog volgnummer geven

//voor elke rij 5 data die ingegeven worden
  for(let i =0 ; i< 5; i++)
  {let td = document.createElement("td")


input.forEach(function (e){
 td.innerText = input.value
 
})
  tr.appendChild(td)



}

       
   })
   




console.log(input)
