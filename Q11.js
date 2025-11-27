function displayMessage(name){
    console.log("Hello,"+name);
}
function getUSerInput(callback){
    setTimeout(()=>{
        let username="Alice";
        callback(username);
    },1000);
}
getUSerInput(displayMessage);