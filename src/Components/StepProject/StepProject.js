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
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button bg="#7950f2" color="#fff" onclick={onClickPrev}>
              Previous
            </Button>
            <Button bg="#7950f2" color="#fff" onclick={onClickNext}>
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div
      className="message"
      style={{
        color: "black",
        fontSize: ".9em",
      }}
    >
      <h3>step {step}:</h3>
      {children}
    </div>
  );
}

function Button({ bg, color, onclick, children }) {
  return (
    <button
      style={{
        background: bg,
        color: color,
        fontSize: ".8em",
      }}
      onClick={onclick}
    >
      {children}
    </button>
  );
}
