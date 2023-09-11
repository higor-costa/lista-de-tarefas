import React from 'react';

// Estilos
import styles from './NavegacaoTarefas.module.css';

const NavegacaoTarefas = ({ setFiltro }) => {
  
  function defineCorBotao(botao) {
    const botoes = document.querySelectorAll('.botaoFiltro');
    botoes.forEach((botao) => {
      botao.style.color = 'var(--placeholder-e-rodape)';
    });

    botao.style.color = 'var(--azul-claro)';
  }

  function filtraTarefas(evento, filtro) {
    const botao = evento.target;
    setFiltro(filtro);
    defineCorBotao(botao);
  }

  return (
    <nav>
      <ul className={styles.navegacaoTarefas}>
        <li>
          <button className='botaoFiltro' onClick={(evento) => filtraTarefas(evento, 'todas')}>Todas</button>
        </li>
        <li>
          <button className='botaoFiltro' onClick={(evento) => filtraTarefas(evento, 'ativas')}>Ativas</button>
        </li>
        <li>
          <button className='botaoFiltro' onClick={(evento) => filtraTarefas(evento, 'concluidas')}>Concluídas</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavegacaoTarefas;
