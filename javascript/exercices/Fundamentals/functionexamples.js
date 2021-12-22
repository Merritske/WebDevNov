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
// const people = {
//   Alan: {
//     online: false
//   },
//   Jeff: {
//     online: true
//   },
//   Sarah: {
//     online: false
//   }
// }
// function countOnline(usersObj) {
//   let result = 0;
//   for (let user in usersObj) {
//     if (usersObj[user].online === true) {
//       result++;
//     }
//   }
//   return result;
// }
// console.log(countOnline(people))
// //
// //
// //get the names of the object
// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function getArrayOfUsers(obj) {
// return Object.keys(obj) //returns an array with strings representing each property in the object
// }

// console.log(getArrayOfUsers(users));
// //
// //
// let user = {
//   name: 'Kenneth',
//   age: 28,
//   data: {
//     username: 'kennethCodesAllDay',
//     joinDate: 'March 26, 2016',
//     organization: 'freeCodeCamp',
//     friends: [
//       'Sam',
//       'Kira',
//       'Tomo'
//     ],
//     location: {
//       city: 'San Francisco',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
// };

// function addFriend(userObj, friend) {
// userObj.data.friends.push(friend);//"pete" bij in "friends" zetten
//   return userObj.data.friends;
// }
// console.log(addFriend(user, 'Pete')); 
// //
// //
// //omkeren van string
// function reverseString(str) {
//   for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }
//   return reversedStr;
// }
// reverseString("hello");
// //ANDERE MOGELIJKHEID
// function reverseString(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }
// reverseString("hello");
// //
// //
// //factorialize 5! = 1*2*3*4*5 =120
// function factorialize(num) {
//   let product = 1
//   for(let n = 2; n<= num; n++){
// product *= n
//   }
//   return product;
// }
// factorialize(5);
// //
// //
// //find the longest word in a string
// function findLongestWordLength(str) {
//   let words = str.split(' '); //convert string to array
//   let maxLength = 0;

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length;
//     }
//   }
//   return maxLength;
// }
// findLongestWordLength("The quick brown fox jumped over the lazy dog");
// //
// //
// //Grootste getal in subarray vinden en in nieuwe array zetten
// function largestOfFour(arr) {
//   let results = [];
//   for (let i = 0; i < arr.length; i++) {
//     let largestNumber = arr[i][0];
//     for (let j = 1; j < arr[i].length; j++) {
//       if (arr[i][j] > largestNumber) {
//         largestNumber = arr[i][j];
//       }
//     }
//     results[i] = largestNumber;
//   }
//   return results;
// }
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// //
// //
// //om laatste deel te vergelijken
// function confirmEnding(str, target) {
//   return str.slice(-target.length) === target
// }
// confirmEnding("Bastian", "n");
// //
// //
// //string herhalen
// function repeatStringNumTimes(str, num) {
//   let result = ""
//   while(num>0){
//   result += str;
//   num --
//   }
//     return result;
//   }
//  console.log(repeatStringNumTimes("abc", 3));
//   //
//   //
//   //verwijderen van inhoud van strings
//   function truncateString(str, num) {
//     // Clear out that junk in your trunk
//     if (str.length > num) {
//       return str.slice(0, num) + "...";
//     } else {
//       return str;
//     }
//   }
//   truncateString("A-tisket a-tasket A green and yellow basket", 8);
// //
//
//find element in array that passes a function
// function findElement(arr, func) {
//   let num = 0;
//   for(let i = 0; i<arr.length; i++){
//     if(func(arr[i])){
//       return arr[i]
//     }
//   }
//   return undefined;
// }
// findElement([1, 2, 3, 4], num => num % 2 === 0);
// //
// //
// //oplossing 1 : alle eerste letters van het woord in de string naar hoofdletter zetten
// String.prototype.replaceAt = function(index, character) {
//   return (
//     this.substr(0, index) + character + this.substr(index + character.length)
//   );
// };

// function titleCase(str) {
//   var newTitle = str.split(" ");
//   var updatedTitle = [];
//   for (var st in newTitle) {
//     updatedTitle[st] = newTitle[st]
//       .toLowerCase()
//       .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
//   }
//   return updatedTitle.join(" ");
// }
// titleCase("I'm a little tea pot");
// //
// //oplossing 2
// function titleCase(str) {
//   var convertToArray = str.toLowerCase().split(" ");
//   var result = convertToArray.map(function(val) {
//     return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//   });
//   return result.join(" ");
// }
// titleCase("I'm a little tea pot");

// //oplossing 3
// function titleCase(str) {
//   return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
// }
// titleCase("I'm a little tea pot");
// //
// //
// //twee arrays samenvoegen na een bepaalde [n] in arr2
// function frankenSplice(arr1, arr2, n) {
//   let arr = arr2.slice()
//   arr.splice(n,0,...arr1)
//   return arr;
// }
// frankenSplice([1, 2, 3], [4, 5, 6], 1);
// //
// //
// //als waarde is false (= "", null, false, undefined, 0, NaN) niet in nieuwe array zetten
// function bouncer(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) newArray.push(arr[i]);
//   }
//   return newArray;
// }
// bouncer([7, "ate", "", false, 9]);
// //
// //
// 2 strings vergelijken of de ene in de andere zit
// function mutation(arr) {
//  if(arr[0].includes(arr[1])){
// return true
//  } return false
//   }
//   console.log(mutation(["hello", "hey"]))
//
//
//array verdelen in array met subarrays
// function chunkArrayInGroups(arr, size) {
//   let newArr = []
//   for (let i = 0; i <= arr.length - 1; i += size) {
//     newArr.push(arr.slice(i, i + size))
//   }
//   return newArr;
// }
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

//
//constructor
// function Dog(name, color) {
//   this.name = name; // =name is zelfde als parameter
//   this.color = color; // = color is zelfde als parameter
// 
//   }
 //Dog.prototype.numLegs = 4 //dan hoeft dit niet in elke nieuwe Dog opgeslagen te worden
//   let terrier = new Dog("foke","black")
//
//
//twee object die niet gerelateerd zijn toch dezelfde property geven via een functie
// let bird = {
//   name: "Donald",
//   numLegs: 2
// };

// let boat = {
//   name: "Warrior",
//   type: "race-boat"
// };

// let glideMixin = function(obj) {
//   obj.glide = function() {
//     console.log("Gliding!");
//   };
// };
// glideMixin(bird);
// glideMixin(boat);
//
//