'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ephesis } from '../../ui/fonts';

const GerminablesProducts = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  
  const categories = [
    { id: 'todos', name: 'Todos los modelos' },
    { id: 'rustico', name: 'Estilo rústico' },
    { id: 'elegante', name: 'Elegante' },
    { id: 'minimalista', name: 'Minimalista' },
    { id: 'floral', name: 'Floral' },
  ];
  
  const products = [
    {
      id: 1,
      name: "Modelo Lavanda",
      image: "/images/products/germinable1.jpg",
      category: "rustico",
      price: "$xx.xx",
      description: "Invitación con semillas de lavanda, textura natural y detalles en acuarela"
    },
    {
      id: 2,
      name: "Modelo Margarita",
      image: "/images/products/germinable2.jpg",
      category: "floral",
      price: "$xx.xx",
      description: "Diseño delicado con semillas de margarita y acabados florales"
    },
    {
      id: 3,
      name: "Modelo Eucalipto",
      image: "/images/products/germinable3.jpg",
      category: "elegante",
      price: "$xx.xx",
      description: "Estilo sofisticado con semillas de eucalipto y toques dorados"
    },
    {
      id: 4,
      name: "Modelo Hierbas",
      image: "/images/products/germinable4.jpg",
      category: "minimalista",
      price: "$xx.xx",
      description: "Diseño limpio con semillas de hierbas aromáticas y líneas simples"
    },
    {
      id: 5,
      name: "Modelo Silvestre",
      image: "/images/products/germinable5.jpg",
      category: "rustico",
      price: "$xx.xx",
      description: "Combinación de flores silvestres con estilo campestre"
    },
    {
      id: 6,
      name: "Modelo Botánico",
      image: "/images/products/germinable6.jpg",
      category: "elegante",
      price: "$xx.xx",
      description: "Ilustraciones botánicas detalladas y semillas mixtas"
    },
  ];
  
  const filteredProducts = activeCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
            Nuestros modelos <span className={`${ephesis.className} text-4xl md:text-5xl`}>germinables</span>
          </h2>
          <p className="text-lg text-emerald-700">
            Con más de 200 diseños realizados, estas son algunas de nuestras creaciones más populares.
            Cada una puede adaptarse completamente a tu estilo y necesidades.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category.id
                  ? 'bg-emerald-700 text-white'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
              } transition-colors`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white border border-emerald-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">{product.name}</h3>
                <p className="text-emerald-700 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <Link 
                    href={`/ecoproducts/${product.id}`}
                    className="text-emerald-700 font-medium hover:text-emerald-600"
                  >
                    Ver detalles →
                  </Link>
                  <span className="font-bold text-emerald-800">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-emerald-700 text-lg mb-6">
            ¿No encuentras lo que buscas? Podemos crear un diseño totalmente personalizado para ti.
          </p>
          <Link 
            href="/contact?product=germinable_custom" 
            className="inline-block px-8 py-3 bg-emerald-700 text-white rounded-md hover:bg-emerald-600 transition-colors"
          >
            Solicitar diseño personalizado
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GerminablesProducts;