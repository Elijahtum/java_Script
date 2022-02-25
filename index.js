/*
let js = "amazing";
// if (js === "amazing") 
// alert('Javascript is FUN!')

// let firstName = "Elijah";
// console.log(firstName);

let country = "Kenya";
let continent = "Africa";
let population = 29;

console.log (country);
console.log (continent);
console.log (29);
*/

/*
let javascriptIsFun = true;
console.log (javascriptIsFun);

console.log(typeof javascriptIsFun);

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);
*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMImark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMImark > BMIJohn;
console.log(markHigherBMI);
console.log(BMImark,BMIJohn);
*/

//template literalls
/*
const firstName = "elijah";
const job = "Programmer";
const birthYear = 1991;
const year = 2021;

const elijah = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log (elijah);

const elijaNew = `I,m ${firstName}, a ${year-birthYear} year old ${job}!`;
console.log(elijaNew);

console.log(`Back ticks can also be used to create a regular string.. `)
*/

//conditional Statements 
/*
const age = 19;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log('Elijah can start driving class')
}

if(age => 18) {
    console.log('Elijah can start driving')
}
*/
//exercise 2
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMImark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMImark, BMIJohn);

if(BMImark > BMIJohn) {

    console.log(`Mark's BMI (${BMImark})is higher than John (${BMIJohn})!`)
} else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark,s (${BMImark})!`)
}
*/

//From W3 schools

// for (let step = 1; step < 5; step++) {
//     // Runs 5 times, with values of step 0 through 4.
//     console.log('Walking east one step');
//   }
  
// Challenge 2

/*
const dolphinsScore = [96, 108, 89];
const koalasScore = [88, 91, 110];
const dolphinsAv = ((96 + 108 + 89) /3);
const koalasAv = ((88 + 91 + 110) /3);

console.log(dolphinsAv, koalasAv);

if (dolphinsAv > koalasAv) {
    console.log(`Dolphins win!!!`);
} else if (dolphinsAv === koalasAv)
console.log(`The teams have a draw`);
 else if (koalasAv > dolphinsAv){
    console.log(`Koalas won!!`);
} 
*/

/*
// Object
const person = {
    name: 'Nancy',
    year: 2020,
    profession: 'Teacher'
};

//Invoking an object
console.log(person)

// Invoking a Property withn an Object
console.log(person.name) // 'Nancy'

// Declaring variables
const myName = "Kip";
const _my_Name = 'Kip.';
const $myName = 'kip';

console.log($myName)

// function expression

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

//Arrow function
const calcAge2 = birthYear => 2021 - birthYear;
const age2 = calcAge2(1991);
console.log(age2)
*/


/*
// Coding challenge 3 Arrow Function
//Arrow Function to calculate Average Score
const calcAverage = (a, b, c) => (a + b+ c) / 3;
console.log(calcAverage(3, 4, 5));
//Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(500, 200);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreKoalas, scoreDolphins);
checkWinner(scoreDolphins, scoreKoalas);


//TOPIC
// Array 
const friend1 = 'Vic';
const friend2 = 'John';
const friend3 = 'Doe';
//OR
const friends = ['Vic', 'John', 'Doe'];
console.log(friends);
// Can also be declared
const years = new Array(1991, 2000, 2021);
console.log(years);
// calling object from array eg Vic and Doe
console.log(friends[0]); //For Vic
console.log(friends[2]); //for Doe
// Cheaking length of Array
console.log(friends.length);
//Replacing element in a Array
friends[2]= 'Eli'; // will replace Doe in the Array
*/

register(type, fn) {
    if (utils.isObject(type)) {
      for (let key of Object.keys(type)) this.register(key, type[key]);
      return this;
    }
    assert.equal(typeof fn, 'function', 'expected a function');
    let name = type.toLowerCase();
    if (fn.prototype instanceof this.Prompt) {
      this.prompts[name] = fn;
    } else {
      this.prompts[name] = fn(this.Prompt, this);
    }
    return this;
  }

