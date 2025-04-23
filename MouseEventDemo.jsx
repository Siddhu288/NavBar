import React, { useState } from 'react';

function MouseEventDemo() {
  const [message, setMessage] = useState('');

  const handleMouseEnter = () => {
    setMessage('Mouse is over the button!');
  };

  const handleMouseLeave = () => {
    setMessage('Mouse left the button.');
  };

  return (
    <div className="text-center mt-5">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="btn btn-primary"
      >
        Hover over me
      </button>
      <p className="mt-3 fs-5">{message}</p>
    </div>
  );
}

export default MouseEventDemo;
