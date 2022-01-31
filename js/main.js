const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const navbar = document.getElementById('navbar')
    navbar.classList.toggle('active')
    const active = navbar.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if (active) { 
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu') 
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

/* carousel */

const imgs = document.getElementById("img")
const imgs2 = document.getElementById("img2")
const img = document.querySelectorAll("#img img")

let idx = 0

function carousel(){
    idx++

    if(idx > img.length - 1){
        idx = 0;
    }
    
    imgs.style.transform = `translateX(${-idx * 500}px)`
    imgs2.style.transform = `translateX(${-idx * 500}px)`
}

setInterval(carousel, 3000)