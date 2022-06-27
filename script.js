//Selector
const toggleSwitch = document.getElementById('toggle-switch')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')

//functions
const updateLocalStorage = (mode) => localStorage.setItem('theme', mode)

const imgMode = (mode) => {
    image1.src = `./img/undraw_proud_coder_${mode}.svg`
    image2.src = `./img/undraw_feeling_proud_${mode}.svg`
    image3.src = `./img/undraw_conceptual_idea_${mode}.svg`
}

const darkMode = () => {
    document.documentElement.setAttribute('data-theme', 'dark')
    nav.style.backgroundColor = 'rgb(0 0 0 /50)'
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    toggleIcon.children[0].textContent = 'Dark Mode'
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    imgMode('dark')
    updateLocalStorage('dark')
}

const lightMode = () => {
    document.documentElement.setAttribute('data-theme', 'light')
    nav.style.backgroundColor = 'rgb(255 255 255/50)'
    textBox.style.backgroundColor = 'rgb(0 0 0/ 50%)'
    toggleIcon.children[0].textContent = 'Light Mode'
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    imgMode('light')
    updateLocalStorage('light')
}


const switchTheme = (e) => {
    e.target.checked ? darkMode() : lightMode()
}

//event listeners
toggleSwitch.addEventListener('change', switchTheme)

const currentTheme = localStorage.getItem('theme')
if (currentTheme) {
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true
        darkMode()
    }
    if (currentTheme === 'light') {
        toggleSwitch.checked = false
        lightMode()
    }
}