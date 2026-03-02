'use client';

import React from 'react';
import { motion } from 'framer-motion';

import SplineModel from './SplineModel';

const Timeline = () => {
    const events = [
        { time: "09:00 AM", title: "Liftoff (Opening Ceremony)", sub: "PHASE 01", desc: "Starting the journey with keynotes and team formations." },
        { time: "11:00 AM", title: "Hacking Begins", sub: "PHASE 02", desc: "Official launch of the 36-hour development period." },
        { time: "04:00 PM", title: "Mentorship Round 1", sub: "SUPPORT", desc: "Expert guidance for technical roadblocks and strategy." },
        { time: "08:00 PM", title: "Dinner & Networking", sub: "SYNC", desc: "Refuel and connect with fellow interstellar travelers." },
    ];

    return (
        <section id="timeline" className="relative h-screen bg-black overflow-hidden">
            {/* --- FULL SCREEN 3D BACKGROUND --- */}
            <div className="absolute inset-0 z-0 w-full h-full pointer-events-auto flex items-center justify-center overflow-hidden">
                <div className="w-full h-full opacity-80 scale-110">
                    <SplineModel
                        scene="https://my.spline.design/aidatamodelinteraction-bHJf5G1w7lB44jIWWj8EbcNU/"
                        className="w-full h-full"
                    />
                </div>
                {/* LOGO MASKING OVERLAY (Hides "Built with Spline") */}
                <div className="absolute bottom-0 right-0 w-[120px] h-[50px] bg-black z-50 pointer-events-none select-none" />
            </div>

            <div className="container mx-auto px-6 relative z-10 h-full flex flex-col pt-24 pointer-events-none">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 mb-4 overflow-hidden relative group">
                        <div className="w-1 h-1 rounded-full bg-orange-400 group-hover:scale-[100] transition-transform duration-1000 origin-center opacity-50" />
                        <span className="text-[10px] font-mono tracking-[0.3em] text-orange-400 uppercase relative z-10 font-bold">Sector Analysis</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-white uppercase text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                        Mission <span className="text-orange-500 font-bold drop-shadow-[0_0_15px_rgba(255,100,0,0.5)]">Timeline</span>
                    </h2>
                </motion.div>

                {/* Main Content Area - Cards Removed to highlight 3D */}
                <div className="flex-1" />

                {/* Tactical Footer Accent */}
                <div className="pb-12 mt-auto flex justify-between items-center opacity-30 pointer-events-none">
                    <div className="flex flex-col gap-1">
                        <span className="text-[8px] font-mono text-white italic tracking-widest">OS_VERSION: 3.6.0.4</span>
                        <span className="text-[8px] font-mono text-cyan-400">DATA_SYNC: 100% SUCCESS</span>
                    </div>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-12" />
                    <div className="flex items-center gap-4">
                        <div className="flex gap-1">
                            {[1, 2, 3].map(i => <div key={i} className="w-1 h-3 bg-cyan-500/40" />)}
                        </div>
                        <span className="text-[8px] font-mono text-white uppercase italic">Status: Finalised</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
