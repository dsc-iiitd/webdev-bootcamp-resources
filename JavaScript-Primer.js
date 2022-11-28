///////////////////////////////////
// JavaScript Primer
///////////////////////////////////


///////////////////////////////////
// Data Types
///////////////////////////////////

// Single-line comments start with two slashes.
/* Multiline comments start with slash-star,
   and end with star-slash */

// Statements can be terminated by ;
// Because those cases can cause unexpected results, we'll keep on using
// semicolons in this guide.

// JavaScript has one number type (which is a 64-bit IEEE 754 double).
// Doubles have a 52-bit mantissa, which is enough to store integers
// up to about 9✕10¹⁵ precisely.
3; // = 3
1.5; // = 1.5

// Some basic arithmetic works as you'd expect.
1 + 1; // = 2
0.1 + 0.2; // = 0.30000000000000004
8 - 1; // = 7
10 * 2; // = 20
35 / 5; // = 7

// Including uneven division.
5 / 2; // = 2.5

// And modulo division.
10 % 2; // = 0
30 % 4; // = 2
18.5 % 7; // = 4.5

// Bitwise operations also work; when you perform a bitwise operation your float
// is converted to a signed int *up to* 32 bits.
1 << 2; // = 4

// Precedence is enforced with parentheses.
(1 + 3) * 2; // = 8

// There are two special not-a-real-number values:
Infinity; // result of e.g. 1/0
-Infinity; // result of e.g. -1/0

// TRY IT OUT: what do you get when you do 0/0 ?

// There's also a boolean type.
true;
false;

// Strings are created with ' or ".
'abc';
"Hello, world";

// Negation uses the ! symbol
!true; // = false
!false; // = true

// Equality is ===
1 === 1; // = true
2 === 1; // = false

// Inequality is !==
1 !== 1; // = false
2 !== 1; // = true

// More comparisons
1 < 10; // = true
1 > 10; // = false
2 <= 2; // = true
2 >= 2; // = true

// Strings are concatenated with +
"Hello " + "world!"; // = "Hello world!"

// ... which works with more than just strings
"1, 2, " + 3; // = "1, 2, 3"
"Hello " + ["world", "!"]; // = "Hello world,!"

// and are compared with < and >
"a" < "b"; // = true

// Type coercion is performed for comparisons with double equals...
"5" == 5; // = true
null == undefined; // = true

// ...unless you use ===
"5" === 5; // = false
null === undefined; // = false

// ...which can result in some weird behaviour...
13 + !0; // 14
"13" + !0; // '13true'

// You can access characters in a string with `charAt`
"This is a string".charAt(0);  // = 'T'

// ...or use `substring` to get larger pieces.
"Hello world".substring(0, 5); // = "Hello"

// `length` is a property, so don't use ().
"Hello".length; // = 5

// TRY IT OUT: print the middle character of a given string

// There's also `null` and `undefined`.
null;      // used to indicate a deliberate non-value
undefined; // used to indicate a value is not currently present (although
           // `undefined` is actually a value itself)

// false, null, undefined, NaN, 0 and "" are falsy; everything else is truthy.
// Note that 0 is falsy and "0" is truthy, even though 0 == "0"


///////////////////////////////////
// 2. Variables, Arrays and Objects
///////////////////////////////////

// Variables are declared with the `let` keyword. JavaScript is dynamically
// typed, so you don't need to specify type. Assignment uses a single `=` character.
let someVar = 5;

// If you leave the let keyword off, you won't get an error...
someOtherVar = 10; // adds a property on the global object
// ...but your variable will be created in the global scope, not in the scope
// you defined it in.

// If you dont want the value of a variable to change, you can use the const keyword
const someThirdVar = 10;
someThirdVar = 5; // gives error


// Variables declared without being assigned to are set to undefined.
let someFourthVar; // = undefined

// If you want to declare a couple of variables, then you could use a comma
// separator
let someFifthVar = 2, someSixthVar = 4;

// There's shorthand for performing math operations on variables:
someVar += 5; // equivalent to someVar = someVar + 5; someVar is 10 now
someVar *= 10; // now someVar is 100

// and an even-shorter-hand for adding or subtracting 1
someVar++; // now someVar is 101
someVar--; // back to 100

// Arrays are ordered lists of values, of any type.
let myArray = ["Hello", 45, true];

// Their members can be accessed using the square-brackets subscript syntax.
// Array indices start at zero.
myArray[1]; // = 45

// Arrays are mutable and of variable length.
myArray.push("World");
myArray.length; // = 4

// Add/Modify at specific index
myArray[3] = "Hello";

// Add and remove element from front or back end of an array
myArray.unshift(3); // Add as the first element
someVar = myArray.shift(); // Remove first element and return it
myArray.push(3); // Add as the last element
someVar = myArray.pop(); // Remove last element and return it

// Join all elements of an array with semicolon
let myArray0 = [32,false,"js",12,56,90];
myArray0.join(";"); // = "32;false;js;12;56;90"

