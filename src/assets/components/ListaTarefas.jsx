import React from 'react';

//Componentes
import Checkbox from './Checkbox';

// Estilos
import styles from './ListaTarefas.module.css';

// SVG
import { ReactComponent  as DeletaTarefa} from '../images/icon-cross.svg';

const ListaTarefas = ({ tarefas, setListaTarefas }) => {
  function removerTarefa({ target }) {
    const idBotaoDelete = +target.parentNode.id;
    const listaAtualizada = tarefas.filter((tarefa) => {
      return tarefa.id === idBotaoDelete ? null : tarefa;
    });
    setListaTarefas(listaAtualizada);
  }

  function estadoTarefa({ target }) {
    const idCheckbox = +target.id;
    const listaAtualizada = tarefas.map((tarefa) => {
      return tarefa.id === idCheckbox ? { ...tarefa, concluida: !tarefa.concluida } : tarefa;
    });
    
    setListaTarefas(listaAtualizada);
  }

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === 'concluidas') {
      return tarefa.concluida === true;
    }
    else if (filtro === 'ativas') {
      return tarefa.concluida === false;
    }
    else {
      return true;
    }
  })

  return (
    <ul>
      {tarefas.map(({ nome, id, concluida }) => {
        return (
          <li key={id} className={styles.tarefa}>
            <div>
              <Checkbox id={id} concluida={concluida} estadoTarefa={estadoTarefa} />
              <label htmlFor={id}>{nome}</label>
            </div>
            <button type="button" id={id} >
              <DeletaTarefa className={styles.iconDeletaTarefa} onClick={removerTarefa} />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListaTarefas;
