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
