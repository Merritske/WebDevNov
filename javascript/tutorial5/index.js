//example function
/*function funcName (){

}
*/
/*
function funcName1(param1,param2,param3){
    console.log(param1,param2,param3)
}
funcName1('string', 44, [1,2,3])
*/
/*
function sumOfNumbers(){
    var a = 5
return a
}console.log(sumOfNumbers())
*/
/*
function sumOfNumbers(){
    console.log("before return keyword")
    return 5+5
    console.log("after return keyword")//wordt niet getoond
}
*/
/*
var number1 = 10
var number2 = 20
*/
/*function sumofnum(){
    return number1 + number2
}*/

/*function sumofnum(p1,p2){
    return p1+p2
}
console.log(sumofnum(50,40))
50 wordt aan p1 toegewezen, 40 wordt aan p2 toegewezen dus kan de bewerking in de return gedaan worden

console.log(sumofnum(number1,number2))
*/
/*
function sayMyName(username){
    return "hello my name is " + username
}
console.log(sayMyName('root')) //klasieke manier om variables te gebruiken
*/
/*
function sayMyName(username){
    return `hello your name is ${username}` //backtics gebruiken om dollar teken te kunnen gebruiken ``
}
console.log(sayMyName('root')) // je kan alles in function zetten
*/
/*
var myStudent= ["Jack", "Mike", "Jos"]
function getStudentsName(getData){
// getDat = [ "Jack", "Mike"], "Jos"]
getData[0] = "Khaled"
    console.log(getData[0])
}
getStudentsName(myStudent)
console.log(myStudent) // Jack is vervangen door Khaled 
*/
/*
function layer1(number1){
    console.log(number1,"this is from layer1 function")

    function layer2(){ //nested function is alleen in de functie beschikbaar daarom layer2 in functionlayer1 zetten
        console.log(number1+1, "layer2 function")
    }
    layer2() //moet je erin zetten om te kunnen werken 
} 
layer1(5) //waarde layer1 = number1
*/
/*
var myName= 'root'
function keeper1(param){
    return param; //param wordt gebruikt om te kunnen veranderen, veranderen gebeurt op het einde 
}
function keeper2(param){
    return `your name is ${param}`
}
function printService(param){
    console.log(param)
}
printService(keeper2(keeper1(myName))) //keeper1 stuurt value naar keeper2 = 'root', keeper2 stuurt value naar printService = 'your name is root', printService is console.log. Hier wordt param vervangen door myName
*/
/*
var myStudent = []
function addStudent(name){
   return myStudent.push(name)
}
addStudent('Khaled')
addStudent('Ender') namen worden in de arry van myStudent gezet
addStudent('Romeo')
console.log(myStudent)
*/
/*
var myStudent = []
function addStudent(student){
    return myStudent.push(student) //push is om dingen toe te voegen aan array
}
const student1 ={ //object
    name: "Maria",
    age: 28
}
const student2 = { //object
name: "Jos",
age: 28,
}
addStudent(student1)
addStudent(student2)
console.log(myStudent)
*/

//exercice

//function params : brutosalary, taxpercentage
//math calc here

/*function netto(bruto,tax){ 
    var calc = bruto - (bruto*tax)/100 //variabele bepalen =calc, nodig om de berekening te doen
    return calc //return, dus geeft het resultaat van de berekening aan het programma
}
console.log(netto(2000,25)) //getallen worden pas hier ingegeven ipv bruto en tax
*/

//LOCAL VARIABLES AND GLOBAL VARIABLES

//Local variable
/*function getNumber(){
var companyName = "intecBrussel" //local variabele
console.log(companyName) 
}
var companyName= "intecBrussel" //global variable kan je overal gebruiken waar je deze nodig hebt
function getNumber(){
    console.log(companyName)
}
*/
/*
const auto = {
a: function(){
    console.log("hello")
},
b: function(){
    console.log("hello again")
},
getElementById : function(){
    Console.log("getelementmethod")
},
}

auto.getElementById()
auto.a
VOORBEELD VAN DE MOGELIJKHEDEN VAN EEN OBJECT
const object = {
    a:1,  property=a value = 1
    b: string-data,
    c:true,
    d:[1,2,3],
    e:{ id:1, title:'this is title'},
    f:function(){console.log("hello function")}
}
object.a() //target a in object
*/
const result = document.getElementById("result")

const autoController = {
    turnleft: function(){
        result.innerHTML = "Turn left"
    },
    turnRight: function (){result.innerHTML = "Turn right"},
    forward: function(){result.innerHTML = "Go forward"},
    backward: function(){result.innerHTML = "Go backwards"}
}
//autoController.backward() als test

