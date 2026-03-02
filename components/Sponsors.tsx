'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
    return (
        <section id="sponsors" className="py-32 relative overflow-hidden bg-[#0a0a0d] min-h-screen flex flex-col justify-center">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
                {/* Floating Binary Background */}
                <div className="absolute text-white/5 font-mono text-xl sm:text-2xl top-1/4 left-1/4 animate-pulse duration-1000">01001</div>
                <div className="absolute text-white/5 font-mono text-xl sm:text-2xl top-1/3 left-1/3 animate-pulse duration-700">01111</div>
                <div className="absolute text-white/5 font-mono text-xl sm:text-2xl top-1/2 left-1/2 animate-pulse duration-1000">0000</div>
                <div className="absolute text-white/5 font-mono text-xl sm:text-2xl bottom-1/4 right-1/4 animate-pulse duration-700">00001</div>
                <div className="absolute text-white/5 font-mono text-xl sm:text-2xl bottom-1/3 left-1/2 animate-pulse duration-1000">000101</div>
                <div className="absolute text-[#00E0FF]/10 font-mono text-3xl bottom-1/3 right-1/4 animate-pulse duration-700">1110</div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-medium text-white tracking-wide">
                        Our Sponsors
                    </h2>
                </motion.div>

                {/* Sponsor Cards Container */}
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch justify-center gap-6">

                    {/* Powered By Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex-1 bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col"
                    >
                        <span className="text-white text-sm mb-4">Powered by</span>
                        <div className="bg-[#7c28c6] rounded-xl flex-grow flex flex-col items-center justify-center py-10 px-6 shadow-lg relative overflow-hidden group">
                            {/* Inner Logo Recreation */}
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-2 shadow-md">
                                <span className="text-[#7c28c6] font-bold text-2xl font-serif">t</span>
                            </div>
                            <h3 className="text-white font-bold text-2xl tracking-wide mb-1">techsofya</h3>
                            <p className="text-white/80 text-[8px] sm:text-[10px] uppercase tracking-wider text-center">Unlocking Efficiency, Elevating Real Estate</p>

                            {/* Hover effect */}
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Gold Sponsor Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col lg:scale-105 z-10"
                    >
                        <span className="text-white text-sm mb-4">Gold Sponsor</span>
                        <div className="bg-white rounded-xl flex-grow flex flex-col items-center justify-center py-10 px-4 shadow-lg relative overflow-hidden group">
                            {/* Inner Logo Recreation */}
                            <div className="flex items-center flex-wrap justify-center gap-1.5 mb-2">
                                <span className="text-[#0077b6] font-black text-2xl sm:text-3xl tracking-tight">GIRI'S TECH</span>
                                <span className="bg-[#f08a00] text-white px-2 py-0.5 font-bold text-xl sm:text-2xl">HUB</span>
                                <span className="text-[#0077b6] font-bold text-xl sm:text-2xl">Pvt Ltd</span>
                            </div>
                            <p className="text-black font-extrabold text-xs sm:text-sm tracking-widest uppercase mt-1">
                                ...Talent Meets Opportunity
                            </p>

                            {/* Hover effect */}
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Bronze Sponsor Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex-1 bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col"
                    >
                        <span className="text-white text-sm mb-4">Bronze Sponsor</span>
                        <div className="bg-white rounded-xl flex-grow flex flex-col items-center justify-center py-10 px-4 shadow-lg relative overflow-hidden group">
                            {/* Inner Logo Recreation */}
                            <div className="flex gap-2 mb-2">
                                <div className="w-4 h-4 rounded-full bg-[#f4a261] shadow-sm" />
                                <div className="w-4 h-4 rounded-full bg-[#f4a261] shadow-sm -translate-y-1" />
                                <div className="w-4 h-4 rounded-full bg-[#f4a261] shadow-sm" />
                            </div>
                            <div className="flex items-center gap-1 mb-1">
                                <span className="text-[#d90429] font-black text-3xl sm:text-4xl tracking-tighter">DK</span>
                                <span className="text-black font-black text-3xl sm:text-4xl tracking-tighter">Techno's</span>
                            </div>
                            <p className="text-gray-600 font-bold text-[8px] sm:text-[10px] tracking-[0.2em] uppercase mt-1">
                                DEV KIND TECHNOLOGIES LLP
                            </p>

                            {/* Hover effect */}
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Sponsors;
