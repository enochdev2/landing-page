const forms = document.querySelector('.form');
const naame = document.querySelector('.name');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');




forms.addEventListener("submit", function(e){
  //  e.preventDefault();
  const  nameEl = naame.value.length;
  const emailEl = email.value.length;
  const phoneEl = phone.value.length;
   //console.log('clicked

   if(nameEl === 0) {
    e.preventDefault();
     alert('Enter your name please');
     console.log('wht');
   }
   if(emailEl === 0) {
    e.preventDefault();
     alert('Enter your email please');
     console.log('wht');
   }
   if(phoneEl === 0) {
    e.preventDefault();
     alert('Enter your phone number please');
     console.log('wht');
   }
   
})
/*forms.addEventListener('submit', function(e){
});*/