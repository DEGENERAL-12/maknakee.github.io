function userName(){
const saveTo = document.querySelector(".saveto")
let aligncenterH2 = document.querySelector('.userinput h2');
let username = document.querySelector('.username');

let simon = localStorage.getItem('textinput');


    if (simon) {
        aligncenterH2.textContent = simon;
    }

username.addEventListener("input", function(letter){
    aligncenterH2.textContent = letter.target.value;
   
})


    const saveToLocalStorage = () => {
        localStorage.setItem("textinput", aligncenterH2.textContent);
    }

    saveTo.addEventListener("click", saveToLocalStorage)
}
userName();

// btn
const btn = document.querySelector('.btn');
let password = document.querySelector('.passw');
const confirm = document.querySelector('.confirm');



btn.addEventListener('click', function(e){
    e.preventDefault();
    if (password.value == "peter"){
        confirm.style.transform = `translate(0%)`;
        
    }else if(password.value != "peter"){
       password.value = "";
        alert("wrong password")
    }
})


// pop bus 

const close = document.querySelector('#close span');

close.addEventListener('click', function(){
    confirm.style.transform = `translate(-100%)`;
})

const mainlinkLiA = document.querySelector(".mainlink li a");
mainlinkLiA.addEventListener('click', function(){
    window.open("courseware.html");
    window.close('index.html')
})


