import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/authProvider';
import Footer from './components/Footer';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'EcoBodas',
  description: 'Invitaciones de boda virtuales y ecológicas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <AuthProvider>
        <body className={`${inter.className} relative min-h-screen`}>
          {/* Contenedor de la imagen de fondo */}
          <div className="fixed inset-0 w-full h-full">
            <Image
              src="/images/backgrounds/Herobg.svg"
              alt="Background"
              fill
              priority
              className="object-cover opacity-60"
              quality={100}
            />
          </div>
          
          {/* Contenido principal */}
          <div className="relative z-10">
            <main className="text-emerald-800 md:max-w-6xl md:mx-auto md:px-4">
              <Navbar />
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </AuthProvider>
    </html>
  );
}