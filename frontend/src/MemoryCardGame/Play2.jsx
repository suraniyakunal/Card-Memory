import React, { useState } from 'react';
import LevelSelectModal from '../components/LevelSelectModal';
import Modal from "react-modal";
import './LevelSelectModal.module.css';
import styles from './LevelSelectModal.module.css';


const Play = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [level, setLevel] = useState(null);

  const handleSelectLevel = (selectedLevel) => {
    setLevel(selectedLevel);
    setModalOpen(false);
   
  };

  return (
    <>
      <LevelSelectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelectLevel={handleSelectLevel}
      />
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <h2 className={styles.modalTitle}>Select Difficulty</h2>
        <div className={styles.levelButtons}>
          <button className={styles.levelButton}>Easy</button>
          <button className={styles.levelButton}>Medium</button>
          <button className={styles.levelButton}>Hard</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Play;

