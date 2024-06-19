import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import DescriptionStyling from '../styles/Description.css'
import axios from 'axios';


const Description = () => {
  


  return (
    <div className="des-container">
      <header>
        <h1>Chess Formats</h1>
      </header>
      <section className="format" id="blitz">
        <h2>Blitz Chess</h2>
       {/* <img src="blitz.jpg" alt="Blitz Chess" />*/}
        <p>Blitz chess is a fast-paced format of chess where each player typically has between 3 to 5 minutes to make all their moves.</p>
        <ul>
          <li><strong>Time Control:</strong> The most common time controls for Blitz chess are 3 minutes per player with no increment (3|0) or 3 minutes per player with a 2-second increment per move (3|2). Sometimes, 5 minutes per player without increment (5|0) is also used.</li>
          <li><strong>Strategy:</strong> Blitz requires quick thinking, rapid decision-making, and often relies on instinct and intuition rather than deep calculation. Players must manage their time wisely to avoid running out of time while still making accurate moves.</li>
          <li><strong>Popular Platforms:</strong> Blitz chess is very popular on online platforms such as Chess.com and Lichess.org, where players can easily find matches at any time.</li>
        </ul>
      </section>
      <section className="format" id="rapid">
        <h2>Rapid Chess</h2>
       {/* <img src="blitz.jpg" alt="Blitz Chess" />*/}
       <p>Rapid chess is a format that sits between Blitz and Classical chess, providing a balanced pace of play.</p>
        <ul>
          <li><strong>Time Control:</strong> The typical time controls for Rapid chess are 15 minutes per player with no increment (15|0) or 15 minutes per player with a 10-second increment per move (15|10). Time controls can vary.</li>
          <li><strong>Strategy:</strong> Rapid chess allows for deeper calculation and more strategic planning compared to Blitz. Players can still play intuitively but have more time to think through critical positions.</li>
          <li><strong>Popular Platforms:</strong> Rapid chess games are also widely played on platforms like Chess.com and Lichess.org, and are often featured in online tournaments and events.</li>
        </ul>
      </section>
      <section className="format" id="bullet">
        <h2>Bullet Chess</h2>
       {/* <img src="blitz.jpg" alt="Blitz Chess" />*/}
       <p>Bullet chess is the fastest form of chess, where each player has only 1-3 minutes for the entire game.</p>
        <ul>
          <li><strong>Time Control:</strong> The most common time control for Bullet chess is 1 minute per player with no increment (1|0). Some variations include 1 minute with a 1-second increment per move (1|1) or 2 minutes per player with no increment (2|0).</li>
          <li><strong>Strategy:</strong> Bullet chess demands extremely fast reflexes and quick decision-making. It often relies heavily on pre-moves and a strong familiarity with common openings and endgames.</li>
          <li><strong>Popular Platforms:</strong> Bullet chess is very popular among younger players and those looking for a quick adrenaline rush. It is widely played on Chess.com and Lichess.org.</li>
        </ul>
      </section>
      <footer>
        <p>Learn more about different chess formats on <a href="https://www.chess.com">chess.com</a> or <a href="https://lichess.org">lichess.org</a></p>
      </footer>
    </div>
  );
}

export default Description
