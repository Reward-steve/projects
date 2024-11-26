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

  return (
    <div className="steps">
      <div className="numbers">
        <button
          onClick={() => setStepNum((n) => n - 1)}
          style={{ background: "gainsboro" }}
        >
          -
        </button>
        <h3 style={{ color: "black", fontSize: "1em" }}>Step :{stepNum}</h3>
        <button
          onClick={() => setStepNum((n) => n + 1)}
          style={{ background: "gainsboro" }}
        >
          +
        </button>
      </div>

      <div className="numbers">
        <button
          onClick={() => setNum((n) => n - stepNum)}
          style={{ background: "gainsboro" }}
        >
          -
        </button>
        <h3 style={{ color: "black", fontSize: "1em" }}>Count : {num}</h3>
        <button
          onClick={() => setNum((n) => n + stepNum)}
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
    </div>
  );
}
