const nav = document.querySelector('.nav')
fetch('/nav.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})

// document.addEventListener("DOMContentLoaded", function() {
//     const texts = document.querySelectorAll('.text-container p');
  
//     function displayTexts(index) {
//       if (index < texts.length) {
//         setTimeout(function() {
//           texts[index].classList.remove('hidden');
//           displayTexts(index + 1);
//         }, 1000); // Adjust delay as needed (in milliseconds)
//       }
//     }
  
//     displayTexts(0);
//   });
  
const texts = ["Welcome", "We are here to help you", "Join Us", "Explore With Musical Harmonium"];
let index = 0;

function changeText() {
  const element = document.querySelector('.animated-text');
  element.textContent = texts[index];
  index = (index + 1) % texts.length;
}

setInterval(changeText, 2000); // Change text every 2 seconds


function back(){
  window.history.back();
}