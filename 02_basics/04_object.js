// const tinderUser =  new Object()
const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name ="Sammy" 
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "ayush@google.com",
    fullname :{
        userfullname :{
            firstname : "Ayush",
            lastname : "Tiwari"

        }

    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1:"a" , 2:"b"}
const obj2 = { 3:"a" , 4:"b"}

//  const obj3 ={ obj1 , obj2}
// const obj3 =Object.assign( {} ,obj1 , obj2)

const obj3 = { ...obj1, ...obj2}
//  console.log(obj3);
 
const user =[
    {
        id : 1,
        email :"a@gmail.com"
    } ,
    {
        id : 2,
        email :"b@gmail.com"
    }

]
user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course ={
    coursename : "js in hindi",
    price :"999",
    courseInstructor :"Hitesh Choudhary"
}

//course.courseInstructor
const {courseInstructor : Instructor} = course
// console.log(courseInstructor)
console.log(Instructor);


// {
//     "name" :"Hitesh",
//     "coursename":"Js in Hindi",
//     "price":"Free"
// }

[
    {},
    {},
    {}
]

