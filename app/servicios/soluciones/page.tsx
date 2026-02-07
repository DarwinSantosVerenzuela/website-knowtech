"use client";
import React from 'react';
import './soluciones.css';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Page() {
  return (
    <main className="soluciones-container">
      <Link href="/" className="flex items-center text-gray-500 hover:text-black mb-8 transition-colors">
        <ArrowLeft size={20} className="mr-2" />
        Volver al Inicio
      </Link>

      <h1 className="text-4xl font-bold mb-4 capitalize">SOLUCIONES</h1>
      <p className="text-lg text-gray-600 max-w-2xl text-center">
        Contenido de la página <strong>SOLUCIONES</strong>.
      </p>
      <div className="mt-10 p-6">
        <p className="text-gray-400 text-sm">Archivo: app/servicios/soluciones/page.tsx</p>
      </div>
    </main>
  );
}
