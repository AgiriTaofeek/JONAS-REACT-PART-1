import { useState } from "react";
import Button from "./Button";
import StepMessage from "./StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handlePrevious = () => {
    if (step > 1) setStep((step) => step - 1);
  };
  const handleNext = () => {
    if (step < 3) setStep((step) => step + 1);
  };
  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button onClick={handlePrevious} bgColor="#7950f2" textColor="#fff">
              <span>👈</span>Previous
            </Button>
            <Button onClick={handleNext} bgColor="#7950f2" textColor="#fff">
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Steps;
