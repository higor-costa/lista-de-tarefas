import React from 'react';

// Estilo
import styles from './App.module.css';

const tarefas = [
  {
    id: 1,
    nome: 'Curso completo de JavaScript on-line' ,
    concluida: true
  },
  {
    id: 2,
    nome: 'Corra pelo parque 3x',
    concluida: false 
  },
  {
    id: 3,
    nome: '10 minutos de meditação',
    concluida: false 
  },
  {
    id: 4,
    nome: 'Ler por 1h',
    concluida: false 
  },
  {
    id: 5,
    nome: 'Pegue mantimentos',
    concluida: false 
  },
  {
    id: 6,
    nome: 'Conclua Todo App no Frontend Mentor',
    concluida: false 
  }
]

const App = () => {
  return (
    <>
      <header className={styles.cabecalho}></header>
    </>
  );
}

export default App;
