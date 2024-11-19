import { useState } from "react";
const messages = [
  "Learn React 👨‍💻",
  "Apply For Jobs 💼",
  "Invest your new Income 🤑",
];
export default function StepProject() {
  const [num, setNum] = useState(1);
  const [isOpen, setisOpen] = useState(true);
  let step = num;

  const onClickNext = () => {
    setNum((n) => (step >= messages.length ? (n = messages.length) : n + 1));
  };
  const onClickPrev = () => {
    setNum((n) => (step <= 1 ? (n = 1) : n - 1));
  };

  return (
    <>
      <button
        className="close"
        onClick={() => setisOpen((isOpen) => !isOpen)}
        title={isOpen ? "Close-Card" : "Open-Card"}
      >
        {isOpen ? "◨" : " ◧"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p
            className="message"
            style={{
              color: "black",
              fontSize: ".9em",
            }}
          >
            step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{
                background: "#7950f2",
                color: "#fff",
                fontSize: ".8em",
              }}
              onClick={onClickPrev}
            >
              Previous
            </button>
            <button
              style={{
                background: "#7950f2",
                color: "#fff",
                fontSize: ".8em",
              }}
              onClick={onClickNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
