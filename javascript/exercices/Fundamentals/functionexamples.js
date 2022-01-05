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
//Twee functies in een immediately invoked function expression steken
// let funModule = (function (){
//     return{
//     isCuteMixin:function(obj) {
//       obj.isCute = function() {
//         return true;
//       };
//     },
//     singMixin: function(obj) {
//       obj.sing = function() {
//         console.log("Singing to an awesome tune");
//       };
//     }
//     }
//     })() //invokes directly
// //
// //
// // Function that returns a string representing a cup of green tea
// const prepareGreenTea = () => 'greenTea';

// // Function that returns a string representing a cup of black tea
// const prepareBlackTea = () => 'blackTea';

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = [];

//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };
// const tea4GreenTeamFCC = getTea(prepareGreenTea,27);
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

// console.log(
//   tea4GreenTeamFCC,
//   tea4BlackTeamFCC
// );



// // tabs is an array of titles of each site open within the window
// const Window = function(tabs) {
//     this.tabs = tabs; // We keep a record of the array inside the object
//   };

//   // When you join two windows into one window
//   Window.prototype.join = function(otherWindow) {
//     this.tabs = this.tabs.concat(otherWindow.tabs);
//     return this;
//   };

//   // When you open a new tab at the end
//   Window.prototype.tabOpen = function(tab) {
//     this.tabs.push('new tab'); // Let's open a new tab for now
//     return this;
//   };

//   // When you close a tab
//   Window.prototype.tabClose = function(index) {

//     const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
//     const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

//     this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

//     return this;
//    };

//   // Let's create three browser windows
//   const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
//   const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
//   const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

//   // Now perform the tab opening, closing, and other operations
//   const finalTabs = socialWindow
//     .tabOpen() // Open a new tab for cat memes
//     .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
//     .join(workWindow.tabClose(1).tabOpen());
//   console.log(finalTabs.tabs);

//
//
// // The global variable
// const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// function add(arr, bookName) {
//   let newArr = [...arr]; // Copy the bookList array to a new array.
//   newArr.push(bookName); // Add bookName parameter to the end of the new array.
//   return newArr; // Return the new array.
// }

// /* This function should remove a book from the list and return the list */
// // New parameters should come before the bookName one

// // Add your code below this line
// function remove(arr, bookName) {
//   let newArr = [...arr]; // Copy the bookList array to a new array.
//   if (newArr.indexOf(bookName) >= 0) {
//     // Check whether the bookName parameter is in new array.
//     newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
//     return newArr; // Return the new array.
//   }
// }

// const newBookList = add(bookList, 'A Brief History of Time');
// const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log(bookList);

//
// // originele array heeft objecten met nog meer keys
// //nieuwe array 'map' met enkel titel en rating
// const ratings = watchList.map(item => ({
//     title: item["Title"],
//     rating: item["imdbRating"]
//   }));
//
//
//eerst nieuwe array via map daarna filter toepassen
//    var filteredList = watchList
//   .map(movie => {
//     return {
//       title: movie.Title,
//       rating: movie.imdbRating
//     };
//   })
//   .filter(movie => {
//     // return true it will keep the item
//     // return false it will reject the item
//     return parseFloat(movie.rating) >= 8.0;
//   });
//
//
//Het gemiddelde ratingsgetal van de films van "Christopher Nolan" zoeken
//  function getRating(watchList) {
//   var count = 0;
//    var averageRating = watchList.reduce((sum,movie) =>  {
//      if (movie.Director == "Christopher Nolan") {
//        count+=1;
//        return sum + parseFloat(movie.imdbRating);
//      }
//      return sum;
//    }, 0) / count;
//    return averageRating;
//  }
//
//
//enkel de integer nummers in een nieuwe array zetten
// const squareList = arr => {
//       return arr.filter(num => num > 0 && num % parseInt(num) === 0)
//            .map(num => Math.pow(num, 2));
//  };
//  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
//  console.log(squaredIntegers);
//
//
//sorteren op alfabetische volgorde
// function alphabeticalOrder(arr) {
//    return arr.sort(function(a,b){
//      return a===b ? 0 : a>b? 1:-1
//    })
//  }
//  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
//
//een nieuwe array zonder de bestaande te wijzigen
// const globalArray = [5, 6, 3, 2, 9];
// function nonMutatingSort(arr) {
// return [].concat(arr).sort(function(a,b){
//   return a-b
// })
// }
// nonMutatingSort(globalArray);
//
//eerst array maken daarna string
// function sentensify(str) {
//  return str.split(/\W/).join(" ")
//  }
//  sentensify("May-the-force-be-with-you");
//
//
//een tekst in een string veranderen zonder witspace en met - tussen de woorden
// var globalTitle = "winter is coming"
// function urlSlug(title) {
//    return title
//    .toLowerCase()
//    .trim()
//    .split(/\s+/)
//    .join("-");
// }
// var winterComing = urlSlug(globalTitle)
//ANDERE OPLOSSING
//function spinalCase(str) {
//     return str
//     .split(/\s|_|(?=[A-Z])/)
//     .join("-")
//     .toLowerCase();
// }
// spinalCase('This Is Spinal Tap');
// //
// //
// //de som van de 2 getallen en de getallen ertussenin
// function sumAll(arr) {
//    let sumBetween=0;
//    for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
//      sumBetween +=i
//    }
//    return sumBetween;
//  }
//  sumAll([1, 4]);
//
//
// //twee arrays vergelijken, de unieke elementen in een nieuwe array zetten
// function diffArray(arr1, arr2) {
//    const newArr = [];
//      function onlyInFirst(first, second) {
//      // Looping through an array to find elements that don't exist in another array
//      for (var i = 0; i < first.length; i++) {
//        if (second.indexOf(first[i]) === -1) {
//          // Pushing the elements unique to first to newArr
//          newArr.push(first[i]);
//        }
//      }
//    }
//    onlyInFirst(arr1, arr2);
//    onlyInFirst(arr2, arr1);

