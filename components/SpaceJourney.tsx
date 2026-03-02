'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import RocketShip from './ui/RocketShip';

const SpaceJourney = () => {
    const { scrollYProgress } = useScroll();

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Map scroll progress to X/Y coordinates
    // We want the rocket to weave through the sections
    const xRange = useTransform(smoothProgress,
        [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
        ['50%', '80%', '20%', '80%', '20%', '50%', '50%']
    );

    const rotateRange = useTransform(smoothProgress,
        [0, 0.1, 0.3, 0.5, 0.7, 0.9],
        [0, 45, -45, 45, -45, 0]
    );

    const opacityRange = useTransform(smoothProgress, [0, 0.05], [0, 1]);

    return (
        <div className="fixed inset-0 z-40 pointer-events-none">
            {/* The traveling rocket */}
            <motion.div
                style={{
                    left: xRange,
                    top: '40vh', // Keep it vertically centered-ish
                    rotate: rotateRange,
                    opacity: opacityRange,
                    x: '-50%'
                }}
                className="absolute w-24 h-24 drop-shadow-[0_0_15px_rgba(0,224,255,0.8)]"
            >
                <RocketShip active={true} className="w-full h-full" />
            </motion.div>
        </div>
    );
};

export default SpaceJourney;
