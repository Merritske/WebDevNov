let bookName = document.getElementById("book_name")
let autor = document.getElementById("book_author")
let cat = document.getElementById("book_category")
let bookDate = document.getElementById("book_date")
let price = document.getElementById("price")
let vuilbak = document.getElementsByClassName(".lead")

let btn = document.querySelector(".addbookbtn")
//Array met input elementen
var input = [bookName, autor, cat, bookDate, price, vuilbak]

let a = 1;
let table = document.querySelector("tbody")


//let input = function(){
btn.addEventListener("click", function (e) {

  //bij click tabel rij maken
  if (table == null) {
    let tableAll = document.getElementsByTagName("table")
    table = document.createElement("tbody")

    tableAll.appendChild(table)
  }

  let tr = document.createElement("tr")
  let th = document.createElement("th")


  table.appendChild(tr)

  //th volgnummer geven


  th.innerText = a
  tr.appendChild(th)

  a++

  //voor elke rij 5 data die ingegeven worden
  for (let i = 0; i < 6; i++) {

    let td = document.createElement("td")


    td.innerText = input[i].value

    //price
    if (i == 4) {

      td.innerHTML = `${input[i].value} € `
    }
    // trash can
    if (i == 5) { 
      
      
      td.innerHTML = `<a href="#"><i class="fa fa-trash lead" aria-hidden="true"></i></a>`
     

    }


    tr.appendChild(td)


  }




})

//NIEUWE POGING
//WERKT OP BESTAAND INPUT NIET OP NIEUWE omdat nieuwe input blijkbaar niet geselecteerd wordt??? HOE OPLOSSEN???

console.log(document.querySelectorAll("a"))


document.querySelectorAll('a').forEach(item => {
  item.addEventListener('click', event => {
    let tbody = document.querySelector("tbody")
    let tr = document.querySelectorAll("tr")
tbody.deleteRow(tr)
  })
})
  



//DELETE ALL RECORDS
document.querySelectorAll(".btn")[1].addEventListener("click", function () {
let trAll = document.querySelectorAll("tr")
 // let x = trAll.length - 1

  for (x = trAll.length - 1; x > 0; x--) {

    let deleteTr = document.querySelectorAll("tr")[x]
    deleteTr.remove(deleteTr)

  }

a=1

})





//FOUTe PROBEERSELS OM TRASHCAN TE LATEN WERKEN 


// var trash = document.querySelectorAll("a").addEventListener("click" , function(){
// let tbody = document.querySelector("tbody")
// console.log(tbody)
// //tbody.deleteRow(`${this}`)

//   // indexDel = parseInt(`${this}`).replace(tr, "")
//   // document.querySelector("tbody").deleteRow(indexDel)
// })







// function delRow(){
//   var trash = document.querySelectorAll("a").addEventListener("click", delRow());

//   var trashCan = trash.target.parentElement;
// if(trashCan.target.contains("lead")){
  
//   console.log(trashCan)
//   table.removeChild(tr)
// }

// }
// trash()

//trash can Als op icon geklikt wordt moet de rij verdwijnen
// input[5] als daar op gedrukt wordt
//moet de rij van die input verdwijnen

// //NOG ALGEMEEN MAKEN !!!
//  let trAll = document.querySelectorAll("tr")
// // let line = trAll
// // for(let z = 5; z%5==0 ; z++){
// // // if(td%5 ==0){
// // console.log(z)
// // }
// // for (let z = 5; z<trAll.length ; z*5){
// // trAll.remove()


//   //td [5] is de eerste, moet voor alle nog in orde gemaakt worden


// for(let i = 0 ; i< trash.length; i++){

// let trash = document.querySelectorAll("a")[i]

// // trash.addEventListener("click", function (){

// //   let tr = document.querySelectorAll("tr")[i]

// //  tr. remove(tr)
// // })

// console.log(typeof trash)
// }







// //   //td + th verwijderen
// let td = document.querySelectorAll("td")[5]



//   td.remove(td)


// let th = document.querySelectorAll("th")[7] //begint bij de eerste nummer en delete dan elke 
// //   // th 0-6 mogen niet verwijderd worden
// th.remove(th)
 



// // //for(let th = 0 ; th < th.length -1 ; th++){

// // //if( th > 5){
 

// // //delete dt per dt -> hele rij ineens nog in orde maken


 



  
 

// // let trash = document.querySelectorAll("td")[5]

// // for(trash = 5; trash %5 == 0; trash++){
// //  //
// //  console.log("hello")
// //  // if(trash.rowIndex == )
// // }






// // let line = document.querySelectorAll("td")[5].addEventListener("click",

// // function indexRij (x){
// //   x.rowIndex
// //   console.log(x)
// //   let trAll = document.querySelectorAll("tr")[x]
// //   // let x = trAll.length - 1
 
// //   //  for (x = trAll.length - 1; x > 0; x--) {
 
// //   //    let deleteTr = document.querySelectorAll("tr")[x]

// //   trAll.remove(trAll)
// //   //  }

// //    let th = document.querySelectorAll("th")[7] //begint bij de eerste nummer en delete dan elke 
// //    //   // th 0-6 mogen niet verwijderd worden
// //     th.remove(th)

// //     let td = document.querySelectorAll("td")[1]
// //     //   for(td of trAll){
// //        td.remove(td)

// // })



// //YOU TUBE filmpje oplossing nog aanpassen
// var index, table = document.getElementById('table')
// for(var i = 0; i< table.rows.length ; i++){
//   table.rows[i].cells[3].onclick = function(){
//     index = this.parentElement.rowIndex;
//     table.deleteRow(index);
//     consoµ.log(index);
//   }
// }





//FOUT
// let trash = input[5]
// console.log(trash)
//  trash.addEventListener("click", function(){
// //tr.remove(tr)
//  console.log("hello")
//  })