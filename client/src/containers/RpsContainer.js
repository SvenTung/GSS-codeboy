import React, {Component} from 'react';
import RockPaperScissors from  '../components/RockPaperScissors'
<<<<<<< HEAD
import Template from '../components/Template'

class RpsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      player: {name:"", choice:"", wins:0},
      eject: false
    }
    this.handleEjectClick = this.handleEjectClick.bind(this)
  }

  handleLeftClick(){
    console.log("Left");
  }
  handleRightClick(){
    console.log("Right");
  }
  handleUpClick(){
    console.log("Up");
  }
  handleDownClick(){
    console.log("Down");
  }

  handleAClick(){
    console.log('A button press');
  }


  handleBClick(){
    console.log("B");
  }
  handleStartClick(){
    console.log("Start");
  }
  handleEjectClick(){
    console.log("Eject")
    this.setState({ eject: !this.state.eject })

  }

  handleKeyPress = (event) => {
    switch(event.key){
      case 'o':
      console.log('o key pressed')
      break;
      case 'k':
      console.log('k key pressed')
      break;
      case 'a':
      console.log('a key pressed');
      break
      case 'd':
      console.log('d key pressed');
      break
      case 's':
      console.log('s key pressed');
      break
      case 'w':
      console.log('w key pressed');
      break
    }
  }



  render(){
    const { eject } = this.state;
    return (
      <div  className="main-content"
      tabIndex={-1}
      onKeyDown={this.handleKeyPress}
      >
      <p>Rock Paper Scissors!</p>
      <div className="cartridge-container">
      {eject ? ( <img src="/assets/cartridge.png" style={{height: "45vh"}} className="cartridge" />): (<div></div>)}
      </div>

      <Template

      aKey={this.handleLeftClick}
      dKey={this.handleRightClick}
      sKey={this.handleDownClick}
      wKey={this.handleUpClick}

      kKey={this.handleBClick}
      aButton={this.handleAClick}
      bButton={this.handleBClick}
      upPress={this.handleUpClick}
      downPress={this.handleDownClick}
      leftPress={this.handleLeftClick}
      rightPress={this.handleRightClick}
      ejectPress={this.handleEjectClick}
      startPress={this.handleStartClick}
      />
      <RockPaperScissors/>
=======
import CodeBoyTemplate from '../components/CodeBoyTemplate'
import GameOverScreen from '../components/GameOverScreen'

class RpsContainer extends Component{
  state = {
    ejected: false
  }

  handleEjectClick = () => {
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
          <div className="main-game">
            <CodeBoyTemplate />
            <RockPaperScissors eject={this.state.ejected} handleEjectClick={this.handleEjectClick}/>
          </div>
        )}
>>>>>>> 0b1d8bc5dc1a23e64b766b7c1b2a714dfdc73ab8
      </div>
    )
  }
}

export default RpsContainer
