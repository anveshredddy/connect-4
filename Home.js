import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Instructions:</h2>
        <p><ol>
            <li>Each player will have alternative turns one after the other.</li>
            <li>Each player will drop in one checker piece at a time. </li>
            <li>This will give you a chance to either build your row, or stop your opponent from getting four in a row.</li>
            <li>The game is over either when you or your friend reaches four in a row, or when all forty two slots are filled, ending in a stalemate.</li>
           
            </ol></p>
      </div>
    );
  }
}
 
export default Home;