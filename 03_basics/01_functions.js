function sayMyName(){
    console.log("A");
    console.log("y");
    console.log("u");
    console.log("s");
    console.log("h");
}
// sayMyName()

// function addTwoNumber (number1 ,number2){
//     console.log(number1 + number2);
// }
function addTwoNumber (number1 ,number2){
    //    let result = number1 + number2
    //    return result;
    return number1+number2
      
       
}
const result = addTwoNumber(2 , 3)
// console.log("Result :" ,result);

function userLoginMessage (username ="Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(userLoginMessage())


function calculateCartPrice (val1 , val2 ,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500 ,600));


const user = {
    username :"Hitesh",
    price : 199
}

function handleObject(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
     
}
handleObject(user);

//hadle object user 
handleObject({
    username :"sam",
    price :399

})

const myNewArray= [20 ,30 ,40 ,50]

function returnSecondValue (getArray){
    return getArray[1]

}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([20 ,30 ,40 ,50]));

