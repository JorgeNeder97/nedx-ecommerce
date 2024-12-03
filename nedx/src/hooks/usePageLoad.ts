// src/hooks/usePageLoad.ts
import { useState, useEffect } from 'react';

const usePageLoad = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkReadyState = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    // Verificar al cargar inicialmente la página
    checkReadyState();

    // Escuchar los cambios en el estado de la página
    const onLoadHandler = () => {
      setIsLoading(false);
    };

    // Agregar el evento 'load' al document
    window.addEventListener('load', onLoadHandler);

    // Limpiar cuando el componente se desmonte
    return () => {
      window.removeEventListener('load', onLoadHandler);
    };
  }, []);

  return isLoading;
};

export default usePageLoad;
