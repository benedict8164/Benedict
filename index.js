const navSlide = function (){
    const menu = document.querySelector(".fa-sharp");
    const list = document.querySelector(".list-item-nav");
    const menuTextAnimation = document.querySelectorAll(".list-item-nav li");
    
//menu

    menu.addEventListener("click",function (){
        list.classList.toggle("list-item-nav-active");
        menu.classList.toggle('fa-times');
         //text animation
            menuTextAnimation.forEach(function(link,index){
                if(link.style.animation){
                    link.style.animation ="";
                }else{
                    link.style.animation =`navLinkFade 0.5s ease forwards ${index/7+ 0.5}s`;
                }

        })
    })
   
   

}

navSlide();

// This code is for scroll smooth effect left to right

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show")
        }
    });

});

const hiddenElements =document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=>observer.observe(el));

// This code is for scroll smooth effect about  

const observer1 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show1");
        }
        else{
            entry.target.classList.remove("show1")
        }
    });

});

const hiddenElements1 =document.querySelectorAll(".hidden1");
hiddenElements1.forEach((el)=>observer1.observe(el));

// this code is right to left animation

const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show2");
        }
        else{
            entry.target.classList.remove("show2")
        }
    });

});

const hiddenElements2 =document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el)=>observer2.observe(el));

// smooth scroll effect home

const navLinks = document.querySelectorAll('a[href^="#home"]');
const navLinks1 = document.querySelectorAll('a[href^="#what-i-do"]');
const navLinks2 = document.querySelectorAll('a[href^="#about-me"]');
const navLinks3 = document.querySelectorAll('a[href^="#testimonials"]');
const navLinks4 = document.querySelectorAll('a[href^="#skills"]');


// Add a click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Get the target section based on the href attribute
    const target = document.querySelector(link.getAttribute('href'));

    // Scroll to the target section smoothly
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// smooth scroll effect what i do


// Add a click event listener to each navigation link
navLinks1.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Get the target section based on the href attribute
    const target = document.querySelector(link.getAttribute('href'));

    // Scroll to the target section smoothly
    target.scrollIntoView({
        behavior: 'smooth'
    });
  });
});

// smooth scroll effect about me

navLinks2.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
  
      // Get the target section based on the href attribute
      const target = document.querySelector(link.getAttribute('href'));
  
      // Scroll to the target section smoothly
      target.scrollIntoView({
          behavior: 'smooth'
      });
    });
  });

  // smooth scroll effect testimonials

navLinks3.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
  
      // Get the target section based on the href attribute
      const target = document.querySelector(link.getAttribute('href'));
  
      // Scroll to the target section smoothly
      target.scrollIntoView({
          behavior: 'smooth'
      });
    });
  });

    // smooth scroll effect myskills

navLinks4.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
  
      // Get the target section based on the href attribute
      const target = document.querySelector(link.getAttribute('href'));
  
      // Scroll to the target section smoothly
      target.scrollIntoView({
          behavior: 'smooth'
      });
    });
  });

//   cv function
// Function to open the CV
function viewCV() {
    // Replace 'cv.pdf' with the actual path or URL of your CV file
    const cvUrl = './images/BenedictCV-II.pdf';
    window.open(cvUrl, '_blank');
  }
  
  // Add a click event listener to the button
  const cvButton = document.getElementById('cvButton');
  cvButton.addEventListener('click', viewCV);


//   slider project

// const slider = document.querySelector('.project');
// const slides = slider.querySelector('.container-project');
// const images = slider.querySelectorAll('img');

// let currentSlide = 0;
// const slideWidth = images[0].clientWidth;
// const slideCount = images.length;

// function goToSlide(slideIndex) {
//   slides.style.transition = 'transform 0.5s ease-in-out';
//   slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
//   currentSlide = slideIndex;
// }

// function nextSlide() {
//   if (currentSlide === slideCount - 1) {
//     setTimeout(() => {
//       slides.style.transition = 'none';
//       goToSlide(0);
//     }, 500);
//   } else {
//     goToSlide(currentSlide + 1);
//   }
// }

// function previousSlide() {
//   if (currentSlide === 0) {
//     setTimeout(() => {
//       slides.style.transition = 'none';
//       goToSlide(slideCount - 1);
//     }, 500);
//   } else {
//     goToSlide(currentSlide - 1);
//   }
// }

// setInterval(nextSlide, 3000); // Auto slide every 3 seconds
