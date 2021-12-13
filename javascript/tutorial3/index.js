/*//comparison operators
var result;

// equal to operator ""=="" => bekijkt enkel de value
result = 1 == 1 //true
result = 1 == 2  //false
result = 1 == "1"  //kijkt enkel naar de value niet naar number of string dus true
result = 1 == "2" //false
result = "intec" == "intec" //true
result = "Intec" == "intec" //false
result = true == true //true
result = false == false //true
result = false == true //false
result = [] == [] //false
result = ["1"] == ["1"] //false -> arrays are independent and unique
result = {} == {} //false -> objects are independent and unique
result = null == null //true
result = undefined == undefined //true  
//undefined wordt getoond als er iets gedeclared is maar geen value heeft vb. var x; console.log(x) => undefined
result = null == undefined //true


//equal value and equal data type "===" bekijkt de value en het datatype en deze moeten allebei true zijn
result = 1 === 1 //true
result = 1 === "1" //false => value is hetzelfde maar datatype is niet hetzelfde : nummer en string
result = undefined === undefined //true
result = undefined === null //false
result = [] === [] //false => arrays are never equal
result = "intec" === "intec" //true
result = "Intec" === "intec" //false
result = true === true //true
result = false === false //true
result = true === false //false 

//vb
var isStudent = true
if(isStudent) {
    console.log("hello student")
}


//not equal to "!="
result = 1 != 1 //false
result = 1 != 2 //true
result = 1 != "1" //false
result = 1 !== "1" //true
result = "intec" != "intec" //false
result = "Intec" != "intec" //true
result = [] != [] //true
result = ["1"] != ["1"] //true
result = {} != {} //true
result = function () { } != function () { } //true

var myFunc = () => console.log('hello') //function
var myFunc1 = function () { console.log('hello') } //function
result = myFunc != myFunc1 //not equal -> true

//exercice
var a = 10
var b = "10"
result = a == b //true
result = a === b //false
result = a != b //false
result = a !== b //true
result = undefined == 0 //false 
result = undefined == null //true
result = undefined === null //false


//greater than operator ">"
result = 5 > 6 //false
result = 0 > 0 //false
result = -10 > 10 //false

//toepassing
var studentAge = 40
if(studentAge > 29){
    console.log("ok")
}


//less than operator "<"
result = 6 < 3 // false
result = 2.5 < 3 //true
result = true < false //false true = 1 false = 0
result = false < true //true


//greater than or equal to operator ">="
result = 5 >= 6 //false
result = 6 >= 6 //true
result = 6 >= "6" //true
result = true >= false //true
result = undefined >= null //false

//less than or equal to operator "<="
result = 10 <= 9 //false
result = 9 <= 10 //true
result = 9 <= "9" //true
result = null <= null //true 


///toepassingen
var myArr = [1, 2, 3, 4, 5]
var myArr1 = [1, 2, 3, 4, 5, 6]
result = myArr.length <= myArr1.length //true
//length tells how many items there are in an array
var studentList = ["x", "y", "a", "z"]
result = studentList.length //geeft het aantal studenten



//Logical operator

//AND operator "&&" => alle conditie moeten true zijn of resultaat is false
result = 11 > 10 && 9 < 8 //false
result = 10 < 9 && 1 == 1 //false
result = 1 == 1 && 10 > 9 //true
result = "" == "" && null == null //true  ""=empty string
result = "" == "" && null === undefined //false

//OR operator "||" => als één van de condities true dan is het resultaat true
result = 1 == 1 || 10 > 100 //true   =>true false =>true
result = 1 != 10 || 1 > 10 //true  => true false => true
result = 1 > 10 || 10 > 100 //false  => false false => false

//NOT operator "!" => geeft het tegenover gestelde resultaat
result = !(1 == 1) //false
result = !(1 > 10) //true
result = !((true == true) === (false == false)) //false
result = (true == true) === (false == false) //true


//ternary operator "?" "tekst 1" als true "tekst 2" als false
result = 1 == 1 ? 'yes' : 'no' //true -> yes
result = 10 < 1 ? "intec" : "Brussel" //false -> Brussel
result = "computer" === "computer" ? 'yes it is true' : 'It is not true' //true
result = "computer" === "laptop" ? 'yes it is true' : 'It is not true' //false

result = 1 === 1 ? (2 == 2 ? "ja" : "nee") : "false" //ja
result = 1 === 1 ? (2 == 3 ? "ja" : "nee") : "false"  //nee
result = isNaN(b) ? "it is not a number" : (userInput%2 ? "even" : "odd")


//oefening
  his age is under 18 years
is this person allowed to drink alcohol
if age is under 18 false = not allowed to drink
if age is higher than 18 true = allowed to drink 

var age = 17;
result = age >= 18 ? "You are allowed to drink alcohol" : "you are not allowed to drink alcohol"
var age = 41;
result = age >= 18 ? "You are allowed to drink alcohol" : "you are not allowed to drink alcohol"
const person =[{age:15},{age:10},{age:41}]
result = person[2].age >= 18 ? "You are allowed to drink alcohol" : "you are not allowed to drink alcohol"

var student = {

    age: 17
}

result = student.name != undefined ? (student.age >= 18 ? "he is allowed to drink alcohol" : "he is not allowed to drink alcohol") : "Student name does not exist" //student name does not exist

var student = {
    name: "Jack",
    age: 17
}
//console.log(student.name) = als test

result = student.name != undefined ? (student.age >= 18 ? "he is allowed to drink alcohol" : "he is not allowed to drink alcohol") : "Student name does not exist" //Jack, he is not allowed to drink

var student = {
    name: "Louis",
    age: 20
}
//console.log(student.name)

//result = student.name != undefined ? (student.age >= 18 ? "he is allowed to drink alcohol" : "he is not allowed to drink alcohol") : "Student name does not exist" //Louis, he is allowed to drink

*/


person = [
    {age: 31,
        adres: "Brussel",
        taal:"Nl",
    },
    {
    name: "Louis",
    age: 20,
    adres: "Brussel",
    taal: "Nl"
},
{
    name: "Jos",
    age: 18,
    adres: "Oostende",
    taal: "Nl"
},
{
    name: "Frans",
    age: 50,
    adres: "Oostende",
    taal: "Fr"
}]
result = person[2].name != undefined ? (person[2].age <= 50 ? (person[2].adres == "Oostende" ? "een visje eten" : "ketje") : "je bent te oud") : "what is your name?"

//result = "a" > "A"
console.log(result)

/*
//if else condition
if (1 === 1) {
    console.log("hello world")
}
if (person[0].name == "Louis") {
    console.log("true!!")
}
if (person[0].name == "Louis" && person[0].age >= 18) {
    console.log("true!!")
}

if (person[0].age >= 18 && person[0].age <= 30) {
    console.log("young man") //young man tussen 18 en 30
}
if (person[2].age >= 18 && person[2].age <= 30) {
    console.log("young man")
} else {
    console.log("old man")
}
*/