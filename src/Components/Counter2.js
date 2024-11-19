import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);
  const [stepNum, setStepNum] = useState(1);

  const setCurrDate = () => {
    const dayArr = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const monthArr = [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let nDate = new Date();
    const day = nDate.getDay();
    const month = nDate.getMonth();
    const date = nDate.getDate();
    const year = nDate.getFullYear();
    return [`${dayArr[day]} ${monthArr[month]} ${date} ${year}`];
  };

  const date = new Date(setCurrDate());
  date.setDate(date.getDate() + num);

  const onClickHandleReset = () => {
    setNum(0);
    setStepNum(1);
  };

  return (
    <div className="steps">
      <div className="numbers">
        <input
          type="range"
          min={1}
          max={10}
          value={stepNum}
          onChange={(e) => setStepNum(Number(e.target.value))}
        />
        Step : {stepNum}
      </div>

      <div className="numbers">
        <button
          onClick={() => setNum((n) => Number(n - stepNum))}
          style={{ background: "gainsboro" }}
        >
          -
        </button>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
        />
        <button
          onClick={() => setNum((n) => Number(n + stepNum))}
          style={{ background: "gainsboro" }}
        >
          +
        </button>
      </div>
      <h3
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "1em",
        }}
      >
        {num === 0
          ? `Today is`
          : num > 0
          ? `${num} day from today is `
          : num < 0
          ? `${Math.abs(num)} days ago was `
          : `${num} day from today is `}
        {num === 0 ? ` ${setCurrDate()}` : `${date.toDateString()}`}
      </h3>
      {num !== 0 || stepNum !== 1 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={onClickHandleReset}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
