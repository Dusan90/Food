jQuery(document).ready(function(){

    "use strict"


    $(".head").ripples({
        dropRadius: 20,
        perturbance: 0.50,
      });


      
      $('.prnt').magnificPopup({delegate:'img', type:'image'});
});

const pop = document.querySelector('.pop')

const ord = document.querySelector('.dugme')
ord.addEventListener('click', order)

const naruci = document.querySelector('.naruci')
naruci.addEventListener('click', order)


function order(e){
  e.preventDefault()
  pop.style.display = 'block'
}


const posalji = document.querySelector('.posPor')
posalji.addEventListener('click', placeord)

function placeord(e){
  e.preventDefault()
  pop.style.display = 'none'
  
}