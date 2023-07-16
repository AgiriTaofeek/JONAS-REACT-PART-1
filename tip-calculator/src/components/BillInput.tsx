type BillInputProps = {
  bill: string | number;
  onSetBill: React.Dispatch<React.SetStateAction<string | number>>;
};
const BillInput = ({ bill, onSetBill }: BillInputProps) => {
  return (
    <div>
      <label htmlFor="bill">How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        id="bill"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
};

export default BillInput;
