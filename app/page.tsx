"use client";
import React, { useState } from 'react';
import './Home.css'; // Importamos los estilos generales
import Carousel from '@/components/home/Carousel';
import InfoCards from '@/components/home/InfoCards';
import FeatureCards from '@/components/home/FeatureCards';
import AIBallIntro from '@/components/AIBallIntro';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="main-page">

      {/* =================================================================
          PANTALLA DE BIENVENIDA (INTRO TIPO GOOGLE GRAVITY)
          1. Se muestra mientras 'showIntro' sea true.
          2. Cubre toda la pantalla.
          3. Cuando el usuario hace clic en el botón, se ejecuta onComplete
             y 'showIntro' pasa a false, revelando la web.
          ================================================================= */}
      {showIntro && (
        <AIBallIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* =================================================================
          CONTENIDO DE LA PÁGINA (TU DISEÑO)
          Este contenido se carga de fondo, pero solo es visible/accesible
          cuando la Intro desaparece (o mediante la animación de zoom).
         ================================================================= */}

      {/* Contenedor Superior */}
      <div className="home-grid">
        <section className="left-column">
          <Carousel />
        </section>
        <section className="right-column">
          <InfoCards />
        </section>
      </div>

      {/* Contenedor Inferior */}
      <div className="feature-wrapper">
        <FeatureCards />
      </div>

    </main>
  );
}