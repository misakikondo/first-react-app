import React from 'react';
import './App.css';

function App() {
  return(
    <div className="container text-center">
      <Clock />
    </div>
  )
}

class Clock extends React.Component {
  refresh(){
    window.alert('押しました')
  }

  render(){
    this.now = new Date();
    this.time=  `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`
    return <p onClick={this.refresh}>{this.time}</p>
  }
}

export default App;
