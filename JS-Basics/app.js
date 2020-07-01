/***************************
 ** Variables
 */

// var firstName = "jesus";
// let age = 28;
// console.log(firstName + " " + age);

// //Type coarcion
// let job, isMarried;
// job = " Teacher";
// isMarried = false;

// console.log(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     " " +
//     "is he married? " +
//     isMarried
// );

// //variable mutation
// age = "tweenty eight";
// job = "Full stack Sofware Developer";

// alert(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     "." +
//     " is he married? " +
//     isMarried
// );

// var lastName = prompt("what is his last name?");
// console.log(`${firstName} ${lastName}`);

// let yearJesus, yearAna, year;
// year = 2020;
// ageJesus = 28;
// ageAna = 29;

// yearJesus = year - ageJesus;
// yearAna = year - ageAna;
// console.log(yearJesus);
// console.log(yearAna);

// console.log(year + 2);
// console.log(year / 10);
// console.log(year * 2);

// Logical operator
// let jesusOlder = ageJesus > ageAna;
// console.log(jesusOlder);

// // typeof operator
// console.log(typeof jesusOlder);

// console.log(typeof ageJesus)
// console.log(typeof "I'm a full stack Software Developer");

// let x;

// console.log(typeof x)

// //Operator precedence

// let DateTimeNow = 2020;
// let yearJesus = 1992;
// let fullAge = 21;

// //multiple operator
// let isFullAge = DateTimeNow - yearJesus >= fullAge;

// console.log(isFullAge);

//grouping
// let ageJesus = DateTimeNow - yearJesus;
// let ageAna = 32;
// let average = (ageJesus + ageAna) / 2;
// console.log(average);

//Coding challenge 1
// let jesusMassKg = 76; //kg
// let jesusHightMeter = 1.8; //meters

// let anaMassKg = 56;
// let anaHightMeter = 1.65;

// let jesusBMI = jesusMassKg / (jesusHightMeter * jesusHightMeter);
// console.log(jesusBMI);

// let anaBMI = anaMassKg / (anaHightMeter * anaHightMeter);
// console.log(anaBMI);

// let isJesusBMIGreater = jesusBMI > anaBMI;
// console.log("Is jesus's BMI highter than Ana's?" +
//  " " + isJesusBMIGreater);

// function BubbleSort(arr) {
//   const sortedArray = Array.from(arr);
//   let swap;
//   do {
//     swap = false;
//     for (let i = 1; i < sortedArray.length; ++i) {
//       if (sortedArray[i - 1] > sortedArray[i]) {
//         [sortedArray[i], sortedArray[i - 1]] = [
//           sortedArray[i - 1],
//           sortedArray[i],
//         ];
//         swap = true;
//       }
//     }
//   } while (swap);
//   return sortedArray;
// }
// console.log(BubbleSort([3, 12, 9, 5, 88, 77]));

// // Multiple assigmnets

// let x,y;

// x = y = (3 + 5) * 4 - 6 ; // 8; 32 - 5 = 26
// console.log(x, y)

// // more operators

// x *= 2;
// console.log(x)
// x -= 10;
// console.log(x)

// x++;
// console.log(x)
// x--;
// console.log(x)

/***************************
 ** IF / else statamnets
 */

// let firstName = "jesus";
// let civilStatus = "single";

// var isMarried = true;
// if (isMarried) {
//   console.log(firstName + " is married!");
// } else {
//   console.log(firstName + "will hopefully be soon (:");
// }

/***************************
 **    Challenge 1
 */

//   let jesusMassKg = 76; //kg
// let jesusHightMeter = 1.8; //meters

// let anaMassKg = 56;
// let anaHightMeter = 1.65;

// let jesusBMI = jesusMassKg / (jesusHightMeter * jesusHightMeter);
// console.log(jesusBMI);

// let anaBMI = anaMassKg / (anaHightMeter * anaHightMeter);
// console.log(anaBMI);

// let isJesusBMIGreater = jesusBMI > anaBMI;
// console.log("Is jesus's BMI highter than Ana's?" +
//  " " + isJesusBMIGreater);

// //with if staments
//  if (jesusBMI > anaBMI){
//      console.log('Jesus\' MBI is hegher than Ana\'s.')
//  } else{
//     console.log('Ana\' MBI is hegher than Jesus\'s.')

//  }

// //Another if / else staments

// let firstName = "Jesus";
// let age = 30;

// if (age < 13) {
//   console.log(`${firstName}
//   Sorry bro, you need to grow up a little more lol!`);
// } else if (age >= 13 && age < 30) {
//   console.log(`${firstName} You on fire 🐱‍👤🐱‍🏍🐱‍🏍✔!`);
// } else if (age >= 30 && age < 40) {
//   console.log(`${firstName} Te ta poniendo viejo bro 😂!`);
// } else {
//   console.log(firstName + " " + "Viejo OK  🤷‍♂️");
// }

