const btns = document.querySelectorAll('.btn')
const counter = document.getElementById('counter')

let countValue = 0;

// functions to perform actions
const decrement = () => countValue--
const increment = () => countValue++
const reset = () => {
    countValue = 0
    counter.classList.remove('text-red-800', 'text-green-500')
}

// update UI
const update = () => {
    counter.textContent = countValue  
    if(countValue < 0) counter.classList.add('text-red-800')
    if(countValue > 0) counter.classList.add('text-green-500')
    if(countValue === 0) counter.classList.add('text-black')
}

setInterval(()=>{
    update()
}, 50)


// listen for button click on each button
btns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        if(btn.classList.contains('btn-minus')) decrement()
        
        if(btn.classList.contains('btn-plus')) increment()

        if(btn.classList.contains('btn-reset')) reset()
    })    
})