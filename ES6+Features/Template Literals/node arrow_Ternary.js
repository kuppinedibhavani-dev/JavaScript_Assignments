const isEven=(n)=>{
    if(n%2===0){
        return true;
    }else{
        return false;
    }
};
console.log(isEven(10));
console.log(isEven(3));

//ternary operator
const marks=40;
const result=marks>=35?"Pass":"fail";
console.log(result);

//Arrowfunction using ternary opeartor
const greetName=(name)=>{
    console.log(name?`Hello,${name}`:"Guest")
};
greetName("Bhavani");
greetName();