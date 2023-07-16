import { ReactNode } from "react";

type StepMessageProps = {
  step: number;
  children: ReactNode;
};

const StepMessage = ({ children, step }: StepMessageProps) => {
  return (
    <div className="message">
      <h3>Step {step}</h3> {children}
    </div>
  );
};

export default StepMessage;
