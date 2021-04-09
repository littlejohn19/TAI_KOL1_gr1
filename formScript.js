let buttonSend = document.querySelector('.buttonSend');
let buttonClear = document.querySelector('.buttonClear');
let emailInput = document.querySelector('#inputEmail');
let topicInput = document.querySelector('#inputTopic');
let messageInput = document.querySelector('#inputMessage');
let emailTable = document.querySelector('.email');
let topicTable = document.querySelector('.topic');
let messageTable = document.querySelector('.message');
let resultTable = document.querySelector('.resTable');
let counterText = document.querySelector('.counter')

let counter = 0;

buttonSend.addEventListener('click', () => {
    if (emailInput.value !== "" && topicInput.value !== "" && messageInput.value !== "") {
        emailTable.innerHTML = emailInput.value;
        topicTable.innerHTML = topicInput.value;
        messageTable.innerHTML = messageInput.value;

        counter++;
        counterText.innerHTML = 'Wysłane wiadomości: ' + counter;
        resultTable.style.display = 'block';
    }
})

buttonClear.addEventListener('click', () => {
    emailTable.innerHTML = "";
    topicTable.innerHTML = "";
    messageTable.innerHTML = "";
    resultTable.style.display = 'none';
})