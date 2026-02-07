"use client";
import React, { useState } from 'react';
import './Header.css';
import {
  SiInstagram,
  SiBehance,
  SiYoutube,
  SiGithub,
} from 'react-icons/si';
import { Home, User, ChevronRight, X, Menu } from 'lucide-react';

import Link from 'next/link';

export default function Header() {
  const [showSocials, setShowSocials] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="header-wrapper">

      <Link href="/">
        <img
          src="/aguacates-estudios-venezuela.png"
          alt="Logo Central"
          className="header-logo-center cursor-pointer"
        />
      </Link>

      <div className="pill-main">

        <div className="section-left">

          <div className="desktop-socials">
            <button className="icon-button" aria-label="Instagram"><SiInstagram size={18} /></button>
            <button className="icon-button" aria-label="Behance"><SiBehance size={16} /></button>
            <button className="icon-button" aria-label="YouTube"><SiYoutube size={18} /></button>
            <button className="icon-button" aria-label="GitHub"><SiGithub size={18} /></button>
          </div>

          <div className="mobile-socials-wrapper">
            <button
              className={`icon-button arrow-trigger ${showSocials ? 'active' : ''}`}
              onClick={() => setShowSocials(!showSocials)}
              aria-label="Mostrar Redes"
            >
              <ChevronRight size={20} />
            </button>

            <div className={`socials-dropdown ${showSocials ? 'open' : ''}`}>
              <button className="icon-button small"><SiInstagram size={16} /></button>
              <button className="icon-button small"><SiBehance size={14} /></button>
              <button className="icon-button small"><SiYoutube size={16} /></button>
              <button className="icon-button small"><SiGithub size={16} /></button>
            </div>
          </div>

        </div>

        <div className="section-right-group">

          <div className="explore-container">
            <span className="explore-text">Explorar</span>

            <div className="mega-menu">

              <div className="menu-column">
                <span className="menu-title">Desarrollo</span>
                <a href="/servicios/software-a-medida" className="menu-item">Desarrollo de Software a medida</a>
                <a href="/servicios/aplicaciones-web-pwa" className="menu-item">Aplicaciones Web y PWA</a>
                <a href="/servicios/movil-multiplataforma" className="menu-item">Desarrollo móvil multiplataforma</a>
                <a href="/servicios/ia" className="menu-item">Integración y desarrollo de IA</a>
                <a href="/servicios/backend-api" className="menu-item">Ingeniería de APIs y conectividad backend</a>
              </div>

              <div className="menu-column">
                <span className="menu-title">Diseño</span>
                <a href="/servicios/ui-ux" className="menu-item">Diseño UI/UX</a>
                <a href="/servicios/grafico" className="menu-item">Diseño gráfico</a>
                <a href="/servicios/branding-corporativo" className="menu-item">Branding corporativo</a>
                <a href="/servicios/branding-ecosistemas" className="menu-item">Branding para ecosistemas digitales</a>
              </div>

              <div className="menu-column">
                <span className="menu-title">Servicios</span>
                <a href="/servicios/consultoria" className="menu-item">Consultoria</a>
                <a href="/servicios/asesoria" className="menu-item">Asesoria</a>
                <a href="/servicios/implementacion" className="menu-item">Implementacion</a>
              </div>

              <div className="menu-column">
                <span className="menu-title">Empresa</span>
                <a href="/servicios/soluciones" className="menu-item">Soluciones</a>
                <a href="/servicios/acerca-de-nosotros" className="menu-item">Acerca de nosotros</a>
                <a href="/servicios/contacto" className="menu-item">Contacto</a>
              </div>
            </div>
          </div>

          <div className="section-right">
            <Link href="/" className="icon-button" aria-label="Home"><Home size={18} /></Link>
            <button className="icon-button" aria-label="Profile"><User size={18} /></button>
          </div>

          <button
            className="icon-button mobile-menu-trigger"
            onClick={() => setShowMobileMenu(true)}
            aria-label="Menu"
          >
            <Menu size={18} />
          </button>

        </div>
      </div>

      <div className={`mobile-menu-overlay ${showMobileMenu ? 'open' : ''}`}>
        <div className="mobile-menu-content">

          <div className="mobile-nav-icons">
            <Link href="/" className="icon-button large" aria-label="Home"><Home size={22} /></Link>
            <button className="icon-button large" aria-label="Profile"><User size={22} /></button>
          </div>

          <div className="mobile-menu-header">
            <span className="mobile-menu-title">Menú</span>
            <button className="icon-button close-btn" onClick={() => setShowMobileMenu(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="mobile-menu-links">

            <div className="mobile-link-group">
              <span className="group-title">Desarrollo</span>
              <a href="/servicios/software-a-medida">Desarrollo de Software a medida</a>
              <a href="/servicios/aplicaciones-web-pwa">Aplicaciones Web y PWA</a>
              <a href="/servicios/movil-multiplataforma">Desarrollo móvil multiplataforma</a>
              <a href="/servicios/ia">Integración y desarrollo de IA</a>
            </div>

            <div className="mobile-link-group">
              <span className="group-title">Diseño</span>
              <a href="/servicios/ui-ux">Diseño UI/UX</a>
              <a href="/servicios/grafico">Diseño gráfico</a>
              <a href="/servicios/branding-corporativo">Branding corporativo</a>
            </div>

            <div className="mobile-link-group">
              <span className="group-title">Servicios</span>
              <a href="/servicios/consultoria">Consultoria</a>
              <a href="/servicios/asesoria">Asesoria</a>
              <a href="/servicios/implementacion">Implementacion</a>
            </div>

            <div className="mobile-link-group">
              <span className="group-title">Empresa</span>
              <a href="/servicios/soluciones">Soluciones</a>
              <a href="/servicios/acerca-de-nosotros">Acerca de nosotros</a>
              <a href="/servicios/contacto">Contacto</a>
            </div>

          </div>
        </div>
      </div>

    </header>
  );
}
