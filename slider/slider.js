const name = document.querySelector('.name')
const slideNumber = document.querySelector('.slide-number')
const description = document.querySelector('.description')
const btns = document.querySelectorAll('.btn')
const imageSrc = document.querySelector('#slide')
const warn = document.getElementById('warning')

const information = [
    {
        id: 1,
        imageSrc: "images/1.jpg",
        name: "AI Agent",
        description: "AI is rapidly taking over the world, if you are not up to date you will soon be replaced"
    },
    {
        id: 2,
        imageSrc: "images/2.jpg",
        name: "CISCO Students",
        description: "Students are to learn the basics of computer at least to become literate in this modern technology horizon"
    },
    {
        id: 3,
        imageSrc: "images/3.jpg",
        name: "Tutor Nancy",
        description: "She is the perfect tutor a kid can have, with her your child will be very comfortable with the computer system"
    },
    {
        id: 4,
        imageSrc: "images/4.jpg",
        name: "XENA THE WARRIOR",
        description: "she is the perfect character when it comes to being a heroine in the female dominated world, she is very brave, not scared of anything or anyone"
    },
    {
        id: 5,
        imageSrc: "images/5.jpg",
        name: "NOKIA 📱",
        description: "Remember when Phone was still new, seeing this picture reminds us of the popular phone brand named Nokia, especially Nokia 3310 😂"
    },
    {
        id: 6,
        imageSrc: "images/6.jpg",
        name: "OFFICIAL STAMP",
        description: "That is the example of a senior level branded logo, one that attracts attention faster than others"
    },
]

currentIndex = 0

const setUI = () => {
    const item = information[currentIndex]
    imageSrc.src = item.imageSrc
    name.textContent = item.name
    description.textContent = item.description
    slideNumber.textContent = item.id

}


const showWarning = (text) => {
    warn.parentElement.classList.remove('hidden')
    warn.textContent = text
    setTimeout(()=>{
        warn.parentElement.classList.add('hidden')
    }, 1500) 
}

setInterval(()=>{
    if(currentIndex > information.length -1){
        currentIndex = information.length-1;
        showWarning("Oh, that was the last slide")
    }
    if(currentIndex < 0){
        currentIndex = 0
        showWarning("Can't go below first slide")
    }
    setUI()
}, 50)

btns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        if(btn.classList.contains('btn-next')){
            currentIndex++
        }
        if(btn.classList.contains('btn-random')){
            currentIndex = Math.floor(Math.random() * information.length)
            setUI()
        }
        if(btn.classList.contains('btn-prev')){
            currentIndex--
        }

    })
})