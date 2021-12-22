/*
setItem()
getItem()
removeItem() verwijdert 1 item
clear() maakt alles leeg
key() indexnumeber

*/

//local storage

let name = 'Jack'
let users = [1,2,3,4,5,6]
let people = [
    {
        id: 1,
        username: "root"
    },
    {
        id: 2,
        username: "admin"
    },
]


localStorage.setItem("people", JSON.stringify(people))


localStorage.setItem('name', name)
//localStorage.setItem('numbers', users)


/*
localstorage kan enkel strings aanvaarden
werkt enkel met iterable arrays to setItems

to get Items dan wil je gegevens opzoeken die in de localstorage al opgeslagen zijn
*/
//from object to string
localStorage.setItem('numbers', JSON.stringify(users)) //convert string to array,
/*
[1,2,3,4,5] = "[1,2,3,4,5]"
*/

let result;
//from string to object
result = JSON.parse(localStorage.getItem('numbers'))

//string data type
result = JSON.parse(localStorage.getItem("people"))
console.log(typeof result)


// result.forEach(user=>{
//     console.log(user)
// })

//session storage is hetzelfde maar de gegevens blijven enkele tijdens de sessie aanwezig


// window.addEventListener('DOMContentLoaded', (event)=>{
//     console.log(localStorage.getItem('people'))
//     let listofTodo = JSON.parse(localStorage.getItem('people'))
//     listofTodo.forEach(todo=>{
// console.log(todo)
// document.querySelector(".result").innerHTML += `<p class="display-1">${todo.username}</p>`
//     })
// })



//addthisDataToStorage(sendObj) om de data in de local storage te steken
