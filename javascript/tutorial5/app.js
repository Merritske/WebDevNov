//var message = document.getElementById("message") //variabele bepalen om te linken aan html
//console.log("message") =>test
//message.innerHTML= "text has been changed" =>test
/*
function sayMyName(){
    message.innerHTML = "Text has been changed [function]" =>message is id in h1
}*/
//sayMyName() => dient om de code te starten, de tekst "hello world" wordt in de HTML vervangen door "text has been changed [function]"

//in HTML in <button onclick = "sayMyName()"> de functie wordt gestart de text wordt vervangen

/*var getUsername = document.getElementById("username")
//console.log(getUsername())
function sayMyName(){
    //console.log(getUsername.value) //value in input
    message.innerHTML = `Your username is ${getUsername.value}` //dynamisch, je kan nu in input iets zetten en dat zal veranderd worden op het scherm (message=h1) nadat je op de button geklikt hebt
}
*/

//variabelen bepalen van de dingen die je wil bewerken => id's uit html halen
/*
var number1 = document.getElementById("num1")
var number2 = document.getElementById("num2")
var getButton = document.getElementById("btn")
var result = document.getElementById("result")
//console.log(result) alles testen dat het juist getarget is
//define function
function doCalc(){
    //console.log("Hello test")
    var sumResult = Number(number1.value) + Number(number2.value) //value is default 0 moet niet perse in HTML bij in input gezet worden
   // console.log(sumResult)
    result.innerHTML = `Result is ${sumResult}` //"result" is de target in html dat moet aangepast worden
}
*/

//EXTRA OEFENING

var name1 = document.getElementById("name")
var lastName1 = document.getElementById("lastName")
var welcome1 = document.getElementById("welcome")
var wName1 = document.getElementById("wName")
//console.log(wName)
function importName(){
   // console.log("hello")
   var result = name1.value + lastName1.value
welcome1.innerHTML = `Welkom : ${result}`
}
