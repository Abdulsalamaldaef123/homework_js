document.getElementById("start").addEventListener("click", start_game);

let playerName, operation, number, numOproplems, currentProblem, score;
let answers = [];
    let result;
function start_game() {
    py_Name = document.getElementById("py-name").value;
    operation = document.getElementById("operation").value;
    number = parseInt(document.getElementById("number").value);
    numOproplems = parseInt(document.getElementById("num-problems").value);

    if (!py_Name || isNaN(number) || isNaN(numOproplems)) {
        alert("please fill in all fields");
        return;
    }

    currentProblem = 1;
    score = 0;
    answers = [];
    document.getElementById("input-section").style.display = "none";
    document.getElementById("game-section").style.display = "block";
    problems();
}

function problems() {
    const questionsDiv = document.getElementById("questions");
    questionsDiv.innerHTML = "";

    for (let i = 0; i < numOproplems; i++) {
        const op1 = Math.floor(Math.random() * 10) + 1;
        const op2 = Math.floor(Math.random() * 10) + 1;

        if (operation === "multiplication") {
            result = op1 * op2 ;
        } else {
            result = op1 + op2;
        }
        answers.push(result);

        questionsDiv.innerHTML += `
            
                <label">${op1} ${operation === "multiplication" ? "*" : "+"} ${op2} = </label>
                <input type="number" class="answer"><br>
        
        `;
    }

    questionsDiv.innerHTML += `
        <button  id="score-calc">calculate results</button>
    `;

    document.getElementById("score-calc").addEventListener("click", calculate);
}

function calculate() {
    const answerInputs = document.querySelectorAll(".answer");
    let correct = 0;

    for (let i = 0; i < numOproplems; i++) {
        const answer = parseInt(answerInputs[i].value);
        if (answer === answers[i]) {
            correct++;
        }
    }

    score = correct;
    show_score();
}

function show_score() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Score: ${score}/${numOproplems}`;
}
