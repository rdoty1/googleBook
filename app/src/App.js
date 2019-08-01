import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav"
import Jumbotron from "./components/Jumbotron"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="hey">
          <Jumbotron>
          <Nav/>
            <div className="header"> LETS FIND YOU A BOOK</div>
            
          </Jumbotron>
          
        </div>

        <div className="container">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div className="container2">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
