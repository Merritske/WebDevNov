//getElementById

//let value;

//value = document.getElementById("todo-form")

//value.innerHTML =  "test"

//console.log(value) //kijk in console in browser en dan op "i" om de HTML Collection te zien


//getElementsByTagName

//value = document.getElementsByTagName('input') //geeft alle input in een array -> HTML collection
// value[0].value = "it was an input" //indexnummer gebruiken om juiste input te targetten
//value = document.getElementsByTagName("*")
// value.forEach(el=>{
//     console.log(el)
// }) //forEach is geen functie  omdat het geen echte array is

//value = Array.from(value) //maakt een array van de elementen van de HTML
// value.forEach(el=>{
//     el.remove() //alles is weg omdat remove el = heel de HTML
// })

//OF ANDERS: functie uitgeschreven
// value = document.getElementsByTagName("*")
// value = Array.from(value)
//  function ForAllFunction(el){
//     console.log(el)
//     el.remove()
// }
// value.forEach(ForAllFunction)




// //getElementsByClassName

// value = document.getElementsByClassName("card-body")
// //console.log(value) 



// //querySelector
// value = document.querySelector(".card-header") //CSS selector, geeft alleen de eerste van diegene die geselecteerd zijn


// //querySelectorAll (CSS selector maar geeft alle elementen)
// value = document.querySelectorAll(".card-header")  //geeft een array van al de elementen
//  value.forEach(el=>{
//      //console.log(el)
//  })
// value = document.querySelectorAll(".card-header")[1] //tweede element targetten met classname = card-header

// //andere manier
//const [_1, sec, third] = document.querySelectorAll(".card-header") //al de elementen targetten met nieuwe variabele naam
// console.log(_1)  //met nieuwe variabele naam (kijk naar text-content om te kijken of je de juiste hebt)




//createElement()

// value = document.createElement('p')
// value.className = "lead text-danger font-weight-bold" //topografic 
// value.innerHTML = "this is a paragraph"
// third.appendChild(value) //insert in third (zie hierboven)

// //custom function to create element
// let elGen = t => document.createElement(t)

// //value = elGen('div')
// value = elGen("a")
// value.href = "google.com"
// value.innerHTML = "click google"

// let findAll = selector => document.querySelectorAll(selector)
// // value = findAll('div')

// value = findAll(".delete-item") //return nodelist
// value.forEach(btn =>{
//     console.log(btn)
//         btn.addEventListener('click', function(e){ //event
//             e.preventDefault() // default settings niet gebruiken in deze functie
//             //click actions
//             console.log("Hello Click")
//             alert(1)
//         })
//     })

// console.log(value)

// //BLOKJE LATEN BEWEGEN
// let squareel = document.querySelector(".square")
// var getPropVal = squareel.computedStyleMap().get('left');
// console.log(getPropVal)

// document.querySelector("btn").addEventListener("click", function (e){
//       e.preventDefault();  
//       for(let i = 0 ; i<10000 ; i++){
   
//         setInterval(()=>{
//             squareel.style.top = `${i}px`
//         }, 1000)
//  } })
//     //NOG AFWERKEN


let elGen = t=> document.createElement(t)

let contai =elGen("div")
let pic = elGen("img")
let picSource = "https://picsum.photos/200"
pic.src = picSource
pic.style.padding = "10px"
let tekst = elGen("p")
tekst.style.color = "red"
tekst.style.fontSize = "60px"
tekst.innerText = "Hello darling, having a nice day?"

contai.appendChild(pic)
contai.appendChild(tekst)
document.querySelector("body").appendChild(contai)

