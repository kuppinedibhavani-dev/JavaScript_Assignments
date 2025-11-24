//if (true) {
  //let x = 10;
  //var y = 20;
//}
//console.log(y);
//console.log(x);
//Explanation:
//1.Y print 20 it is declared using var
//var is function scoped not block scoped so even if y is inside the if block it "escapes"outside
//2.X is declared using let its is block scoped so,it only exists inside the if block is outside--Reference error occurs

//Optional chaining
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);
//Explanation:
//1.profile?.user?.details?.email--All level exist it prints the email
//2.profile?.user?.details?.phone--phone doesnt exist so instead oferror,it prints undefined


//Without optional chaining
//const student={
  //  name:"Bhavani",
    //info:{
      //  city:"Hyderabad"
    //}
//};
//console.log(student.info.address.street);//this will cause a runtimeerror because address is missing--undefined

//with optional chaining
const student={
    name:"Bhavani",
    info:{
        city:"Hyderabad"
    }
};
console.log(student.info?.address?.street);