/***************************************************
 **Creating Objects using function constructor
 ***********************************************/
// //object literal
// let jesus = {
//     name: 'jesus',
//     birthYear: 1992,
//     job: 'developer'
// }

/*
//function constructor
let Person = function (name, birthYear, job) {
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
};

//function inherantacne
Person.prototype.calculateAge = function () {
  console.log(2020 - this.birthYear);
};

Person.prototype.lastName = 'rosario';

//new object
let jesus = new Person("jesus", 1992, "developer");

let ana = new Person("ana", 1991, "finance analyst");

let javiel = new Person("javiel", 1998, "construction ");
// console.log(ana,jesus,javiel);

jesus.calculateAge();
ana.calculateAge();
javiel.calculateAge();

console.log(jesus.lastName)

*/

/*

//objects the inherance from prototype
//Object.create

let personProto = {
  calculateAge: function () {
    console.log(2020 - this.yearOfBirth);
  },
};

let jesus = Object.create(personProto);
jesus.name = "jesus";
jesus.yearOfBirth = 1992;
jesus.job = "developer";

let ana = Object.create(personProto, {
  name: { value: "ana" },
  yearOfBirth: { value: 1991 },
  job: { value: "Finance" },

});

*/

/*
// Primitives vs Objects

//Primitives
let a = 23;
let b = a;

a = 46;

console.log(a, b);

//Objects
let object1 = {
  name: "jesus",
  age: 28,
};

let object2 = object1;

object1.age = 30;
console.log(object1.age);
console.log(object2.age);


//functions
let age = 28;

let obj = {
    name: 'jesus',
    city: 'New London'
};

function chance (a,b){
    a = 30;
    b.city = 'Miami'
};

chance(age, obj);

console.log(age)
console.log(obj.city)

*/

/************************************
 ** Passing functions as arguments: first function
 calling 'call back' functions.
 **Functions accepting functions as input.
 **************************************/
/*

//calculate age
let years = [2005, 1965, 1992, 1998, 2000];

//arrayCalc: Generic function that loops throuht over an input array
//arr: pass years array.
//fn: pass calculateAge function that does the calculations
function arrayCalc(arr, fn) {
  //this enty array fills the new result
  let arrResult = [];
  //loop over the emty array and return the result
  for (let i = 0; i < arr.length; i++) {
    //push:insert the elemet fo the arrResults
    //push the results fo calling the 'fn' functions, then pass
    //the the current element of the input array into arr[i] function
    arrResult.push(fn(arr[i]));
  }
  //return the result array
  return arrResult;
}

function calculateAge(element) {
  return 2020 - element;
}

function isFullAge (element){
  return element >= 18;
}
//calc heartRate function
function maxHeartRate (element){

if(element >= 18 && element <= 81){
  //formula to calculate heart rate base on age
  //Math.round: round the result to its closets denominator
  return Math.round(206.9 - (0.67 * element));
}else{
  return -1 ;
  }
}

//ages: stores the functions //call back function
let ages = arrayCalc(years, calculateAge);

let fullAges = arrayCalc(ages, isFullAge);

let calcHeartRate = arrayCalc(ages, maxHeartRate);

console.log(ages);

console.log(fullAges);

console.log(calcHeartRate);


*/

/************************************
 **Functions returning functions
 **************************************/

/*
function interviewQuestion(job) {
  if (job === "developer") {
    return function (name) {
      console.log(
        `${name}, can you please explain what's an anonymous function is in javascript?`
      );
    };
  } else if (job === "finance") {
    return function (name) {
      console.log(`${name}, do know how to use excel?`);
    };
  } else {
    return function (name) {
      console.log(`${name}, what's your field of study?`);
    };
  }
}

let interviewDeveloper = interviewQuestion("developer");

const interviewFinance = interviewQuestion("finance");

//this console.log
interviewFinance("ana");

interviewDeveloper("jesus");
interviewDeveloper("javiel");

//another way to call functions
//first function & then call back function
interviewQuestion("developer")("jesus");

*/

/************************************
 **Functions expression (IIFE)
 data privacy
 **************************************/

//  function game(){
//    let score = Math.random() * 10;
//    console.log(score >= 5);

//    }

//    game();

// //this variables dont interfiare with
// // the blogal execution contex
// (function (){
//   let score = Math.random() * 10;
//   console.log(score >= 5);
//  })();

/*

   //this scope is hidden from the outside scope
   //this variables are safe from the blobal scope
   (function (goodLuck){
     let score = Math.random() * 10;
     console.log(score >= 5 - goodLuck);
    })(5);

    */

/************************************
 ** JS Clousures
 ** In Clousures: the scope chance always stay intact
 **************************************/

//  function calcRetirement(years){
//    return years - 65;
//  }
//  let retirement = console.log(calcRetirement(28));

// function calcRetirement(retirementAge) {
//   return function (year) {
//     return console.log(retirementAge - year);
//   };
// }

// calcRetirement(65)(28);

/*
function retirement(retirementAge) {
  let a = " years left ultil retirement.";
  //anonymous function: no name
  //just a parameter: year
  return function (year) {
    let age = 2020 - year;
    console.log(retirementAge - age + a);
  };
}

//retirement funciton for US
let retirementUS = retirement(66);

// retirement(66)(1992);

//retirement funciton for DR
const retirementDOM = retirement(60);

retirementUS(1992);
retirementDOM(1992);

console.log("");
console.log("");

//function cloasure
function NewinterviewQuestion(job) {
  let a, b, c;
  a = "can you please explain what's an anonymous function is in javascript?";
  b = "do know how to use excel?";
  c = "what's your field of study?";

  //inner function
  return function (name) {
    if (job === "developer") {
      console.log(`${name}, ` + a);
    } else if (job === "finance") {
      console.log(`${name}, ` + b);
    } else {
      console.log(`${name}, ` + c);
    }
  };
}

const itInterview = NewinterviewQuestion("developer");
itInterview("jesus");

//function call
NewinterviewQuestion("finance")("ana");

NewinterviewQuestion("driver")("luis");

*/

