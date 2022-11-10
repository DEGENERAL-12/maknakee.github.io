

const courselinks = document.querySelector('.courselinks');
const siderbar = document.querySelector('.siderbar')
const burger = document.querySelector('.burger');
burger.addEventListener('click', ()=>{
    siderbar.style.transform = 'translate(0%)';
    courselinks.style.transform = 'translate(0%)';
    burger.style.display = "none";
})

//close side bar

const closeside = document.querySelector('.closeside span');

closeside.addEventListener('click', ()=>{
    siderbar.style.transform = 'translate(-100%)';
    courselinks.style.transform = 'translate(-100%)';
    burger.style.display = "block";
});

const logout = document.querySelector('.logout');

logout.addEventListener('click', function(){
    window.close("courseware.html");
    window.open('index.html')
})