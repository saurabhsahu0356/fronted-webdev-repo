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
