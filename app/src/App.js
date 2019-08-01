import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav"
import Jumbotron from "./components/Jumbotron"

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <Jumbotron>
            <div class="header"> welcome to my website</div>
         
            <Nav/>
          </Jumbotron>
          
       
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
