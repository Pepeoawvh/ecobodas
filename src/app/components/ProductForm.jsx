import { useState, useEffect } from 'react';

const ProductForm = ({ product, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: product?.title || '',
    description: product?.description || '',
    price: product?.price || '',
    category: product?.category || '',
    productType: product?.productType || '',
    image: product?.image || '',
    paymentLink: product?.paymentLink || '',
    paymentLinkType: product?.paymentLinkType || 'mercadopago',
    previewLink: product?.previewLink || '',
    videoUrl: product?.videoUrl || '',
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

  // Tipos de enlaces de pago
  const paymentLinkTypes = [
    { value: 'mercadopago', label: 'Link Mercado Pago' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'otrolink', label: 'Otro Link' }
  ];

  // Efecto para pre-llenar el campo de WhatsApp cuando se cambia el tipo de enlace
  useEffect(() => {
    if (formData.paymentLinkType === 'whatsapp' && 
        (!formData.paymentLink || !formData.paymentLink.startsWith('https://wa.me/'))) {
      setFormData(prevData => ({
        ...prevData,
        paymentLink: 'https://wa.me/569'
      }));
    }
  }, [formData.paymentLinkType]);

  const handlePaymentLinkTypeChange = (e) => {
    const newType = e.target.value;
    setFormData(prevData => ({
      ...prevData,
      paymentLinkType: newType
    }));
  };

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

        {formData.productType === "Invitación Digital" && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">Link Demo</label>
              <input
                type="url"
                value={formData.previewLink}
                onChange={(e) => setFormData({...formData, previewLink: e.target.value})}
                className="mt-1 w-full p-2 border rounded"
                placeholder="https://ejemplo.com/preview"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">URL del Video (opcional)</label>
              <input
                type="url"
                value={formData.videoUrl}
                onChange={(e) => setFormData({...formData, videoUrl: e.target.value})}
                className="mt-1 w-full p-2 border rounded"
                placeholder="https://youtube.com/watch?v=XXXXXXXXXXX"
              />
              <p className="mt-1 text-sm text-gray-500">
                Formatos soportados: 
                <br />- Enlaces de YouTube (ej: https://youtube.com/watch?v=XXXXXXXXXXX)
                <br />- Enlaces de YouTube Shorts (ej: https://youtube.com/shorts/XXXXXXXXXXX)
                <br />- Videos directos (ej: https://ejemplo.com/video.mp4)
                <br />- Archivos GIF animados (ej: https://ejemplo.com/animacion.gif)
              </p>
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo de Enlace</label>
          <select
            value={formData.paymentLinkType}
            onChange={handlePaymentLinkTypeChange}
            className="mt-1 w-full p-2 border rounded"
            required
          >
            {paymentLinkTypes.map((linkType) => (
              <option key={linkType.value} value={linkType.value}>
                {linkType.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            {formData.paymentLinkType === 'mercadopago' 
              ? 'Link de Pago Mercado Pago' 
              : formData.paymentLinkType === 'whatsapp' 
                ? 'Link de WhatsApp' 
                : 'Enlace Personalizado'}
          </label>
          <input
            type="url"
            value={formData.paymentLink}
            onChange={(e) => setFormData({...formData, paymentLink: e.target.value})}
            className="mt-1 w-full p-2 border rounded"
            placeholder={
              formData.paymentLinkType === 'mercadopago' 
                ? "https://www.mercadopago.cl/checkout/v1/..." 
                : formData.paymentLinkType === 'whatsapp' 
                  ? "https://wa.me/56912345678" 
                  : "https://ejemplo.com/..."
            }
            required
          />
          <p className="mt-1 text-sm text-gray-500">
            {formData.paymentLinkType === 'mercadopago' 
              ? 'Ingresa el link de pago generado en Mercado Pago'
              : formData.paymentLinkType === 'whatsapp' 
                ? 'Solo necesitas editar el número después de "https://wa.me/"'
                : 'Ingresa el enlace personalizado para este producto'}
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