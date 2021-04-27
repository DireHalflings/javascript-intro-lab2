console.log("Lab Loaded");

// 0. Hello, object

// Write the code, one line for each action:

// 1. Create an empty object user.
// 2. Add the property name with the value John.
// 3. Add the property surname with the value Smith.
// 4. Change the value of the name to Pete.

// ***************************************** SOLUTION! *****************************************************************?

// let user = {
    


// };

// user["firstname"] = "John";
// user["surname"] = "Smith";

// console.log(user);
// user["firstname"] = "Pete";
// console.log(user);


// 1. Copy and sort array

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

// ***************************************** SOLUTION! *****************************************************************?

// const sorted_array = (arr) => {
//     // spread operator, takes coll of array or object and spreads out parts of it
//     // putting all of data from arr in our new array
//     let original_array = [...arr];
//     let sorted_array = arr.sort();
//     alert(original_array);
//     alert(sorted_array);
// }

// (sorted_array(["HTML", "JavaScript", "Python", "Ruby on Rails", "CSS"]));


// 2. Map to names

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

// ***************************************** SOLUTION! *****************************************************************?


// const array_of_names = (information) => {
//     let names = information.map(user => user["name"])
//     return names; 
// }

// let awad = {name: "Awad", age: 31};
// let jim = {name: "Jim", age: 27};
// let michael = {name: "Michael", age: 43};

// let users = [awad,jim,michael];
// console.log(array_of_names(users));



// 3. Map to objects
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:



// need parantheses to differentiate from using as function since 
// const map_to_objects = (list_of_objects) => {

//     let usersMapped = list_of_objects.map(obj => {
//       // map to a new object and put it in the list
//       let newObj = {};
//       newObj["fullName"] = obj.name + " " + obj.surname;
//       newObj["id"] = obj.id;
//       // returning for .map, needed to load data into our usersMapped
//       return newObj;
//     });
//     // return overall function
//     return usersMapped;

// }

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];
// console.log(map_to_objects(users));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith

// So, actually you need to map one array of objects to another. 


// 4. Sort users by age

// const sortByAge = (list_of_objects) => {
//   // a and b are 2 objects we are comparing loop\
//   // ex: a and b are John and Pete
//   // a.age - b.age sorts order by age, going to change the array when we first call it, modify old array
//   let sortedAges = list_of_objects.sort((a,b) => a.age - b.age );
//   return sortedAges;
// }



// // Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// // For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// console.log(sortByAge(arr));

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete


// 5. Get average age

// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// ************************************* SOLUTION! ************************************************************?

// const getAverageAge = (users) => {
//     let totalAge = 0;
//     for (let i = 0; i < users.length; i++) {
//         totalAge += users[i].age;
//     }

//     let total_length = users.length;
//     return parseFloat(totalAge)/(total_length);
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };
// let mar = { name: "Mary", age: 20 };
// let users = [john,pete,mary,mar];
// console.log(getAverageAge(users));


// 6. Filter unique array members

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//   /* your code */
  
//   // set is a list structure similar to array, except CANNOT have 2 of the same variables
//   // CANNOT index a set!
//   // ... takes array object, break out all elements in array as if we typed in commas between them
//   // 
//   let uniqueElements = [...new Set(arr)];
//   return uniqueElements;
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(( unique(strings) )); // Hare, Krishna, :-O


// 7. Sum object properties

// We have an object storing salaries of our team:

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0

// *********************************** SOLUTION ******************************************************/

// const total_salaries = (team) => {
//   // let sum = Object.values(team);
//   let total_salaries = 0;
//   for (salary in team) {
//     total_salaries += team[salary];
//   }

//   // if salaries is empty, return 0!
//   if ((Object.values(team)).length == 0) {
//     return "EMPTY!";
//   }

//   return total_salaries;

  

// let salaries = {

// }
// console.log(total_salaries(salaries));





// 8. Multiply numeric properties by 2

// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

// ************************************************ SOLUTION **********************************************************?

// const multiplyNumeric = (obj) => {
//   for (key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] = obj[key]*2;
//     };
//   }
//   return obj;
  
// }

// // For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// console.log(multiplyNumeric(menu));

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.


// 9. Create new Accumulator

// ex:
// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   // method
//   this.sayHi = function() {
//       console.log(`Hello my name is ${this.name}`)
//   }

// }

// let superUser = new User("Jack", 37);
// console.log(superUser["name"]);
// console.log(superUser["age"]);

// superUser.sayHi();
  
//   Create a constructor function Accumulator(startingValue).
  
//   Object that it creates should:
  
//   Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
//   The read() method should use prompt to read a new number and add it to value.
//   In other words, the value property is the sum of all user-entered values with the initial value startingValue.
  
//   Here’s the demo of the code:
  
//   let accumulator = new Accumulator(1); // initial value 1
//   accumulator.read(); // adds the user-entered value
//   accumulator.read(); // adds the user-entered value
//   alert(accumulator.value); // shows the sum of these values

// **************************************  SOLUTION! ******************************************************/

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function() {
//     let newValue = parseFloat(window.prompt(("Enter a value: ")));
//     this.value += newValue
//   }
// }

// let total = new Accumulator(13);
// total.read();
// total.read();
// total.read();
// total.read();
// total.read();
// console.log(total.value);







