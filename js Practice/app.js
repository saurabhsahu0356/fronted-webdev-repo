// basic class structure 
class Animal{
    constructor(){
        this.name = "dog";
        this.years=5;
    }
}
Animal.prototype.sanslo=()=>{
    console.log ("hey");
}
Animal.prototype.khana =()=>{
    console.log ("hello");
}
let a=new Animal();
console.log(a);

//this ki value

//global main..... window hoti hai
console.log(this);

function abcd (){
   console.log(this); // window 
}

let obj ={
    name:"saurabh sahu",
    class: "master",
    fnc: function(){
        console.log(this)  // object hoti hai 
    }
};
obj.fnc(); 
 

//Synchronous & Asynchronous  Approach 

// Synchronous = code ko step by step Excute karta hai 
 // Asynchronous = jo kamm phale ho rha use excute karo jo time le rha use side main karke
 // agla code ya function run karo 


console.log("hai");

setTimeout(function(){
    console.log("hello bahi");
},2000);

console.log("hello world");
console.log("this is result");

// callback = ek function ak ander function ,function jo turant na chale aur kaam 
// hone ke badd chalega 

getUserInsaId(function(){
    // jab kaam complete hoga tab chalega 
});

// callBack hell = function ke ander ak aur function ,function phir ak aur function 
function abc(fnc){
   fnc();
}
abc(function(){
    console.log("hello");
})




