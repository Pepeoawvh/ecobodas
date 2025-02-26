import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product = {}, isAdmin = false, onToggleFeatured, onEdit, onDelete }) => {
  if (!product) {
    return null;
  }

  const {
    id,
    image = '',
    title = '',
    category = '',
    productType = '', // Añadida nueva propiedad
    description = '',
    price = '0',
    paymentLink = '#',
    featured = false
  } = product;

  return (
    <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow relative">
      {featured && (
        <div className="absolute top-2 right-2 z-10">
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
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-xs font-semibold text-primary">{category}</span>
          {productType && (
            <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
              {productType}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mt-1">{title}</h3>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{description}</p>
        <p className="text-accent font-bold mt-2">${price}</p>
        
        {isAdmin ? (
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={() => onToggleFeatured(product)}
              className={`p-2 rounded-full hover:bg-gray-100 ${
                featured ? 'text-yellow-400' : 'text-gray-400'
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
                className="text-blue-600 rounded-full hover:text-blue-800 font-medium"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(id)}
                className="text-red-600 rounded-full hover:text-red-800 font-medium"
              >
                Eliminar
              </button>
            </div>
          </div>
        ) : (
          <div className="grid gap-x-5 grid-cols-2 mt-4">
            <Link
              href={paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 border-2 border-emerald-800 text-emerald-800 text-sm hover:text-white hover:bg-[#FFB300] py-2 px-4 rounded hover:bg-opacity-90 transition-colors inline-block text-center"
            >
              Ver Demo
            </Link>
            <Link
              href={paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 border-2 text-shadow text-sm text-white bg-emerald-800 py-2 px-4 rounded hover:bg-emerald-600 transition-colors inline-block text-center"
            >
              Comprar
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;