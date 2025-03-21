'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { collection, getDocs } from 'firebase/firestore';
import { firestoreDB } from '../firebase/config';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    productType: '',
    featured: false
  });

  // Categorías disponibles
  const categories = [
    "Clásica",
    "Moderna",
    "Vintage",
    "Romántica",
    "Minimalista"
  ];

  // Tipos de productos
  const productTypes = [
    "Invitación Digital",
    "Invitación Germinable",
    "Recuerdo Sustentable",
    "Objeto Protocolar"
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestoreDB, 'ecoproductos'));
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    const categoryMatch = !filters.category || product.category === filters.category;
    const typeMatch = !filters.productType || product.productType === filters.productType;
    const featuredMatch = !filters.featured || product.featured;
    return categoryMatch && typeMatch && featuredMatch;
  });

  return (
    <div className="min-h-screen text-emerald-800 bg-gray-50">
      <Head>
        <title>EcoBodas - Productos</title>
        <meta name="description" content="Nuestros productos de invitaciones de boda" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mt-10">Nuestros Productos</h1>
        <p className="text-center mt-4 text-gray-600">
          Explora nuestras invitaciones de boda virtuales y ecológicas
        </p>

        {/* Filtros */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Filtro por Categoría */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Categoría
              </label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full p-2 border rounded focus:ring-primary focus:border-primary"
              >
                <option value="">Todas las categorías</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtro por Tipo de Producto */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Producto
              </label>
              <select
                value={filters.productType}
                onChange={(e) => setFilters({ ...filters, productType: e.target.value })}
                className="w-full p-2 border rounded focus:ring-primary focus:border-primary"
              >
                <option value="">Todos los tipos</option>
                {productTypes.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtro de Destacados */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="featured"
                checked={filters.featured}
                onChange={(e) => setFilters({ ...filters, featured: e.target.checked })}
                className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
                Mostrar solo destacados
              </label>
            </div>
          </div>
        </div>

        {/* Lista de Productos */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Cargando productos...</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                showInfo={false} // Mostramos tarjetas sin información detallada
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No se encontraron productos con los filtros seleccionados
            </p>
          </div>
        )}
      </main>
    </div>
  );
}