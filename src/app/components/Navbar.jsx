import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-emerald-800 ">
            EcoBodas
          </Link>
          <div className="flex space-x-4 text-emerald-800">
            <Link href="/ecoproducts" className="hover:text-emerald-500  text-emerald-800 transition-colors">
              Productos
            </Link>
            <Link href="/ecoabout" className="hover:text-emerald-500 text-emerald-800 transition-colors">
              Nosotros
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;