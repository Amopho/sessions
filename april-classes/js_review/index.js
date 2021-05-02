//object
const obj = {
  name1: "First",
  name2: "second",
  name3: ["third", "three", "triple"],
};
console.log(obj.name1);
console.log(obj.name3[1]);

//access properties
console.log(obj["name3"][2]);
console.log(obj.name3[2]);
const obj2 = {};
console.log(typeof obj2);
//assign with dot notation
obj2.name4 = "Fourth";
console.log(obj2);
//assign with [] notation - more usefull to fulfill empty object
obj2["name5"] = "Fifth";
obj2[6] = 170;
console.log(obj2);
obj2.name5 = "Five";
console.log(obj2);
// create an obj and array
const save = new Object();
const arr = new Array(3, 4, 8, 9);
console.log(save);
console.log(arr);

// for in objects
for (let prop in obj2) {
  console.log(`${prop}: ${obj2[prop]}`);
}
console.log(obj2);
// let me introduce myself
const meeee = {
  firstname: "Meee",
  age: 34,
  birthYear: 1986,
  gender: "Female",
  height: 170,
  print: function () {
    console.log(
      `I am ${this.firstname}, my age is ${this.age} I was born in ${this.birthYear}`
    );
  },
  old: function () {
    let currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  },
};

meeee.print();
console.log(meeee.old());

//object assign

// AEIOU:
// Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
// i.e. findVowels(“this is a string”) ➞ 4
// SumOfNumbers.
// Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.
// No Duplicates!
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// toCamelCase("hello_world") ➞ "helloWorld"
// toCamelCase("javascript_is_fun") ➞ "javascriptIsFun"
// Bonus: Write a function which accepts any amount of numbers and returns the average.
// e.g
// console.log(average(0)) ---> 0
// console.log(average(1, 2)) ---> 1.5
// console.log(average(1, 3, 6, 10)) ---> 5
// console.log(average(12, 14, 16)) ---> 14
// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:
// [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]
const scrabble = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];
// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
function sumBricks(arr) {
  let total = 0;
  // start value
  for (let i = 0; i < arr.length; i++) {
    //go through the array of objects and
    total += arr[i]["score"];
    // add value from score at array index i
  }
  return total;
  //result
}
console.log(sumBricks(scrabble));
//display the function result

// Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
// Example:
// countLetters("tree") ➞ {t: 1, r: 1, e: 2}
