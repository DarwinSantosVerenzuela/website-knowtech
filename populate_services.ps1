$baseDir = "c:\Users\PC\Desktop\web-numerouno\my-app\app\servicios"
$services = @(
    "software-a-medida",
    "aplicaciones-web-pwa",
    "movil-multiplataforma",
    "ia",
    "backend-api",
    "ui-ux",
    "grafico",
    "branding-corporativo",
    "branding-ecosistemas",
    "consultoria",
    "asesoria",
    "implementacion"
)

foreach ($slug in $services) {
    $dir = Join-Path $baseDir $slug
    $cssFile = "$slug.css"
    $cssPath = Join-Path $dir $cssFile
    $tsxPath = Join-Path $dir "page.tsx"

    # Convert slug to readable title
    $title = ($slug -replace "-", " ").ToUpper()

    # CSS Content
    $cssContent = @"
/* CSS Específico para $title */
.$slug-container {
    background-color: #f8f9fa;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px;
}

.$slug-title {
    font-size: 3rem;
    color: #1a1a1a;
    margin-bottom: 20px;
    text-transform: capitalize;
}

.$slug-description {
    font-size: 1.2rem;
    color: #555;
    max-width: 800px;
    text-align: center;
    line-height: 1.6;
}
"@

    # TSX Content
    $tsxContent = @"
"use client";
import React from 'react';
import './$cssFile';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ServicePage() {
  return (
    <main className="$slug-container">
      <Link href="/" className="flex items-center text-gray-500 hover:text-black mb-8 transition-colors">
        <ArrowLeft size={20} className="mr-2" />
        Volver al Inicio
      </Link>

      <h1 className="$slug-title">$title</h1>
      <p className="$slug-description">
        Bienvenido a la página de <strong>$title</strong>. 
        <br/><br/>
        Este es un archivo individual (page.tsx) con su propio CSS ($cssFile).
        Aquí puedes editar el contenido específico para este servicio sin afectar a los demás.
      </p>
      
      <div className="mt-10 p-6 bg-white rounded-xl shadow-lg">
        <p className="text-gray-400 text-sm">Archivo: app/servicios/$slug/page.tsx</p>
      </div>
    </main>
  );
}
"@

    # Write files
    Set-Content -Path $cssPath -Value $cssContent
    Set-Content -Path $tsxPath -Value $tsxContent
    Write-Host "Generated $slug"
}
