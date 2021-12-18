//for loops

//for in loop : loops over properties of an object

// let people = [    // = array with objects
//     {
//         name: "Jack",
//         age: 20,
//     },
//     {
//         name: "Mike",
//         age: 23,
//     },
//     {
//         name: "koen",
//         age: 22,
//     },
//     {
//         name: "Joe",
//         age: 21,
//     }
// ]

// let i =0
// while(i<people.length){
//     console.log(people[i])
//     i++
// }

// for (singleobject in people) {
//     console.log(singleobject) //toont de indexnummers
// }

// for (singleobject in people) {
//     console.log(people[singleobject]) //toont de objecten van de array
// }

// for (singleobject in people) {
  
//     console.log(people[singleobject].age) //toont de leeftijd van de objects
// }
// for (singleobject in people) {
//     people[singleobject].age = 99 //verandert de leeftijd van elk object
//     people[singleobject].name = people[singleobject].name.toUpperCase()
//     console.log(people[singleobject]) //toont de objecten van de array
// }



// for of => werkt niet met object, wel met array 

// for(let person of people){
//     console.log(person, "for of")
// }

// let school = "intectbrussel"
// for(let letter of school){
//     console.log(letter) //alle letters onder elkaar
// }

// let student = {
//     id:1,
//     name: "Joe"
// }
// for(let val in student){
//     console.log(val) //property names = id, name
//     console.log(student[val]) //nu: 1, "Joe"
// }


//BREAK
// let password ="123456";
// let rateLimit = 3;

// while(rateLimit>0){
//     let askUser = prompt("enter password");
//     rateLimit --;
//     if(rateLimit ==0)break;{
//         // console.log("stop it")
//         // console.log(askUser)
//     }
//     if(askUser == password){
//         console.log("welcome")
//     }else{
//         console.log(`you have ${rateLimit}`)
//    break;
//     }
// }


//Anonym function
// (()=>{console.log("hello")})()
// (
//     ()=>{
//         console.log("hello")
//     }
// )();


//this

// let person = {
// first : "Joe",
// last: "Dats",
// age: 20,
// emal: "joe@joe.com",
// show: function(){
//     console.log(   //kan ook ${person.first} of ${this.first}
//         `Fulname : ${this.first} ${this.last} 
//         age : ${this.age}
//         email: ${this.emal}`
//     )
// }
// }

// person.show();

//this verwijst naar parent waar het inzit
//this kan ook in eventhandler zitten -> onclick

// (function(){
//     function doSomething(){
//         console.log("hello")
//     }document.querySelector('btn').onclick = doSomething
// })(); //button click en dan gebeurt er iets...functie in functie



//Arrow function : 4types

// let welcomeMess = ()=>"hello"

// welcomeMess = ()=>{
//     console.log( "keamek")
//     console.log("yoead")
// }
// welcomeMess = x => x //of (x)=> x
// welcomeMess = (x,y)=> x+y

// console.log(welcomeMess("this is arrow"))
// console.log(welcomeMess(7,5))

// let obj = { //arrow function in object werkt niet
//     name : 'test name',
//     printName: function (){console.log(this.name)
// }}
// obj.printName() //test name


//spread operator can be used in array en object

// let num1 =[1,2,3,4,5]
// let num2 = [6,7,8,9]
// let num3 = [...num1,...num2] //spread num1 en num2 in num3
// //num3 = [1,2,3,4,5,6,7,8,9]


// console.log(...num1) //komma's en [] zijn verdwenen => string geworden

// console.log(...num1,...num2) //1 2 3 4 5 6 7 8 9 
// console.log(...num3)

// let complexArray = [
//     {id:1},
//     true,
//     5,
//     "string",
//     function x(){}
// ]
// let result = [...complexArray,...num3]
// console.log(result) //array result


// //destructuring
// let data = [1,2,3,4,5, function(){console.log("hello")},true, "Jack",["nested"],[{id:1,title:"nested"}]]

// // console.log(data[6])
// // let arrayItem1 = data[0]
// // let arrayItem2 = data[1] //dit gebruiken we niet -> beter oplossing

// const [item1,item2,item3,item6, item7,item9, item10,item11] = data
// console.log(item1,item2,item3, item7,item9, item10,item11)


// const obj = {a:1,b:2,c:3,d:4,e:function(){console.log("helo")}}
// const{a,b,c,d,e} = obj
// console.log(a,b,c,d,e)



let users =[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    }]

    //extract certain data out of array and object
    //use a loop to go over all the items -> = for loop
//mijn oplossing
// for(let x in users){
// let obj = users[x]
// const {name,email} = obj
//     //console.log(users[x].name, " ", users[x].email)
// console.log(name, email)
// }

//Atilla's oplossing
//for(singleobj in users){
//console.log(singleobj)
//let obj = users[singleobj]
//console.log(obj)
//const {id,name, username,email,address:{street,city},phone,website,company:{name:_name}} = obj
//const {street} = address
//const {catchPhrase} = company //om item in object company te targetten
//console.log(catchPhrase)
//console.log(id,name, username,email,street,_name)
//console.log(Object.values(address)) //geeft alles met {} want is een object
//console.log(...Object.values(name))
//}

//company:{name:_name} je moet "name" een andere naam geven want name bestaat al

