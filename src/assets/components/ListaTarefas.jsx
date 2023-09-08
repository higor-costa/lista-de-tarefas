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

  return (
    <ul>
      {tarefas.map(({ nome, id }) => {
        return (
          <li key={id} className={styles.tarefa}>
            <div>
              <Checkbox id={id}/>
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
