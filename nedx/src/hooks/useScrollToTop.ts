import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = (): void => {
  const location = useLocation();

  useEffect(() => {
    // Mover el scroll al inicio de la página
    window.scrollTo(0, 0);

    // Desactivar la restauración automática del scroll por parte del navegador
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, [location.pathname]); // Ejecuta el efecto al cambiar de ruta
};

export default useScrollToTop;
