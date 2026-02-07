"use client";
import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    title: "Nuevo Álbum",
    link: "/imagen/carussel/guitarra",
    image: "/imagen/carussel/guitarra.jpg"
  },
  {
    title: "Nuevo Álbum",
    link: "/musica/album",
    image: "/imagen/carussel/musico.png"
  },
  {
    title: "Nuevo Álbum",
    link: "/musica/album",
    image: "/imagen/carussel/piano.jpg"
  }
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 9000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <div className="carousel-card">
      <div className="carousel-image-wrapper">
        <img
          src={SLIDES[index].image}
          alt={SLIDES[index].title}
          className="carousel-img"
          key={index}
        />
        <div className="carousel-overlay"></div>
      </div>

      <div className="carousel-controls">

        <a href={SLIDES[index].link} className="info-pill">
          {SLIDES[index].title}
        </a>

        <div className="nav-buttons">
          <button onClick={handlePrev} className="circle-btn">
            <ChevronLeft size={20} />
          </button>
          <button onClick={handleNext} className="circle-btn">
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </div>
  );
}
