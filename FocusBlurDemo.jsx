import React, { useState } from 'react';

const FocusBlurDemo = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isTextBlurred, setIsTextBlurred] = useState(false);
  const [isImageBlurred, setIsImageBlurred] = useState(false);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h2
        onMouseEnter={() => setIsTextBlurred(true)}
        onMouseLeave={() => setIsTextBlurred(false)}
        style={{
          filter: isTextBlurred ? 'blur(3px)' : 'none',
          transition: 'filter 0.3s',
          marginBottom: '20px',
        }}
      >
        Hover over this text to blur
      </h2>

      <input
        type="text"
        placeholder="Click to focus"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          padding: '10px',
          fontSize: '16px',
          outline: 'none',
          backgroundColor: isFocused ? 'lightyellow' : 'white',
          border: isFocused ? '2px solid orange' : '1px solid gray',
          marginBottom: '20px',
        }}
      />

      <div>
        <img
          src="https://images.unsplash.com/photo-1640871426525-a19540c45a39?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hover to blur"
          onMouseEnter={() => setIsImageBlurred(true)}
          onMouseLeave={() => setIsImageBlurred(false)}
          style={{
            filter: isImageBlurred ? 'blur(4px)' : 'none',
            transition: 'filter 0.3s',
            width: '50%',
            height: 'auto',
            marginTop: '20px',
          }}
        />
      </div>
    </div>
  );
};

export default FocusBlurDemo;