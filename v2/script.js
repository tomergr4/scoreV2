//Score
const ScoreDispOne = document.querySelector('#ScoreDispOne');
const ScoreDispTwo = document.querySelector('#ScoreDispTwo');

const h3 = document.querySelector('h3');
let h4 = document.querySelector('#team');

let turn = 1;
let team1 = ['Tomer', 'Liran'];
let team2 = ['Ron', 'Maor'];
let firstServe = '';

let team1Index = 0;
let team2Index = 0;

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
const teamOneUp = document.querySelector('#teamOneUp');
let countOne = 0;
teamOneUp.addEventListener('click', function() {
    if (turn == 2) {
        team2Index++;
        countOne++;
        servesOrder()
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

// Team two score
const teamTwoUp = document.querySelector('#teamTwoUp');
let countTwo = 0;
teamTwoUp.addEventListener('click', function() {
    if (turn == 1) {
        team1Index++;
        countTwo++;
        servesOrder()
        ScoreDispTwo.textContent = `${countTwo}`;
    } else {
        countTwo++;
        ScoreDispTwo.textContent = `${countTwo}`;
        turn = 2;
        h4.textContent = `${team2[(team1Index) % 2]}`;
        checkScore()
        servesOrder()
    }
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
    if (turn == 2) {
        if (countOne == 1) {
            alert('Who is next in team 1?');
        }
    } else if (turn == 1) {
        if (countTwo == 1) {
            alert('Who is next in team 2?');
        }
    }
}

// // Get the text4 and text2 values
// let text4Value = document.getElementById('text4').value;
// let text2Value = document.getElementById('text2').value;

// // Update the text of buttons
// document.getElementById('button2').textContent = text2Value;
// document.getElementById('button4').textContent = text4Value;

// var modalEl = document.getElementById('secondTeamServe');
// var modal = new bootstrap.Modal(modalEl);
// modal.show();

// // Adding event listeners to the new buttons
// document.getElementById('button4').addEventListener('click', function() {
//     turn = 2;
//     team2Index = 1;
//     h4.textContent = `${team2[(team2Index)]}`;
//     modal.hide();
// });

// document.getElementById('button2').addEventListener('click', function() {
//     turn = 2;
//     team2Index = 0;
//     h4.textContent = `${team2[(team2Index)]}`;
//     modal.hide();
// });
// //player 1 team 2 starts (2)
//}
//}