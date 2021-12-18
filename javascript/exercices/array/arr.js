// const students = [
//   {
//     name : "aaaaa",
//     adres : {
//       straat : "bbaab",
//       nr : "7",
//       zip : "2220",
//       stad : "jakaka",
//   }, telefoon : "455868556",
//   geboortedatum : "25 - 2 - 2005",},
//   {
//     name : "abbbbba",
//     adres : {
//       straat : "aabbbb",
//       nr : "25",
//       zip : "2220",
//       stad : "Totot",
//   }, telefoon : "45589999",
//   geboortedatum : "27 - 2 - 2005",},
//   {
//     name : "cccca",
//     adres : {
//       straat : "cpakfb",
//       nr : "5",
//       zip : "2220",
//       stad : "jamaaf",
//   }, telefoon : "8856956",
//   geboortedatum : "25 - 2 - 2005",},
//   {
//     name : "adddda",
//     adres : {
//       straat : "ahioarabb",
//       nr : "8",
//       zip : "2220",
//       stad : "jpzmgreeho",
//   }, telefoon : "5468856",
//   geboortedatum : "25 - 2 - 2005",},
  
// ]
// function ik(naam){
//   let result = naam.filter(function(a){
//     return a.name =="adddda"
//   })
//   return result
// }
//  console.log(ik)


// const styles = ["Jazz","Blues"]
// styles.push("Rock-n-Roll")
// styles[1] = "Classics"
// styles.shift()
// styles.unshift("Rap","Reggae")
// console.log(styles)

// function sumInput(){ //NIET JUIST
//   let numbers =[5]
//   while(true){
//     let value = prompt("give a number",0)
//   if (value == "" || value == null)
//  break; 
//  numbers.push(+value)

// let sum = 0;
// for(let number of numbers){
//   sum += number
// }
//  return sum
// }
// }
// console.log(sumInput())

//EXERCICE FUNCTION
x = sumAll(1, 123, 500, 115,44, 88)
function sumAll(){
    let sum = 0;
    for(let i = 0; i < arguments.length ; i++){
        sum += arguments[i]
    } return sum
}
console.log(sumAll(x))

x = findMax(1, 123, 500, 115,44, 88)
function findMax(){
    let max = 0;
    for(let i = 0 ; i< arguments.length; i++){
        if(arguments[i]>max){
            max = arguments[i]
        } 
    } return max
}
console.log(findMax(x))

//This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
// The variable add is assigned to the return value of a self-invoking function.
// The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  add();
  add();
  add();
  
  // the counter is now 3
