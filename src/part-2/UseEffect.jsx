import React, { useState, useEffect } from 'react';

export default function UseEffect() {
  const [showTitle, setShowTitle] = useState(true);
  return (
    <>
      <div>UseEffect</div>
      <img src="/img.png" width={900} />
      <ul>
        <li>A component mounts when it’s added to the screen.</li>
        <li>A component updates when it receives new props or state change</li>
        <li>A component unmounts when it’s removed from the screen.</li>
      </ul>
      <button onClick={() => setShowTitle((prev) => !prev)}>
        toggle title
      </button>
      {showTitle && <Timer />}
    </>
  );
}
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 4000);
    // return () => {
    //   alert('component did unmount');
    // };
  }, []);

  // useEffect(() => {
  //   alert('count has been updated to ' + count);
  // }, [count]);

  return <h1>I've rendered {count} times!</h1>;
}
