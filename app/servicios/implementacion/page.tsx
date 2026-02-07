"use client";
import React from 'react';
import './implementacion.css';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ServicePage() {
  return (
    <main className="implementacion-container">
      <Link href="/" className="flex items-center text-gray-500 hover:text-black mb-8 transition-colors">
        <ArrowLeft size={20} className="mr-2" />
        Volver al Inicio
      </Link>

      <h1 className="implementacion-title">IMPLEMENTACION</h1>
      <p className="implementacion-description">
        Bienvenido a la página de <strong>IMPLEMENTACION</strong>.
        <br /><br />
        Este es un archivo individual (page.tsx) con su propio CSS (implementacion.css).
        Aquí puedes editar el contenido específico para este servicio sin afectar a los demás.
      </p>

      <div className="mt-10 p-6">
        <p className="text-gray-400 text-sm">Archivo: app/servicios/implementacion/page.tsx</p>
      </div>
    </main>
  );
}
