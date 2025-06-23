
import './App.css';

import { useState, useRef, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <div className="time-display">{formatTime()}</div>
      <div className="button-group">
        <button
          onClick={handleStartStop}
          className={`start-stop-btn ${isRunning ? "stop" : ""}`}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="reset-btn"
          disabled={time === 0}
        >
          Reset
        </button>
      </div>
    </div>
  );
}


function App() {
  return (
    <>
      <Stopwatch />
    </>
  );
}

export default App;
