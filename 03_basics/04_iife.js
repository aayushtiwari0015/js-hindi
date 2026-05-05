//Immediately Invoked Funftion Expression

(function chai(){
    console.log(`DB Connected`);
    
})();

( (name) =>{
    console.log(`DB Connected Two ${name}`);
    
})('Ayush')