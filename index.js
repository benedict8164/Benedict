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

