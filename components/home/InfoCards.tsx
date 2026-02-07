"use client";
import React from 'react';
import './InfoCards.css';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function InfoCards() {
  return (
    <section className="info-grid-container">

      {/* --- TARJETA 1: DESARROLLO (CON ANIMACIÓN) --- */}
      <Link href="/servicios/software-a-medida" className="info-card">

        {/* 1. FONDO ANIMADO (Sustituye a la imagen) */}
        <div className="card-bg-animated"></div>

        {/* 2. La Píldora Flotante */}
        <div className="card-pill">
          <span className="pill-text">Desarrollo</span>
          <div className="pill-circle">
            <ChevronRight size={18} />
          </div>
        </div>
      </Link>

      {/* --- TARJETA 2: SERVICIOS (CON IMAGEN) --- */}
      <Link href="/servicios/soluciones" className="info-card">

        {/* 1. IMAGEN DE FONDO (Se mantiene igual) */}
        <img
          src="/imagen/tarjetas/diseño grafico.jpg"
          alt="Servicios"
          className="card-bg"
        />

        {/* 2. La Píldora Flotante */}
        <div className="card-pill">
          <span className="pill-text">Servicios</span>
          <div className="pill-circle">
            <ChevronRight size={18} />
          </div>
        </div>
      </Link>

    </section>
  );
}