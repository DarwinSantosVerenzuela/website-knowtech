"use client";
import React, { useEffect, useState } from 'react';
import './AIBallIntro.css';

interface AIBallIntroProps {
    onComplete: () => void;
}

export default function AIBallIntro({ onComplete }: AIBallIntroProps) {
    const [fadingOut, setFadingOut] = useState(false);

    useEffect(() => {
        // Start fading out after 4 seconds (so it finishes by 5s)
        const fadeTimer = setTimeout(() => {
            setFadingOut(true);
        }, 4000);

        // Call onComplete after 5 seconds total duration
        const completeTimer = setTimeout(() => {
            onComplete();
        }, 5000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    const handleSkip = () => {
        setFadingOut(true);
        setTimeout(onComplete, 500); // 500ms fade out transition
    };

    return (
        <div className={`ai-ball-container ${fadingOut ? 'fade-out' : ''}`} onClick={handleSkip}>
            <div className="ai-ball">
                <div className="membrane-layer"></div>
                {/* LOGO EMPRESA */}
                <img
                    src="/imagen/logo-branding.png.png"
                    alt="KnowTech Logo"
                    className="ai-ball-logo"
                />
            </div>
        </div>
    );
}
