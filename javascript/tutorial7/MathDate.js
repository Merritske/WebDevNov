/* selecteren nested in array

let nestedArray = [1,2,3,4,5,[6,7],[8,9,10]]
console.log(nestedArray[5][0])

let nestedComplex = [1,2,3,[4,5,[6,7,8,9]]]
console.log(nestedComplex[3][2][2])

selecteren object in array
let student = [
    {
        name: "okflznf",
        adres: "kjgkelr",
        street: "kgorgg",
    },
    {
        name: "okflznf",
        adres: "kjgkelr",
        street: "jkgifezg"
    },
    {
        name: "okflznf",
        adres: "kjgkelr",
        street:"jhgroao"
    },
]
 student.forEach(user => { //function = arrow 
    //console.log(user.name)
    let response = `Street: ${user.street} ` //object targetten in array
    console.log("-----------------")
    console.log(response)
});

let company = "intecBrussel"
for(let x=0; x<company.length;x++)
{
    console.log(company[x])
}



//DATE OBJECTS
var result;
var date = new Date() //=object
result = new Date()

//get year
result = date.getFullYear()
//get current month
result = date.getMonth()

//to Local String
let options = {weekday:'short', year:'numeric',month:'long',day:'numeric'}
result = date.toLocaleString('nl-BE',options)
//month : numeric or long - weekday: short or numeric
//seconds, min, hours
result = date.getSeconds()
result = date.getHours()
result = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

//realtime
setInterval(function(){
    console.log('hello world')
}, 1000) //toont elke seconde 'hello world'

function getRealTime(){
    var dateObj = new Date();
    let getTime = `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`
  document.getElementById('time').innerHTML = getTime
    console.log(getTime)
}
setInterval(function(){
    console.log(getRealTime())
},1000)
*/
//MATH object

var result;

//PI
result = Math.PI

//ROUND()
result = Math.round(5.4) //-> 5
result = Math.round(5.6) // -> 6
result = Math.round(2550.545) // -> 2551

//POWER method()
result = Math.pow(8,2) // 64
result = Math.pow(5,2) //25

//SQUARE methode
result = Math.sqrt(64) // 8

//sinus en cosinus
result = Math.sin(90*Math.PI/180); //1
result = Math.cos(0*Math.PI/180); //1

//MAX() - MIN()
result = Math.max(3,6,5,2,7,9,25) // grootste is 25
result = Math.min(3,6,5,2,7,9,25) // kleinste 2

//RANDOM()
result = Math.random() //geeft een random getal tussen 0 en 1 (1not incuded)
result = (Math.random()* 10)+1 //geeft getal van 1 tot 10 met komma's => startnummer = +1
result = (Math.round(Math.random()*10)) //integer getallen van 0 tot 9
result = Math.round(Math.random()*100)+1 //integer tussen 1-100
result = Math.round(Math.random()*10)+5 // van 5 tot 15

function getInt(min,max){
    return Math.round(Math.random()*(max-min))+min
}
result = getInt(20,100)

let names = ["Jo", "Jos", "Mike"]
/*result = getInt(1,100)
let getRange = getInt(0,3)
console.log(getRange)
result = names[getRange]
let guessNum = 2
guessNum === getRange ? console.log("correct"): console.log("incorrect")
*/

result =Math.random()
result = names[getInt(0,2)] //random een naam tonen

console.log(result)


