import React, {Component}from 'react';
import Player from "./Player";

class RockPaperScissors extends Component {
  options = {
    "rock": ["scissors"],
    "paper": ["rock"],
    "scissors": ["paper"]
  };

  state = {
    players: [
      {name: "one", selectedOption: "", winner: false, wins: 0},
      {name: "Computer", selectedOption: "", winner: false, wins: 0}
    ],
    gameState: "active",
    gamesPlayed: 0
  };

  resetGame = () => {
    // this.setState({
      // players: [
      //   {name: "one", selectedOption: "", winner: false, wins: this.state.players[0].wins},
      //   {name: "Computer", selectedOption: "", winner: false, wins: this.state.players[1].wins}
      // ],
      this.state.players[0].selectedOption = ""
      this.state.players[1].selectedOption = ""
    this.setState({
      gameState: "active"
    });
  };

  checkGameState = () => {
    this.setComputerOption()
    if (this.state.players[0].selectedOption !== '' && this.state.players[1].selectedOption !== '') {
      if (this.state.players[0].selectedOption === this.state.players[1].selectedOption) {
        this.setState({gameState: 'draw'});
      } else {
        this.setState({gameState: 'complete'});
      }
      this.setState({gamesPlayed: this.state.gamesPlayed + 1});
      if (this.options[this.state.players[0].selectedOption].includes(this.state.players[1].selectedOption)) {
        this.setPlayerWinner(0);
      } else if (this.options[this.state.players[1].selectedOption].includes(this.state.players[0].selectedOption)) {
        this.setPlayerWinner(1);
      }
    }
  };

  setPlayerWinner = (playerId) => {
    const newPlayers = this.state.players;
    newPlayers[playerId].winner = true;
    newPlayers[playerId].wins = newPlayers[playerId].wins + 1;
    this.setState({players: newPlayers});
  };

  setPlayerOption = (playerId, playerOption) => {
    const newPlayers = this.state.players;
    newPlayers[playerId].selectedOption = playerOption;
    this.setState({players: newPlayers});
    this.checkGameState();
  };

  setComputerOption(){
    const choice = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)
    this.state.players[1].selectedOption = (choice[randomNumber])
    console.log(choice[randomNumber]);
  }

  render = () => {
    return (
      <div className={"game"}>
        <h1>Game state: {this.state.gameState}</h1>
        <h2>Games played: {this.state.gamesPlayed}</h2>
          <Player
            playerId={0}
            player={this.state.players[0]}
            setPlayerOption={this.setPlayerOption}
            gameState={this.state.gameState}
          />
        <br/>
        {this.state.players[0].selectedOption !== '' ? (
          <div>
            <p>{this.state.players[1].selectedOption}</p>
            <button onClick={() => {
            this.resetGame()
<<<<<<< HEAD
        }}>Play Again</button>) : <></>}
=======
            }}>Again</button>
          </div>
        ) : (<></>)
        }
>>>>>>> c2dbaef6291be9f3f811956489d387dce4047b61
      </div>
    );
  }
};

export default RockPaperScissors;
