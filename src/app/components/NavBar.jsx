"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleMenuClick = () => {
      const menuOcultable = document.getElementById("menuOcultable");
      menuOcultable.classList.toggle('hidden');
    };

    const botonmenu = document.getElementById("botonmenu");
    botonmenu.addEventListener("click", handleMenuClick);

    return () => {
      botonmenu.removeEventListener("click", handleMenuClick);
    };
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <div className="container border-l-amber-500 h-56">
      <Image src="/public/img/mmmlogohead.png" alt="Logo" className="logocabezal" width={400}
        height={300}
      />
      <button id="botonmenu" className="h-56">☰ Menú</button>
      <div id="menuOcultable" className={menuVisible ? '' : 'hidden'}>
        <span className="menutext1"><a href="#galeria">Galería</a></span>
        <span className="menutext2"><a href="#quienesomos">¿Quiénes somos?</a></span>
        <span className="menutext3"><a href="#contacto">Contacto</a></span>
        <div className="iniciarsesion">
          <a className="menutext4" href="https://pepeoawvh.github.io/Proyecto1MMM/">Iniciar Sesión</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
