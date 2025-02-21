const Footer = () => {
    return (
      <footer className="bg-emerald-950 rounded text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EcoBodas</h3>
              <p className="text-gray-300">Haciendo tus sueños realidad de manera sustentable</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white">Inicio</a></li>
                <li><a href="/products" className="text-gray-300 hover:text-white">Productos</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white">Nosotros</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Email: info@ecobodas.com</li>
                <li>Tel: (123) 456-7890</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
  <p>&copy; {new Date().getFullYear()} EcoBodas. Todos los derechos reservados.</p>
  <a 
    href="/adminpanel" 
    className="text-xs text-gray-400 hover:text-white mt-2 inline-block"
  >
    🎫
  </a>
</div>
        </div>
      </footer>
    );
  };
  
  export default Footer;