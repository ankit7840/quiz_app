const questions = [
    { question: "What is the capital of France?", options: ["Paris", "Berlin", "London", "Madrid"], correctAnswer: "Paris" },
    { question: "Which programming language is known for its use in web development?", options: ["Java", "Python", "JavaScript", "C++"], correctAnswer: "JavaScript" },
    // Add more questions as needed
];

let userScore = 0;

document.addEventListener("DOMContentLoaded", function () {
    const questionContainer = document.getElementById("questionContainer");

    // Display the first question
    displayQuestion(0);
});

function displayQuestion(index) {
    const currentQuestion = questions[index];
    questionContainer.innerHTML = `
        <h2>Question ${index + 1}</h2>
        <p>${currentQuestion.question}</p>
        <ul>
            ${currentQuestion.options.map(option => `<li><input type="radio" name="answer" value="${option}">${option}</li>`).join('')}
        </ul>
    `;
}

function submitTest() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    if (selectedAnswer) {
        const userAnswer = selectedAnswer.value;
        const currentQuestion = questions[userScore];

        if (userAnswer === currentQuestion.correctAnswer) {
            userScore++;
        }

        // Simulate sending the score to the server and updating the leaderboard
        updateLeaderboard(userScore);

        // Move to the next question or end the test
        if (userScore < questions.length) {
            displayQuestion(userScore);
        } else {
            alert(`Test completed! Your score: ${userScore}/${questions.length}`);
            window.location.href = '/profile'; // Redirect to the profile page
        }
    } else {
        alert("Please select an answer before submitting.");
    }
}

function updateLeaderboard(score) {
    // Simulate updating the leaderboard on the server (replace with actual API call)
    console.log(`Updating leaderboard with score: ${score}`);
}
