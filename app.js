const navSlider = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.link');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav_active');
        burger.classList.toggle('toggle');
    });

    
}

navSlider();