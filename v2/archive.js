let turn = 1;
let team1 = ['Tomer', 'Liran'];
let team2 = ['Ron', 'Maor'];
let h4 = document.querySelector('#team');

let team1Index = 0;
let team2Index = 0;

//console.log(servers);

// Team one score
const teamOneUp = document.querySelector('#teamOneUp');
let countOne = 0;
teamOneUp.addEventListener('click', function() {
    if (turn == 2) {
        team2Index++;
    }
    countOne++;
    ScoreDispOne.textContent = `${countOne}`;
    turn = 1;
    h4.textContent = `Serves: ${team1[team1Index % 2]}`;
});

const teamOneDown = document.querySelector('#teamOneDown');
teamOneDown.addEventListener('click', function() {
    countOne--;
    ScoreDispOne.textContent = `${countOne}`;
});

// Team two score
const teamTwoUp = document.querySelector('#teamTwoUp');
let countTwo = 0;
teamTwoUp.addEventListener('click', function() {
    if (turn == 1) {
        team1Index++;
    }
    countTwo++;
    team1Index++;
    ScoreDispTwo.textContent = `${countTwo}`;
    turn = 2;
    h4.textContent = `Serves: ${team2[team2Index % 2]}`;
});

//Reset
ScoreDispTwo.textContent = `${countTwo}`;
const reset = document.querySelector('#reset');
reset.addEventListener('click', function() {
    countOne = 0;
    countTwo = 0;
    ScoreDispOne.textContent = `${countOne}`;
    teamOneUp.disabled = false;
    teamTwoUp.disabled = false;
    location.reload();
});

// function totalScore() {
//     let totalScore = countOne + countTwo;
//     console.log(totalScore);
//     if (turn === 0) {
//         totalScore %
//     }
// }


//archive

function servesOrder() {
    //player 1 team 1 starts (1)
    if (countOne >= 0 && countTwo === 1 && servers[0] === document.getElementById('text1').value) {
        // Get the text4 and text2 values
        let text4Value = document.getElementById('text4').value;
        let text2Value = document.getElementById('text2').value;

        // Update the text of buttons
        document.getElementById('button2').textContent = text2Value;
        document.getElementById('button4').textContent = text4Value;

        var modalEl = document.getElementById('myModal');
        var modal = new bootstrap.Modal(modalEl);
        modal.show();

        // Adding event listeners to the new buttons
        document.getElementById('button2').addEventListener('click', function() {
            servers[1] = text2Value;
            h3.textContent = `${servers[1]} serves`;
            document.getElementById('radio2').checked = true; // Select radio2
            modal.hide();
            servers[2] = document.getElementById('text3').value;
            servers[3] = document.getElementById('text4').value;
            console.log(servers);
        });

        document.getElementById('button4').addEventListener('click', function() {
            servers[1] = text4Value;
            h3.textContent = `${servers[1]} serves`;
            document.getElementById('radio4').checked = true; // Select radio4
            modal.hide();
            servers[2] = document.getElementById('text3').value;
            servers[3] = document.getElementById('text2').value;
            console.log(servers);
        });
        //player 1 team 2 starts (2)
    } else if (countTwo >= 0 && countOne === 1 && servers[0] === document.getElementById('text2').value) {
        let text3Value = document.getElementById('text3').value;
        let text1Value = document.getElementById('text1').value;

        // Update the text of buttons
        document.getElementById('button2').textContent = text1Value;
        document.getElementById('button4').textContent = text3Value;

        var modalEl = document.getElementById('myModal');
        var modal = new bootstrap.Modal(modalEl);
        modal.show();

        // Adding event listeners to the new buttons
        document.getElementById('button2').addEventListener('click', function() {
            servers[1] = text1Value;
            h3.textContent = `${servers[1]} serves`;
            document.getElementById('radio2').checked = true; // Select radio2
            modal.hide();
            servers[2] = document.getElementById('text4').value;
            servers[3] = document.getElementById('text3').value;
            console.log(servers);
        });

        document.getElementById('button4').addEventListener('click', function() {
            servers[1] = text3Value;
            h3.textContent = `${servers[1]} serves`;
            document.getElementById('radio4').checked = true; // Select radio4
            modal.hide();
            servers[2] = document.getElementById('text4').value;
            servers[3] = document.getElementById('text1').value;
            console.log(servers);
        });
        //player 2 team 1 starts (3)
    } else if (countOne >= 0 && countTwo === 1 && servers[0] === document.getElementById('text3').value) {
        let text4Value = document.getElementById('text4').value;
        let text2Value = document.getElementById('text2').value;

        // Update the text of buttons
        document.getElementById('button2').textContent = text2Value;
        document.getElementById('button4').textContent = text4Value;

        var modalEl = document.getElementById('myModal');
        var modal = new bootstrap.Modal(modalEl);
        modal.show();

        // Adding event listeners to the new buttons
        document.getElementById('button2').addEventListener('click', function() {
            servers[1] = text2Value;
            h3.textContent = `${servers[1]} serves`;
            document.getElementById('radio2').checked = true; // Select radio2
            modal.hide();
            servers[2] = document.getElementById('text1').value;
            servers[3] = document.getElementById('text4').value;
            console.log(servers);
        });

        document.getElementById('button4').addEventListener('click', function() {
            servers[1] = text4Value;
            h3.textContent = `${servers[1]} serves`;
            document.getElementById('radio4').checked = true; // Select radio4
            modal.hide();
            servers[2] = document.getElementById('text1').value;
            servers[3] = document.getElementById('text2').value;
            console.log(servers);
        });
        //player 2 team 2 starts (4)
    } else if (countTwo >= 0 && countOne === 1 && servers[0] === document.getElementById('text4').value) {
        let text3Value = document.getElementById('text3').value;
        let text1Value = document.getElementById('text1').value;

        // Update the text of buttons
        document.getElementById('button2').textContent = text1Value;
        document.getElementById('button4').textContent = text3Value;

        var modalEl = document.getElementById('myModal');
        var modal = new bootstrap.Modal(modalEl);
        modal.show();

        // Adding event listeners to the new buttons
        document.getElementById('button2').addEventListener('click', function() {
            servers[1] = text1Value;
            h3.textContent = `${servers[1]} serves`;
            document.getElementById('radio2').checked = true; // Select radio2
            modal.hide();
            servers[2] = document.getElementById('text2').value;
            servers[3] = document.getElementById('text3').value;
            console.log(servers);
        });

        document.getElementById('button4').addEventListener('click', function() {
            servers[1] = text3Value;
            h3.textContent = `${servers[1]} serves`;
            document.getElementById('radio4').checked = true; // Select radio4
            modal.hide();
            servers[2] = document.getElementById('text2').value;
            servers[3] = document.getElementById('text1').value;
            console.log(servers);
        });
    }
}



// Adding event listeners to the new buttons
document.getElementById('button2').addEventListener('click', function() {
    servers[1] = text2Value;
    h3.textContent = `${servers[1]} serves`;
    document.getElementById('radio2').checked = true; // Select radio2
    modal.hide();
    servers[2] = document.getElementById('text3').value;
    servers[3] = document.getElementById('text4').value;
    console.log(servers);
});

document.getElementById('button4').addEventListener('click', function() {
    servers[1] = text4Value;
    h3.textContent = `${servers[1]} serves`;
    document.getElementById('radio4').checked = true; // Select radio4
    modal.hide();
    servers[2] = document.getElementById('text3').value;
    servers[3] = document.getElementById('text2').value;
    console.log(servers);
});