let totalContainer = document.getElementById("total")
let starContainer = document.getElementById("stars")
let add = document.querySelector('#add')
let sub = document.querySelector('#subtract')



let total = 0
let stars = []


totalContainer.innerText = total

const starBlock = () => {
    let btn = document.createElement('button')
    btn.innerHTML = '*'
    btn.classList.add('star')
    return btn
}


const addStars = (e) => {
    let newTotal = total += 1
    totalContainer.innerText = newTotal
    stars.push(starBlock())
    console.log(stars)
    displayStars()
}

const subStars = (e) => {
    let newTotal = total -= 1
    stars.pop()
    console.log(stars)
    displayStars()
}


add.addEventListener('click', addStars)
sub.addEventListener('click', subStars)
// // console.log(btns)

const displayStars = () => {
    starContainer.innerHTML = ''
    stars.forEach((star) => starContainer.appendChild(star))
}






