function openFeatures(){
let allElem = document.querySelectorAll(".elem")
 let allfullElem = document.querySelectorAll(".fullElem")
 let allfullElemBackBtn = document.querySelectorAll(".fullElem .back")

allElem.forEach(function(elem){
   elem.addEventListener('click',function(){
     allfullElem[elem.id].style.display='block'
   });

});

allfullElemBackBtn.forEach(function(back){
  back.addEventListener('click',function(){
     allfullElem[back.id].style.display='none'
  })
});

}

// openFeatures();

let form =document.querySelector('.addTask form');
let taskInput = document.querySelector('.addTask form #same')
let taskDetailsInput = document.querySelector('.addTask form textarea')
let taskcheckbox = document.querySelector('.addTask form #check')


form.addEventListener('submit',function(det){
  det.preventDefault();
  console.log(taskInput.value,taskDetailsInput.value )
  console.log(taskcheckbox.value)
});

