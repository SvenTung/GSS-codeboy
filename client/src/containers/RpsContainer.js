import React, {Component} from 'react';
import RockPaperScissors from  '../components/RockPaperScissors'
import CodeBoyTemplate from '../components/CodeBoyTemplate'
import GameOverScreen from '../components/GameOverScreen'

class RpsContainer extends Component{
  state = {
    ejected: false
  }

  handleEjectClick = () => {
    console.log("eject me!");
    this.setState({ejected: true})
  }

  render = () => {
    return(
      <div className = "main-content">
        {this.state.ejected ? (
          <div className="gameOverDiv">
            <div className="cartridge-container">
              <img src="/assets/cartridge2.png" style={{height: "45vh"}} className="cartridge" alt=""/>
            </div>
            <CodeBoyTemplate />
            <GameOverScreen />
          </div>
        ) : (
          <div>
            <CodeBoyTemplate />
            <RockPaperScissors eject={this.state.ejected} handleEjectClick={this.handleEjectClick}/>
          </div>
        )}
      </div>
    )
  }
}

export default RpsContainer
