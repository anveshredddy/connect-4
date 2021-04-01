import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import player from "./player";
  import game from "./game";
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>CONNECT FOUR GAME</h1>
          <ul class="display">
          <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/player">Player Info</NavLink></li>
            <li><NavLink to="/game">Game</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/player" component={player}/>
            <Route path="/game" component={game}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;