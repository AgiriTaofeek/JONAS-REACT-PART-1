type OutputProps = {
  bill: string | number;
  tip: number;
};

const Output = ({ bill, tip }: OutputProps) => {
  return (
    <h3>
      You pay ${Number(bill) + tip} (${bill} + ${tip} tip)
    </h3>
  );
};

export default Output;
