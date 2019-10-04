// Object
// There are seven types of datatypes Javascript,
// Six of them are primitive, because their values contain only a single thing (be it a string or a number)..
// 
// In contrast, objects are used to store keyed collections of various data and more complex entities.
// In Javascript, objects penetrate almost every aspect of the languages.
//
// An object can be created with figure brackets{...} with an optional list of proporties. 
// A property is a "key:value" pair, where key is a string (also called a "property name"), and valiue can be anything


//
let users={
    name:'anika',
    age:20,
    company:'isteer',
    salary:20000,
    place:'bruhat bangaluru',
    skills:['java','js','html','css','nodejs','reactjs','hiking']
}
console.log(users.place);
console.log(users.skills);

//Creating an object with constructor way
let obj=new Object();
obj.name='raghav';
obj.job='singing';
obj.salary='1000000';
console.log(obj);

//
let name='anurag kashyap';
let movie='gangs of wasseypur';
let rating=8.9;
let director={
    name,
    film:movie,
    rating,
    budget:50000000,
};
console.log(director);

//
{
    console.log('hello jaan');
}//not object this is IIFE in es6
var obj2={
    //key : value
}//object

//
var user2=[
    {
        name:'radhe',
        age:30,
        company:'bollywood',
        salary:75000,
        desginATION:'support',
        dob:21/02/1980,
        location:'mandwa',
        gender:'female',
        //photo: src
    },
    {
        name:'ayushmann',
        age:35,
        company:'bollywood',
        salary:7500000,
        desginATION:'lead',
        dob:28/10/1982,
        location:'delhi',
        gender:'male',
        //photo: src
    },
    {
        name:'radhe',
        age:30,
        company:'bollywood',
        salary:75000,
        desginATION:'support',
        dob:21/02/1980,
        location:'mandwa',
        gender:'female',
        //photo: src
    },
    {
        name:'radhe',
        age:30,
        company:'bollywood',
        salary:75000,
        desginATION:'support',
        dob:21/02/1980,
        location:'mandwa',
        gender:'female',
      //  photo: src
    }
]
console.log(user2);

//
let user3={
    'user-name':'shashi',
    'user name':'tharoor',
    for: 'hey for',
    while: ' hey while',
    if: 'hey if'
};
console.log(user3);