/************************************
 ** JS:  Blind, call and apply
 **************************************/

/*

const jesus = {
  name: "jesus",
  age: 28,
  job: "developer",
  presentation: function (style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          ", ladies and gentlemens! I'm " +
          this.name +
          ". I'm a " +
          this.job +
          ", and I'm " +
          this.age +
          " years old."
      );
    } else if (style === "friendly") {
      console.log(
        "Hey! what' up? I'm " +
          this.name +
          ", I'm a " +
          this.job +
          ", and I'm " +
          this.age +
          " years old." +
          " have a nice " +
          timeOfDay +
          "."
      );
    }
  },
};

const ana = {
  name: "ana",
  age: 29,
  job: "finance analyst",
};

jesus.presentation("formal", "monring");

//call () function
//methed barrowing 
//inheratance from th efunction contruction object jesus
jesus.presentation.call(ana, "friendly", "afternoon");

jesus.presentation.apply(ana, ["friendly", "morning"]);

// bind () generate a copy of function to be store in a new variable
const newJesus = jesus.presentation.bind(jesus, 'friendly');

newJesus('night');

const newAna = jesus.presentation.bind(ana, 'formal');

newAna('mornig');


*/

/************************************
 ** JS: practice
 **************************************/

/*

let years = [2005, 1965, 1992, 1998, 2000];

//arrayCalc: Generic function that loops throuht over an input array
//arr: pass years array.
//fn: pass calculateAge function that does the calculations
function arrayCalc(arr, fn) {
  //this enty array fills the new result
  let arrResult = [];
  //loop over the emty array and return the result
  for (let i = 0; i < arr.length; i++) {
    //push:insert the elemet fo the arrResults
    //push the results fo calling the 'fn' functions, then pass
    //the the current element of the input array into arr[i] function
    arrResult.push(fn(arr[i]));
  }
  //return the result array
  return arrResult;
}

function calculateAge(element) {
  return 2020 - element;
}

function isFullAge(limit, element) {
  return element >= limit;
}


//calculates ages
const ages = arrayCalc(years, calculateAge);

//bind () allows to create a copy of a fucntion 
// with a preset aargument
const fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

const fullUS = arrayCalc(ages, isFullAge.bind(this, 21));

console.log(ages);

console.log(fullUS);
console.log(fullJapan);


*/

/*
// inmirially invoque function expresion
(function () {
  function Question(newQestions, answers, correctAnswers) {
    this.newQestions = newQestions;
    this.answers = answers;
    this.correctAnswers = correctAnswers;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.newQestions);

    for (let i in this.answers) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  //check correct answer
  Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correctAnswers) {
      console.log("Corret 👐✔");
    } else {
      console.log("Wrong answer ❌❌❌");
    }
  };

  let q1 = new Question("Is jesus a full stack developer?", ["yes", "no"], 0);

  let q2 = new Question(
    "Is javascript the best programming lenguage in the world?",
    ["yes", "no"],
    0
  );

  let q3 = new Question(
    "what best describe coding",
    ["boring", "hard", "fun", "easy"],
    2
  );
  let q4 = new Question(
    "what's the best mobile operanting system?",
    ["Apple ios", "Windows OS", "Android OS"],
    2
  );

  let questions = [q1, q2, q3, q4];

  let n = Math.floor(Math.random() * questions.length);
  2;
  questions[n].displayQuestion();

  let answer = parseInt(
    prompt("Please select the correct answer: (type a number).")
  );
  5;

  questions[n].checkAnswer(answer);

})(); //this (): invoques the function


*/

/************************************
 ** JS: challenge 7
 **************************************/

// inmirially invoque function expresion
(function () {
  function Question(newQestions, answers, correctAnswers) {
    this.newQestions = newQestions;
    this.answers = answers;
    this.correctAnswers = correctAnswers;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.newQestions);

    for (let i in this.answers) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  //check correct answer
  Question.prototype.checkAnswer = function (ans, callback) {
    let sc;
    if (ans === this.correctAnswers) {
      console.log("Corret 👐✔");
      sc = callback(true);
    } else {
      console.log("Wrong answer ❌❌❌");
      sc = callback(false);
    }

    //call 'displayQuestion' method
    //and pass 'sc' score
    this.displayScore(sc);
  };

  //methed to diplay the score in the console
  Question.prototype.displayScore = function (score) {
    console.log("your current score is: " + score);
    console.log("-------------------------------");
  };

  let q1 = new Question("Is jesus a full stack developer?", ["yes", "no"], 0);

  let q2 = new Question(
    "Is javascript the best programming lenguage in the world?",
    ["yes", "no"],
    0
  );

  let q3 = new Question(
    "what best describe coding",
    ["boring", "hard", "fun", "easy"],
    2
  );
  let q4 = new Question(
    "what's the best mobile operanting system?",
    ["Apple ios", "Windows OS", "Android OS"],
    2
  );

  let questions = [q1, q2, q3, q4];

  function score() {
    let sc = 0;
    return function (correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  let keepScore = score();

  function nextQuestions() {
    let n = Math.floor(Math.random() * questions.length);
    2;
    questions[n].displayQuestion();

    let answer = prompt("Please select the correct answer: (type a number).");
    5;

    if (answer !== "exit") {
      questions[n].checkAnswer(parseInt(answer), keepScore);

      nextQuestions();
    }
  }

  nextQuestions();
})(); //this (): invoques the function
