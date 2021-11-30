//if else

var person = {
    firstname: "Joe",
    lastname: "Dalton",
    age: 29,
    livingPlace: "Aalst",
    isStudent: true,
    email: "joe@joe.com",
}
/*if(person.age >=18 && person.livingPlace === "Aalst" && person.isStudent ===true){
    console.log(person) //return true
}else{
    console.log("no such a person")
} */
if(person.age >=18 && person.livingPlace === "Aalst1" && person.isStudent ===true){
    console.log(person) //return true
}
else if(person.lastname === "Dalton1"){
    console.log("lastname is corect", person)
}
else{
    console.log("default > false ... end her")
}



// EXERCICE //
/*var userInput= prompt("please enter a number !");
console.log(typeof Number(userInput))  */


var userInput = prompt("please enter a number")
// a = (isNaN(userInput)) === true ? "enter a NUMBER": "goed zo" //deze is fout isNaN(userInput) moet geen == hebben

var result  = isNaN(userInput) ? 'It is not a number' : (userInput% 2 ===0? 'even':'odd')
console.log(result)

// if(userInput%2 == 0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }   simpele programmatie
//ANDERE MOGELIJKHEID
/*var userInput = prompt("please enter a number")
result = userInput%2 == 0 ? "even":"odd"
console.log(result)*/

//NaN
/*// console.log(isNaN(x)) ; Not A Number - methode
var a = 2
var b = "intec"
if(isNaN(a))
{ console.log("it is a string")}
else{
   console.log("it is a number")
}*/


//als de eerste keer geen nummer ingegeven is
/*
var numberInput = prompt('enter a number')
if( isNaN(numberInput)){
    console.log('it is not a number')
    numberInput = prompt("you must enter a number")
    console.log (numberInput)
}*/
//beter om dit via "WHILE" te doen dan blijft het eindeloos doorgaan tot de juiste value ingegeven is





