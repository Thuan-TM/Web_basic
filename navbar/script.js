var form = document.querySelector('.header-navbar');
window.addEventListener('scroll', function() {
    if(this.window.scrollY > 300){
        form.classList.add('active');
    }
    else{
        form.classList.remove('active');
    }
})

var btnnav = document.querySelector('.nav-icon');

btnnav.addEventListener('click', function() {
    form.classList.add('activeNav');
})

document.querySelector('.over-layout').onclick = (e) =>{
    if(e.target == e.currentTarget){
        form.classList.remove('activeNav');
    }
}
