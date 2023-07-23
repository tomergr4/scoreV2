class Player {
    constructor(name) {
        this.name = name;
    }

    updateName(name) {
        this.name = name;
    }
}

class Team {
    constructor(name, player1, player2) {
        this.name = name;
        this.players = [player1, player2];
        this.score = 0;
    }

    addScore() {
        this.score++;
    }

    subtractScore() {
        if (this.score > 0) {
            this.score--;
        }
    }
}

class Game {
    constructor(team1, team2) {
        this.teams = [team1, team2];
        this.currentTeamIndex = 0;
    }

    getCurrentTeam() {
        return this.teams[this.currentTeamIndex];
    }

    nextTurn() {
        this.currentTeamIndex = (this.currentTeamIndex + 1) % this.teams.length;
    }

    scoreTeam(team) {
        team.addScore();
        if (team !== this.getCurrentTeam()) {
            this.nextTurn();
        }
    }

    deductScoreTeam(team) {
        team.subtractScore();
    }

    reset() {
        this.teams.forEach(team => {
            team.score = 0;
            location.reload();
        });
    }

    updateScores() {
        document.getElementById("ScoreDispOne").textContent = this.teams[0].score;
        document.getElementById("ScoreDispTwo").textContent = this.teams[1].score;
    }
}

window.onload = function() {
    let player1 = new Player(document.getElementById("text1").value);
    let player2 = new Player(document.getElementById("text3").value);
    let team1 = new Team('Team 1', player1, player2);

    let player3 = new Player(document.getElementById("text2").value);
    let player4 = new Player(document.getElementById("text4").value);
    let team2 = new Team('Team 2', player3, player4);

    let game = new Game(team1, team2);

    document.getElementById("text1").addEventListener('input', function() {
        player1.updateName(this.value);
    });

    document.getElementById("text3").addEventListener('input', function() {
        player2.updateName(this.value);
    });

    document.getElementById("text2").addEventListener('input', function() {
        player3.updateName(this.value);
    });

    document.getElementById("text4").addEventListener('input', function() {
        player4.updateName(this.value);
    });

    document.getElementById("teamOneUp").addEventListener("click", function() {
        game.scoreTeam(team1);
        game.updateScores();
    });

    document.getElementById("teamTwoUp").addEventListener("click", function() {
        game.scoreTeam(team2);
        game.updateScores();
    });

    document.getElementById("teamOneDown").addEventListener("click", function() {
        game.deductScoreTeam(team1);
        game.updateScores();
    });

    document.getElementById("teamTwoDown").addEventListener("click", function() {
        game.deductScoreTeam(team2);
        game.updateScores();
    });

    document.getElementById("reset").addEventListener("click", function() {
        game.reset();
        game.updateScores();
    });

    document.getElementById("show").addEventListener('click', function() {
        console.log(game.teams[0]);
        console.log(game.teams[1]);
    });
}
c