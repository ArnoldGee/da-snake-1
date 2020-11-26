import React from 'react';
import './controls.css';

const Controls = () => {
  return (
    <div className="controls">
      <button className="controls__button" id="left">
        <i class="fas fa-arrow-left"></i>
      </button>
      <button className="controls__button" id="top">
        <i class="fas fa-arrow-up"></i>
      </button>
      <button className="controls__button" id="bottom">
        <i class="fas fa-arrow-down"></i>
      </button>
      <button className="controls__button" id="right">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Controls;
