// Singelton

//object literals 

const mysym = Symbol("key1")


const jsuser = {
    name : "Ayush",
    "full name" : "Ayush Tiwari",
    [mysym] : "mykey1",
    age :21,
    location : "Bihar",
    email : "ayush@google.com" ,
    isLoggedIn : false ,
    lastLoginDays :["Monday" , "Saturday"]

}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[mysym]);

jsuser.email ="ayush@tiwari.com"
// Object.freeze(jsuser)
jsuser.email = "ayush@kumar.com"
console.log(jsuser);

jsuser.greeting =function(){
    console.log("Hello JS user");
    
}
console.log(jsuser.greeting());

jsuser.greetingTwo =function(){
    console.log(`Hello JS user ${this.name}`);
    
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());





