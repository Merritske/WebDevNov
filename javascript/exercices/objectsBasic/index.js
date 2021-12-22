//integer properties tov niet integer en de rangschikking
// let codes = {
//     "+49" : "Germany",
//     "+32" : "Belgium",
//     "+44" : "Great-Brittanie",
//     "+1" : "USA",
// }
// for(let code in codes){
//     console.log(+code)
// }
//andere rangschikking dan hierboven
/*let codes = {
    "49" : "Germany",
    "32" : "Belgium",
    "44" : "Great-Brittanie",
    "1" : "USA",
}
for(let code in codes){
    console.log(code)
}*/


// //inhoud van een object tonen
// let user= {
//     name: "John",
//     surname : "Smith",
//     name : "Pete",
// }
// console.log(user)


// //optellen gegevens in object
// let salaries = {
//     John : 100,
//     Ann: 160,
//     Pete : 130,
//     Lies: 200,
// }
// let sum = 0;
// for(let key in salaries){
//     sum +=salaries[key];
// }
// console.log(sum)


//om getallen te vermenigvuldigen, ik weet niet of dit wel klopt
/*let menu = {
    width : 200,
    height : 300,
    title : "My Menu"
}
function multiplyNumber(obj){
    for(let key in obj){
if (typeof obj[key] == "number"){
    obj[key] *= 2;
}
}
}
*/

//create an object calculator with 3 methods : read(), sum(), mul()
/*let calculator = {
    read (){
        this.a = +prompt("a?",0)
        this.b = +prompt("b?",0)
    },
    sum(){
return this.a + this.b
    },
    mul (){
        return this.a* this.b
    }
}
calculator.read()
alert(calculator.sum())
alert(calculator.mul())
*/

// //ladder object, na een deel actions het resultaat weten
// let ladder = {
//     step : 0,
//     up(){
//         this.step++;
//         return this;
//     },
//     down(){
//         this.step--;
//         return this
//     },
//     showStep: function(){
//         console.log(this.step);
//         return this;
//     }
// }
// ladder.up().up().down().up().up().showStep(); 
// //3 "showStep()" niet vergeten anders wordt er niets getoond


// //ingegeven getallen optellen
// function Accumulator(startingvalue){
//     this.value = startingvalue;
//     this.read = function (){
//         this.value += +prompt("how much to add",0)
//     }
// }

// let accumulator = new Accumulator(0)
// accumulator.read()
// accumulator.read()
// alert(accumulator.value)


// //input veld en naam eronder zetten nadat op de knop geklikt is
// let input = document.getElementById("input")
// let btn = document.getElementById("btn")
// function displayInput(){
//         document.getElementById("demo").innerHTML = input.value
//     return input
// }


// //values zoeken in object
// function phoneticLookup(val) {
//     let result = "";
  
//     // Only change code below this line
//     const lookup = {
//       "alpha":"Adams",
//       "bravo": "Boston",
//       "charlie":"Chicago", 
//       "delta":"Denver",
//       "echo":"Easy", 
//       "foxtrot":"Frank"
//     }
//   result = lookup[val]
//     // Only change code above this line
//     return result;
//   }
  
//   console.log(phoneticLookup("charlie"));


// //records toevoegen
//   const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
  
//   // Only change code below this line
//   function updateRecords(records, id, prop, value) {
//    if (prop !== 'tracks' && value !== "") {
//       records[id][prop] = value;
//     } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
//       records[id][prop] = [value];
//     } else if (prop === "tracks" && value !== "") {
//       records[id][prop].push(value);
//     } else if (value === "") {
//       delete records[id][prop];
//     }
//     return records;
//   }
  
//   updateRecords(recordCollection, 5439, 'artist', 'ABBA');


// //FOR LOOP om getallen in array te zette
// const myArray = [];
// for(let i = 1; i<= 5; i++){
//   myArray.push(i)
// }


// //alle getallen van een array optellen
// const myArr = [2, 3, 4, 5, 6];
// let total = 0
// for(let i = 0; i< myArr.length; i ++){
//   total += myArr[i]
// }



// // Replace Loops using Recursion
// // Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

// //   function multiply(arr, n) {
// //     let product = 1;
// //     for (let i = 0; i < n; i++) {
// //       product *= arr[i];
// //     }
// //     return product;
// //   }
// // However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

// //   function multiply(arr, n) {
// //     if (n <= 0) {
// //       return 1;
// //     } else {
// //       return multiply(arr, n - 1) * arr[n - 1];
// //     }
// //   }
// // //EXERCICE 1
// // function sum(arr, n) {
// //   if(n <= 0){
// //     return 0
// //   }else{
// //     return sum(arr, n-1) + arr[n-1]
// //   }
// //   }
// //EXERCICe 2
// function rangeOfNumbers(startNum, endNum) { 
//     if (endNum - startNum === 0) {
//      return [startNum];
//    } else {
//      var numbers = rangeOfNumbers(startNum, endNum - 1);
//      numbers.push(endNum);
//      return numbers;
//    }
//  };


// //Profile Lookup

// // Setup
// const contacts = [
//     {
//       firstName: "Akira",
//       lastName: "Laine",
//       number: "0543236543",
//       likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//       number: "0994372684",
//       likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//       firstName: "Sherlock",
//       lastName: "Holmes",
//       number: "0487345643",
//       likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//       firstName: "Kristian",
//       lastName: "Vos",
//       number: "unknown",
//       likes: ["JavaScript", "Gaming", "Foxes"],
//     },
//   ];
  
//   function lookUpProfile(name, prop) {

//     for (let i = 0; i < contacts.length; i++) {
//       if (contacts[i].firstName === name) {
//         if (prop in contacts[i]) {
//           return contacts[i][prop];
//         } else {
//           return "No such property";
//         }
//       }
//     }
//     return "No such contact";
//   }
  
//   lookUpProfile("Akira", "likes");


// // RANDOM NUMBERS WITH MAX EN MIN(range) formule: (myMax-myMin+1))+myMin
// function randomRange(myMin, myMax) {
 
//     return Math.floor(Math.random()* (myMax-myMin+1))+myMin;
   
//   }




//   Use the Rest Parameter with Function Parameters
// In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

// Check out this code:

// function howMany(...args) {
//   return "You have passed " + args.length + " arguments.";//geeft het aantal elementen in array
// }
// console.log(howMany(0, 1, 2));
// console.log(howMany("string", null, [1, 2, 3], { }));
// The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..

// The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.

//EXERCICE
const sum = (...args) => { //alles wordt opgeteld
 
  return args.reduce((a, b) => a + b, 0);
} 

console.log(sum(2,3,5,3)) //13




///SPREAD OPERATOR
//VB 1
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1]; 
console.log(arr2);
//VB 2
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus)


//Use Destructuring Assignment to Extract Values from Objects
//VB 1
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {today, tomorrow}  = HIGH_TEMPERATURES; //geeft 77 en 80
//VB 2
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
//name would have a value of the string John Doe, and age would have the number 34.
//Here's an equivalent assignment statement using the ES6 destructuring syntax:
const { name, age } = user;

//VB 3
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
const {today:{low :lowToday , high: highToday}} = LOCAL_FORECAST

//VB destructering assignment + Spread operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a,b,...arr] = list
  return arr;
}
const arr = removeFirstTwo(source);

