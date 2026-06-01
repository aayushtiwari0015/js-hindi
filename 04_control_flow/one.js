//if 

// const isuserloggedin = true
// const temperature = 41
// if(temperature ==41){
//     console.log("executed");
//     console.log("less than 50");
    
// }else{
//     console.log("greater than 50");
// }

// const score = 200

// if (score>100){
//     let power ="fly"
//     console.log(`User power :${power}`);
    
// }
// console.log(`User power :${power}`);

// const balance = 1000
// if (balance>500) console.log("test") ,console.log("test2");
//it is a immature code

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy a course");
    
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged In");
    
}