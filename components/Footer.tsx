"use client";
import React from 'react';
import './Footer.css';
import Link from 'next/link';

export default function Footer() {

  return (
    <footer className="footer-wrapper" suppressHydrationWarning>
      <div className="footer-pill" suppressHydrationWarning>


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


        <div className="footer-right" suppressHydrationWarning>
          <Link href="/servicios/consultoria" className="nav-link">Servicios</Link>
          <Link href="/servicios/contacto" className="nav-link">Contactanos</Link>
        </div>

      </div>
    </footer>
  );
}