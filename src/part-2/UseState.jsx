import React, { useState } from 'react';

// 1

// export default function State() {
//   let count = 0;
//   const add = () => {
//     count += 1;
//     console.log('count', count);
//   };
//   return (
//     <>
//       <button onClick={add}>add +</button>
//       {count}
//     </>
//   );
// }

// we need state, to tell react this value is going to change

// 2

// export default function State() {
//   // useState function:
//   // input initial value of state
//   // returns an array [value, setter]
//   const [count, setCount] = useState(0);

//   const add = () => {
//     setCount(count + 1);
//     // setCount(count + 1);
//   };
//   return (
//     <>
//       <button onClick={add}>add +</button>
//       {count}
//     </>
//   );
// }

// setState function are asynchronous

// 3
export default function State() {
  const [count, setCount] = useState(0);

  const add = () => {
    // debugger;
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    console.log('count', count);
  };
  return (
    <>
      <button onClick={add}>add +2</button>
      {count}
    </>
  );
}
