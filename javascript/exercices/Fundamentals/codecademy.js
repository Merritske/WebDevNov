// //voorbeeld switch
// var userName = "";
// userName ? console.log(`Hello, ${userName}!`) : console.log('Hello');
// var userQuestion = "";
// console.log(userQuestion)
// var randomNumber = Math.floor(Math.random() * 8);
// var eightBall = "";
// switch (randomNumber) {
//   case 0:
//     eightBall = 'It is certain';
//     break;
//   case 1:
//     eightBall = 'It is decidedly so';
//     break;
//   case 2:
//     eightBall = 'Reply hazy try again';
//     break;
//   case 3: eightBall = 'Cannot predict now';
//     break;
//   case 4: eightBall = 'Do not count on it';
//     break;
//   case 5: eightBall = 'My sources say no';
//     break;
//   case 6: eightBall = 'Outlook not so good';
//     break;
//   case 7: eightBall = 'Signs point to yes';
//     break;
// }
// console.log(eightBall)

// //global scope  - Local scope
// var x = 10;
// let y = 15;
// const z = 20;
// function num() {
//   const x = 5;
//   return x
// }
// console.log(x) //10
// console.log(num()) //5

// //PASS BY REFERENCE
// let spaceship = {
//   'Fuel Type': 'Turbo Fuel',
//   homePlanet: 'Earth'
// };

// // Write your code below

// let greenEnergy = obj => {
//   obj['Fuel Type'] = 'avocado oil';
// }

// let remotelyDisable = obj => {
//   obj.disabled = true;
// }

// greenEnergy(spaceship);

// remotelyDisable(spaceship);

// console.log(spaceship) //spaceship heeft nu greenEnergy (dus fuel type is veranderd) en remotelyDisabled ook in object


// //LOOPING THROUGH OBJECTS => for(...in...)
// let spaceship = {
//   crew: {
//     captain: {
//       name: 'Lily',
//       degree: 'Computer Engineering',
//       cheerTeam() { console.log('You got this!') }
//     },
//     'chief officer': {
//       name: 'Dan',
//       degree: 'Aerospace Engineering',
//       agree() { console.log('I agree, captain!') }
//     },
//     medic: {
//       name: 'Clementine',
//       degree: 'Physics',
//       announce() { console.log(`Jets on!`) }
//     },
//     translator: {
//       name: 'Shauna',
//       degree: 'Conservation Science',
//       powerFuel() { console.log('The tank is full!') }
//     }
//   }
// };

// // Write your code below

// for (let crewMember in spaceship.crew) {
//   console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
// };

// for (let crewMember in spaceship.crew) {
//   console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
// };

// //USE 'THIS'
// const robot = {
//   model: '1E78V2',
//   energyLevel: 100,
//   provideInfo() {
//     return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
//   }
// };
// console.log(robot.provideInfo());

// //GET METHOD
// const robot = {
//   _model: '1E78V2',
//   _energyLevel: 100,
//   get energyLevel() {
//     if (typeof this._energyLevel === 'number') {
//       return 'My current energy level is ' + this._energyLevel
//     } else {
//       return "System malfunction: cannot retrieve energy level"
//     }
//   }
// };
// console.log(robot.energyLevel);


// //SET METHOD
// const robot = {
//   _model: '1E78V2',
//   _energyLevel: 100,
//   _numOfSensors: 15,
//   get numOfSensors() {
//     if (typeof this._numOfSensors === 'number') {
//       return this._numOfSensors;
//     } else {
//       return 'Sensors are currently down.'
//     }
//   },
//   set numOfSensors(num) {
//     if (typeof num === 'number' && num >= 0) {
//       this._numOfSensors = num
//     } else {
//       console.log('Pass in a number that is greater than or equal to 0')
//     }
//   }
// };
// robot.numOfSensors = 100
// console.log(robot.numOfSensors)

// //FACTORY FUNCTIONS
// const robotFactory = (model, mobile) => {
//   return {
//     model: model,
//     mobile: mobile,
//     beep() { console.log("Beep Boop") }
//   }
// }
// const tinCan = robotFactory("P-500", true)
// console.log(tinCan.beep())


// //Property Value Shorthand
// //shortcuts for assigning properties to variables known as destructuring.
// function robotFactory(model, mobile) {
//   return {
//     model,
//     mobile,
//     beep() {
//       console.log('Beep Boop');
//     }
//   }
// }
// // To check that the property value shorthand technique worked:
// const newRobot = robotFactory('P-501', false)
// console.log(newRobot.model)
// console.log(newRobot.mobile)


// //Destructured Assignment
// const robot = {
//   model: '1E78V2',
//   energyLevel: 100,
//   functionality: {
//     beep() {
//       console.log('Beep Boop');
//     },
//     fireLaser() {
//       console.log('Pew Pew');
//     },
//   }
// };
// const { functionality } = robot
// functionality.beep()


// //Built-in Object Methods
// //voorbeeld: .hasOwnProperty(), .valueOf()
// //There are also useful Object class methods such as 
// //Object.assign(), Object.entries(), and Object.keys()
// const robot = {
// 	model: 'SAL-1000',
//   mobile: true,
//   sentient: false,
//   armor: 'Steel-plated',
//   energyLevel: 75
// };

// // What is missing in the following method call?
// const robotKeys = Object.keys(robot);

// console.log(robotKeys);

// // Declare robotEntries below this line:
// const robotEntries = Object.entries(robot)

// console.log(robotEntries);

// // Declare newRobot below this line:
// const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true},robot)

// console.log(newRobot);


//


