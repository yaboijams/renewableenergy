// House.js
import React from 'react';

function House({ powered }) {
  return (
    <div className={`house ${powered ? 'powered' : 'unpowered'}`}>
      <div className="power-indicator"></div>
      <p>House</p>
    </div>
  );
}

export default House;
