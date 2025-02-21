'use client'
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestoreDB } from './firebase/config';
import ProductCard from './components/ProductCard';
import TestimonialCard from './components/TestimonialCard';
import FeatureCard from './components/FeatureCard';
import Link from 'next/link';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const q = query(
          collection(firestoreDB, 'ecoproductos'),
          where('featured', '==', true)
        );
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFeaturedProducts(products);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-emerald-800/10 to-secondary/10">
        <div className="text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold text-gray-800">
            Invitaciones de Boda Virtuales
          </h1>
          <p className="text-xl text-gray-600">
            Diseños modernos y ecológicos para tu día especial
          </p>
          <div className="space-x-4">
            <Link href={`/ecoproducts`}>
              <button className="bg-emerald-800 text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                Descargar Catálogo
              </button>
            </Link>
            <button className="border-2 border-emerald-800 text-emerald-800 px-8 py-3 rounded-lg hover:bg-emerald-800 hover:text-white transition-colors">
              Contactar
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Diseños Destacados
          </h2>
          {loading ? (
            <div className="text-center py-8">
              <p className="text-xl text-gray-600">Cargando diseños destacados...</p>
            </div>
          ) : featuredProducts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-xl text-gray-600">No hay diseños destacados disponibles</p>
            </div>
          )}
          <div className="text-center mt-12">
            <button className="bg-emerald-800 text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
              Ver Todos los Diseños
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white text-emerald-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Diseños Exclusivos"
              description="Creamos invitaciones únicas que reflejan tu estilo"
              icon="✨"
            />
            <FeatureCard 
              title="Eco-friendly"
              description="Contribuimos al medio ambiente con invitaciones digitales"
              icon="🌱"
            />
            <FeatureCard 
              title="Personalización"
              description="Adaptamos cada detalle a tus necesidades"
              icon="🎨"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-800">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="María García"
              content="Las invitaciones quedaron hermosas, todos nuestros invitados quedaron encantados con el diseño."
              date="Marzo 2024"
            />
            <TestimonialCard 
              name="Carlos Ruiz"
              content="Excelente servicio y muy profesionales. El proceso fue muy fácil y el resultado superó nuestras expectativas."
              date="Febrero 2024"
            />
            <TestimonialCard 
              name="Ana Martínez"
              content="Me encantó poder contribuir al medio ambiente con invitaciones digitales. ¡El diseño fue perfecto!"
              date="Enero 2024"
            />
          </div>
        </div>
      </section>

    </div>
  );
}