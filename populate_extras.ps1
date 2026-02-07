$baseDir = "c:\Users\PC\Desktop\web-numerouno\my-app\app\servicios"
$services = @(
    "contacto",
    "soluciones",
    "acerca-de-nosotros",
    "privacidad"
)

foreach ($slug in $services) {
    $dir = Join-Path $baseDir $slug
    $cssFile = "$slug.css"
    $cssPath = Join-Path $dir $cssFile
    $tsxPath = Join-Path $dir "page.tsx"

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
"@

    # TSX Content
    $tsxContent = @"
"use client";
import React from 'react';
import './$cssFile';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Page() {
  return (
    <main className="$slug-container">
      <Link href="/" className="flex items-center text-gray-500 hover:text-black mb-8 transition-colors">
        <ArrowLeft size={20} className="mr-2" />
        Volver al Inicio
      </Link>

      <h1 className="text-4xl font-bold mb-4 capitalize">$title</h1>
      <p className="text-lg text-gray-600 max-w-2xl text-center">
        Contenido de la página <strong>$title</strong>.
        <br/>
        Edita este archivo en: app/servicios/$slug/page.tsx
      </p>
    </main>
  );
}
"@

    Set-Content -Path $cssPath -Value $cssContent
    Set-Content -Path $tsxPath -Value $tsxContent
    Write-Host "Generated $slug"
}
