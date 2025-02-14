"use client"; // Necesario en Next.js

import { useState } from "react";
import "./styleNavbar.css"; // Archivo de estilos

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbars">
      <div className="nav-containers">
        <a href="#" className="logo">Música Studios</a>

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
      </div>
    </nav>
  );
}
