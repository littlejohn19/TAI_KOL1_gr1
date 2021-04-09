let emailInput = document.querySelector(".emailInput")
let topicInput = document.querySelector(".topicInput")
let messageInput = document.querySelector(".messageInput");
let send = document.querySelector(".send");
let clear = document.querySelector(".clear");
let emailTable = document.querySelector(".email");
let topicTable = document.querySelector(".topic");
let messageTable = document.querySelector(".message")
let result = document.querySelector(".result");
let counter = 0;
let counterOutput = document.querySelector(".counter")

send.addEventListener("click", function () {

    emailTable.innerHTML = emailInput.value;
    topicTable.innerHTML = topicInput.value;
    messageTable.innerHTML = messageInput.value;

    counter++;
    counterOutput.innerHTML = "Wysłane wiadomości : " + counter;
    result.style.display = "block";
})

clear.addEventListener("click", function () {
    emailTable.innerHTML = "";
    topicTable.innerHTML = "";
    messageTable.innerHTML = "";

    result.style.display = "none";
})