import React from 'react';

export default function Parent() {
  const [message, setMessage] = React.useState('Hello World');
  //   const getDataFromChild = (message) => {
  //     setMessage(message);
  //   };
  return (
    <div>
      <h1>{message}</h1>
      <Child
        //   sendData2Parent={getDataFromChild}
        color="blue"
      />
    </div>
  );
}

const Child = ({
  // sendData2Parent,
  color,
}) => {
  let msg = 'Goodbye';
  return (
    <div>
      <button
        //    onClick={() => sendData2Parent(msg)}
        style={{ color: color }}>
        Change Message
      </button>
    </div>
  );
};
