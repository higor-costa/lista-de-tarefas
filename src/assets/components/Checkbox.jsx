import React from 'react';

// Estilo
import styles from './Checkbox.module.css';

const Checkbox = ({ id }) => {
  return <input type="checkbox" id={id} className={styles} />;
};

export default Checkbox;
