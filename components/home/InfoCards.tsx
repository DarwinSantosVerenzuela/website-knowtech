"use client";
import React from 'react';
import './InfoCards.css';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function InfoCards() {
  return (
    <section className="info-grid-container">


      <Link href="/servicios/software-a-medida" className="info-card">


        <div className="card-bg-animated"></div>


        <div className="card-pill">
          <span className="pill-text">Desarrollo</span>
          <div className="pill-circle">
            <ChevronRight size={18} />
          </div>
        </div>
      </Link>


      <Link href="/servicios/soluciones" className="info-card">


        <img
          src="/imagen/tarjetas/diseño grafico.jpg"
          alt="Servicios"
          className="card-bg"
        />


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