import { useState, useEffect } from "react";

// Hook que controla la carga de las imágenes en la página
const usePageLoad = () => {
  const [visibleImages, setVisibleImages] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Esta función se llama cada vez que una imagen entra o sale del viewport
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      // Si la imagen está completamente visible, la consideramos visible al 100%
      if (entry.isIntersecting && entry.intersectionRatio === 1) {
        setVisibleImages((prev) => prev + 1);
      } else {
        setVisibleImages((prev) => prev - 1);
      }
    });
  };

  useEffect(() => {
    // Cuando todas las imágenes estén visibles, terminamos la carga
    if (visibleImages === totalImages) {
      setIsLoading(false);
    }
  }, [visibleImages, totalImages]);

  // Función que recibe los elementos a observar
  const observeImages = (images: NodeListOf<Element>) => {
    setTotalImages(images.length);
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1.0, // Solo se activa cuando la imagen está 100% visible
    });

    // Observamos todas las imágenes pasadas como argumento
    images.forEach((image) => observer.observe(image));
  };

  // Exponemos la función para que puedas llamarla desde otros componentes
  return { isLoading, observeImages };
};

export default usePageLoad;