/***************************************
 ** Ternary operator and switch stament
 */

// let firstName = "Jesus";
// let palomo = "The US law";
// let age = 18;
// //if
// age >= 18
//   ? console.log(`${firstName} Can drink beer😊! `)
//   : //else
//     console.log(
//       `${firstName} Can't drink beer😒! because the ${palomo} is sucks 🤢`
//     );

// //Terminaty operator
// let drink = age >= 18 ? "can drink" : "can't drink";
// console.log(drink);

//same with if /else
// if (age >= 18){
//     let drink = 'can drink';
// }
// else{
//     let drink = 'can\t drink';
// }

/***************************************
 **switch stament
 */

// var job = "developer";

// switch (job) {
//   //if
//   case "developer":
//   case "engineer":
//     console.log(`${firstName} here! I'm a full stack Software Developer`);
//     break;
//   case "driver":
//     console.log(`${firstName} used to driver for Uber in CT 😒`);
//     break;
//   case "disigner":
//     console.log(`${firstName} sucks at Disigning 😂`);
//   //else
//   default:
//     console.log(`${firstName} This is how I'm learning JavaScript 🐱‍👤 `);
// }

// //switch logical
// age = 28;
// switch (true) {
//   case age < 13:
//     console.log(
//       firstName + "Sorry bro, you need to grow up a little more lol!"
//     );
//     break;
//   case age >= 13 && age < 20:
//     console.log(`${firstName} You on fire 🐱‍👤🐱‍🏍🐱‍🏍✔!`);
//     break;
//   case age >= 20 && age < 30:
//     console.log(`${firstName} Te ta poniendo viejo bro 😂!`);
//     break;
//   default:
//     console.log(firstName + " " + "Viejo OK  🤷‍♂️");
// }

/********************************
 * Truthy and Falsy values and quality operators
 */

// // Falsy values: undefined, null , 0 , ' ', NaN
// // Truthy VALUES: NOT Falsy value

// let height;

// height = 23;
// if (height || height === 0) {
//   console.log("variable is defined");
// } else {
//   console.log("the variable has not been defined");
// }

// //equality operator
// if (height == "23") {
//   console.log("the == operator does type coercion");
// }

/*************************************
 ** Challenge 2
 */

// let jonhTeam = (89 + 120 + 103) / 3;
// console.log(`Jonh's team average is ${jonhTeam}`);

// let mikeTeam = (116 + 94 + 123) / 3;
// console.log(`Mike's team average is ${mikeTeam}`);

// let maryTeam = (97 + 134 + 105) / 3;
// console.log(`Mary's team average is ${maryTeam}`);

// console.log("");

// //if / else
// if (mikeTeam > jonhTeam){
//   console.log(`Mike's team is the winner with an average score of ${mikeTeam}🎉🎉🎉`);
// }
// else if (jonhTeam > mikeTeam) {
//   console.log(`Jonh's team is the winner with an average score of ${jonhTeam}🎉🎉🎉`);
// }
//  else  {
//   console.log(`The final average score is a drow 🤷‍♂️.
//    Mike's team average is ${mikeTeam}
//    Jonh's team average is ${jonhTeam}
//    Mary's team average is ${maryTeam}`
//   );
// }

// //

// if (mikeTeam > jonhTeam && mikeTeam > maryTeam) {
//   console.log(
//     `Mike's team is the winner with an average score of ${mikeTeam} points 🎉🎉🎉`
//   );
// } else if (jonhTeam > mikeTeam && jonhTeam > maryTeam) {
//   console.log(
//     `Jonh's team is the winner with an average score of ${jonhTeam} points 🎉🎉🎉`
//   );
// } else if (maryTeam > mikeTeam && maryTeam > jonhTeam) {
//   console.log(
//     `Mary's team is the winner with an average score of ${maryTeam} points 🎉🎉🎉`
//   );
// } else {
//   console.log(`The final average score is a drow 🤷‍♂️.
//    Mike's team average is ${mikeTeam}
//    Jonh's team average is ${jonhTeam}
//    Mary's team average is ${maryTeam}`);
// }

/***************************************
 ** Funtions
 */

// // //     function name //This is the algument or variable
// function calculaterAge(birthYear) {
//   return 2020 - birthYear;
// }

// let ageJesus = calculaterAge(1992);
// let ageAna = calculaterAge(1991);
// let ageJavi = calculaterAge(1998);
// console.log(ageJesus, ageAna, ageJavi);

