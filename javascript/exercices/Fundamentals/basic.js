//BASIC 1. current day and time
// let x = new Date()
// let y = x.getDay()
// let dayList = ["zondag","maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
// console.log("Today is : " + dayList[y] + ".")
// //optie als de hele datum gegeven moet worden
// // let y = new Date()
// // let options = {weekday:'short', year:'numeric',month:'long',day:'numeric'}
// // result = y.toLocaleString('nl-BE',options)
// let a = `${x.getHours()} : ${x.getMinutes()} :${x.getSeconds()}`
// result = (`The current time is : ${a}`)

//3. current date
// let x = new Date()
// result = `${x.getDay()} - ${x.getMonth()+1} - ${x.getFullYear()}`

//5.
// let x = "w3resource"
// let txt =""
// for (let y of x){txt += y + "<br>"}
// result = txt

//FUNDAMENTAL PART 1
//1.
// let x = {age:25, adres:"Mech" , name: "An"}
// let y = {age: 30, adres:"Berz", name:"An"}
// // for(let z in x){ //OPLOSSING NIET JUIST
// //     return x[z]
// //    // console.log(x[z])//shows values of object x
// //    //console.log(z) //shows property names of object x
// // }
// //console.log(x.age)//test
// //console.log(y.age)
//   if(x.age === y.age){
//        console.log("true")

//     }else console.log("false")
//     if(x.adres === y.adres){
//         console.log("true")
 
//      }else console.log("false")
//      if(x.name === y.name){
//         console.log("true")
 
//      }else console.log("false")
// //oplossing van de site
//      const matches = (obj, source) =>
//      Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
//    console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); 
//    console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); 
//    console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); 


//2.
//kan ik nog niet maken: 
//createElement/getSelection/setAttribute/appendChild

//3.
// let x = ("love, play, sing, enjoy")
// //let y = new Array(x) //["love, play, sing, enjoy"]
// let y = new Array(x) + ", " + new Array(x) //love, play, sing, enjoy, love, play, sing, enjoy
//  console.log(y)

//4.

//console.log(result)

