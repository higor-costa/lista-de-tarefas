import React from 'react';

// Componentes
import ListaTarefas from './assets/components/ListaTarefas';
import NavegacaoTarefas from './assets/components/NavegacaoTarefas';
import Tema from './assets/components/Tema';

// Hooks
import useMedia from './assets/hooks/useMedia';

// Estilo
import styles from './App.module.css';

const App = () => {
  const dispositivoMovel = useMedia('(max-width: 630px)');
  const [listaTarefas, setListaTarefas] = React.useState(() => {
    const objetoTarefas = window.localStorage.getItem('Tarefas');
    return objetoTarefas ? JSON.parse(objetoTarefas) : [];
  });
  const [checkbox, setCheckbox] = React.useState(false);
  const [novaTarefa, setNovaTarefa] = React.useState('');
  const [filtro, setFiltro] = React.useState('todas');

  React.useEffect(() => {
    function armazenamentoLocal(listaTarefas) {
      const tarefas = JSON.stringify(listaTarefas);
      window.localStorage.setItem('Tarefas', tarefas);
    }
    armazenamentoLocal(listaTarefas);
  }, [listaTarefas]);

  function adicionaTarefa() {
    if (novaTarefa.length > 0) {
      const listaAtualizada = [...listaTarefas, {id: Math.round(Math.random() * 100000), nome: novaTarefa, concluida: false}];
      setListaTarefas(listaAtualizada);
      setNovaTarefa('');
    }
  }

  function apagaTodasTarefas() {
    setListaTarefas([]);
  }

  return (
    <>
      <header className={styles.cabecalho}></header>
      <main className={styles.conteudo}>
        <header className={styles.conteudoCabecalho}>
          <div>
            <h1>Todo</h1>
            <Tema />
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
          <ListaTarefas tarefas={listaTarefas} setListaTarefas={setListaTarefas} filtro={filtro}/>
          <footer>
            <p>{listaTarefas.length} tarefas</p>
            {dispositivoMovel ? '' : <NavegacaoTarefas setFiltro={setFiltro} />}
            <button type="reset" className={styles.apagarTarefas} onClick={apagaTodasTarefas} >Apagar tarefas</button>
          </footer>
        </main>
        {dispositivoMovel ? (
          <footer className={styles.rodapeDispositivoMovel}>
            <NavegacaoTarefas setFiltro={setFiltro} />
          </footer>
        ) : ('')}
      </main>
    </>
  );
};

export default App;
