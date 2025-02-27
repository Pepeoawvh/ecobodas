import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="shadow-sm py-2">
      <div className="max-w-6xl mx-auto px-4">
        {/* Layout de dos filas en móvil, una fila en desktop */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start mb-3 md:mb-0">
            <Link href="/" className="font-bold text-xl text-emerald-800">
              <Image
                src="/images/logos/Ecobodaslogo.svg"
                alt="EcoBodas"
                width={100}
                height={80}
                className=""
              />
            </Link>
          </div>
          
          {/* Menú con botones compactos */}
          <div className="flex justify-center md:justify-end space-x-1 md:space-x-4 text-emerald-800 pb-2">
            <Link href="/ecoproducts" className="hover:text-emerald-500 bg-emerald-700 text-white rounded-full px-2 md:px-3 py-1 transition-colors text-xs md:text-base whitespace-nowrap flex-shrink-0">
              Catálogo
            </Link>
            <Link href="/ecowebs" className="hover:text-emerald-500 hover:bg-emerald-50 border border-emerald-600 rounded-full px-2 md:px-3 py-1 text-emerald-800 transition-colors text-xs md:text-base whitespace-nowrap flex-shrink-0">
              EcoWebs
            </Link>
            <Link href="/germinables" className="hover:text-emerald-500 hover:bg-emerald-50 border border-emerald-600 rounded-full px-2 md:px-3 py-1 text-emerald-800 transition-colors text-xs md:text-base whitespace-nowrap flex-shrink-0">
              Germinables
            </Link>
            <Link href="/ecoabout" className="hover:text-emerald-500 hover:bg-emerald-50 border border-emerald-600 rounded-full px-2 md:px-3 py-1 text-emerald-800 transition-colors text-xs md:text-base whitespace-nowrap flex-shrink-0">
              Nosotros
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;