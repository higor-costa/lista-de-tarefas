import React from 'react';

// Estilo
import styles from './Checkbox.module.css';

const Checkbox = ({ id, concluida, estadoTarefa }) => {
  return <input type="checkbox" id={id} className={styles} checked={concluida} onChange={estadoTarefa} />;
};

export default Checkbox;
