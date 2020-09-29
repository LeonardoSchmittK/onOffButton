let btn = window.document.querySelector('#button-toggle');
let circle = window.document.querySelector('.circle');
function putOn() {
   circle.style.marginLeft = '70px';
   
   circle.onclick = () =>{
   circle.style.marginLeft = '0px';    
   }
   
}

