// get elements
const btns = document.querySelectorAll('.btn')
const modal = document.getElementById('modal')
const content = document.querySelector('.modal-content')

// open modal function
const openModal = () => {
    modal.classList.add('flex')
    modal.classList.remove('hidden')

    setTimeout(()=>{
        content.classList.remove('scale-95', 'opacity-50')
    }, 50)
}

// close modal function
const closeModal = () => {
    modal.classList.remove('flex')
    modal.classList.add('hidden')

    setTimeout(()=>{
        content.classList.add('scale-95', 'opacity-50')
    }, 200)
}

// close modal when clicked outside the content
modal.addEventListener('click', (event)=>{
    if(event.target.id === 'modal') closeModal()
})

// close modal when Escape key is pressed
document.addEventListener('keydown', (event)=>{
    if(event.key === 'Escape') closeModal()
})

// listen for click events on the buttons
btns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        if(btn.classList.contains('btn-open')) openModal()

        if(btn.classList.contains('btn-close')) closeModal()

    })
})

