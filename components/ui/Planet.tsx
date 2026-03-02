import React from 'react';
import { clsx } from 'clsx';

interface PlanetProps {
    type: 'mars' | 'jupiter' | 'saturn' | 'neptune';
    className?: string;
}

const Planet = ({ type, className }: PlanetProps) => {
    const gradients = {
        mars: "from-red-500 to-orange-700",
        jupiter: "from-orange-300 to-yellow-600",
        saturn: "from-yellow-200 to-orange-400",
        neptune: "from-blue-400 to-blue-700",
    };

    return (
        <div className={clsx("rounded-full bg-gradient-to-br shadow-[0_0_50px_rgba(0,0,0,0.5)]", gradients[type], className)}>
            <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm"></div>
        </div>
    );
};

export default Planet;
