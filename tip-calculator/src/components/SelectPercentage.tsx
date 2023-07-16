import { ReactNode } from "react";

type SelectPercentageProps = {
  children: ReactNode;
  percent: number;
  onSetPercent: React.Dispatch<React.SetStateAction<number>>;
};
const SelectPercentage = ({
  children,
  percent,
  onSetPercent,
}: SelectPercentageProps) => {
  return (
    <div>
      <label htmlFor="percentage">{children}</label>
      <select
        id="percentage"
        value={percent === 0 ? "" : percent}
        onChange={(e) => onSetPercent(+e.target.value)}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
};

export default SelectPercentage;
