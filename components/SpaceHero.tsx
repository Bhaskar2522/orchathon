'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import RocketShip from './ui/RocketShip'; // Using the SVG component for better animation control
import { Facebook, Twitter, Instagram, Linkedin, Menu, X, Rocket } from 'lucide-react';
import Starfield from './Starfield'; // Reusing efficient starfield

import SplineScene from './SplineScene';

const SpaceHero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]); // Parallax for background
    const y2 = useTransform(scrollY, [0, 500], [0, -150]); // Parallax for foreground

    const [rocketActive, setRocketActive] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [debris, setDebris] = useState<Array<{ top: number, left: number, delay: number }>>([]);

    // Rocket Ignition Sequence Simulation
    useEffect(() => {
        setMounted(true);
        setDebris(Array.from({ length: 5 }).map(() => ({
            top: Math.random() * 100,
            left: Math.random() * 100,
            delay: Math.random() * 5
        })));

        const interval = setInterval(() => {
            setRocketActive(true);
            setTimeout(() => setRocketActive(false), 2000); // Pulse engines every 5s
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white">

            {/* --- FULL SCREEN 3D BACKGROUND --- */}
            <div className="absolute inset-0 z-0 w-full h-full pointer-events-auto flex items-center justify-center overflow-hidden">
                <SplineScene />
                {/* Logo Masking Overlay */}
                <div className="absolute bottom-4 right-4 w-[120px] h-10 bg-black z-50 pointer-events-none" />
            </div>

            {/* --- BACKGROUND OVERLAYS --- */}

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10 pointer-events-none" />


            {/* Stars Overlay */}
            <div className="absolute inset-0 z-20 opacity-40 pointer-events-none">
                <Starfield />
            </div>

            {/* Scanning Grid Line Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-[5px] w-full animate-scanline" />


            {/* --- UI LAYOUT (High Z-Index) --- */}

            {/* 1. Top Navigation Bar */}
            <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-8 py-4 md:py-6 backdrop-blur-[2px] border-b border-white/5">
                <div className="hidden md:flex space-x-8 text-xs tracking-[0.2em] font-medium text-gray-400 capitalize">
                    {[
                        { name: 'Home', href: '/' },
                        { name: 'Events', href: '/events' },
                        { name: 'Timeline', href: '/timeline' },
                        { name: 'About', href: '/about' },
                        { name: 'Contact', href: '/contact' }
                    ].map((item) => (
                        <a key={item.name} href={item.href} className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(0,255,255,0.8)] transition-all duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <div className="md:hidden">
                        <Menu className="w-6 h-6 text-white" />
                    </div>
                </div>
            </nav>

            {/* 3. Right Sidebar (Social Icons) */}
            <aside className="hidden md:flex flex-col justify-center items-center absolute right-0 top-0 h-full w-20 z-50 border-l border-white/20 bg-black/20 backdrop-blur-md space-y-8">
                {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                    <a key={idx} href="#" className="text-gray-500 hover:text-cyan-400 transition-colors transform hover:scale-110">
                        <Icon className="w-5 h-5" />
                    </a>
                ))}
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gray-500 to-transparent my-4" />
            </aside>


            {/* --- TOP STATUS BAR --- */}
            <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="px-6 py-2 rounded-full border border-cyan-500/30 bg-black/40 backdrop-blur-md flex items-center gap-4 shadow-[0_0_20px_rgba(0,255,255,0.1)]"
                >
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase">
                        MISSION STATUS: <span className="text-white font-bold">CODELAUNCH 36</span> READY
                    </span>
                    <div className="w-[1px] h-4 bg-white/20" />
                    <span className="text-[10px] font-mono text-gray-400">COORD: 34.0522° N, 118.2437° W</span>
                </motion.div>
            </div>

            {/* --- LEFT HUD --- */}
            <aside className="hidden lg:flex flex-col justify-center absolute left-8 top-0 h-full z-50 pointer-events-none">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="space-y-12"
                >
                    <div className="space-y-2">
                        <p className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest">System Sync</p>
                        <div className="w-32 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent" />
                        <p className="text-xs font-mono text-white">98.4% STABLE</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest">Propulsion</p>
                        <div className="w-32 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent" />
                        <p className="text-xs font-mono text-white">IGNITION READY</p>
                    </div>
                </motion.div>
            </aside>

            {/* --- CENTER HERO CONTENT --- */}
            <div className="relative z-40 h-screen flex flex-col justify-center items-center text-center px-4 pointer-events-none">
                {/* Content removed to highlight 3D background */}
            </div>

            {/* Floating Debris / Particles - Foreground Depth */}
            {mounted && debris.map((item, i) => (
                <motion.div
                    key={i}
                    className="absolute z-40 w-1 h-1 bg-white/40 rounded-full blur-[1px]"
                    style={{
                        top: `${item.top}%`,
                        left: `${item.left}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.5, 0]
                    }}
                    transition={{
                        duration: 10 + item.delay,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "linear"
                    }}
                />
            ))}

            <style jsx>{`
                .animate-scanline {
                    animation: scanline 8s linear infinite;
                }
                @keyframes scanline {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100vh); }
                }
            `}</style>
        </section>
    );
};

export default SpaceHero;
