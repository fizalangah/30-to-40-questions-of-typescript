// QUESTION NUMBER 31;
//  Array Operations: Declare an array of numbers, initialize it with [1, 2, 3, 4, 5], and print each element of the array using a loop.

//   .....SOLUTION......;
let numberarray:number[] = [1,2,3,4,5];

numberarray.forEach(element => {
    console.log(element);
});
// OR;

let numberarray1:number[] = [1,2,3,4,5];
for(let i = 0; i < numberarray1.length; i ++){
  console.log(numberarray1[i]);
}

// question number 32;
// Type Assertion: Convert a variable of type any to type string.

//    .....solution....;
let variable:any = "hello";

let typestring:string = variable as string;
 console.log(typestring);

/// OR;

 let variable2:any = 7;
 let numbervariable:number = <number> variable2;
 console.log(numbervariable);
console.log(typeof numbervariable);

///  question number 33;
//type Union: Define a function that accepts either a string or a number as a parameter and returns a string representation of the value.
 //    .....solution.....;

 let myfunction3 = ((input:string|number):string=>{
  if( typeof input === 'string' ){
    return `string: ${input}`
  }
  else if ( typeof input === 'number'){
    return `number: ${input. toString()}`
  }
  else{
    return 'unknown type'
  }

 })
 console.log(myfunction3("hello"));
 console.log(myfunction3(123));
//  console.log(myfunction3(true));
 
// QUESTION NUMBER 34;
// Generics: Write a generic function called reverseArray that takes an array of any type and returns the reverse of that array.

//    .... SOLUTION....;
function reverseArray<T>(str:T[]):T[] {
   return str.reverse() ;     
}
 const orignalarray:string[] = ["hellio","world"]
 console.log(reverseArray(orignalarray))

// question number 35;
// Type Assertion with Arrays: Convert an array of type any[] to an array of type string[].

//    ....solution....;

let anytypearray:any[] = ["hello","fiza","how","are","you"];

let stringtypearray:string[] = <string[]> anytypearray;

console.log(stringtypearray);


// QUESTION NUMBER 36;
// Type Guard with Objects: Write a function that takes an argument of type object and checks if it has a property named name.

//     ....SOLUTION...,

function hasnameProperty(obj:object):boolean {
    return obj.hasOwnProperty('name');
}

const OBJ1 = {NAME : "FIZA",age: 22}
const obj2 = {age : 33};
console.log(hasnameProperty(OBJ1))
console.log(hasnameProperty(obj2))

// QUESTION NUMBER 37;
// Optional Properties: Define an interface representing a Book with properties title (string), author (string), and year (number). Make year an optional property.

//   .... SOLUTION....;
interface book{
    tittle:string;
    authoe:string;
    year?:number;
}

 let mybook = {
tittle : "poverty",
author: "sir kamran",
year : 33,

}
console.log(mybook.year);
// console.log(typeof year); //// cannot find type beacuse type of year is optional;
  

// QUESTION NUMBER # 38;
//Intersection Types: Define an interface representing a Person with properties name (string) and age (number), and another interface representing an Employee with properties id (number) and name (string). Create a third interface representing both 

///    ....SOLUTION.....,
interface Person{
    name3:string,
    age3:number,
}
interface Employee{
id:number,
name4:string,
}
interface third extends Person ,Employee{ };
const myintro:third = {
    name3 : "fiza",
    age3 : 22,
    id : 3,
    name4 : "alia"

}
console.log(myintro);

// question number # 39;
//Type Aliases: Create a type alias for a function that takes two parameters of type number and returns their sum.

//  ...solution...;

type addfunction = (a:number,b:number)  => number;
const add:  addfunction = (a , b) => a + b;

console.log(add(7,6));

// QUESTION NUMBER # 40;
// Question: Write a function called greet that takes a parameter name of type string and returns a greeting message including the provided name. For example, if the name is "Alice", the function should return "Hello, Alice!".


//    ....SOLUTION ....;
let greet = ((name:string) =>{
     return `hello ${name}`
})

const great = greet(" Alice!")

console.log(great);