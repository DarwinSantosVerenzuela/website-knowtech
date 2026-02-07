"use client";
import React, { useState } from 'react';
import './Home.css';
import Carousel from '@/components/home/Carousel';
import InfoCards from '@/components/home/InfoCards';
import FeatureCards from '@/components/home/FeatureCards';
import AIBallIntro from '@/components/AIBallIntro';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="main-page">


      {showIntro && (
        <AIBallIntro onComplete={() => setShowIntro(false)} />
      )}




      <div className="home-grid">
        <section className="left-column">
          <Carousel />
        </section>
        <section className="right-column">
          <InfoCards />
        </section>
      </div>


      <div className="feature-wrapper">
        <FeatureCards />
      </div>

    </main>
  );
}