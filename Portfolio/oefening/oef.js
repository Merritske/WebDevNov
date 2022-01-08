/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


//inputformulier naar localstorage opslaan nog doen
//object maken van al de mensen die submit drukken
//lijst onderaan het inputformulier + resetknop
let submit = document.querySelector("#submit")
const [fname, email] = document.querySelectorAll("input")
let list = []
let count = 0
let num = []
let tableBody = document.querySelector("tbody")
submit.addEventListener("click", function(e){
    e.preventDefault;
    let obj={
        fname: fname.value,
        email: email.value,
    }
 list.push(obj)
count ++

tableBody.innerHTML += `<tr>
<th class="thBody">${count}</th>
<td>${obj.fname}</td>
<td>${obj.email}</td>
<td><button type="button" onclick="functionDel(this)">Delete</button></td>
</tr>
`
fname.value =""
email.value=""
})

//nummers worden aangepast als een rij gedelete wordt
function functionDel(getEl){
//delete rij
  getEl.parentElement.parentElement.remove()
  count--
num =[]
//nummer volgorde wordt aangepast
 for(let i= 0; i<= count; i++){

num.push(i)
for(let x=1; x<num.length; x++){
document.querySelector(`body > div.lijst > table > tbody > tr:nth-child(${i}) > th`).innerHTML = x

}
console.log(num)

}
  
}

//functie schrijven + - en reset
let btnPlus = document.getElementById("plus")
let btnMin = document.getElementById("min")
let btnReset = document.getElementById("reset")
let resShow = document.getElementById("result")
let result = 0
//optellen
btnPlus.addEventListener("click", function(plus){
result++
resShow.innerHTML = result
}) 
//aftrekken
btnMin.addEventListener("click", function(min){
  result --
  resShow.innerHTML = result
})
//resetten
btnReset.addEventListener("click", function(reset){
  result = 0
  resShow.innerHTML = result
})
//console.log(result)