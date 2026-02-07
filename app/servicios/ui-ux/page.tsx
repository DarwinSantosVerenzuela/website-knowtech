"use client";
import React from 'react';
import './ui-ux.css';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ServicePage() {
  return (
    <main className="ui-ux-container">
      <Link href="/" className="flex items-center text-gray-500 hover:text-black mb-8 transition-colors">
        <ArrowLeft size={20} className="mr-2" />
        Volver al Inicio
      </Link>

      <h1 className="ui-ux-title">UI UX</h1>
      <p className="ui-ux-description">
        Bienvenido a la página de <strong>UI UX</strong>.
        <br /><br />
        Este es un archivo individual (page.tsx) con su propio CSS (ui-ux.css).
        Aquí puedes editar el contenido específico para este servicio sin afectar a los demás.
      </p>

      <div className="mt-10 p-6">
        <p className="text-gray-400 text-sm">Archivo: app/servicios/ui-ux/page.tsx</p>
      </div>
    </main>
  );
}
