import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      running: false,
      time: 0
    };
    this.incrementer = null;
    this.handler = this.handler.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  handler() {
    this.setState({
      running: !this.state.running});

    if (this.state.running ) {
      this.handleStop();
      return; }
    else{
      this.incrementer = setInterval( () =>
      this.setState({
        time: this.state.time + 1
      })
    , 1000);}
  }

  handleStop(){ 
    clearInterval( this.incrementer);
    
  }

  // handler() {
    // this.setState({
    // running: !this.state.running});

  //   setInterval(this.setState({
  //     time: this.state.time + this.state.running ? '1':'0'
  //   }), 1000)
  // }

// timer(){
//     setInterval(this.setState({
//       time: this.state.time + 1
//       //,
//     }), 1000)
//   }



  render() {
    const {running , time} = this.state;
    let minutes=Math.floor(time / 60);
    let seconds=time - (minutes * 60);
    let secondFormatted=`${seconds<10 ? '0': ''}${seconds}` ; //format seconds as 01,02,03...
    return (
      <div>
        <p>{minutes}:{secondFormatted}</p>
        <button onClick={this.handler}>{running ? 'stop': 'start'}</button>
      </div>
    );
  }
}



export default App;
