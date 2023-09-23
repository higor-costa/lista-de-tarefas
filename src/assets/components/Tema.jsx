import React from 'react';

// Importações
import useMedia from '../hooks/useMedia';

// SVG
import { ReactComponent as Lua } from '../images/icon-moon.svg';
import { ReactComponent as Sol } from '../images/icon-sun.svg';

import { ReactComponent as DesktopEscuro } from '../images/bg-desktop-dark.jpg';
import { ReactComponent as DesktopClaro } from '../images/bg-desktop-light.jpg';
import { ReactComponent as MobileEscuro } from '../images/bg-mobile-dark.jpg';
import { ReactComponent as MobileClaro } from '../images/bg-mobile-light.jpg';

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

const imagemCabecalho = {
  movelClaro: {MobileClaro} + 'center/cover no-repeat',
  movelEscuro: {MobileEscuro} + 'center/cover no-repeat',
  desktopClaro: {DesktopEscuro} + 'center/cover no-repeat',
  desktopEscuro: {DesktopClaro} + 'center/cover no-repeat',
}

const iconeTema = { cursor: 'pointer' };

const Tema = () => {
  const [botao, setBotao] = React.useState(false);
  const dispositivoMovel = useMedia('(max-width: 630px)');

  function imagemFundoDinamica(botao) {
    const cabecalho = document.querySelector('header');
    
    if (botao) {
      {
        dispositivoMovel
          ? (cabecalho.style.background = imagemCabecalho.movelClaro)
          : (cabecalho.style.background = imagemCabecalho.desktopClaro);
      }
    } else {
      {
        dispositivoMovel
          ? (cabecalho.style.background = imagemCabecalho.movelEscuro)
          : (cabecalho.style.background = imagemCabecalho.desktopEscuro);
      }
    } 
  }
  

  function alteraTema() {
    setBotao((botao) => !botao);
    imagemFundoDinamica(botao);
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
