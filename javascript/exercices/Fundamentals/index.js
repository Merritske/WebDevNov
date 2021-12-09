/*let name = prompt("What is the name of Javascript?")
if(name == "ECMAscript"){
    console.log("That's correct")
}else {
    console.log("you don't know? ECMAscript")
}*/

/*let num = prompt("give a number")
if(num > 0){
    alert("1")
}else if (num < 0){
alert("-1")
}else {
    alert ("0")
}*/

/*let age = 12;
if (!(age < 14 && age > 90)){
    console.log(age)
}*/

/*
let login = prompt("give your login")
if(login == "Admin") {
    const passW = prompt("Give password")
    if(passW == "TheMaster"){
        alert("Welcome")
    }else if(passW == "" || escape) {
alert("wrong password")
    }else{alert("Canceled")}
}else if(login =="" || login == null){ 
    alert("cancelled")  
}else{
alert("I don't know you")
}
*/

/*
for (let i = 2;i <= 10; i++){
    if (i%2 !== 0) continue;
        alert(i) 
}
*/

/*
let i = 0
while (i < 3){
    console.log(`number ${i} !`);
    ++i
}
*/

/*
do{
    x= prompt("give a number")
}
while(x < 100)
*/

/*
let n = 10;
prime: for(let i = 2; i<= 10; i++){
for(let j = 2; j<i; j++ ){
if(i%j == 0) continue prime;
}console.log(i)
}
*/

/*
let browser = prompt("choose browser")
if(browser == "edge"){
    alert("you have got the Edge")
}else if(browser == "chrome" || browser == "Firefox" || browser == "Safari" || browser == "opera"){
    alert("ok, that is fine too")
}else {
    alert("we hope this page looks good")
}
*/
/*
let a = +prompt('a?', '')
switch(a){
    case 0: alert(0);
    break;
    case 1: alert(1);
    break;
    case 2:
        case 3:
            alert('2,3');
            break;
}
*/

//lijst tonen in HTML
/*const fruit =["banaan", "kiwi", "kers", "appel"];
let fruitLengte = fruit.length;
let text = "<ul>";
for(let i = 0; i < fruitLengte; i++){
    text += "<li>" + fruit[i] + "</li>";
}
text+= "</ul>"
document.getElementById("demo").innerHTML = text
//extra element toevoegen aan array -> wordt niet meer in lijst getoond
function myFunction(){fruit.push("Lemon");
;}
*/

//Maand tonen ipv indexnummer
/*
const months = ["januari","februari","maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
const d = new Date()
let month = months[d.getMonth()]
console.log(month) 
*/
/*
//OEFENING
function getRndInt(min,max){
    return Math.floor(Math.random()*(max-min))+min
}
*/
//oefening
// let volw;
// let age = (document.getElementById("age").innerHTML = function myFunction(age){
// if(isNaN == age){
//     return ("give a number")
// }else{
//     let volw >=18 ? "you can drink" : "you should be asleep"
// }
// } 
/*
function myFunction() {
    let voteable;
    let age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
      voteable = "Input is not a number";
    } else {
      voteable = (age < 18) ? "Too young" : "Old enough";
    }
    document.getElementById("demo").innerHTML = voteable + " to vote";
  }
//oefening
  let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;

 let num1 = +prompt("give a number","")
let num2 = +prompt("give a number","")
let result = num1 +num2
console.log(result)
*/
/*
//exercice repeat till it's a number
function readNumber(){
  let num;
  do{ 
    num = +prompt("Give a number",0) 
  } while (!isFinite(num));
  if (num ===null || num === '')
  return null;
  return num

}
console.log(`read ${readNumber()}`)
*/
//random number from min to max (max niet inbegrepen)
// function random(min, max){
//  return min + Math.random()*(max-min) 
// }
// alert (random(1,5))
//random integer number from min to max (max inbegrepen)
function random(min,max){
  return min + Math.random() * (max-min+1)
}
alert (Math.round(random(1,5)))