//    return newArr;
//  }
//  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//
// //
// //verwijderen van dubbels in de array, die bij in het object staan
// var valsToRemove = Array.from(arguments).slice(1);
// return arr.filter(function(val) {
//   return !valsToRemove.includes(val);
// });
// destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// //andere oplossing
// function destroyer(arr) {
//    let valsToRemove = Object.values(arguments).slice(1);

//    for (let i = 0; i < arr.length; i++) {
//      for (let j = 0; j < valsToRemove.length; j++) {
//        if (arr[i] === valsToRemove[j]) {
//          delete arr[i];
//        }
//      }
//    }
//    return arr.filter(item => item !== null);
//  }
//  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//
// //het laatste argument van het object is de source om na te kijken of dit in de array voorkomt.
// function whatIsInAName(collection, source) {
//    var srcKeys = Object.keys(source);
//    return collection.filter(function (obj) {
//       return srcKeys.every(function (key) {
//          return obj.hasOwnProperty(key) && obj[key] === source[key];
//       });
//    });
// }
// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
// { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//
//
//regular expression
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// function translatePigLatin(str) {
//     return str
//       .replace(/^[aeiou]\w*/, "$&way")
//       .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
//   }

//   translatePigLatin("consonant");

//
//
// //als "A" dan "T" en omgekeerd, als "C" dan "G" en omgekeerd in array zetten
// function pairElement(str) {
//     // Return each strand as an array of two elements, the original and the pair.
//     var paired = [];
  
//     // Function to check with strand to pair.
//     var search = function(char) {
//       switch (char) {
//         case "A":
//           paired.push(["A", "T"]);
//           break;
//         case "T":
//           paired.push(["T", "A"]);
//           break;
//         case "C":
//           paired.push(["C", "G"]);
//           break;
//         case "G":
//           paired.push(["G", "C"]);
//           break;
//       }
//     };
  
//     // Loops through the input and pair.
//     for (var i = 0; i < str.length; i++) {
//       search(str[i]);
//     }
  
//     return paired;
//   }
  
//   pairElement("GCG");
//
//
//de onevengetallen in de fibonaccirij optellen tot aan een gegeven getal
// function sumFibs(num) {
//     let prevNumber = 0;
//     let currNumber = 1;
//     let result = 0;
//     while (currNumber <= num) {
//       if (currNumber % 2 !== 0) {
//         result += currNumber;
//       }
//       currNumber += prevNumber;
//       prevNumber = currNumber - prevNumber;
//     }
//     return result;
//   }
//   sumFibs(4);
//
//
//al de priemgetallen kleiner dan een gegeven getal optellen
//mijn oplossing
// function sumPrimes(num) {
//     //check prime
//       if(num < 2){
//   return num
//       };
//       let result = 1
//       for (var i = 2; i < num; i++) {
//           if(num%i!=0){
//   result += i
//           }else{
//               return false
//           }
//   }
//     return result;
//   }
//hoe het echt moest
//   function sumPrimes(num) {
//     // Helper function to check primality
//     function isPrime(num) {
//       for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i == 0)
//           return false;
//       }
//       return true;
//     } 
//     // Check all numbers for primality
//     let sum = 0;
//     for (let i = 2; i <= num; i++) {
//       if (isPrime(i))
//         sum += i;
//     }
//     return sum;
//   }
//   //sumPrimes(10);
//   console.log(sumPrimes(12))
//
//
//
// //grootste gemeen veelvoud van al de getallen die tussen twee getallen zitten
// function smallestCommons(arr) {
//     // Setup
//     const [min, max] = arr.sort((a, b) => a - b);
//     const numberDivisors = max - min + 1;
//     // Largest possible value for SCM
//     let upperBound = 1;
//     for (let i = min; i <= max; i++) {
//       upperBound *= i;
//     }
//     // Test all multiples of 'max'
//     for (let multiple = max; multiple <= upperBound; multiple += max) {
//       // Check if every value in range divides 'multiple'
//       let divisorCount = 0;
//       for (let i = min; i <= max; i++) {
//         // Count divisors
//         if (multiple % i === 0) {
//           divisorCount += 1;
//         }
//       }
//       if (divisorCount === numberDivisors) {
//         return multiple;
//       }
//     }
//   } 
//   smallestCommons([1, 5]);



//als aan een bepaalde voorwaarde is voldaan mag de rest van de array blijven anders wordt de array onderdelen gedelete 

// function dropElements(arr, func) {
//     while (arr.length > 0 && !func(arr[0])) {
//       arr.shift();
//     }
//     return arr;
  
//   }
  
//   dropElements([1, 2, 3], function(n) {return n < 3; });



//
// function truthCheck(collection, pre) {
//     // Is everyone being true?
//     return collection.every(obj => obj[pre]);
//   }
//   truthCheck([{"user": "Tinky-Winky", "sex": "male"}, 
//   {"user": "Dipsy", "sex": "male"}, 
//   {"user": "Laa-Laa", "sex": "female"}, 
//   {"user": "Po", "sex": "female"}], "sex");



//2getallen optellen nakijken of ze een nummer zijn anders een functie returnen
// function addTogether() {
//     const [first, second] = arguments;
//     if (typeof(first) !== "number")
//       return undefined;
//     if (second === undefined)
//       return (second) => addTogether(first, second);
//     if (typeof(second) !== "number")
//       return undefined;
//     return first + second;
//   }
//   addTogether(2,3);