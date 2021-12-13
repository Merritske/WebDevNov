//SWITCH

// switch(condition){
//     case 1:
//         //action
//         break;
//     case 2:
//         //run action    
//         break;
// }

// switch (90) {
//     case 1:
//         console.log('incorrect');
//         break;
//     case 50:
//         console.log('incorrect');
//         break;
//     case 90:
//         console.log('correct')
//         break;
//     case 91:
//         console.log('incorrect');
//         break;
//     default:  //als geen enkele van de cases voldoen aan de condition vb40 ->default
//         console.log('default')
// }

// switch ("intecbrussel") {
//     case 'microsoft':
//         console.log("microsoft");
//         break;
//     case 'IBM':
//         console.log(IBM);
//         break;
//     case 'intecbrussel':
//         console.log('intecbrussel');
//         break;
//     default:
//         console.log('default')
// }

// var secret = 1;
// switch (secret) {
//     case 1:
//         console.log(secret) //zal 1 tonen
//         break;
//     case 5:
//         console.log(secret)
//         break;
//     default:
//         console.log('default')
// }

let today = new Date().getDay() //1 = maandag

console.log(today)
switch (today) {
    case 0:
        console.log("zondag");
        break;
    case 1:
        console.log("maandag");
        break;
    case 2:
        console.log("dinsdag");
        break;
    case 3:
        console.log("woensdag");
        break;
    case 4:
        console.log("donderdag");
        break;
    case 5:
        console.log("vrijdag");
        break;
    case 6:
        console.log("zaterdag")
        break;
}


