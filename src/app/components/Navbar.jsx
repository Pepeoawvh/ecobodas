import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className=" shadow-sm py-2">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-emerald-800 ">
            <Image
              src="/images/logos/Ecobodaslogo.svg"
              alt=""
              width={120}
              height={100}
              className=" "
            />
          </Link>
          <div className="flex space-x-4 text-emerald-800">
            <Link href="/ecoproducts" className="hover:text-emerald-500  bg-emerald-700 text-white rounded-full px-2 py-1 transition-colors">
              Catálogo
            </Link>
            <Link href="/ecoabout" className="hover:text-emerald-500 px-2 py-1 text-emerald-800 transition-colors">
              Nosotros
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;