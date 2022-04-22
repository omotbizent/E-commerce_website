const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () =>{
        navbar.classList.add('active');
    })
}
if (close){
    close.addEventListener('click', () =>{
        navbar.classList.remove('active');
    })
}

// Dark Mode
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('header');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// dark or light mode
function imageColor(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;

}
// dark mode
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    // console.log(toggleIcon.children);
    toggleIcon.children[0].textContent = 'Dark Mode';
    // toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    // toggleIcon.children[1].classList.add('fa-moon');
    imageColor('dark')
}

// light mode
function lightMode(){ 
    nav.style.backgroundColor = '#e3e6f3';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    // console.log(toggleIcon.children);
    toggleIcon.children[0].textContent = 'Light Mode';
    // toggleIcon.children[1].classList.remove('fa-moon');
    // toggleIcon.children[1].classList.add('fa-sun');
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageColor('light')
}

// Switch Theme Dynamically
function switchTheme(event){
    // console.log(event.target.checked)
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme)

// checking local storage for term
const currentTheme = localStorage.getItem('theme');
// console.log(currentTheme)
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    if (currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }   
}