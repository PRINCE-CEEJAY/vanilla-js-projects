const colorValue = document.getElementById('color')
const btnGenerate = document.querySelector('.btn')
let body = document.body.style

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const getRandomColor = () =>{ 
    let color = "#"
    for(let i=0; i < 6; i++){   
        color += hex[Math.floor(Math.random() * hex.length)]
    }
    return color
}

const setColor = (c) => {
    colorValue.textContent = c
    body.backgroundColor = c 
}

btnGenerate.addEventListener('click', ()=>{
    generatedBgColor = getRandomColor()
    setColor(generatedBgColor)
})
