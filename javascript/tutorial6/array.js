/*
toString
join
pop
push
*/
/*
var myBooks =["book1", "book2", "book3", "book4", "book5"]
var result  ;

//TOSTRING
result = myBooks.toString()

//PUSH method -> insert new item in array
myBooks.push("book6") //insert new array item

//POP method
myBooks.pop() //zonder value, verwijdert het het laatste item
result = myBooks

//JOIN method -> om het geen array meer te laten zijn maar een string

result = myBooks.join("") //book1book2book3
result = myBooks.join(" and ") //book1 and book2 and ...

//SHIFT method
myBooks.shift() //verwijdert eerste item van array
result = myBooks

//SLICE method
result = myBooks.slice(0,2); //geeft eerste en tweede, 2 is derde item wordt niet meegerekend
result = myBooks.slice(3,myBooks.length) //geeft vanaf item 3 tot het einde van de array alle items

//CONCAT samenvoegen 2 arrays
var n1 = [1, 2, 3, 4,5, 6, 7 ]
var n2 = [8, 9]
result = n1.concat(n2)
// of :// result = n1.concat([8,9]) // geeft zelfde resultaat

var names = ["khaled", "Lisa","Joan", "Jos"]
result = names.splice(2,1) //geeft naam die verwijderd wordt

result = names.sort()//wordt in alfabetische volgorde gezet
var randomNumbers = [55,658,498,25,33,125,458,22]
result = randomNumbers.sort() //bekijkt de nummers als strings
result = randomNumbers.sort(function(a,b){return(a-b)}) //sorteert ze van klein naar groot
result = randomNumbers.sort(function(a,b){return(b-a)}) //sorteert ze van groot naar klein
console.log(result);


//FOR EACH
randomNumbers.forEach(function(num){
    console.log(num)
}) //gebruikt elk item van de array om een functie op uit te voeren -> elk item wordt apart getoond
randomNumbers.forEach(function(num){
    num*=2 // doet *2
    num+=5 //doet +5
    console.log(num) //toont originele + nieuwe *2 en +5
})

var names = ["Jack","Mike","Jos"];
var ulList = document.getElementById("nameList")
names.forEach(function(x){
    console.log(x) //acces ulList
    ulList.innerHTML += `<li> ${x} </li>`
})
var names = ["Jack","Mike","Jos"];
var ulList = document.getElementById("nameList")
names.forEach(function(x,i){
    console.log(x) //acces ulList
    ulList.innerHTML += `<li> ${x} </li>`
})


 Kijken bij KHALED
//example
var toDoList = [];
var input = document.getElementById("inputField");
var button = document.getElementById("btn")

button.addEventListener("click",function(e){
    e.preventDefault()
})
toDoList.push("inputField")
document.getElementById("passExam")
.........


//SOME method
var myArrayList = [1,2,3,4,5,6]
result = myArrayList.some(function(n){
    return n>5
}) //als één van de items matches with the test-> true

var randomNumbers = [25,63,86,1,94,55,31,8]
var userGuess= 8;
var guess = randomNumbers.some(function(n){
    return n===userGuess
})
guess ? console.log("you won") : console.log("you loose, try again")
console.log(result)


//EVERY -> als ze allemaal pass the test(= value >=44) ->true
let number = [ 33,44,55,66,77]
result = number.every(function(value){
    return value === 77 || value === 33
})

//MAP 
result =number.map(function(val){
    return val
})

//FILTER => to get specific data
result = number.filter(function(val){
    return val >= 66
})

var student =[{
    id:1,
    fName:"Joe",
    course: 'Java'
},
{
    id:1,
    fName:"Jos",
    course: 'Java',
},
{
    id:1,
    fName:"Jack",
    course: 'Phython',
}]

result = student.filter(function(x){
    return x.course ==="Java"
})

var student =[{
    id:1,
    fName:"Joe",
    course: 'Java',
    score : 45,
},
{
    id:1,
    fName:"Jos",
    course: 'Java',
    score: 55,
},
{
    id:1,
    fName:"Jack",
    course: 'Phython',
    score:70,
}]

result = student.filter(function(x){ 
    return x.course ==="Jalsa"
})//als de cursus niet bestaat
result != 0 ? console.log(result):console.log("Not found") 

function findWhoPassedExam(param){ //dynamic om te kunnen gebruiken voor andere arrays
    //filter data
    let result = param.filter(function(value){
       return value.score >=50 //return if student has score >=50
    })
 return result //new array list is created here
  
}
result = findWhoPassedExam(student)



//INCLUDES METHOD geeft true or false

var myNum = [ 3,2,5,3,5,4,7,9,66,55,885]
//result = myNum.includes() //geeft true or false
result =""
function isMyNumExists(number){
    let result = myNum.includes(number)
    if(result){
        console.log("this is in array")
    }else{
        console.log("This is not in array")
    }
}
isMyNumExists(5)
console.log(result)


//REVERSE Method
result = myNum.reverse() //draait de volgorde van de array om
*/

//EXAMPLE
var student = [
    {
        name: "Lisa",
        score: 5,
    },
    {
        name: "Jos",
        score: 8,
    },
    {
        name: "Karl",
        score: 2,
    },
    {
        name: "Maria",
        score: 3,
    },
    {
        name: "Jack",
        score: 10,
    },
    {
        name: "Tony",
        score : 4
    }

]
//filter data
function whoPassed(param){
    let result = param.filter(function(val){
        return val.score >= 5
    })
    return result
    
}
result = whoPassed(student)
console.log(result)
/*
//var list = function(val){
student.forEach(function(x){ //student is al in result in vorige gezet "result = whoPassed(student)" dus je kan direct result gebruiken
console.log(x)
passExam.innerHTML = whoPassed
})
}*/

result.forEach(function(x){
    console.log(x)
    document.getElementById("nameList")
    .innerHTML += `<li>  ${x.name} ${x.score}</li>`
})
