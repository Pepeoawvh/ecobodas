import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/authProvider';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'EcoBodas',
  description: 'Invitaciones de boda virtuales y ecológicas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
    <AuthProvider>
      <body className={inter.className}>
        <Navbar />
        <main className=" text-emerald-800 max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />

      </body>
      </AuthProvider>
    </html>
  );
}