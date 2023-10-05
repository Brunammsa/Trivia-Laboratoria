const userName = localStorage.getItem("name");
const tagH1 = document.getElementById("user-name");
tagH1.innerText = `${userName}, preparado(a) ou não, aqui vamos nós!! `;

const open = document.getElementById("button-answer");
const modal = document.querySelector("dialog");
let text = document.getElementById("phrase");
let point = document.getElementById("points");

open.addEventListener("click", () => {
    modal.showModal();
    let countAnswers = 0;

    const questions = document.getElementsByClassName("question");

    let feedbackList = [];

    for (let i = 1; i <= questions.length; i++) {
        const selectedOption = document.querySelector(`input[name="question-${i}"]:checked`);

        if (selectedOption != null && selectedOption.value === "correta") {
            countAnswers++;
        }
        if (selectedOption != null) {
            const text = selectedOption.labels[0].innerText
            feedbackList.push(`${selectedOption.value} - ${text}`)
        }
    }

    if (countAnswers == 0) {
        text.innerText = `Que pena, ${userName}, não foi dessa vez né?`;
        point.innerText = `Você teve ${countAnswers} questões acertadas`;
    } else if (countAnswers == 1) {
        text.innerText = `Que pena, ${userName}, não foi dessa vez né?`;
        point.innerText = `Você acertou apenas ${countAnswers} questão`;
    } else if ( countAnswers == 2) {
        text.innerText = `Quase gabaritou, ${userName}, Parabéns!`;
        point.innerText = `Você acertou ${countAnswers} questões`;
    } else if ( countAnswers == 3) {
        text.innerText = `Você arrasou, ${userName}!!`;
        point.innerText = `${countAnswers} questões acertadas`;
    }

    const feedback = document.getElementById("feedback");
    feedback.innerText = feedbackList.join("\n");
})