// function yearUntilRetirement(year, firstName) {
//   let age = calculaterAge(year);
//   let retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(firstName + " retires in " + retirement + " years");
//   } else {
//     console.log(firstName + " is already retired");
//   }
// }

// yearUntilRetirement(1992, "Jesus");
// yearUntilRetirement(1991, "Ana");
// yearUntilRetirement(1998, "Javi");
// yearUntilRetirement(1950, "Nelson");

/***************************************
 **Funtion Statemnet and Expression
 */

// // Funtion Declaretion
// function jobInfo(job,firstName){ }

// // Funtion expresion
// let jobInfo = function (job, firstName) {
//   switch (job) {
//     case "developer":
//       return firstName + " is a web developer";
//     case "driver":
//       return firstName + " drives for Uber ";
//     case "teacher":
//       firstName + " is a teacher";
//     default:
//       return firstName + " DOES SOMETHING ELSE!";
//   }
// };

// console.log(jobInfo("developer", " Jesus"));
// console.log(jobInfo("driver", " Jesus"));
// console.log(jobInfo("retired", " Ana"));

/***************************************
 **Arrays
 */

// // Initialize new Array Data
// let names = ["Jesus", "Ana", "Javi"];
// var years = new Array(1992, 1991, 1998);
// console.log(names[0]);
// console.log(years[2]);

// // // Mutate Array Data
// names[1] = "Lucia";
// names[names.length] = "Gerardo";
// console.log(names);
// // // Different Data types Array

// let  mery = ["Mery", "Rosario", 1993, "bussiness", true];
// //add item to the last place in th array
// mery.push("blue");
// //add item to the first place in th array
// mery.unshift("Ms.");
// console.log(mery);

// //remove last element in the array
// mery.pop();
// mery.pop();
// //first last element in the array
// mery.shift();
// console.log(mery);
// //return the passsion the element is in the array, and if it's not in the array it will return -1
// console.log(mery.indexOf(1993));
// //checks if developer is in the array, and return a conditional statment
// let isDeveloper =  mery.indexOf('developer') === -1 ? 'Mery is NOT a developer' : 'Mery is a developer';
// console.log(isDeveloper);

// function tipCalculator(bill) {
//   let percentage;
//   if (bill < 50){
//     percentage = .2;
//   }
//   else if (bill >= 50 && bill < 200){
//     percentage = .15;
//   }
//   else{
//     percentage = .1;
//   }

//   return percentage * bill;
// }

// // console.log(tipCalculator(100))

// let bills = [124, 48 , 268];
// let tips = [tipCalculator(bills[0]),
//  tipCalculator( bills[1]),
//   tipCalculator(bills[2])
// ];

//   let totalBills = [
//     bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[2] + tips[2]
//   ]
//   console.log(tips,totalBills)

/***************************************
 **Objects and properties
 */
//Object literal
// let person = {
//   firstName: "jesus",
//   lastName: "Rosario",
//   birthYear: 1992,
//   family: ["Mama", "Mery", "Javi", "Luis", "Ana"],
//   job: "Developer",
//   isMarried: true,
// };

// //retrieve data from object //morate data from object
// console.log(person.family[1]);
// let x = "birthYear";
// console.log(person[x]);

// person.job = "Software Developer";
// person["isMarried"] = false;
// console.log(person);

// //New Object syntax
// let Ana = new Object();
// Ana.firstName = 'Ana',
// Ana.lastName = 'Martinez Rosario',
// Ana.birthYear = '1992',
// Ana.isMarried = true;

// console.log(Ana);

// // js methos = functions inside objects
// let person = {
//   firstName: "jesus",
//   lastName: "Rosario",
//   birthYear: 1992,
//   family: ["Mama", "Mery", "Javi", "Luis", "Ana"],
//   job: "Developer",
//   isMarried: true,
//   // Onjects has the 'this' keyword that points to itself
//   calcAge: function (birthYear) {
//     this.age = 2020 - this.birthYear;
//   },
// };

// person.calcAge();

// console.log(person);

/***************************************
 **Coding challenge 4
 */

// let jesus = {
//   fullName: "Jesus Rosario",
//   MassKg: 76,
//   HightMeter: 1.8,
//   calcJesusBMI: function () {
//     this.jesusBMI = this.MassKg / (this.HightMeter * this.HightMeter);
//     return this.jesusBMI;
//   },
// };

// let ana = {
//   fullName: "Ana Martinez",
//   MassKg: 56,
//   HightMeter: 1.65,
//   calcAnaBMI: function () {
//     this.anaBMI = this.MassKg / (this.HightMeter * this.HightMeter);
//     return this.anaBMI;
//   },
// };

