let form2 = document.forms.form2;
let input2 = form2.elements.input1;
let screamdiv2 = document.getElementById("wrong-answer2");
let photo2 = document.getElementById("right-answer2");
let trybutton2 = document.getElementById("try-again2");
let root = document.getElementsByClassName("root");
let answers = ["пульсирует", "прыгает", "ответственность", "любовь"]
let usedAnswers = localStorage.getItem("использованные слова")
let usedAnswersArr = JSON.parse(usedAnswers)
let allInputWords = [];
console.log(usedAnswersArr)

let correctAnswers = []
console.log()
answers.forEach((item) => {
    if (!usedAnswersArr.includes(item)) {
        correctAnswers.unshift(item)
    }
})
console.log('что ещё могут ввести', correctAnswers)
// console.log(usedAnswers.trim())
form2.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let inputword = input2.value
    let coorectinputword = inputword.toLowerCase();
    if (correctAnswers.includes(coorectinputword)) {
        form2.style = "display: none;"
        photo2.style = "display: flex"
        usedAnswersArr.unshift(coorectinputword)
        allInputWords = usedAnswersArr
        console.log(allInputWords)
        localStorage.setItem("всё", JSON.stringify(allInputWords))
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