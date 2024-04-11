import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState({
    hour: "",
    minut: "",
    second: "",
  });

  const timer = useRef(null);

  const startTimer = () => {
    timer.current = setInterval(() => {
      updateTime();
    }, 1000);
  };

  const updateTime = () => {
    setTime((time) => {
      if (time.second !== 0 && time.second !== "")
        return { ...time, second: time.second - 1 };
      return { ...time, second: time.second };
    });
    setTime((time) => {
      if (
        time.minut !== 0 &&
        time.minut !== "" &&
        (time.second === 0 || time.second === "")
      )
        return { ...time, minut: time.minut - 1, second: 59 };
      return { ...time, minut: time.minut };
    });
    setTime((time) => {
      if (
        time.hour !== 0 &&
        time.hour !== "" &&
        (time.minut === 0 || time.minut === "") &&
        (time.second === 0 || time.second === "")
      )
        return { ...time, hour: time.hour - 1, minut: 60 };
      return { ...time, hour: time.hour };
    });
  };

  useEffect(() => {
    if (
      (time.hour === 0 || time.hour === "") &&
      (time.minut === 0 || time.minut === "") &&
      (time.second === 0 || time.second === "")
    ) {
      clearInterval(timer.current);
    }
  }, [time]);

  const stopTimer = () => {
    clearInterval(timer.current);
  };
  const resetTimer = () => {
    setTime({
      hour: "",
      minut: "",
      second: "",
    });
    clearInterval(timer.current);
  };
  return (
    <div className="timer">
      <div className="app-title">Timer</div>
      <div className="container-lable">
        <div className="hour-label timer-label">Hour</div>
        <div className="minut-label timer-label">Minut</div>
        <div className="second-label timer-label">Second</div>
      </div>
      <div className="container-timer">
        <div className="input-container">
          <input
            type="number"
            value={time?.hour}
            onInput={(e) =>
              setTime((time) => ({
                ...time,
                hour: e.target.value,
              }))
            }
            placeholder="00"
            className="timer-input"
            name="hour"
            id="hour"
          />
        </div>
        <div className="timer-divider">:</div>
        <div className="input-container">
          <input
            type="number"
            value={time?.minut}
            onInput={(e) =>
              setTime((time) => ({
                ...time,
                minut: e.target.value,
              }))
            }
            placeholder="00"
            className="timer-input"
            name="minuts"
            id="minuts"
          />
        </div>
        <div className="timer-divider">:</div>
        <div className="input-container">
          <input
            type="number"
            value={time?.second}
            onInput={(e) =>
              setTime((time) => ({
                ...time,
                second: e.target.value,
              }))
            }
            placeholder="00"
            className="timer-input"
            name="second"
            id="second"
          />
        </div>
      </div>
      <div className="button-container">
        <button
          className="start-button time-button"
          type="button"
          onClick={startTimer}
        >
          Start
        </button>
        <button
          className="start-button time-button"
          type="button"
          onClick={stopTimer}
        >
          Stop
        </button>
        <button
          className="reset-button time-button"
          type="button"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
