//do while

// do{
//     //action
// }while(condition)

// var i =0
// // do{
// //     i++
// //     console.log("hello",i)
// // }while(i>9)

// //zorg dat je altijd i++ doet anders infinite loop
// do{
//     console.log(i)
//     i++
// }while(i<0)
// //do while zal 1 keer action doen onafhankelijk van de condition
// // while niet
// while(i<0){
//     console.log(i,'hello')
//     i++
// }

//var randomNumber;
// do{
// randomNumber = Math.floor(Math.random()*100)
// console.log(randomNumber)
// }while(randomNumber == 50)

// var number
// var sum = 0
// do{
// number= Number(prompt('enter number'))
// sum+=number
// console.log(sum)
// }while(number!=0)


var password = "123456"
var rateLimit = 3; //hoeveel keer je een verkeerd password mag geven

while(rateLimit>0){
    var askPassword = prompt("enter password");
    rateLimit--;
    if(askPassword == password){
        console.log("welcome user")
        break;
    }else{
        console.log(`You have ${rateLimit} attempts left`)
    }
}




