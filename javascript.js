var harts = document.getElementsByClassName('fa-heart');
var plus = document.querySelectorAll('.plus-btn');
var moins = document.querySelectorAll('.minus-btn');

for(let i =0; i<plus.length; i++){
    plus[i].addEventListener("click",function(){
    plus[i].nextElementSibling.innerHTML++;
    total();
    });
    
}



for(let i = 0; i<moins.length; i++){
    moins[i].addEventListener("click",function(){
        if (moins[i].previousElementSibling.innerHTML>0)
        moins[i].previousElementSibling.innerHTML--;
        total();
    });
   
}





for (let hart of harts) {
       hart.addEventListener("click", function () {
        hart.classList.toggle("active");
   });
     }





function total(){
     var quantity = document.getElementsByClassName('qute');
var unitPrice = document.getElementsByClassName('price');
var totalPrice = document.querySelector('.total-price');
     let somme = 0;
     for (let i = 0; i < quantity.length; i++) {
        somme += quantity[i].innerHTML * unitPrice[i].innerHTML;
      }
      totalPrice.innerHTML = somme; 
    }
 