// if (jesus.calcJesusBMI() > ana.calcAnaBMI()) {
//   console.log(
//     jesus.fullName + " has a heigher BMI with a total of " + jesus.jesusBMI
//   );
// } else if (ana.anaBMI > jesus.jesusBMI) {
//   console.log(
//     ana.fullName + " has  has a heigher BMI with a total of " + ana.anaBMI
//   );
// } else {
//   console.log(
//     "DROW 😁😜😜😜!!! SAME BMI " +
//       "\n" +
//       ana.fullName +
//       " " +
//       ana.anaBMI +
//       "\n" +
//       jesus.fullName +
//       " " +
//       jesus.jesusBMI
//   );
// }

/***************************************
 **Loops and iteration
 */
/***************************************
 **for loop has 3 parts:
 ** has the initial value of the counter
 ** A condition that is evaluated before each loop iteration
 ** A counter update after each iteration
 */

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let mery = ["Mery", "Rosario", 1993, "bussiness", true];
// // for loop
// for (let i = 0; i < mery.length; i++){
//   console.log(mery[i]);
// }
// // for in loop
// for( let i in mery){
//   console.log(mery[i]);
// }

// // while loop
// var i = 0;
// while (i < mery.length) {
//   console.log(mery[i]);
//   i++
// }

// var myObject = {firstName:"Jay", lastName:"Aguiar", grade:"A+"};

// for(value in myObject)
// {
//  console.log(myObject[value]); //This would log each property's value into the console.
// }

//continue and break statement

// let mery = ["Mery", "Rosario", 1993, "bussiness", true];
// // for loop // !== is different
// for (let i = 0; i < mery.length; i++) {
//   if (typeof mery[i] !== 'string') continue;
//   console.log(mery[i]);
// }

//in here the loops returns MERY, ROSARIO
//because the break puse the looping when
//it hits something diffrents than string values
//
// for (let i = 0; i < mery.length; i++) {
//   if (typeof mery[i] !== 'string') break;
//   console.log(mery[i]);
// }

// //Looping backwards
// for (let i = mery.length - 1; i >= 0; i--) {

//   console.log(mery[i]);
// }

/***************************************
 ** Coding Chanllenge 5
 */
// // Person object
// let person = {
//   fullName: "Jesus Rosario",
//   bills: [124, 48, 268, 180, 42],
//   calctips: function () {
//     this.tips = [];
//     this.finalBills = [];

//     for (let i = 0; i < this.bills.length; i++) {
//       //Determine persentage based in in tipping rules

//       let percentage;
//       let bill = this.bills[i];
//       if (bill < 50) {
//         percentage = 0.2;
//       } else if (bill >= 50 && bill < 200) {
//         percentage = 0.15;
//       } else {
//         percentage = 0.1;
//       }
//       //add the results to the corresponding arrays
//       this.tips[i] = bill * percentage;
//       this.finalBills[i] = bill + bill * percentage;
//     }
//   },
// };

// //Ana object
// let ana = {
//   fullName: "Ana Martinez",
//   bills: [77, 475, 110, 45],
//   calctips: function () {
//     this.tips = [];
//     this.finalBills = [];
//     //loops tro the bills array
//     for (let i = 0; i < this.bills.length; i++) {
//       let percentage;
//       let bill = this.bills[i];
//       if (bill < 100) {
//         percentage = 0.2;
//       } else if (bill >= 100 && bill < 300) {
//         percentage = 0.1;
//       } else {
//         percentage = 0.25;
//       }

//       //add the results to the corresponding arrays
//       this.tips[i] = bill * percentage;
//       this.finalBills[i] = bill + bill * percentage;
//     }
//   },
// };

// // his function resives a tips array
// function calcAverage(tips) {
//   let sum = 0;
//   for (let i = 0; i < tips.length; i++) {
//     //  tips[i] =  sum;  //the [i] in tips[i] means current posistion
//     sum = sum + tips[i];
//   }
//   return sum / tips.length;
// }

// // get object/function
// person.calctips();
// ana.calctips();
// console.log(person, ana);

// // calculate the tips average from each object
// person.average = calcAverage(person.tips);
// ana.average = calcAverage(ana.tips);

// // logic to assigns the family with the heighter tips average
// if (person.average > ana.average) {
//   console.log(
//     person.fullName +
//       " family has the heigter tip average, with " +
//       person.average
//   );
// } else if (ana.average > person.average) {
//   console.log(
//     ana.fullName + " family has the heigter tip average, with $" + ana.average
//   );
// } else {
//   console.log(
//     person.fullName +
//       " and" +
//       ana.fullName +
//       " family have the same tip average, with $" +
//       person.average +
//       " and $" +
//       ana.average
//   );
// }
