//OEFENINGEN VAN JAVASCRIPT.INFO
//PUT FIRST LETTER TO CAPITAL
// let x = "john"
// let y = x[0].toUpperCase();
// let xNew = x.replace(x[0],y)
// console.log(xNew) //John

//CHECK SPAM
// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();

//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
//   }

//   alert( checkSpam('buy ViAgRA now') );
//   alert( checkSpam('free xxxxx') );
//   alert( checkSpam("innocent rabbit") );

// let str = 'How are you doing today my love? Let\'s hang out together'
// function truncate(str, maxlength) {
//   return (str.length > maxlength) ? str.slice(0, maxlength - 1) + "...." : str;
// } console.log(truncate(str, 26))


// //array in object targetten
// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//   const failureItems = [];
//   for (let i = 0; i < arr.length; i++) {
//     failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
//   }
//   return failureItems;
// }

// const failuresList = makeList(result.failure);

// //Regular expressions
// let testStr = "freeCodeCamp";
// let testRegex = /Code/; //regex = regular expression
// testRegex.test(testStr);
// //The test method here returns true.

// //username controle
// // You need to check all the usernames in a database.Here are some simple rules that users have to follow when creating their username.

// // Usernames can only use alpha - numeric characters.

// // The only numbers in the username have to be at the end.There can be zero or more of them at the end.Username cannot start with the number.

// // Username letters can be lowercase and uppercase.

// // Usernames have to be at least two characters long.A two - character username can only use alphabet letters as characters.
// let username = "JackOfAllTrades";
// let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
// let result = userCheck.test(username);
// //
// let password = "abc123";
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// checkPass.test(password);

// "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// //The replace call would return the string Camp Code.
// let str = "one two three";
// let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
// let replaceText = "$3 $2 $1"; // uitkomst is three two one
// let result = str.replace(fixRegex, replaceText);



// //function voorbeelden
// function raiseToPower(b, e) {
//   return Math.pow(b, e);
// }
// let base = 2;
// let exp = 3;
// let power = raiseToPower(exp, base)
// //
// //
// function countToFive() {
//   let firstFive = "12345";
//   let len = firstFive.length;
//   // Only change code below this line
//   for (let i = 0; i <= len-1; i++) {
//   // Only change code above this line
//     console.log(firstFive[i]);
//   }
// }
// countToFive();
// //
// //array maken met m rows en n columns
// function zeroArray(m, n) {
//   let newArray = [];
//   for (let i = 0; i < m; i++) {
//     let row = []; /* <-----  row has been declared inside the outer loop. 
//      Now a new row will be initialised during each iteration of the outer loop allowing 
//      for the desired matrix. */
//     for (let j = 0; j < n; j++) {
//       row.push(0);
//     }
//     newArray.push(row);
//   }
//   return newArray;
// }
// let matrix = zeroArray(3, 2);
// console.log(matrix); //matrix = [[0,0],[0,0],[0,0]]
// //
// //
// function mixedNumbers(arr) {
//   // Only change code below this line
// arr.unshift('I', 2, 'three')
// arr.push(7, 'VIII', 9 )
//   // Only change code above this line
//   return arr;
// }
// console.log(mixedNumbers(['IV', 5, 'six']));
// //
// //
// function popShift(arr) {
//   let popped = arr.pop() //zet het laatste element in een nieuwe variabele
//   let shifted = arr.shift() //zet het eerste element in een nieuwe variabele
//   return [shifted, popped]; //returns "complete" en "challenge"
// }
// console.log(popShift(['challenge', 'is', 'not', 'complete']));
// //
// //
// function htmlColorNames(arr) {
//   // Only change code below this line
// arr.splice(0,2, 'DarkSalmon', 'BlanchedAlmond')
//   // Only change code above this line
//   return arr;
// }
// console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
// //
// //
// function forecast(arr) {
// return arr.slice(2,4); //arr is een nieuwe array met "warm en "sunny
// }
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
// //
// //SPREAD OPERATOR ...
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
// newArr.push( [...arr])
//     num--;
//   }
//   return newArr;
// }
// console.log(copyMachine([true, false, true], 2));
// //
// //
// function spreadOut() {
//   let fragment = ['to', 'code'];
//   let sentence= ["learning", ...fragment,"is", "fun"] 
//   return sentence;
// }
// console.log(spreadOut());
// //
// //
// function quickCheck(arr, elem) {
//  return arr.indexOf(elem) >= 0 ? true : false;
// }
// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); 
// //kan eender welk array zijn, tweede is om na te kijken of het in de array zit
// //
// //controleren welke getallen groter zijn dan 10
// function greaterThanTen(arr) {
//   let newArr = [];
//   //loop door elke element van greaterTanTen, onderaan in de call function gezet
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// //call function
// greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// //
// //
// //laatste element van array mag niet in de nieuwe array
// function filteredArray(arr, elem) {
//   let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf(elem) == -1) {
//       //Checks every parameter for the element and if is NOT there continues the code
//       newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
//     }
//   }
//   return newArr;
// }
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// //
//
//working with objects
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };
// //nieuw element in object toevoegen
// let fish = "fish" //key
// foods[fish] = "salmon" //value
// console.log(foods)
// function checkInventory(scannedItem) {
// return foods[scannedItem]
// }
// console.log(checkInventory("apples"));
//
//
// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };
// 
//nakijken of al deze namen in object staan
// function isEveryoneHere(userObj) {
//   return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
//     userObj.hasOwnProperty(name)
//   );
// }
// console.log(isEveryoneHere(users));
const people = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
function countOnline(usersObj) {
  let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
}
console.log(countOnline(people))
//
//
//get the names of the object
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
return Object.keys(obj) //returns an array with strings representing each property in the object
}

console.log(getArrayOfUsers(users));
//
//
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
userObj.data.friends.push(friend);//"pete" bij in "friends" zetten
  return userObj.data.friends;
}
console.log(addFriend(user, 'Pete')); 




