//window object

let value;
value = window
value = window.Number('5')
window.WebDeveloper = (arg) =>{
    console.log(arg)
}

value = window.WebDeveloper(["Jack", "Mike"]) //custom function, wat je er zelf wil insteken

value = window.outerWidth //vertelt de breedte van het window
value = window.outerHeight //hoogte van window

// window.addEventListener('rezise',(e)=>{
//     console.log(`${window.outerWidth}\n${window.outerHeight}`) 
// })// als user window kleiner of groter maakt

//je kan alles in window steken


value = window.document
value = document.body
value = document.scripts
value = document.all //alles
value = document.location //URL location, domainnaam
//value = document.location.reload() //reloads the page
value = document.links
value = document.links[0] //via indexnummer targetten
value = document.links[0].className //wordt gebruikt om dingen up te daten
value = document.links[0].getAttribute('role') //kan ook een attribute zijn

//forms


console.log(value) //console in HTML