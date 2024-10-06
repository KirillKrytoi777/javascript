const root = document.getElementById('root')
const buttonDice = document.getElementById('buttonDice')

function gameCube() {
    const imgDice = document.getElementById('imgDice')
    const h1 = document.getElementById('h1')
    const small = document.getElementById('small')
    const big = document.getElementById('big')
    const button = document.getElementById('button')
    const gameDice = document.getElementById('gameDice')
    const dice = document.getElementById('dice')

    gameDice.style = 'display: block;'
    buttonDice.style = 'display: none;'

    small.addEventListener('click', () => {
        button.addEventListener('click', () => {
            const randomNum = Math.floor(Math.random() * 6 + 1)
            imgDice.innerHTML = `<img src="images/${randomNum}.jpg" alt="${randomNum}" 
            width="200" height="200">`
            if (randomNum <= 3) {
                h1.textContent = `Win! Number: ${randomNum}`
            } else {
                h1.textContent = `Fail! Number: ${randomNum}`
            }
        })
    })

    big.addEventListener('click', () => {
        button.addEventListener('click', () => {
            const randomNum = Math.floor(Math.random() * 6 + 1)
            imgDice.innerHTML = `<img src="images/${randomNum}.jpg" alt="${randomNum}" 
            width="200" height="200">`
            if (3 < randomNum && randomNum <= 6) {
                h1.textContent = `Win! Number: ${randomNum}`
            } else {
                h1.textContent = `Fail! Number: ${randomNum}`
            }
        })
    })
}

buttonDice.addEventListener('click', () => {
    gameCube()
})
