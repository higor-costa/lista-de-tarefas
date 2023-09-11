import React from 'react';

// Estilos
import styles from './NavegacaoTarefas.module.css';

const NavegacaoTarefas = ({ setFiltro }) => {
  
  function filtraTarefas(evento, filtro) {
    const botao = evento.target;
    setFiltro(filtro);
    defineCorBotao(botao);
  }
  
  return (
    <nav>
      <ul className={styles.navegacaoTarefas}>
        <li>
          <button>Todas</button>
        </li>
        <li>
          <button>Ativas</button>
        </li>
        <li>
          <button>Concluídas</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavegacaoTarefas;
