import React from 'react';
import './App.css';

const data = [
  { id: 'Approve Message', letter: 'A', src: 'https://github.com/klopez10/drumkit/blob/master/src/assets/sounds/Gina_ApproveMessage.mp3' },
  { id: 'Assistant Manager', letter: 'S', src: 'https://github.com/klopez10/drumkit/blob/master/src/assets/sounds/Gina_AssistantManager.mp3' },
  { id: 'Doubt', letter: 'D', src: 'https://github.com/klopez10/drumkit/blob/master/src/assets/sounds/DoubtDoubtDoubt.mp3' },
	{ id: 'Farmer Market', letter: 'F', src: 'https://github.com/klopez10/drumkit/blob/master/src/assets/sounds/Terry_FarmersMarket.mp3' },
  { id: 'Bingpot', letter: 'G', src: 'https://github.com/klopez10/drumkit/blob/master/src/assets/sounds/Jake_Bingpot.mp3' },
  { id: '100', letter: 'H', src: 'https://github.com/klopez10/drumkit/blob/master/src/assets/sounds/Gina_100Emoji.mp3' },
	{ id: 'Naughty', letter: 'J', src: 'https://github.com/klopez10/drumkit/blob/master/src/assets/sounds/Jake_Naughty.mp3' },
  { id: 'Ok', letter: 'K', src: 'https://github.com/klopez10/drumkit/blob/master/src/assets/sounds/OkOkOk.mp3' }
]

class DrumPad extends React.Component {
 
  componentDidMount() {
    console.log(this.audio)
    document.addEventListener('keydown', this.handleKeydown)
    window.focus()
  }
  
  componentWillUnmount() {
   document.removeEventListener('keydown', this.handleKeydown)
  }
  
  handleKeydown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }
 
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }
  
  render() {
    return (
      <div 
          className='drum-pad' 
          id={this.props.id}
          onClick={this.handleClick}
      >
        <h1>{this.props.letter}</h1>
        <audio id={this.props.letter}
               className='clip'
               src={this.props.src}
               ref={ref => this.audio = ref}
          ></audio>
      </div>
    )
  }
}

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      display: 'Click or Press a Key'
    }
  }
  
  handleDisplay = display => this.setState({ display })
  
  render(){
    return(
    <div id='drum-machine'>
				<div id='display'>{this.state.display}</div>
        <div id='drum-pads'>
					{data.map(d => (
						<DrumPad
							key={d.id}
							id={d.id}
							letter={d.letter}
							src={d.src}
							handleDisplay={this.handleDisplay}
          />   
         ))}</div>
    </div>
    )
  }
}

export default App;
