let email = document.querySelector('.email')
let topic = document.querySelector('.topic')
let mess = document.querySelector('.mess')

let emailT = document.querySelector('.emailT')
let topicT = document.querySelector('.topicT')
let messT = document.querySelector('.messT')

let sendButton = document.querySelector('.button')
let resetButton = document.querySelector('.reset')

let tableXD = document.querySelector('.tabeleczka')

let count = 0;
let counter = document.querySelector('.counter')

sendButton.addEventListener('click', () => {
    tableXD.style.display = 'block'
    emailT.innerHTML = email.value
    topicT.innerHTML = topic.value
    messT.innerHTML = mess.value
    count++
    counter.innerHTML = count
})

resetButton.addEventListener('click', () => {
    tableXD.style.display = 'none'
})

