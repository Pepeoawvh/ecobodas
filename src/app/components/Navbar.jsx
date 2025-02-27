import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="shadow-sm py-2">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-emerald-800">
            <Image
              src="/images/logos/Ecobodaslogo.svg"
              alt=""
              width={120}
              height={100}
              className=""
            />
          </Link>
          <div className="flex space-x-2 md:space-x-4 text-emerald-800">
            <Link href="/ecoproducts" className="hover:text-emerald-500 bg-emerald-700 text-white rounded-full px-2 py-1 transition-colors text-sm md:text-base">
              Catálogo
            </Link>
            <Link href="/ecowebs" className="hover:text-emerald-500 hover:bg-emerald-50 border border-emerald-600 rounded-full px-2 py-1 text-emerald-800 transition-colors text-sm md:text-base">
              EcoWebs
            </Link>
            <Link href="/Germinables" className="hover:text-emerald-500 hover:bg-emerald-50 border border-emerald-600 rounded-full px-2 py-1 text-emerald-800 transition-colors text-sm md:text-base">
              Germinables
            </Link>
            <Link href="/ecoabout" className="hover:text-emerald-500 px-2 py-1 text-emerald-800 transition-colors text-sm md:text-base">
              Nosotros
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;