import React, { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('Hello, click the button to update me!');

  const handleClick = () => {
    setText('The text has been updated!');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{text}</h1>
      <button onClick={handleClick}>Update Text</button>
    </div>
  );
};

export default TextUpdater;