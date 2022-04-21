function currentTime() {
  let date = new Date(); 
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let periodOfTheDay = "AM";

  if(hour > 12){
      hour = hour - 12;
      periodOfTheDay = "PM";
   }

   hour = (hour < 10) ? "0" + hour : hour;
   minutes = (minutes < 10) ? "0" + minutes : minutes;
   seconds = (seconds < 10) ? "0" + seconds : seconds;
    
   let time = hour + ":" + minutes + ":" + seconds + " " + periodOfTheDay;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();


// slider
const slideItems = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('#prev-slide-btn');
const nextBtn = document.querySelector('#next-slide-btn');
let activeIndex = 0;

initSlider();
function initSlider(){
  prevBtn.addEventListener('click', showPrevSlide);
  nextBtn.addEventListener('click', showNextSlide);
  document.addEventListener('keyup', e => {
    if(e.code === 'ArrowRight'){
      showNextSlide();
    }
  })
}

function renderSliders() {
  slideItems.forEach((item, i) => {
    if(activeIndex === i){
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
}

function showPrevSlide(){
  activeIndex = activeIndex - 1;
  if(activeIndex < 0){
    activeIndex = slideItems.length - 1;
  }
  renderSliders();
}

function showNextSlide() {
  activeIndex = activeIndex + 1;
  if(activeIndex > slideItems.length - 1){
    activeIndex = 0;
  }
  renderSliders();
}

let autoSlider = document.querySelector("#startAutoSliding")
// autoSlider = setInterval(function(){showNextSlide()}, 3000);

let stopSlide = document.querySelector("#stopAutoSliding");
// stopSlide = clearInterval(autoSlider);

autoSlider.onclick = function(){
autoSlider = setInterval(function(){showNextSlide()}, 3000);
};

stopSlide.onclick = function() {
clearInterval(autoSlider);
};
