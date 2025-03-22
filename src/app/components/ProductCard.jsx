import React, { useState } from 'react';
import Link from 'next/link';

const ProductCard = ({ 
  product = {}, 
  isAdmin = false, 
  onToggleFeatured, 
  onEdit, 
  onDelete,
  showInfo = true // Nueva prop para controlar si se muestra información
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  if (!product) {
    return null;
  }

  const {
    id,
    image = '',
    title = '',
    category = '',
    productType = '',
    description = '',
    price = '0',
    paymentLink = '#',
    previewLink = '',
    videoUrl = '',
    featured = false
  } = product;

  const isGifUrl = (url) => {
    if (!url) return false;
    return url.toLowerCase().endsWith('.gif');
  };

  const isVideoUrl = (url) => {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg'];
    return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
  };

  const getEmbedUrl = (url) => {
    if (!url) return '';
    
    const patterns = [
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i,
      /youtube.com\/shorts\/([^"&?\/\s]{11})/i,
      /youtube.com\/embed\/([^"&?\/\s]{11})/i
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        return `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${match[1]}`;
      }
    }
    
    return url;
  };

  return (
    <div 
      className={`relative select-none rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group h-[500px] w-[280px] mx-auto ${isAdmin ? '' : 'hover:opacity-100'}`}
      onMouseEnter={() => !isAdmin && setIsHovered(true)}
      onMouseLeave={() => !isAdmin && setIsHovered(false)}
    >
      {/* Fondo de imagen */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay oscuro para mejorar legibilidad del texto */}
      <div className={`absolute select-none inset-0 bg-white backdrop-blur-sm ${showInfo ? 'bg-opacity-30' : 'bg-opacity-10'} transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
      
      {/* Video que aparece al hacer hover */}
      {videoUrl && (
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-300 z-10 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          {isGifUrl(videoUrl) ? (
            <img 
              src={videoUrl} 
              alt={`${title} animación`}
              className="w-full h-full object-cover"
            />
          ) : isVideoUrl(videoUrl) ? (
            <video 
              src={videoUrl} 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <iframe
              src={isHovered ? '' : getEmbedUrl(videoUrl)}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      )}
      
      {/* Estrella de destacado */}
      {featured && (
        <div className="absolute top-2 right-2 z-20">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-6 h-6 text-yellow-400"
          >
            <path 
              fillRule="evenodd" 
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd" 
            />
          </svg>
        </div>
      )}
      
      {/* Contenido de la tarjeta superpuesto */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-teal-700 z-20">
        {/* Información del producto (título, descripción, etc.) */}
        {showInfo && (
          <div className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold px-2 py-1 bg-emerald-100 rounded-full">{category}</span>
              {productType && (
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                  {productType}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold mt-3 drop-shadow-md">{title}</h3>
            <p className="text-teal-800 text-sm mt-2 line-clamp-3 drop-shadow-md">{description}</p>
          </div>
        )}
        
        {/* Espacio intermedio vacío para empujar los botones abajo */}
        <div className="flex-grow"></div>
        
        {/* Precio y botones en la parte inferior */}
        <div>
          {showInfo && (
            <p className={`text-2xl font-bold mt-2 mb-4 drop-shadow-md transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              ${price}
            </p>
          )}
          
          {isAdmin ? (
            <div className="flex justify-between items-center bg-black bg-opacity-30 p-2 rounded">
              <button
                onClick={() => onToggleFeatured(product)}
                className={`p-2 rounded-full ${
                  featured ? 'text-yellow-400' : 'text-gray-300'
                }`}
                title={featured ? 'Quitar de destacados' : 'Marcar como destacado'}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-6 h-6"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
              <div className="space-x-2">
                <button
                  onClick={() => onEdit(product)}
                  className="text-white hover:text-blue-300 font-medium"
                >
                  Editar
                </button>
                <button
                  onClick={() => onDelete(id)}
                  className="text-white hover:text-red-300 font-medium"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ) : (
            <div className={`flex flex-col space-y-2 ${isHovered ? 'bg-white bg-opacity-40 rounded pointer-events-auto' : ''}`}>
              {productType === "Invitación Digital" && previewLink && (
                <Link
                  href={previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-2 border-emerald-600 text-emerald-600 hover:text-yellow-400 text-sm hover:bg-emerald-800 hover:border-white py-2 px-4 rounded transition-colors inline-block text-center"
                >
                  Ver Demo
                </Link>
              )}
              <Link
                href={paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 text-shadow text-sm text-white bg-emerald-800 py-2 px-4 rounded hover:bg-emerald-600 transition-colors inline-block text-center"
              >
                Cotizar
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;