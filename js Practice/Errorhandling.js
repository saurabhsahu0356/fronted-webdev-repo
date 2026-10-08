//weather normal code  Pratice
async function getWeather( city){
try{

  let apikey=`97a90e28a2b02a30ee27f5714c6ff322`;

  let raw= await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
   );

   if(!raw.ok){
    throw new Error(" city not found something went wrong");
   }

   let realdata=  await raw.json();
   if(realdata.main.temp <0){
    console.warn(`too cold out there...${realdata.main.temp}°C`);
   }
   else if(realdata.main.temp > 32){
    console.warn(`too hot out there...${realdata.main.temp}°C`);
   }
   else{
    console.log(realdata);
   }
}

catch(err){
  console.error(err.message);
}
}

 getWeather("Yakutsk, Russia ")


// bulak email send memic

let User =["saurabh@gamil.com", "kumar@gmail.com", "sonu@gmail.com",
          "mar@gmail.com","ranu@gmail.com","Janam@gmail.com","harmi@gmail.com",
];
 
function sendEmail(email){
      return new Promise((resolve,reject) =>{
        let time= Math.floor(Math.random()*3);
        setTimeout(()=>{
             let pra= Math.floor(Math.random()*10);
             if(pra <= 6){
              resolve("email sucsesful send");
             }
             else{
               reject("Email not sent..")
             } 

        },time*1000);
      });
}

sendEmail("saurabh@gmail.com")

.then(function(data){
  console.log(data);
})

.catch(function(err){
  console.log(err);
})
