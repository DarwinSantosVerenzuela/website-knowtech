"use client";
import React from 'react';
import './acerca-de-nosotros.css';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Page() {
  return (
    <main className="acerca-de-nosotros-container">
      <Link href="/" className="flex items-center text-gray-500 hover:text-black mb-8 transition-colors">
        <ArrowLeft size={20} className="mr-2" />
        Volver al Inicio
      </Link>

      <h1 className="text-4xl font-bold mb-4 capitalize">ACERCA DE NOSOTROS</h1>
      <p className="text-lg text-gray-600 max-w-2xl text-center">
        Contenido de la página <strong>ACERCA DE NOSOTROS</strong>.
        <br/>
        Edita este archivo en: app/servicios/acerca-de-nosotros/page.tsx
      </p>
    </main>
  );
}