// Get subarray of elements from index 1 (include) to 4 (exclude)
myArray0.slice(1,4); // = [false,"js",12]

// Remove 4 elements starting from index 2, and insert three strings
// "hi","wr" and "ld"; return removed subarray
myArray0.splice(2,4,"hi","wr","ld"); // = ["js",12,56,90]
// myArray0 === [32,false,"hi","wr","ld"]

// TRY IT OUT: Extract the second half of and array and join the elements with an '*'. Display the result

// map, filter, reduce... later


// JavaScript's objects are equivalent to "dictionaries" or "maps" in other
// languages: an unordered collection of key-value pairs.
let myObj = {key1: "Hello", key2: "World"};

// Keys are strings, but quotes aren't required if they're a valid
// JavaScript identifier. Values can be any type.
let myObj = {myKey: "myValue", "my other key": 4};

// Object attributes can also be accessed using the subscript syntax,
myObj["my other key"]; // = 4

// ... or using the dot syntax, provided the key is a valid identifier.
myObj.myKey; // = "myValue"

// Objects are mutable; values can be changed and new keys added.
myObj.myThirdKey = true;

// If you try to access a value that's not yet set, you'll get undefined.
myObj.myFourthKey; // = undefined

// What is json? 
// JavaScript Object Notation
// Used extensively to transfer information across the internet
// A simple JavaScript object. Functions not allowed


// TYR IT OUT: Create a person object with keys 'name', 'age' and 'weight' (any default value). Then change the 'name' to some other value. Print the object

///////////////////////////////////
// 3. Logic and Control Structures
///////////////////////////////////

// The `if` structure works as you'd expect.
let count = 1;
if (count == 3){
  // evaluated if count is 3
} else if (count == 4){
  // evaluated if count is 4
} else {
  // evaluated if it's not either 3 or 4
}

// As does `while`.
while (true){
  // An infinite loop!
}

// The `for` loop is the same as C and Java:
// initialization; continue condition; iteration.
for (let i = 0; i < 5; i++){
  // will run 5 times
}

let description = "";
let person = {fname:"Paul", lname:"Ken", age:18};
for (let x in person){
  description += person[x] + " ";
} // description = 'Paul Ken 18 '

// && is logical and, || is logical or
if (house.size == "big" && house.colour == "blue"){
  house.contains = "bear";
}
if (colour == "red" || colour == "blue"){
    // colour is either red or blue
}

// && and || "short circuit", which is useful for setting default values.
let name = otherName || "default";

// The `switch` statement checks for equality with `===`.
// Use 'break' after each case
// or the cases after the correct one will be executed too.
grade = 'B';
switch (grade) {
  case 'A':
    console.log("Great job");
    break;
  case 'B':
    console.log("OK job");
    break;
  case 'C':
    console.log("You can do better");
    break;
  default:
    console.log("Oy vey");
    break;
}

// TRY IT OUT: Loop through the person object and print only the values that have type 'number'. (use typeof operator)

///////////////////////////////////
// 4. Functions, Scope and Closures
///////////////////////////////////

// JavaScript functions are declared with the `function` keyword.
function myFunction(thing){
  return thing.toUpperCase();
}
myFunction("foo"); // = "FOO"

// Note that the value to be returned must start on the same line as the
// `return` keyword, otherwise you'll always return `undefined` due to
// automatic semicolon insertion. Watch out for this
function myFunction(){
  return // <- semicolon automatically inserted here
  {thisIsAn: 'object literal'};
}
myFunction(); // = undefined


// JavaScript has scope on code blocks:

function myFun() {
  let x = 1;
  if (true){
    let i = 5 + x; // can access x
  }
  x = i + x; // error i is not defined
}

console.log(i); // error as i is not accessible outside the function 

// There is a new syntax for functions in ES6 known as "lambda syntax" (or arrow functions).  This allows functions to be defined in a lexical scope like with variables defined by const and let. 

const isEven = (number) => {
  return number % 2 === 0;
};

isEven(7); // false

// The "equivalent" of this function in the traditional syntax would look like this:

function isEven(number) {
  return number % 2 === 0;
};

// I put the word "equivalent" in double quotes because a function defined using the lambda syntax cannnot be called before the definition.

// The following is an example of invalid usage:

add(1, 8);

const add = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};



// Callbacks
// JavaScript functions are first class objects, so they can be reassigned to different variable names and passed to other functions as arguments - for example, when supplying an event handler:
function myFunction(){
  return 'I am a function!';
}

function caller(someFun) {
  someFun();
}

caller(myFunction);

// Closures happen when an inner function has access to the parent functions properties even when the parent function has exited.

function parentFun() {
  let name = 'Parent';
  function childFun() {
    console.log(name);
  }

  return childFun;
}

let childFun = parentFun();
childFun();

// JavaScript is a single-threaded non-blocking asynchronous concurrent programming language

// async-await


function someFun() {
  for (let i = 0; i < 100; i++) {
  }
  return Promise.resolve();
}

async function myFun() {
  let value = await someFun();
  console.log(value);
}

console.log(someFifthVar);

