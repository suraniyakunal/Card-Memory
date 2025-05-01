import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const LevelSelectModal = ({ isOpen, onClose, onSelectLevel }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Select Difficulty Level"
      style={{
        content: {
          maxWidth: '400px',
          margin: 'auto',
          padding: '2rem',
          textAlign: 'center',
        },
      }}
    >
      <h2>Select Level</h2>
      <button onClick={() => onSelectLevel('Easy')}>Easy</button>
      <button onClick={() => onSelectLevel('Medium')}>Medium</button>
      <button onClick={() => onSelectLevel('Hard')}>Hard</button>
    </Modal>
  );
};

export default LevelSelectModal;

