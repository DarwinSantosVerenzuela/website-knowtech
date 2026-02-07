"use client";
import React from 'react';
import './Footer.css';
import Link from 'next/link';

export default function Footer() {
  // Eliminamos lógica de modal por petición del usuario
  return (
    <footer className="footer-wrapper" suppressHydrationWarning>
      <div className="footer-pill" suppressHydrationWarning>

        {/* IZQUIERDA: Copyright + Política */}
        <div className="footer-left" suppressHydrationWarning>
          <span className="copyright-text" suppressHydrationWarning>
            © 2026 Aguacate Studios. Todos los derechos reservados.
          </span>
          <Link
            href="/servicios/privacidad"
            className="privacy-link focus:outline-none hover:opacity-80 transition-opacity text-left"
            suppressHydrationWarning
          >
            Política de privacidad
          </Link>
        </div>

        {/* DERECHA: Navegación */}
        <div className="footer-right" suppressHydrationWarning>
          <Link href="/servicios/consultoria" className="nav-link">Servicios</Link>
          <Link href="/servicios/contacto" className="nav-link">Contactanos</Link>
        </div>

      </div>
    </footer>
  );
}