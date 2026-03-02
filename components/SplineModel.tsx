'use client';

import React, { useState, useEffect } from 'react';

interface SplineModelProps {
    scene: string;
    className?: string;
}

const SplineModel: React.FC<SplineModelProps> = ({ scene, className }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`w-full h-full relative overflow-hidden ${className}`}>
            {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/10 backdrop-blur-sm z-50">
                    <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            <iframe
                src={scene}
                width='100%'
                height='100%'
                className={`w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIsLoaded(true)}
                style={{ pointerEvents: 'auto' }}
            />

            {/* Logo Masking Overlay */}
            <div className="absolute bottom-0 right-0 w-[100px] h-[40px] bg-black z-40 pointer-events-none select-none" />
        </div>
    );
};

export default SplineModel;
