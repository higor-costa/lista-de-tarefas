import React from 'react';

// Importações
import useMedia from '../hooks/useMedia';

// SVG
import { ReactComponent as Lua } from '../images/icon-moon.svg';
import { ReactComponent as Sol } from '../images/icon-sun.svg';

const temas = {
  claro: {
    '--body': 'hsl(236, 33%, 92%)',
    '--fundo-lista-tarefas': 'hsl(0, 0%, 98%)',
    '--nome-tarefa': 'hsl(235, 19%, 35%)',
    '--tarefa-concluida': 'hsl(233, 11%, 84%)',
    '--placeholder-e-rodape': 'hsl(236, 9%, 61%)',
  },
  escuro: {
    '--body': 'hsl(235, 21%, 11%)',
    '--fundo-lista-tarefas': 'hsl(235, 24%, 19%)',
    '--nome-tarefa': 'hsl(234, 39%, 85%)',
    '--tarefa-concluida': 'hsl(237, 14%, 26%)',
    '--placeholder-e-rodape': 'hsl(234, 11%, 52%)',
  },
};

const iconeTema = { cursor: 'pointer' };

const Tema = () => {
  const [botao, setBotao] = React.useState(false);

  function alteraTema() {
    setBotao((botao) => !botao);
  }

  React.useEffect(() => {
    const temaSelecionado = botao ? 'escuro' : 'claro';
    const tema = temas[temaSelecionado];
    const root = document.documentElement;

    for (let prop in tema) {
      root.style.setProperty(prop, tema[prop]);
    }
  }, [botao]);

  return (
    <>
      {botao ? (
        <Sol onClick={alteraTema} style={iconeTema} />
      ) : (
        <Lua onClick={alteraTema} style={iconeTema} />
      )}
    </>
  );
};

export default Tema;
