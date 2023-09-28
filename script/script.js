console.log('script подключен')
let form1 = document.forms.form1;
console.log(document.forms.form2)
let input1 = form1.elements.input1;
let screamdiv = document.getElementById("wrong-answer");
let photo1 = document.getElementById("right-answer1");
let trybutton = document.getElementById("try-again");
let usedAnswer;
let answers1 = ["пульсирует", "прыгает", "ответственность", "любовь"]

form1.addEventListener('submit', function(evt) {
    let inputword = input1.value
    let coorectinputword = inputword.toLowerCase();
    console.log(coorectinputword)
    evt.preventDefault();
    if (answers1.includes(coorectinputword)) {
        console.log("Правильно")
        form1.style = "display: none;"
        photo1.style = "display: flex;"
        usedAnswer = coorectinputword
        localStorage.setItem("использованное слово", usedAnswer)
    } else {
        console.log("неправильно")
        form1.style = "display: none;"
        screamdiv.style = "display: block;"
    }
    console.log("Форма отправлена")
})
console.log('usedAnswer', usedAnswer)
// 

function tryAgain () {
    console.log('я здесь')
    form1.style = "display: block;"
    screamdiv.style = "display: none;"
}

trybutton.addEventListener('click', tryAgain)

