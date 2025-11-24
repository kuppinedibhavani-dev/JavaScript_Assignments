//Template Literals and Epressions
// //1A.Template Literals with expression
//console.log(`5 plus 7 is equal to ${5+7}`);

//1B.Multi line string
//const message=`
//This is a multi-line string.
//We can write on multiple lines easily!`;
//console.log(message);

//1C.Print full name
//const firstName="Jhon";
//const lastName="Doe";
//console.log(`Full name:${firstName} ${lastName}`);

//2 Arrow Functions and this
//2A.Arrow function
//const square=n=>n*n;

//2B.this function
//const obj = {
  //value: 50,
  //test: () => console.log(this.value)
//};
//obj.test();
//Explanation:It returns undefined because in js arrow function do not bind with this

//2C.Correct way
//const object={
  //  value:50,
    //test:function(){
      //  console.log(this.value);
    //}
//};
//object.test();

//3.Rest,Spread,copying objects
//3A.Shallow copy of object
//const product = { name: "Pen", price: 10 };
//const copyProduct={...product};
//console.log(copyProduct);

//3B.Merge two objects using spread
//const a = { x: 1 };
//const b = { y: 2 };
//const merged={...a,...b};
//console.log(merged);

//3C.Rest operator
//function maxVlaueOfNum(...nums){
  //  let max=nums[0];
    //for(let n of nums){
      //  if(n>max){
        //    max=n;
        //}
    //}
    //return max;
//}
//console.log(maxVlaueOfNum(5,12,16,14));

//4.Destructuring and optional chaining
//4A.Array extract
//const arr=[10,20,30];
//const[A,B]=arr;
//console.log(A);
//console.log(B);

//4B.Extract Brand
//const laptop = { brand: "Dell", ram: "8GB" };
//const {brand}=laptop;
//console.log(brand);

//4C.Optional chaining
//const info={
  //  name:"Bhavani",
    //age:25
//};
//console.log(info?.address?.city);

//5.Scoping
//5A.Var
//for (var i = 0; i < 3; i++) {}
//console.log(i);//3

//5B.Let
//for (let j = 0; j < 3; j++) {}
//console.log(j);//Reference error j is not defined

//5C. Why is const used for values that should not be reassigned?
//Const cant be changed it will prevent accidental errors 

//6.Ternary operator
//let kmph=75;
//let speed=kmph>60?"fast":"normal";
//console.log(speed);

//Age
//let age=20;
//let result=age>=18?"Adult":"Minor";
//console.log(result);

//Nested ternary
//let num=-5;
//let result=num>0
//?"Positive"
//:num===0
//?"Zero"
//:"Negative";
//console.log(result);

//7.Spred,Rest,Array
//7A.Array using spread
//const nums=[1,2,3];
//const newNums=[...nums,4,5];
//console.log(newNums);

//7B.combining array using spread
 const A = ["x","y"];
 const B = ["z"];
const result=[...A,...B];
console.log(result);

//7C.Rest
function printNames(...names){
    return names;
}
console.log(printNames("A","B","C"));

//8.Object destructuring and shorthand
//8A.Destructure
//const user = { id: 101, status: "active" };
//const {id,status}=user;
//console.log(id);
//console.log(status);

//8B.shorthand
const id=101;
const role=id;
const user={id,role};
console.log(user);

