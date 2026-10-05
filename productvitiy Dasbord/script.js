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