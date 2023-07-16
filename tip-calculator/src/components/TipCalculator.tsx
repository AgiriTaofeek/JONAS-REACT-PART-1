import { useState } from "react";
import BillInput from "./BillInput";
import Output from "./Output";
import Reset from "./Reset";
import SelectPercentage from "./SelectPercentage";

const TipCalculator = () => {
  const [bill, setBill] = useState<string | number>("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = +bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percent={percentage1} onSetPercent={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percent={percentage2} onSetPercent={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      {+bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </form>
  );
};

export default TipCalculator;
