import React from 'react';
import { Link } from 'react-router-dom';
import ChessBoard from '../images/chessboard.png'
import HomeStyling from '../styles/Home.css'
import Bullet from './Bullet'
import Rapid from './Rapid'
import Blitz from './Blitz'

function Home() {
  return (
    <div className=" home-container">
    <Link to={'/clock'} className="no-dec"><button className="option no-dec" id="play-online">
        <div className="icon">
          <img src={ChessBoard} alt="Play Online" />
        </div>
        <div className="content">
          <h2>Custom</h2>
          <p>Set your custom time with no increment</p>
        </div>
      </button></Link>
      <Link to={'/blitz'} className="no-dec"><button className="option no-dec" id="play-online">
        <div className="icon">
          <img className='cb-img' src={ChessBoard}  alt="Play Online" />
        </div>
        <div className="content">
          <h2>Blitz Chess</h2>
          <p>3 minutes per player with no increment (3|0)</p>
        </div>
      </button></Link>
      <Link to={'/rapid'} className="no-dec"> <button className="option no-dec" id="play-online">
        <div className="icon">
          <img className='cb-img' src={ChessBoard} alt="Play Online" />
        </div>
        <div className="content">
          <h2>Rapid Chess</h2>
          <p>15 minutes per player with no increment (15|0)</p>
        </div>
      </button></Link>
      <Link to={'/bullet'} className="no-dec"><button className="option no-dec" id="play-online">
        <div className="icon">
          <img className='cb-img' src={ChessBoard} alt="Play Online" />
        </div>
        <div className="content">
          <h2>Bullet Chess</h2>
          <p>1 minute per player with no increment (1|0)</p>
        </div>
      </button></Link>
      {/*<Link to={'/description'} className="no-dec"><button className="option no-dec" id="play-online">
        <div className="icon">
          <img className='cb-img' src={ChessBoard} alt="Play Online" />
        </div>
        <div className="content">
          <h2>Description</h2>
          <p>Testing for description page</p>
        </div>
      </button></Link>*/}
    </div>
  );
}

export default Home;
