// lern Promises
// async  await
//settimeout and setinterval

let prm = new Promise((resolve,rejected)=>{
        setTimeout(()=>{
               rejected(); /// crete a logic 
        },3000)
});

  prm.then(()=>{
     console.log("haiiiiii") // resolve hoga jo bi work hoga is function se hoga 
 });

  prm.catch(()=>{
     console.log("hai world"); //rejected hoga jo bi work hoga is function se hoga 
 });


// 2.async await => Promise pe kamm karta hai ;

function getData(){
    
 return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10);
            if(num<5){
                resolve(true)
            }
            else{
                rejected(false);
            }
        },3000)
});

}

async function abcd() {
   let num=  await getData();
   console.log(num);
}
abcd();




