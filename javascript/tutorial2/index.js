var webdevnov = 1
var webdevnov1 = 20
//console.log(webdevnov)
//console.log(webdevnov1)

var smartphone = "samsung" //declaration of a variable
var smartphone = "apple" //re-declare with different value
smartphone = 'android' //update

//var type of variable can be updated and re-declared

//const let
//const variable

const firstName = "Jack"
//redeclaration
//const firstName = "Mike" Uncaught SyntaxError: redeclaration of const firstNameindex.js:17:6note: Previously declared at line 15, column 6

//update
//firstName ="Rik" uncaught TypeError: invalid assignment to const 'firstName'
//console.log(firstName)

//let variable
let companyName="intecBrussel"
//re-declaration
//let companyName = "Microsoft" Uncaught SyntaxError: redeclaration of let companyName

//update
companyName = "Apple"
//let variables can be updated
//console.log(companyName)

/* var variable
can be re-declaration or update
    let variable
can not be re-declared but can be updated
    const variable
can not be re-declared or updated */

let myMessage; //variable without value, undefined
myMessage= "hello World"
//console.log(myMessage)

//let 2company = "intec" Uncaught SyntaxError: identifier starts immediately after numeric literal
//let %company= 2;  Uncaught SyntaxError: invalid assignment left-hand side
//let company Name= "hello" Uncaught SyntaxError: unexpected token: identifier
let _companyName = "hello"
let company_Name = "hello1"
//let company-name= 5 Uncaught SyntaxError: unexpected token: '-'
let company1 = "apple"
//let company-1 = "kaka" Uncaught SyntaxError: unexpected token: '-'
let company_1 = "micrsoft"

//nummers als value
var number1=10;
var number2=2;
// "=" equal to
var result = number1 + number2
result = number1 - number2
//string as value
var str1 = "intec"
var str2 = "Brussel"

result = str1 + str2
result = str1 + number2 //string (text)

//operators
var _number1 = 9
var _number2 = 2
//multiplication operator "*"
result = _number1 * _number2
//division operator "/"
result = _number1 / _number2

//calculation netto-salary
var mySalary = 2500;
var taxpercent = 20;
var tax = mySalary * taxpercent /100;
var result = mySalary - tax

// increment operator "++"
//_number1++

//decrement operator "--"
//_number1-- 
//als _number1 nieuwe value heeft gekregen hierboven, zal het de nieuwe value nemen
//result=_number1


let x =(10*3) + (3+3)
console.log(x)


var a = 10; //10=10+10
a=a+a //20
a=a*2 //20*2=40
console.log("a result", a)

//power -> tot de zoveelste macht in dit geval tot de 2de macht
result =Math.pow(_number1,2)


//typeof string 
var result;
result = "hello World";
//typeof number
result = 10;

//typeof boolean true or false
console.log(1==1) //is 1=1 true?
console.log(1==2)

result = "string" + 4 // typeof string
result = 5; //typeof number
result= "5" + 5 //typeof string uitkomst 55
result = 5+5; //number 
result = 5 + "5" //string maar uitkomst zal 55 zijn

result = 200.5 //decimal
result= 2e5; 


//ARRAY
const myDB = ["Atol", "Lucy", 'Louis', "Sameer", "Fatema", '5', 5,_number1, false] //array-object
myDB[0]="Romeo" // array-object aanpassen -> [0]is de eerste

//OBJECT
let student ={
name:'Romeo',
lastname:"Attol",
age : 29,
isstudent:true,
scores:[70,80,100]
}



console.log("This is object", student)
console.log(myDB);
console.log("==>RESULT", typeof myDB)
