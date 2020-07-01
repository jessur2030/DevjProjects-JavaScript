// // Fizz Buzz console log output
// for (var i = 1; i < 100; i++) {
//   if (i % 2 == 0 && i % 3 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 2 == 0) {
//     console.log("fizz");
//   } else if (i % 3 == 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

// console.log(numbers);

// var numbers = [];

// // Fizz Buzz array push output
// for (var i = 1; numbers.length < 100; i++) {
//   if (i % 2 === 0 && i % 3 == 0) {
//     numbers.push("FizzBuzz");
//   } else if (i % 2 == 0) {
//     numbers.push("Fizz");
//   } else if (i % 3 == 0) {
//     numbers.push("Buzz");
//   } else {
//     numbers.push(i);
//   }
// }

// console.log(numbers);

// //global object: same declaration  as let name = 'jesus'
// name = window.name = 'jesus';
// console.log(name)

// // objects literals array
// var index =""
// var label= " "

// var numbers  = {
//     index, label
// };

//     for(var i = 1; i < 100; i++)
//     {
//         //for (value in numbers){
//         numbers[i] ={index:i+1};
//         if (i % 2 === 0 && i % 3 == 0) {
//          numbers[i].label= "Fizz Buzz";
//     }else if (i%2 == 0) {
//         numbers[i].label = "Fizz";
//     }else if (i%3== 0) {
//         numbers[i].label ="Buzz" ;
//     }else{
//         numbers.label[i]}
//         console.log(numbers);

//     }

/**********************************
 * *Hoisting example
 */
// functions
// calculateAge(1965);

// function calculateAge(year) {
//   console.log(2020 - year);
// }

// // retiremnet(1992)
// let retiremnet = function (year) {
//   console.log(65 - (2020 - year));
// };

// //variables

// console.log(age);
// var age = 28;

// console.log(age);

// function foo (){
//     console.log(age)
// var age = 65;
// console.log(age)
// }

// foo();
// console.log(age)

// //functions scope

// let a = "hello";
// first();
// function first() {
//   let b = "hi";

//   second();

//   function second() {
//     let c = "Hey";
//     third();
//   }
// }

// function third() {
//   first;
//   let d = "JESUS";
//   console.log(a + d);
// }

/**********************************
 * * 'This' keyword
 */

//  console.log(this)
// calculateAge(1992);
// function calculateAge(year) {
//   console.log(2020 - year);
//   console.log(this);
// }

// let jesus = {
//     name: 'jesus',
//     yearOfbirth: 1992,
//     //this funtions'calculateAge Method' points to the jesus object
//     calculateAge: function (){
//         console.log(this);
//         console.log(2020 - this.yearOfbirth)

        // //this function points to the window object   
        // //this is a regular function inside a function method  
        // function innerFunction(){
        //     console.log(this)
        // }
        // innerFunction()
//     }

// }

// jesus.calculateAge();


// let ana = {
//     name: ' ana',
//     yearOfbirth: 1990,

// }

// ana.calculateAge = jesus.calculateAge;

// ana.calculateAge();

