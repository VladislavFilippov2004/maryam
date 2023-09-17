let form2 = document.forms.form2;
let input2 = form2.elements.input1;
let screamdiv2 = document.getElementById("wrong-answer2");
let photo2 = document.getElementById("right-answer2");
let trybutton2 = document.getElementById("try-again2");

form2.addEventListener('submit', function(evt) {
    evt.preventDefault();
    if (input2.value == "Правильный ответ") {
        form2.style = "display: none;"
        photo2.style = "display: flex"
    } else {
        form2.style = "display: none;"
        screamdiv2.style = "display: flex;"
    }
})
function tryAgain () {
    console.log('я здесь')
    form2.style = "display: block;"
    screamdiv2.style = "display: none;"
}

trybutton2.addEventListener('click', tryAgain)
