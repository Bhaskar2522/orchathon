'use client';

import React, { useState, useEffect } from 'react';

interface SplineSceneProps {
    className?: string;
}

const SplineScene: React.FC<SplineSceneProps> = ({ className }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`w-full h-full min-h-[400px] flex items-center justify-center relative overflow-hidden ${className}`}>
            {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/20 backdrop-blur-sm z-50">
                    <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-cyan-500 font-mono text-sm animate-pulse uppercase tracking-[0.2em]">Initialising 3D Subsystems...</p>
                </div>
            )}

            <iframe
                src='https://my.spline.design/spacetexttransition-cnIX3yp5RpYVhaEpGFynfZKj/'
                width='100%'
                height='100%'
                className={`w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIsLoaded(true)}
                style={{ pointerEvents: 'auto' }}
            />

            {/* Logo Masking Overlay */}
            <div className="absolute bottom-0 right-0 w-[150px] h-[50px] bg-black z-40 pointer-events-none select-none" />
        </div>
    );
};

export default SplineScene;
