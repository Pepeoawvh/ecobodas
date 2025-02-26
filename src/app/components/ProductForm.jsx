import { useState } from 'react';

const ProductForm = ({ product, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: product?.title || '',
    description: product?.description || '',
    price: product?.price || '',
    category: product?.category || '',
    productType: product?.productType || '',
    image: product?.image || '',
    paymentLink: product?.paymentLink || '',
    featured: product?.featured || false,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-h-[80vh] overflow-y-auto py-2 px-1">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Título</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="mt-1 w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Descripción</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="mt-1 w-full p-2 border rounded"
            rows="3"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Precio</label>
            <input
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              className="mt-1 w-full p-2 border rounded"
              required
            />
          </div>

          <div className="flex items-center h-full pt-6">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => setFormData({...formData, featured: e.target.checked})}
              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
              Marcar como destacado
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Tipo de Producto</label>
            <select
              value={formData.productType}
              onChange={(e) => setFormData({...formData, productType: e.target.value})}
              className="mt-1 w-full p-2 border rounded"
              required
            >
              <option value="">Seleccionar tipo</option>
              {productTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Categoría</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="mt-1 w-full p-2 border rounded"
              required
            >
              <option value="">Seleccionar categoría</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">URL de la imagen</label>
          <input
            type="url"
            value={formData.image}
            onChange={(e) => setFormData({...formData, image: e.target.value})}
            className="mt-1 w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Link de Pago Mercado Pago</label>
          <input
            type="url"
            value={formData.paymentLink}
            onChange={(e) => setFormData({...formData, paymentLink: e.target.value})}
            className="mt-1 w-full p-2 border rounded"
            placeholder="ENLACE DE PAGO..."
            required
          />
          <p className="mt-1 text-sm text-gray-500">
            Ingresa el link de pago generado en Mercado Pago
          </p>
        </div>

        <div className="flex justify-end space-x-2 pt-2 sticky bottom-0 bg-white pb-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-orange-900 text-red-800 rounded hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-600"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;