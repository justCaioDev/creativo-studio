const works = [
    {
        path: '../assets/image1.jpg'
    },
    {
        path: '../assets/image2.jpg'
    },
    {
        path: '../assets/image3.jpg'
    },
    {
        path: '../assets/image4.jpg'
    },
    {
        path: '../assets/image5.jpg'
    },
    {
        path: '../assets/image6.jpg'
    },
    {
        path: '../assets/image7.jpg'
    },
    {
        path: '../assets/image8.jpg'
    },
    {
        path: '../assets/image9.jpg'
    },
    {
        path: '../assets/image10.jpg'
    },
    {
        path: '../assets/image11.jpg'
    },
    {
        path: '../assets/image12.jpg'
    }
]
const worksGrid = document.getElementById('works')
const mobileBtn = document.getElementById('mobile-btn')
const navMenuMobile = document.getElementById('navmenu-mobile')
const menuMobileBtn = document.getElementById('navmenu-mobile-btn')

function createWorks() {
    for (let i = 0; i < works.length; i++) {
        const work = document.createElement('div')
        work.classList.add('work')

        work.style.backgroundImage = `url(${works[i].path})`

        worksGrid.appendChild(work)
    }
}

mobileBtn.addEventListener('click', () => {
    console.log("botao")
    if (mobileBtn.classList.contains('fa-bars')) {
        mobileBtn.classList.remove('fa-bars')
        mobileBtn.classList.add('fa-xmark') 

        navMenuMobile.style.display = 'flex'
        menuMobileBtn.style.display = 'block'

    } else {
        mobileBtn.classList.add('fa-bars')
        mobileBtn.classList.remove('fa-xmark')

        navMenuMobile.style.display = 'none'
        menuMobileBtn.style.display = 'none'
    }
})

createWorks()