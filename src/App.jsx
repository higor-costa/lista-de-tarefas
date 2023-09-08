import React from 'react';

// Componentes
import ListaTarefas from './assets/components/ListaTarefas';
import NavegacaoTarefas from './assets/components/NavegacaoTarefas';

// Hooks
import useMedia from './assets/hooks/useMedia';

// Estilo
import styles from './App.module.css';

// SVG
import { ReactComponent as Lua } from './assets/images/icon-moon.svg';

const tarefas = [
  {
    id: 1,
    nome: 'Curso completo de JavaScript on-line',
    concluida: true,
  },
  {
    id: 2,
    nome: 'Corra pelo parque 3x',
    concluida: false,
  },
  {
    id: 3,
    nome: '10 minutos de meditação',
    concluida: false,
  },
  {
    id: 4,
    nome: 'Ler por 1h',
    concluida: false,
  },
  {
    id: 5,
    nome: 'Pegue mantimentos',
    concluida: false,
  },
  {
    id: 6,
    nome: 'Conclua Todo App no Frontend Mentor',
    concluida: false,
  },
];

const App = () => {
  const dispositivoMovel = useMedia('(max-width: 630px)');
  const [listaTarefas, setListaTarefas] = React.useState(tarefas);
  const [checkbox, setCheckbox] = React.useState(false);
  const [novaTarefa, setNovaTarefa] = React.useState('');

  function adicionaTarefa() {
    if (novaTarefa.length > 0) setListaTarefas([...listaTarefas, {id: ++tarefas.length, nome: novaTarefa, concluida: false}]);
    setNovaTarefa('');
  }

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
            <input type="checkbox" checked={checkbox} onChange={adicionaTarefa} />
            <input
              type="text"
              id="novaTarefa"
              className={styles.campoNovaTarefa}
              placeholder="Crie uma nova tarefa..."
              value={novaTarefa}
              onChange={({ target }) => setNovaTarefa(target.value)}
            />
          </form>
        </header>

        <main className={styles.conteinerTarefas}>
          <ListaTarefas tarefas={listaTarefas} setListaTarefas={setListaTarefas} />
          <footer>
            <p>{tarefas.length} tarefas</p>
            {dispositivoMovel ? '' : <NavegacaoTarefas />}
            <button type="reset" className={styles.apagarTarefas}>Apagar tarefas</button>
          </footer>
        </main>
        {dispositivoMovel ? (
          <footer className={styles.rodapeDispositivoMovel}>
            <NavegacaoTarefas />
          </footer>
        ) : ('')}
      </main>
    </>
  );
};

export default App;
