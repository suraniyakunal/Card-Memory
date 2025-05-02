// Modal.jsx
import React from 'react';


export default function Modal({ show, onClose, onSelect }) {
  if (!show) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Select Difficulty</h2>
        <div className="modal-buttons">
          {['Easy', 'Medium', 'Hard'].map((level) => (
            <button key={level} onClick={() => onSelect(level)}>
              {level}
            </button>
          ))}
        </div>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

