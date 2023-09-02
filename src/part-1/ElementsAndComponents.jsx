import React from 'react';

export default function Garage() {
  // We can refer to components inside other components.

  // A component can only return one element,
  // you can group multiple elements together with:
  // 1)Fragment <> ...my elements </>
  // 2)Wrapper node element e.g. <div> ...my elements </div>
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

function Car() {
  // Components are reusable bits of code.
  // They serve the same purpose as JavaScript functions, but return HTML.
  return <h2>I am a Car!</h2>;
}
