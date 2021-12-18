//FOR LOOP

// for(let i = 0; i <= 5; i++){
//     console.log("Hello",i)
// }

// let count = 0
// for(count;count<2;count++){
//     console.log("hello", count)
// }

//loop for all even numbers
// for(let i =1; i<50; i++){
//   if(i%2 === 0){  //even nummers
//       console.log(i)
//   }
// }

// //dynamic -> num kan veranderd worden
// function printEvenNumber(num){
//     for(let i =1; i<num; i++){
//         if(i%2 === 0){ 
//             console.log(i)
//         }
//       }
// }
// printEvenNumber(10)

//infinite loop
// for(let i = 0; i<50 ; i--){
//     console.log(i)
// }

// for(let i = 10; i>=0;i--){
//     console.log("hello",i)
// }

// let x, y;
// for(x=1,y=50;
//     x<=10 && y>=50; x++,y--){
//         console.log(`x:${x}\ny:${y}`)
//     }


//nested loop
// for(x=9;x<=10;x++){
//     for(y=1;y<=10;y++){ //elke keer zal deze loop doorlopen worden voordat terug naar de vorige loop gegaan wordt
//         let result = `${x} + ${y} = ${x+y}`
//        console.log(result)
//     }
// }

// let arrayList = ["ali", "veli", "deli"];
// for(let x = 0; x<arrayList.length;x++){
//     console.log(x)
//     console.log(arrayList[x])
// }

// let posts = [
//     {
//         userId:1,
//         id:1,
//         title:'boss',
//     },
//     {
//         userId:2,
//         id:2,
//         title:'member',
//     },
//     {
//         userId:3,
//         id:1,
//         title:'volger',
//     },
// ]

// for(let x=0; x<posts.length;x++){
//     let obj =posts[x]
//     console.log(obj.title)
// }

//factor : 4! = 4*3*2*1
// 4*3 = 12 
// 12*2 = 24
// 24 *1 = 24

// let answer = 1;
// for(let x = 4; x>=1; x--){
//     answer = answer * x
//     //1 * 4
//     //4 * 3
//     //12 * 2
//     //24 * 1
//     console.log(answer, 'in for')
// }
// console.log(answer, 'global scope')

//  function getFactrial(n){
// let answer = 1;
// for( let x = n; x>= 1 ; x--){
//     answer = answer * x

// }console.log(answer)
//  }
// getFactrial(5)


// let count = 0;
// for(let i=0;i<100; i++){
//     console.log(i)
//     count = count + i //telt alles bij elkaar van 0 tot 100 = 4950
//     count = count -1 // 4850 => 1 keer minder de loop doen = 100 omdat i nu 100 is
//     count = count -2 // 4650 => 3 keer minder de loop doen want al 1 keer minder de vorige + 2 keer deze keer
// }
// console.log(count)

//EXERCICE
let users = [
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

    //oplossing ATTILA
// for(let i=0; i<users.length;i++){
//     console.log(i)
//     let obj = users[i]
//     console.log(users[i])
//     console.log(`
//     Fullname: ${obj.name}
//     email : ${obj.email}
//     address: ${obj.address.street}, ${obj.address.zipcode}`)
// }

//MIJN OPLOSSING
//   for(let x = 0; x < users.length; x++){
//       let obj = users[x]

//       console.log(`${obj.name} /\n ${obj.email} /\n ${obj.address.street} ${obj.address.suite}  ${obj.address.city} ${obj.address.zipcode}`)
//        console.log("-------------------------------") 
//      }  
let x = document.getElementById("input")
function getUser(user) {

       for (let x = 0; x < users.length; x++) {

        let obj = users[x]
document.querySelector("tbody").innerHTML +=  `<tr><td>${obj.name} </td>/ <td> ${obj.email} </td></tr>/ <tr><td>${obj.address.street} ${obj.address.suite} <br> ${obj.address.city} ${obj.address.zipcode}</td></tr>`
        if (obj.id === user) {
            console.log(`${obj.name} / ${obj.email} / ${obj.address.street} ${obj.address.suite}  ${obj.address.city} ${obj.address.zipcode}`)
      return (`${obj.name} / ${obj.email} / ${obj.address.street} ${obj.address.suite}  ${obj.address.city} ${obj.address.zipcode}`) 
  
}
    } console.log('hello')
   
}
getUser(1)
//document.getElementById('demo').innerHTML = getUser(1)
