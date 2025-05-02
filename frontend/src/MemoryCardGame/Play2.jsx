// Play2.jsx
import React, { useState } from 'react';
import Modal from './Modal';
import './Modal.css';

function Play2() {
  const [showModal, setShowModal] = useState(true);
  const [difficulty, setDifficulty] = useState(null);

  const handleSelect = (level) => {
    setDifficulty(level);
    setShowModal(false);
    console.log("Selected:", level);
    // start the game here
  };

  return (
    <div>
      <Modal show={showModal} onClose={() => setShowModal(false)} onSelect={handleSelect} />
      {!showModal && <h1>Game started with {difficulty} mode</h1>}
    </div>
  );
}

export default Play2;

