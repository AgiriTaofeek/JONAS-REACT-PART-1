// import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);
//   // const date = new Date(2023, 5, count).toDateString();
//   const todaysDate = new Date("june 23 2023");
//   const date = todaysDate.setDate(todaysDate.getDate() + count);

//   return (
//     <div className="App">
//       <div className="step">
//         <button
//           onClick={() => {
//             if (step > 1) setStep((s) => s - 1);
//           }}
//         >
//           -
//         </button>
//         <span>Step: {step}</span>
//         <button onClick={() => setStep((s) => s + 1)}>+</button>
//       </div>
//       <div className="count">
//         <button onClick={() => setCount((c) => c - step)}>-</button>
//         <span>Count: {count}</span>
//         <button onClick={() => setCount((c) => c + step)}>+</button>
//       </div>

//       <p>
//         <span>
//           {count === 0
//             ? "Today is "
//             : count > 0
//             ? `${count} days from today is `
//             : `${Math.abs(count)} days ago was `}
//         </span>
//         <span>{date}</span>
//       </p>
//     </div>
//   );
// }

//NOTE - Another version
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
