"use client";
import React from 'react';
import { X } from 'lucide-react'; // Icono de cerrar

interface PrivacyPolicyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden relative animate-scaleUp">

                {/* Header del Modal */}
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <h2 className="text-2xl font-bold">Política de Uso y Privacidad</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/20 rounded-full transition-colors"
                        aria-label="Cerrar"
                    >
                        <X size={24} color="white" />
                    </button>
                </div>

                {/* Contenido Scrollable */}
                <div className="p-8 overflow-y-auto text-gray-700 leading-relaxed space-y-6">

                    <p className="font-medium text-lg text-gray-900 border-l-4 border-blue-500 pl-4 bg-blue-50/50 py-2 rounded-r-lg">
                        En **Aguacate Studios**, nos dedicamos a potenciar marcas y negocios. Esta política explica cómo utilizamos la información para brindarte experiencias digitales excepcionales.
                    </p>

                    <section>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            1. Finalidad de los Datos
                        </h3>
                        <p>
                            La información recopilada en este sitio web tiene como objetivo principal **entender tus necesidades y mejorar nuestros servicios**. Utilizamos estos datos para:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2 marker:text-blue-500">
                            <li>Personalizar tu experiencia de navegación y ofrecerte soluciones a medida.</li>
                            <li>Analizar métricas de uso para optimizar el rendimiento y la funcionalidad de la plataforma.</li>
                            <li>Desarrollar nuevas estrategias de marketing digital que conecten mejor con nuestra audiencia.</li>
                            <li>Contactarte con oportunidades exclusivas, novedades y mejoras de nuestros productos.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">2. Captación de Clientes y Marketing</h3>
                        <p>
                            Al interactuar con nuestros formularios o servicios, aceptas que **Aguacate Studios** pueda utilizar tu información de contacto con fines comerciales y publicitarios. Esto incluye el envío de propuestas personalizadas, estudios de caso relevantes y promociones diseñadas para impulsar el crecimiento de tu negocio.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">3. Tecnologías de Rastreo y Análisis</h3>
                        <p>
                            Para optimizar continuamente nuestra plataforma, empleamos tecnologías avanzadas de análisis de datos:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2 marker:text-purple-500">
                            <li><strong>Almacenamiento en Caché:</strong> Utilizamos la memoria caché de tu navegador para acelerar los tiempos de carga en visitas futuras, garantizando una experiencia fluida e instantánea.</li>
                            <li><strong>Conteo de Clics y Mapas de Calor:</strong> Monitoreamos cómo interactúas con nuestros elementos (botones, enlaces, secciones) para entender qué servicios generan mayor interés y mejorar la usabilidad del sitio.</li>
                            <li><strong>Análisis de Comportamiento:</strong> Recopilamos datos anónimos sobre tu navegación para perfeccionar nuestras estrategias de marketing y ofrecerte contenido que realmente aporte valor a tu negocio.</li>
                        </ul>
                    </section>

                    <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-600 italic">
                        Nota: Tu privacidad es fundamental. Aunque utilizamos los datos para potenciar nuestros servicios y alcance comercial, **nunca venderemos tu información a terceros** sin tu consentimiento explícito. Los datos se utilizan estrictamente para mejorar la relación comercial entre tú y Aguacate Studios.
                    </div>

                </div>

                {/* Footer del Modal */}
                <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-transform active:scale-95 shadow-lg shadow-gray-200"
                    >
                        Entendido
                    </button>
                </div>

            </div>
        </div>
    );
}
