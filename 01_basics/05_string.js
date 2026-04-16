const name ="Ayush Tiwari "
const repoCount = 5

// console.log(name + repoCount + "value")

console.log(`hello my name is ${name} my repo count is ${repoCount}`);

const gameName = new String ('Ayush-AT')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const newString= gameName.substring(0,4);
console.log(newString)
const anotherString= gameName.slice(-7,4);
console.log(anotherString);

const newStringOne = ("    Ayush    ")
console.log(newStringOne)
console.log(newStringOne.trim());


const url = "https://ayush.com/ayush%20tiwari";
console.log(url.replace ('%20','-'))

console.log(url.includes('ayush'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'))