let totalContainer = document.getElementById("total")
let buttonContainer = document.getElementById("buttons")


let total = 0
let operators = [
    ['+', 'add'],
    ['-', 'subtract'],
    ['*', 'multiply'],
    ['/', 'divide'],
    ['%', 'percent']
]

totalContainer.innerText = total

const doMath = (e) => {
    const operator = e.target.name
    switch (operator) {
        case 'add':
            total += 1
            console.log(total)
            totalContainer.innerText = total
        case 'subtract':
            total -= 1
            totalContainer.innerText = total
        case 'multiply':
            total *= 1
            totalContainer.innerText = total
        case 'divide':
            total /= 1
            totalContainer.innerText = total
        default:
            break;
    }
    console.log(totalContainer)
}


operators.forEach((operator) => {
    let symbol = operator[0]
    let func = operator[1]
    let btn = document.createElement("button")
    btn.name = func
    btn.innerHTML = symbol
    // btn.style.color = 'white'
    btn.classList.add("button")
    btn.addEventListener('click', doMath)
    buttonContainer.appendChild(btn)
    // console.log(btnValue.value)
})






console.log(buttonContainer)