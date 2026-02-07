"use client";
import React from 'react';
import './FeatureCards.css';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';


const ConsultingAnimation = () => {

    const [points, setPoints] = React.useState<Array<{ top: string, left: string, delay: number, duration: number }>>([]);

    React.useEffect(() => {
        const newPoints = Array.from({ length: 15 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            delay: Math.random() * 2,
            duration: 3 + Math.random()
        }));
        setPoints(newPoints);
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-50/50">

            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />


            {points.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-400"
                    style={{ top: p.top, left: p.left }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}


            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <motion.path
                    d="M0,100 Q50,0 100,100 T200,100"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
            </svg>
        </div>
    );
};


const BrandingAnimation = () => {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">

            <motion.div
                className="absolute w-[150%] h-[150%] bg-gradient-to-r from-red-600 to-purple-800 rounded-full blur-[80px] opacity-60"
                style={{ top: "-20%", left: "-20%" }}
                animate={{
                    transform: ["translate(0,0) rotate(0deg)", "translate(10%, 10%) rotate(90deg)", "translate(0,0) rotate(0deg)"],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute w-[100%] h-[100%] bg-gradient-to-tl from-orange-500 to-transparent rounded-full blur-[60px] opacity-50"
                style={{ bottom: "-10%", right: "-10%" }}
                animate={{
                    transform: ["translate(0,0) scale(1)", "translate(-10%, -20%) scale(1.2)", "translate(0,0) scale(1)"],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />


            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        </div>
    );
};

export default function FeatureCards() {
    return (
        <div className="features-container" suppressHydrationWarning>

            <Link href="/servicios/consultoria" className="feature-card-item card-consulting group relative overflow-hidden" suppressHydrationWarning>
                <div className="card-canvas-native" suppressHydrationWarning>
                    <img
                        src="/imagen/tarjetas/consultoria.jpg"
                        alt="Consultoría"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="card-pill" suppressHydrationWarning>
                    <span className="pill-text" suppressHydrationWarning>Consultoría</span>
                    <div className="pill-circle" suppressHydrationWarning><ChevronRight size={18} /></div>
                </div>
            </Link>


            <Link href="/servicios/branding-corporativo" className="feature-card-item card-branding group relative overflow-hidden" suppressHydrationWarning>
                <div className="card-canvas-native" suppressHydrationWarning>
                    <video
                        src="/imagen/tarjetas/branding-corporativo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                <div className="card-pill" suppressHydrationWarning>
                    <span className="pill-text" suppressHydrationWarning>Branding Corporativo</span>
                    <div className="pill-circle" suppressHydrationWarning><ChevronRight size={18} /></div>
                </div>
            </Link>


            <Link href="/servicios/ui-ux" className="feature-card-item card-uiux group relative overflow-hidden" suppressHydrationWarning>
                <div className="card-canvas-native" suppressHydrationWarning>
                    <img
                        src="/imagen/tarjetas/ux-ui-konwtech.png"
                        alt="Diseño UI/UX"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="card-pill" suppressHydrationWarning>
                    <span className="pill-text" suppressHydrationWarning>Diseño UI/UX</span>
                    <div className="pill-circle" suppressHydrationWarning><ChevronRight size={18} /></div>
                </div>
            </Link>
        </div>
    );
}
