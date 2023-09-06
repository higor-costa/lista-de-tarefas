import React from 'react';

// Componentes
import Checkbox from './assets/components/Checkbox';

// Estilo
import styles from './App.module.css';

// SVG
import { ReactComponent as Lua } from './assets/images/icon-moon.svg';

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
      <main className={styles.conteudo}>
        <header className={styles.conteudoCabecalho}>
          <div>
            <h1>Todo</h1>
            <Lua className={styles.iconeTema} />
          </div>
          <form>
            <Checkbox />
            <input
              type="text"
              id="novaTarefa"
              className={styles.campoNovaTarefa}
              placeholder='Crie uma nova tarefa...'
            />
          </form>
        </header>
      </main>
    </>
  );
}

export default App;
