import { useReducer } from 'react';

//useReducer is very similar to useState,
//but it lets you move the state update logic from event handlers
//into a single function outside of your component

function reducer(state, action) {
  if (action.type === 'increment') {
    console.log('state.age + 1', state.age + 1);
    return {
      age: state.age + 1,
    };
  }
  throw Error('Unknown action.');
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button onClick={() => dispatch({ type: 'increment' })}>add +</button>
      {state.age}
    </>
  );
}
