let table = document.querySelector('.tableContainer')

let btn = document.querySelector(".btn-primary")
let btnClean = document.querySelector(".btn-danger");
let counter = 0;
let counterDiv = document.querySelector('.counter');

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    counter++;
    counterDiv.innerHTML="Formularz został wysłany "+counter+" razy";
    table.classList.remove('hidden')
    document.querySelector("#emailField").innerHTML=document.querySelector("#email").value;
    document.querySelector("#topicField").innerHTML=document.querySelector("#topic").value;
    document.querySelector("#messageField").innerHTML=document.querySelector("#message").value;
})

btnClean.addEventListener('click',()=>{
    table.classList.add('hidden')
})