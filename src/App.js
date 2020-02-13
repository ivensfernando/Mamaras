import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      greatings:'hello IVENS'
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.greatings}
          </p>
          <button onClick={()=>this.setState({greatings:'HELLO ivens'})}>Change Text</button>
        </header>
      </div>
    );
  }
}

export default App;
