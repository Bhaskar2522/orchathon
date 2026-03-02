'use client';

import React, { useEffect, useState } from 'react';

const Starfield = () => {
    const [stars, setStars] = useState({ sm: '', md: '', lg: '' });

    useEffect(() => {
        setStars({
            sm: generateStars(700),
            md: generateStars(200),
            lg: generateStars(100)
        });
    }, []);

    if (!stars.sm) return null; // Avoid flashing or hydration mismatch

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div
                className="absolute inset-0 bg-transparent animate-twinkle-slow"
                style={{
                    boxShadow: stars.sm,
                    width: '1px',
                    height: '1px',
                    animation: 'moveStars 100s linear infinite'
                }}
            />
            <div
                className="absolute inset-0 bg-transparent animate-twinkle-medium"
                style={{
                    boxShadow: stars.md,
                    width: '2px',
                    height: '2px',
                    animation: 'moveStars 150s linear infinite'
                }}
            />
            <div
                className="absolute inset-0 bg-transparent animate-twinkle-fast"
                style={{
                    boxShadow: stars.lg,
                    width: '3px',
                    height: '3px',
                    animation: 'moveStars 200s linear infinite'
                }}
            />

            <style jsx global>{`
                @keyframes moveStars {
                    from { transform: translateY(0); }
                    to { transform: translateY(-2000px); }
                }
            `}</style>
        </div>
    );
};

// Helper to generate random star positions
const generateStars = (count: number) => {
    let value = '';
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 2000); // 2000px width coverage
        const y = Math.floor(Math.random() * 2000); // 2000px height coverage
        value += `${x}px ${y}px #FFF, `;
    }
    return value.slice(0, -2);
};

export default Starfield;
