import NavBar from "./components/NavBar";
import "./globals.css";
import { merriweather } from "./ui/fonts";
export const metadata = {
  title: "Ecobodas",
  description: "a Next Proyect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NavBar />
      <body className={`text-black ${merriweather.className}`}>
      {children}
      </body>
    </html>
  );
}
