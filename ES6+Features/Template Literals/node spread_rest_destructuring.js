//Spread operator
arr1 = [1, 2, 3];
arr2 = [4, 5];
const result=[...arr1,...arr2];
console.log(result);

//rest operator
const sumNums=(...nums)=>{
    let sum=0;
    for(let n of nums){
        sum+=n;
    }
    return sum;
};
console.log(sumNums(1,2,3,4));

//Destructuring_Multi level
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
const{
    name,
    address:{city,pin}
}=user;
console.log(name);
console.log(city);
console.log(pin);