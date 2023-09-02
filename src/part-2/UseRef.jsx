import { useState, useEffect, useRef } from 'react';

// export default function App() {
//   //Does Not Cause Re-renders
//   const [inputValue, setInputValue] = useState('');
//   const count = useRef(0);
//   useEffect(() => {
//     count.current = count.current + 1;
//   }, []);
//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }

// export default function App() {
//   //It can be used to access a DOM element directly.
//   const inputElement = useRef();
//   const focusInput = () => {
//     inputElement.current.focus();
//   };
//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }

export default function App() {
  //The useRef Hook can also be used to keep track of previous state values.
  const [inputValue, setInputValue] = useState('');
  const previousInputValue = useRef('');
  const handleChange = (e) => {
    setInputValue((prev) => {
      previousInputValue.current = prev;
      return e.target.value;
    });
  };
  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange} />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}
