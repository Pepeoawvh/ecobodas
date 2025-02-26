import Image from 'next/image';
import { useState, useEffect } from 'react';

const Slide2 = ({ 
  imageUrl, 
  mobileImageUrl, // Imagen específica para móvil
  mobileImageStyles = "object-fill", // Estilos específicos para la imagen en móvil
  overlayPosition, 
  overlayGradient, 
  imageStyles 
}) => {
  const [currentImage, setCurrentImage] = useState(imageUrl);
  const [currentStyles, setCurrentStyles] = useState(imageStyles);
  
  // Detecta el tamaño de pantalla y cambia la imagen y sus estilos
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCurrentImage(mobileImageUrl || imageUrl);
        setCurrentStyles(mobileImageStyles || imageStyles);
      } else {
        setCurrentImage(imageUrl);
        setCurrentStyles(imageStyles);
      }
    };
    
    // Inicializar
    handleResize();
    
    // Escuchar cambios de tamaño
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imageUrl, mobileImageUrl, imageStyles, mobileImageStyles]);

  return (
    <div className="relative h-[70vh] md:h-[70vh] w-full bg-[#ffffff86]">
      <Image
        src={currentImage}
        alt="Background"
        fill
        priority
        className={currentStyles}
      />
      <div className={`absolute inset-0 bg-gradient-to-r ${overlayGradient}`}>
        <div className={`h-full flex items-center ${
          overlayPosition === 'left' ? 'justify-start' : 'justify-end'
        }`}>
          <div className={`max-w-md md:max-w-2xl px-4 md:px-8 ${
            overlayPosition === 'left' ? 'ml-4 md:ml-8' : 'mr-4 md:mr-8'
          }`}>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;