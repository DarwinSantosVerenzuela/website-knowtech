"use client";
import React from 'react';
import './servicios-layout.css';

export default function ServiciosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="service-layout-wrapper" suppressHydrationWarning>
            <div className="service-content-card" suppressHydrationWarning>
                <div className="service-card-scroll">
                    {children}
                </div>
            </div>
        </div>
    );
}
