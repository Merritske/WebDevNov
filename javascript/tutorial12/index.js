//CREATE ELEMENT

let h1 = document.createElement('h1')
h1.innerText =  'INTECBRUSSEL'

let cardColumns = document.querySelector(".cardcol")

// //INSERTBEFORE

// cardColumns.insertBefore(h1,cardColumns.childNodes[5])

// //append
// cardColumns.appendChild("<h1> Hello</h1>")
// cardColumns.appendChild(h1)

// ///prepend: inserts before child elements
//  cardColumns.prepend(h1)

// //insertAdjacentHTML

// cardColumns.insertAdjacentHTML ('beforebegin', '<h1>hellooo</h1>')


//CLONENODE

let cardTemplate = cardColumns.firstElementChild.cloneNode(true) //gebeurt niet in HTML alleen in js
cardTemplate.childNodes[3].childNodes[1].textContent = "New Year"
console.log(cardTemplate)

cardColumns.appendChild(cardTemplate) //link naar HTML

//replace child
//functie start pas na 3 sec
setTimeout(() =>{
cardColumns.replaceChild(cardTemplate, cardColumns.childNodes[3])
},3000)

//removeChild
setTimeout(() =>{
  cardColumns.removeChild(cardColumns.firstElementChild)

    },3000)
    
cardColumns.appendChild(cardTemplate)






