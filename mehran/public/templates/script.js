
let slides = document.querySelectorAll('.testimonial');
let index =0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prew(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
} 

function toggleMenu() {
  var nav = document.querySelector('nav');
  nav.classList.toggle('show');
}

const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('shows');
    }
    else{
      entry.target.classList.remove('shows');
    }
  });
});

const sectionEle=document.querySelectorAll('.section');
sectionEle.forEach((el)=> observer.observe(el));

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 70,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 1500
  });

  var textWrapper = document.querySelector('.ml3');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml3 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 70 * (i)
    }).add({
      targets: '.ml3',
      opacity: 0,
      duration: 3000,
      easing: "easeOutExpo",
      delay: 2000
    });
    
   