import React, { Component } from "react";
import "./css/main.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="title">My JavaScript Challenges</div>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
