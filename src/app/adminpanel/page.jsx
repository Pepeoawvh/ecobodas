'use client'
import useAdminPanel from '../hooks/useAdminPanel';
import ProductForm from '../components/ProductForm';
import ProductCard from '../components/ProductCard';
import { useState, useEffect } from 'react';

export default function AdminPanel() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isLoggedIn,
    showForm,
    setShowForm,
    editingProduct,
    setEditingProduct,
    products,
    loading,
    handleLogin,
    handleLogout,
    handleAddProduct,
    handleEditProduct,
    handleDeleteProduct,
    handleToggleFeatured
  } = useAdminPanel();

  // Estado para filtros
  const [filters, setFilters] = useState({
    category: '',
    productType: '',
    featured: false
  });

  const categories = [
    "Clásica",
    "Moderna",
    "Vintage",
    "Romántica",
    "Minimalista"
  ];

  const productTypes = [
    "Invitación Digital",
    "Invitación Germinable",
    "Recuerdo Sustentable",
    "Objeto Protocolar"
  ];

  // Lógica de filtrado
  const filteredProducts = products.filter(product => {
    const categoryMatch = !filters.category || product.category === filters.category;
    const typeMatch = !filters.productType || product.productType === filters.productType;
    const featuredMatch = !filters.featured || product.featured;
    return categoryMatch && typeMatch && featuredMatch;
  });

  // Validación de email
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  // Sanitización de inputs
  const sanitizeInput = (input) => {
    return input.trim().replace(/[<>]/g, '');
  };

  // Handlers para cambios en inputs
  const handleEmailChange = (e) => {
    const sanitizedEmail = sanitizeInput(e.target.value);
    setEmail(sanitizedEmail);
  };

  const handlePasswordChange = (e) => {
    const sanitizedPassword = sanitizeInput(e.target.value);
    setPassword(sanitizedPassword);
  };

  // Handler para submit con validación
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      alert('Por favor, ingresa un correo electrónico válido');
      return;
    }
    if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    handleLogin(e);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form onSubmit={handleSubmit} className="bg-white border-2 border-emerald-700 p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Acceso Admin Panel ECOBODAS</h2>
          <div className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full p-2 border rounded focus:ring-primary focus:border-primary ${
                  email && !isValidEmail(email) ? 'border-red-500' : ''
                }`}
                required
                pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}"
                title="Por favor Credencial válida"
                autoComplete="username"
                spellCheck="false"
                maxLength="50"
              />
              {email && !isValidEmail(email) && (
                <p className="text-red-500 text-xs mt-1">
                  Por favor un acertijo válido
                </p>
              )}
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full p-2 border rounded focus:ring-primary focus:border-primary"
                required
                minLength="6"
                maxLength="50"
                autoComplete="current-password"
              />
              {password && password.length < 6 && (
                <p className="text-red-500 text-xs mt-1">
                  Si no conoce la contraseña por favor contacte al mascapo
                </p>
              )}
            </div>
            <button
              type="submit"
              className={`w-full py-2 rounded transition-colors ${
                isValidEmail(email) && password.length >= 6
                  ? 'bg-emerald-700 text-white hover:bg-emerald-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!isValidEmail(email) || password.length < 6}
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold mr-2">Admin Panel</h1>
          <div className="space-x-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-600 transition-colors"
            >
              Añadir Producto
            </button>
          </div>
        </div>

        {/* Filtros de búsqueda */}
        <div className="mb-8 p-4 bg-white border-2 border-emerald-700 rounded-lg shadow-md">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Categoría
              </label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full p-2 border rounded focus:ring-emerald-700 focus:border-emerald-700"
              >
                <option value="">Todas las categorías</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Producto
              </label>
              <select
                value={filters.productType}
                onChange={(e) => setFilters({ ...filters, productType: e.target.value })}
                className="w-full p-2 border rounded focus:ring-emerald-700 focus:border-emerald-700"
              >
                <option value="">Todos los tipos</option>
                {productTypes.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="featured"
                checked={filters.featured}
                onChange={(e) => setFilters({ ...filters, featured: e.target.checked })}
                className="h-4 w-4 text-emerald-700 border-gray-300 rounded focus:ring-emerald-700"
              />
              <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
                Mostrar solo destacados
              </label>
            </div>
          </div>
        </div>

        {(showForm || editingProduct) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <h3 className="text-lg font-semibold mb-4">
                {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
              </h3>
              <ProductForm
                product={editingProduct}
                onSubmit={editingProduct ? handleEditProduct : handleAddProduct}
                onCancel={() => {
                  setShowForm(false);
                  setEditingProduct(null);
                }}
              />
            </div>
          </div>
        )}

        {loading ? (
          <div className="text-center py-8">
            <p className="text-xl text-gray-600">Cargando productos...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isAdmin={true}
                onToggleFeatured={handleToggleFeatured}
                onEdit={() => setEditingProduct(product)}
                onDelete={handleDeleteProduct}
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleLogout}
          className="bg-red-600 mt-20 text-white px-4 py-2 rounded hover:bg-red-500 transition-colors"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}