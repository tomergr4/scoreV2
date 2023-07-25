//hide before start
var beforeStart = document.querySelectorAll('.beforeStart');
beforeStart.forEach(function(beforeStart) {
    beforeStart.style.display = 'none';
});

let changedServes = false;

//Score
const ScoreDispOne = document.querySelector('#ScoreDispOne');
const ScoreDispTwo = document.querySelector('#ScoreDispTwo');

const h3 = document.querySelector('h3');
let h4 = document.querySelector('#team');

let turn = 0;
let team1 = ['', ''];
let team2 = ['', ''];
let firstServe = '';

let team1Index = 0;
let team2Index = 0;

// Get the players names
document.getElementById('start').addEventListener('blur', function(e) {
    e.preventDefault();
    team1[0] = document.getElementById('text1').value;
    team2[0] = document.getElementById('text2').value;
    team1[1] = document.getElementById('text3').value;
    team2[1] = document.getElementById('text4').value;
});

// Playing until buttons
const scoreSelect = document.getElementsByName('btnradio');
let selectedValue = 21; // Default value
// Loop through all the buttons and add an event listener
for (let i = 0; i < scoreSelect.length; i++) {
    scoreSelect[i].addEventListener('change', function() {
        // If this radio button is checked, update selectedValue
        if (scoreSelect[i].checked) {
            selectedValue = scoreSelect[i].value;
        }
    });
}


// document.querySelectorAll(".beforeStart").hidden = true;

//--Form who plays and serves--//
// Get all radio buttons
const radios = document.querySelectorAll('.form-check-input');

// Add a click event listener to each radio button
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', function() {
        // When a radio button is clicked, update firstServer to the id of the corresponding text field
        firstServe = document.getElementById(`text${i+1}`).value;
        h4.textContent = `${firstServe}`;
        if (i === 0 || i === 2) {
            turn = 1;
            if (i === 0) {
                team1Index = 0;
            } else {
                team1Index = 1;
            }
        } else {
            turn = 2;
            if (i === 1) {
                team2Index = 0;
            } else {
                team2Index = 1;
            }
        }
    });
}

// Team one score
let elements = document.querySelectorAll('.teamOneUp');
let countOne = 0;
elements.forEach(function(element) {
    element.addEventListener('click', function() {
        if (turn == 2) {
            team2Index++;
            countOne++;
            servesOrder()
            turn = 1;
            h4.textContent = `${team1[(team1Index) % 2]}`;
            ScoreDispOne.textContent = `${countOne}`;
        } else {
            countOne++;
            ScoreDispOne.textContent = `${countOne}`;
            turn = 1;
            h4.textContent = `${team1[(team1Index) % 2]}`;
            checkScore()
            servesOrder()
        }
    });
});

const teamOneDown = document.querySelector('#teamOneDown');
teamOneDown.addEventListener('click', function() {
    countOne--;
    ScoreDispOne.textContent = `${countOne}`;
});


// Team two score
let teamTwoUp = document.querySelectorAll('.teamTwoUp');
let countTwo = 0;
teamTwoUp.forEach(function(el) {
    el.addEventListener('click', function() {
        if (turn == 1) {
            team1Index++;
            countTwo++;
            servesOrder()
            turn = 2;
            h4.textContent = `${team2[(team2Index) % 2]}`;
            ScoreDispTwo.textContent = `${countTwo}`;
            console.log(`after change ${team1[(team1Index) % 2]}`);
        } else {
            countTwo++;
            ScoreDispTwo.textContent = `${countTwo}`;
            turn = 2;
            h4.textContent = `${team2[(team2Index) % 2]}`;
            checkScore()
            servesOrder()
            console.log(`no change ${team1[(team1Index) % 2]}`);
        }
    });
});


const teamTwoDown = document.querySelector('#teamTwoDown');
teamTwoDown.addEventListener('click', function() {
    countTwo--;
    ScoreDispTwo.textContent = `${countTwo}`;
});

// Reset button
const reset = document.querySelector('#reset');
reset.addEventListener('click', function() {
    countOne = 0;
    countTwo = 0;
    ScoreDispOne.textContent = `${countOne}`;
    ScoreDispTwo.textContent = `${countTwo}`;
    teamOneUp.disabled = false;
    teamTwoUp.disabled = false;
    location.reload();
});

//Check score
function checkScore() {
    if (countOne == selectedValue || countTwo == selectedValue) {
        teamOneUp.disabled = true;
        teamTwoUp.disabled = true;
    }
}


