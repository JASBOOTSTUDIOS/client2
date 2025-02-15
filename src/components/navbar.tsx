"use client"; // Necesario en Next.js

import { useState } from "react";
import "./navbar.css"; // Archivo de estilos
import Link from "next/link";
let image = {
  url: "/ja.png",
  alt: "."

} 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbars">
      <div className="nav-containers">
        <Link href="#" className="logo">
          <img className="img-logo" src={image.url} alt={image.alt} height={30} width={30} />
          Music Studio
          </Link>

        {/* Botón menú */}
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Menú */}
        <ul className={`nav-linkss ${isOpen ? "open" : ""}`}>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
        <div className="menu">
    <button className="menu-button">Menú</button>
    <div className="menu-content">
        <a href="#">Opción 1</a>
        <a href="#">Opción 2</a>
        <a href="#">Opción 3</a>
    </div>
</div>

      </div>
    </nav>
  );
}
