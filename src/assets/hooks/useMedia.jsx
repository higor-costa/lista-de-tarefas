import React from 'react';

const useMedia = (media) => {
  const [resultado, setResultado] = React.useState(null);

  React.useEffect(() => {
    function verificaLargura() {
      const { matches } = window.matchMedia(media);
      setResultado(matches);
    }
    verificaLargura();
    
    window.addEventListener('resize', verificaLargura);
    return () => {
      window.removeEventListener('resize', verificaLargura);
    }
  }, [media]);

  return resultado;
};

export default useMedia;
