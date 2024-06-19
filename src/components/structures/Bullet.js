import React, { useState, useEffect } from 'react';
import '../styles/ChessClock.css';

const Bullet = () => {
  const [turn, setTurn] = useState(-1);
  const [timer1, setTimer1] = useState(false);
  const [timer2, setTimer2] = useState(false);
  const [time1, setTime1] = useState({ min: 1, sec: 0, count: 99 });
  const [time2, setTime2] = useState({ min: 1, sec: 0, count: 99 });
  const [moves1, setMoves1] = useState(0);
  const [moves2, setMoves2] = useState(0);

  const handleClick = (container) => {
    if (container === 1 && (turn === 2 || turn === -1)) {
      setTimer2(false);
      setTimer1(true);
      setTurn(1);
      setMoves2((prev) => prev + 1);
    } else if (container === 2 && (turn === 1 || turn === -1)) {
      setTimer1(false);
      setTimer2(true);
      setTurn(2);
      setMoves1((prev) => prev + 1);
    }
  };

  const handleTimer = (player) => {
    if (player === 1 && timer1) {
      setTime1((prev) => {
        let { min, sec, count } = prev;
        if (count === 0) {
          sec--;
          count = 99;
        } else {
          count--;
        }
        if (sec === 0 && min > 0) {
          min--;
          sec = 59;
        }
        if (sec < 0) sec = 0;
        return { min, sec, count };
      });
    } else if (player === 2 && timer2) {
      setTime2((prev) => {
        let { min, sec, count } = prev;
        if (count === 0) {
          sec--;
          count = 99;
        } else {
          count--;
        }
        if (sec === 0 && min > 0) {
          min--;
          sec = 59;
        }
        if (sec < 0) sec = 0;
        return { min, sec, count };
      });
    }
  };

  useEffect(() => {
    let interval;
    if (timer1 || timer2) {
      interval = setInterval(() => {
        if (timer1) handleTimer(1);
        if (timer2) handleTimer(2);
      }, 8.5);
    }
    return () => clearInterval(interval);
  }, [timer1, timer2]);

  const start = () => {
    if (!timer1 && !timer2) {
      if (turn === 1) {
        setTimer1(true);
      } else if (turn === 2) {
        setTimer2(true);
      }
    }
  };

  const stop = () => {
    if (timer1) setTimer1(false);
    if (timer2) setTimer2(false);
  };

  const reset = () => {
    setTimer1(false);
    setTimer2(false);
    setTime1({ min: 1, sec: 0, count: 99 });
    setTime2({ min: 1, sec: 0, count: 99 });
    setMoves1(0);
    setMoves2(0);
    setTurn(-1);
  };

  const updateTimer1 = () => {
    const time = prompt('Enter Player1 Timer', 10);
    if (time) {
      setTime1({ ...time1, min: parseInt(time), sec: 0 });
    }
  };

  const updateTimer2 = () => {
    const time = prompt('Enter Player2 Timer', 10);
    if (time) {
      setTime2({ ...time2, min: parseInt(time), sec: 0 });
    }
  };

  return (
    <div id="chess-container">
      <div id="heading">
        <h1 className='clock-header'>CHESS CLOCK</h1>
      </div>
      <div
        id="container1"
        onClick={() => handleClick(2)}
        className={turn === 1 ? 'active' : ''}
      >
        <div id="player1">
          <span className={`cntdown1 ${turn === 1 ? 'active' : ''}`} id="min1">
            {time1.min}
          </span>
          <span className={`cntdown1 colon ${turn === 1 ? 'active' : ''}`}>:</span>
          <span className={`cntdown1 ${turn === 1 ? 'active' : ''}`} id="sec1">
            {time1.sec < 10 ? `0${time1.sec}` : time1.sec}
          </span>
        </div>
      </div>
      <div className="moves">
        <span className='movechar'>MOVES : </span>
        <span id="moves1">{moves1}</span>
      </div>
      <div id="middle">
        <span className="images" id="settings1" onClick={updateTimer1}>
          <img src="settings.png" alt="settings" />
        </span>
        <span className="images" id="reset" onClick={reset}>
          <img src="reset.png" alt="reset" />
        </span>
        <span className="images" id="start" onClick={start}>
          <img src="play.png" alt="start" />
        </span>
        <span className="images" id="stop" onClick={stop}>
          <img src="pause.png" alt="stop" />
        </span>
        <span className="images" id="settings2" onClick={updateTimer2}>
          <img src="settings.png" alt="settings" />
        </span>
      </div>
      <div className="moves">
        <span className='movechar'>MOVES : </span>
        <span id="moves2">{moves2}</span>
      </div>
      <div
        id="container2"
        onClick={() => handleClick(1)}
        className={turn === 2 ? 'active' : ''}
      >
        <div id="player2">
          <span className={`cntdown2 ${turn === 2 ? 'active' : ''}`} id="min2">
            {time2.min}
          </span>
          <span className={`cntdown2 colon ${turn === 2 ? 'active' : ''}`}>:</span>
          <span className={`cntdown2 ${turn === 2 ? 'active' : ''}`} id="sec2">
            {time2.sec < 10 ? `0${time2.sec}` : time2.sec}
          </span>
        </div>
      </div>
       <div id="foot">Created By Krish Gupta</div>{/* */}
    </div>
  );
};

export default Bullet;