// ----------------//----------------//

function servesOrder() {
    //player 1 team 1 starts (1)
    if (turn == 2 && changedServes == false) {
        if (countOne == 1) {
            let text3Value = document.getElementById('text3').value;
            let text1Value = document.getElementById('text1').value;
            changedServes = true;

            // Update the text of buttons
            document.getElementById('buttonP1').textContent = text1Value;
            document.getElementById('buttonP3').textContent = text3Value;

            var modalEl = document.getElementById('firstTeamServe');
            var modal = new bootstrap.Modal(modalEl);
            modal.show();

            // Adding event listeners to the new buttons
            document.getElementById('buttonP3').addEventListener('click', function() {
                turn = 1;
                team1Index = 1;
                h4.textContent = `${team1[(team1Index)]}`;
                modal.hide();
            });

            document.getElementById('buttonP1').addEventListener('click', function() {
                turn = 1;
                team1Index = 0;
                h4.textContent = `${team1[(team1Index)]}`;
                modal.hide();

            });
        }
    } else if (turn == 1 && changedServes == false) {
        if (countTwo == 1) {
            let text4Value = document.getElementById('text4').value;
            let text2Value = document.getElementById('text2').value;
            changedServes = true;

            // Update the text of buttons
            document.getElementById('buttonP2').textContent = text2Value;
            document.getElementById('buttonP4').textContent = text4Value;

            var modalEl = document.getElementById('secondTeamServe');
            var modal = new bootstrap.Modal(modalEl);
            modal.show();

            // Adding event listeners to the new buttons
            document.getElementById('buttonP4').addEventListener('click', function() {
                turn = 2;
                team2Index = 1;
                h4.textContent = `${team2[(team2Index)]}`;
                modal.hide();
            });
            document.getElementById('buttonP2').addEventListener('click', function() {
                turn = 2;
                team2Index = 0;
                h4.textContent = `${team2[(team2Index)]}`;
                modal.hide();
            });

        }
    }
}


//first serve
const start = document.querySelector('#start');
start.addEventListener('click', function() {
    let text1Value = document.getElementById('text1').value;
    let text2Value = document.getElementById('text2').value;
    let text3Value = document.getElementById('text3').value;
    let text4Value = document.getElementById('text4').value;

    // Update the text of buttons
    document.getElementById('button1').textContent = text1Value;
    document.getElementById('button2').textContent = text2Value;
    document.getElementById('button3').textContent = text3Value;
    document.getElementById('button4').textContent = text4Value;

    var modalEl = document.getElementById('firstPlayerServe');
    var modal = new bootstrap.Modal(modalEl);
    modal.show();

    // Adding event listeners to the new buttons
    document.getElementById('button1').addEventListener('click', function() {
        turn = 1;
        team1Index = 0;
        h4.textContent = `${team1[(team1Index)]}`;
        modal.hide();
    });

    document.getElementById('button2').addEventListener('click', function() {
        turn = 2;
        team2Index = 0;
        h4.textContent = `${team2[(team2Index)]}`;
        modal.hide();
    });

    document.getElementById('button3').addEventListener('click', function() {
        turn = 1;
        team1Index = 1;
        h4.textContent = `${team1[(team1Index)]}`;
        modal.hide();
    });

    document.getElementById('button4').addEventListener('click', function() {
        turn = 2;
        team2Index = 1;
        h4.textContent = `${team2[(team2Index)]}`;
        modal.hide();
    });

    var beforeStart = document.querySelectorAll('.beforeStart');
    beforeStart.forEach(function(beforeStart) {
        beforeStart.style.display = '';

        var startButton = document.getElementById('start')
        startButton.style.display = 'none';

    });
});

// Names validation
document.addEventListener('DOMContentLoaded', function() {

    // select all inputs
    let inputs = document.querySelectorAll('input[type="text"]');

    // select the start button
    let startButton = document.getElementById('start');

    // function to enable or disable start button
    function enableDisableStartButton() {
        let allFilled = true;

        inputs.forEach(function(input) {
            if (input.value === '') {
                allFilled = false;
            }
        });

        if (allFilled) {
            startButton.disabled = false;
        } else {
            startButton.disabled = true;
        }
    }

    // add input event listener to each input
    inputs.forEach(function(input) {
        input.addEventListener('input', enableDisableStartButton);
    });

    // initial check
    enableDisableStartButton();
});

let lastTouchEnd = 0;
document.addEventListener('touchstart', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);