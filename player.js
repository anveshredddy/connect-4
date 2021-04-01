import React, { Component } from "react";
import {
  
  NavLink,
  
} from "react-router-dom";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Player Details</h2>
        
        <ol>
          <li>Player 1 Name:</li>
          <p><input type="text" placeholder="Enter name"/></p>
          <li>Player 2 Name:</li>
          <p><input type="text" placeholder="Enter name"/></p>
          <NavLink to="/game">Start Game</NavLink>
                 
        </ol>
      </div>
    );
  }
}
 
export default Stuff;