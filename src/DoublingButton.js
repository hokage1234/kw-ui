// src/DoublingButton.js
import React, { useState } from 'react';

const DoublingButton = () => {
  const [number, setNumber] = useState(1);

  const handleDoubleClick = () => {
    setNumber(prevNumber => prevNumber * 2);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}> {/* Dodany margin dla lepszego odstępu */}
      <h2 style={{ color: '#61dafb' }}>Aktualna liczba: {number}</h2> {/* Zmieniony kolor tekstu */}
      <button
        onClick={handleDoubleClick}
        style={{
          padding: '12px 25px',
          fontSize: '18px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s ease, transform 0.1s ease',
        }}
      >
        Podwój liczbę
      </button>
    </div>
  );
};

export default DoublingButton;