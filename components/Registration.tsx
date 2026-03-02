'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Rocket } from 'lucide-react';

const Registration = () => {
    const [timeLeft, setTimeLeft] = useState(36 * 60 * 60 * 1000); // 36 hours in ms
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => Math.max(0, prev - 10)); // Update every 10ms for smooth effect
            }, 10);
        }
        return () => clearInterval(timer);
    }, [isActive, timeLeft]);

    const formatTime = (ms: number) => {
        const hours = Math.floor(ms / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((ms % (1000 * 60)) / 1000);
        const centiseconds = Math.floor((ms % 1000) / 10);
        return {
            h: hours.toString().padStart(2, '0'),
            m: minutes.toString().padStart(2, '0'),
            s: seconds.toString().padStart(2, '0'),
            cs: centiseconds.toString().padStart(2, '0')
        };
    };

    const time = formatTime(timeLeft);

    return (
        <section id="register" className="py-32 relative overflow-hidden bg-black flex flex-col items-center">
            {/* Background Gradient & Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#050510] to-black opacity-80" />
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            {/* --- MISSION PHASES TIMELINE --- */}
            <div className="container mx-auto px-6 mb-32 relative z-10 w-full max-w-5xl">
                <div className="flex flex-col items-center mb-20 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-4 overflow-hidden relative">
                        <div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-400 uppercase font-bold">Orbital Schedule</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-light tracking-[0.1em] text-white uppercase italic">Mission <span className="text-cyan-500 font-bold drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">Phases</span></h3>
                    <div className="mt-4 text-gray-500 text-xs font-mono uppercase tracking-[0.5em]">T-Minus Sequence Initiated</div>
                </div>

                <div className="relative">
                    {/* Central Vertical Connector Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent md:-translate-x-1/2 z-0 shadow-[0_0_10px_rgba(0,255,255,0.1)]" />

                    <div className="space-y-12 md:space-y-0 relative">
                        {[
                            { time: "09:00 AM", title: "Liftoff", phase: "01", desc: "Ignition & Keynote Ceremony" },
                            { time: "11:00 AM", title: "Orbit Drift", phase: "02", desc: "Official Hacking Launch" },
                            { time: "04:00 PM", title: "Support Sync", phase: "03", desc: "Live Expert Mentorship" },
                            { time: "08:00 PM", title: "Zero-G Social", phase: "04", desc: "Networking & Docking" }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`flex items-start md:items-center w-full relative ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12 md:mb-24`}
                            >
                                {/* Staggered Card Container */}
                                <div className="w-full md:w-1/2 flex justify-start md:justify-end px-12 md:px-16">
                                    <div className={`p-6 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-cyan-500/30 transition-all group relative max-w-sm w-full shadow-2xl ${i % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                                        <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                            <span className="text-[10px] font-mono text-cyan-500/70 tracking-widest uppercase">PHASE_{step.phase}</span>
                                            <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/20 to-transparent" />
                                            <span className="text-orange-500 font-mono text-xs font-black">{step.time}</span>
                                        </div>
                                        <h4 className="text-xl font-black text-white uppercase italic tracking-wider mb-2 group-hover:text-cyan-400 transition-colors">{step.title}</h4>
                                        <p className="text-gray-500 text-sm font-light leading-relaxed">{step.desc}</p>

                                        {/* Corner Accent */}
                                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10" />
                                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10" />
                                    </div>
                                </div>

                                {/* Central Timeline Dot */}
                                <div className="absolute left-[20px] md:left-1/2 top-10 md:top-auto w-4 h-4 rounded-full bg-black border-2 border-orange-500 shadow-[0_0_15px_#FF4D00] z-20 md:-translate-x-1/2 animate-pulse" />

                                {/* Spacer for the other side */}
                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- THE LAUNCH CONTROL SECTION w/ SPLINE BACKGROUND --- */}
            <div className="w-full min-h-[130vh] relative pt-32 pb-64 flex justify-center bg-black overflow-hidden">

                {/* 3D Spline Rocket Background */}
                <div
                    className="absolute inset-0 z-0 flex items-center justify-center mix-blend-screen"
                    style={{ maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)' }}
                >
                    <iframe
                        src='https://my.spline.design/launchartemisrocket-bErNgiDJlc9oCwK82bRLTAXC/'
                        frameBorder='0'
                        width='100%'
                        height='100%'
                        className="w-[105%] h-[105%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                    />
                    {/* Top & Bottom Gradient blending to prevent harsh cutoffs */}
                    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
                    {/* Spline Logo Mask (Extra Large to guarantee covering) */}
                    <div className="absolute bottom-0 right-0 w-[300px] h-[100px] bg-black z-50 pointer-events-none select-none" />
                </div>

                {/* Content Down Side */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="absolute bottom-12 right-6 md:bottom-20 md:right-20 z-20 flex flex-col items-end"
                >
                    <div className="mb-8 relative flex flex-col items-end pr-4">
                        {isActive && (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="flex flex-col items-end"
                            >
                                <div className="text-[10px] font-mono text-cyan-400 mb-4 tracking-[0.5em] uppercase animate-pulse drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">Arrival Protocol Engaged</div>
                                <div className="flex gap-4 items-baseline font-mono text-white text-4xl md:text-6xl font-black drop-shadow-[0_0_20px_rgba(255,77,0,0.4)]">
                                    <div className="flex flex-col items-center">
                                        <span className="text-orange-500">{time.h}</span>
                                        <span className="text-[10px] text-gray-500">HRS</span>
                                    </div>
                                    <span className="opacity-30 text-3xl">:</span>
                                    <div className="flex flex-col items-center">
                                        <span className="text-orange-500">{time.m}</span>
                                        <span className="text-[10px] text-gray-500">MIN</span>
                                    </div>
                                    <span className="opacity-30 text-3xl">:</span>
                                    <div className="flex flex-col items-center">
                                        <span className="text-orange-500">{time.s}</span>
                                        <span className="text-[10px] text-gray-500">SEC</span>
                                    </div>
                                    <div className="text-xl md:text-2xl text-cyan-500 font-light italic ml-2 w-10 text-left">
                                        .{time.cs}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    <div className="flex flex-col items-end gap-6 relative mt-4 pr-4">
                        {!isActive && (
                            <div className="relative group">
                                <Button
                                    onClick={() => setIsActive(true)}
                                    variant="primary"
                                    size="lg"
                                    className="text-xl px-16 py-8 rounded-[40px] transition-all duration-700 hover:scale-105 border-0 relative z-10 font-black tracking-widest uppercase italic bg-gradient-to-r from-orange-600 to-red-700 shadow-[0_0_50px_rgba(255,77,0,0.3)] hover:shadow-[0_0_80px_rgba(255,77,0,0.5)] text-white"
                                >
                                    Board the Rocket
                                    <Rocket className="ml-4 w-7 h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </Button>
                            </div>
                        )}

                        <style jsx>{`
                            @keyframes gradient {
                                0% { background-position: 0% 50%; }
                                50% { background-position: 100% 50%; }
                                100% { background-position: 0% 50%; }
                            }
                            .animate-gradient {
                                animation: gradient 3s ease infinite;
                            }
                        `}</style>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Registration;
