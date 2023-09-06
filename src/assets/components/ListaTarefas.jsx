import React from 'react';

//Componentes
import Checkbox from './Checkbox';

// Estilos
import styles from './ListaTarefas.module.css';

// SVG
import { ReactComponent  as DeletaTarefa} from '../images/icon-cross.svg';

const ListaTarefas = ({tarefas}) => {
  return (
    <ul>
      {tarefas.map(({ nome, id }) => {
        return (
          <li key={id} className={styles.tarefa}>
            <div>
              <Checkbox id={id}/>
              <label htmlFor={id}>{nome}</label>
            </div>
            <DeletaTarefa className={styles.iconDeletaTarefa} />
          </li>
        );
      })}
    </ul>
  );
};

export default ListaTarefas;
