"use client";
import React from 'react';
import './ia.css';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ServicePage() {
  return (
    <main className="ia-container">
      <Link href="/" className="flex items-center text-gray-500 hover:text-black mb-8 transition-colors">
        <ArrowLeft size={20} className="mr-2" />
        Volver al Inicio
      </Link>

      <h1 className="ia-title">IA</h1>
      <p className="ia-description">
        Bienvenido a la página de <strong>IA</strong>.
        <br /><br />
        Este es un archivo individual (page.tsx) con su propio CSS (ia.css).
        Aquí puedes editar el contenido específico para este servicio sin afectar a los demás.
      </p>

      <div className="mt-10 p-6">
        <p className="text-gray-400 text-sm">Archivo: app/servicios/ia/page.tsx</p>
      </div>
    </main>
  );
}
