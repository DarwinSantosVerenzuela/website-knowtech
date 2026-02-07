"use client";
import React from 'react';
import './aplicaciones-web-pwa.css';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ServicePage() {
  return (
    <main className="aplicaciones-web-pwa-container">
      <Link href="/" className="flex items-center text-gray-500 hover:text-black mb-8 transition-colors">
        <ArrowLeft size={20} className="mr-2" />
        Volver al Inicio
      </Link>

      <h1 className="aplicaciones-web-pwa-title">APLICACIONES WEB PWA</h1>
      <p className="aplicaciones-web-pwa-description">
        Bienvenido a la página de <strong>APLICACIONES WEB PWA</strong>.
        <br /><br />
        Este es un archivo individual (page.tsx) con su propio CSS (aplicaciones-web-pwa.css).
        Aquí puedes editar el contenido específico para este servicio sin afectar a los demás.
      </p>

      <div className="mt-10 p-6">
        <p className="text-gray-400 text-sm">Archivo: app/servicios/aplicaciones-web-pwa/page.tsx</p>
      </div>
    </main>
  );
}
