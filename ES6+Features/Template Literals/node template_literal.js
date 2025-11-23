//Template Literals
const username="Bhavani";
const course="JavaScript";
console.log(`Hello ${username}. Welcome to the ${course} course`)

//covert to shorthand syntax
const name="Sam";
const age=21;
const student={
    name,
    age,
    greet(){
        console.log("Hello");
    }
};

//Arrow function shorthand
const getFullName=(first,last)=>$(first)(last);