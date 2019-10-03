//non primitive datatype or Object reference...🤖
Array
Object
Function
Math
Date
RegExp
JSON

//
let languages=['java','nodejs','jscript',undefined,null,true,'reactjs'];
console.log(languages);
console.log(languages[3]);
console.log(languages.length);
languages.pop();
console.log(languages);

//
var array1 =new Array('nodejs','angularjs','reactjs','python','expressjs');
console.log(array1);

//After ECMAScript 6
var array3= Array.of('java','python','c++','c#','.net');
console.log(array3);
var array4=Array(7);
console.log(array4);

//check types of array
var array5= 'ranjan';
console.log(typeof array1, typeof array4, typeof array3)
console.log(Array.isArray(array4));
console.log(Array.isArray(array1));
console.log(Array.isArray(array3));
console.log(Array.isArray(array5));
console.log(Array.isArray({foo:123}));

//String to Array
var str="Hello World!";
var strArray1=str.split("");//es5
var strArray2=str.split(" ");
var strArray3=str.split("  ");
console.log(strArray1);
console.log(strArray2);
console.log(strArray3);

var es6way=Array.from(str);//es6
console.log(es6way);

let[...akash]=str;//array destructuring//spread operator
console.log(akash.toString());
console.log(akash.join('-'));


//
function test(){

}