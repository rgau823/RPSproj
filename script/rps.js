      
      let score = JSON.parse(localStorage.getItem('score')) || {
        win: 0,
        lose: 0,
        tie: 0
      }

    updateScore();

    function updateScore() {
      document.querySelector('.js-score').innerText = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
    }

    function pickComputerMove() {
      let computerMove ='';
      const randomNumber = Math.random();
      if(randomNumber < 1/3) {
        computerMove = 'rock';
      } else if (randomNumber < 2/3) {
        computerMove = 'paper';
      } else {
        computerMove = 'scissors'
      }

      return computerMove;
    }

    function playGame(playerMove) {
      let status = '';
      const computerMove = pickComputerMove();
      if (playerMove === 'rock') {
        if (computerMove === 'rock') {
          status = 'Tie';
        } else if (computerMove === 'paper') {
          status = 'Lose';
        } else {
          status = 'Win';
        }
      } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          status = 'Win';
        } else if (computerMove === 'paper') {
          status = 'Tie';
        } else {
          status = 'Lose';
        }
      } else {
        if (computerMove === 'rock') {
          status = 'Lose';
        } else if (computerMove === 'paper') {
          status = 'Win';
        } else {
          status = 'Tie';
        }
      }
      if(status === 'Win') {
        score.win +=1;
        updateScore();        
      } else if (status === 'Tie') {
        score.tie +=1;
        updateScore();
      } else {
        score.lose +=1;
        updateScore();
      }

      document.querySelector('.js-result').innerHTML = `${status}.` 
      document.querySelector('.js-moves').innerHTML = `You chose <img class = "icon-format" src="images/${playerMove}-emoji.png">, the computer chose <img class = "icon-format" src="images/${computerMove}-emoji.png">. `;


      localStorage.setItem('score', JSON.stringify(score));

    }

    function resetScore() {
      score.win = 0;
      score.lose = 0;
      score.tie = 0;
      localStorage.removeItem('score');
      updateScore();
      document.querySelector('.js-result').innerText = '';
      document.querySelector('.js-moves').innerText = '';
    }