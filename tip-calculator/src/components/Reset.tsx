type ResetProps = {
  onReset: () => void;
};

const Reset = ({ onReset }: ResetProps) => {
  return (
    <button style={{ cursor: "pointer" }} onClick={onReset}>
      Reset
    </button>
  );
};

export default Reset;
