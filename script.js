const questions =[
    {
        question: "How much spicy food do you eat?",
        answers: [
            { text: "Very Spicy", correct: false},
            { text: "Little Spicy", correct: false},
            { text: "Normal", correct:true},
            { text: "Not at all", correct:false},
        ]
    },
    {
        question: "How much she like Pani-Puri and ChatPate?",
        answers: [
            { text: "A lot", correct: true},
            { text: "SomeTime", correct: false},
            { text: "Hardly", correct:false},
            { text: "She don't like at all", correct:false},
        ]
    },
    {
        question: "Tapai ko favorite hobby?",
        answers: [
            { text: "Cooking", correct: false},
            { text: "Reading", correct: true},
            { text: "Dancing", correct:true},
            { text: "Painting/Drawing", correct:false},
        ]
    },
    {
        question: "sush lai tapai ko yaad aauda ke garxa",
        answers: [
            { text: "text garxa", correct: false},
            { text: "call garxa", correct: false},
            { text: "euta lamo text lekhera send garxa", correct:false},
            { text: "sabai", correct:true},
        ]
    },
    {
        question: "shreeya ko most favorite dress?",
        answers: [
            { text: "one piece", correct: false},
            { text: "kurta suruwal", correct: false},
            { text: "sharee", correct:true},
            { text: "jens and tshirt", correct:false},
        ]
    },
    {
        question: "Which social media platfrom do you use the most?",
        answers: [
            { text: "Facebook", correct: false},
            { text: "Instagram", correct: true},
            { text: "X(Twitter)", correct:false},
            { text: "TikTok", correct:false},
        ]
    },
    {
        question: "Where did we take our first trip together?",
        answers: [
            { text: "Beach destination", correct: false},
            { text: "Mountain getaway", correct: false},
            { text: "City exploration", correct:true},
            { text: "Countryside retraet", correct:false},
        ]
    },
    {
        question: "Hami Yeti dherai ladxam taipani sangai hunxam:",
        answers: [
            { text: "hami suru dekhe nai ekaarka sanga laddai aako xam", correct: false},
            { text: "jati lade ni kehe dinpaxi ek aarka ko maya lagxa", correct: false},
            { text: "je vae ni sangai hunxam,ur sush will do everythng to keep U Mine", correct:false},
            { text: "All answer are correct", correct:true},
        ]
    },
    {
        question: "sush ko favorite food",
        answers: [
            { text: "rice and chicken", correct: false},
            { text: "mutton and rice ", correct: false},
            { text: "alu pharata ali spicy", correct:true},
            { text: "rice daal vindi ko tarkari", correct:false},
        ]
    },
    {
        question: "tapai ko favorite drink ? lets me guess !",
        answers: [
            { text: "Coffee", correct: true},
            { text: "Tea", correct: false},
            { text: "Soda", correct:false},
            { text: "Juice", correct:true},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    } );

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handelNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handelNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();