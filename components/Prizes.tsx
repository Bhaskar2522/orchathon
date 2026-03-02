'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Medal, Award, Target, Users, Zap, ShieldCheck } from 'lucide-react';

const mainPrizes = [
    {
        rank: 1,
        title: "Grand Champion",
        amount: "RS. 12,000",
        currency: "INR",
        perks: "1 Trophy + Medals + Certificates",
        color: "from-yellow-300 to-yellow-600",
        glow: "shadow-[0_0_60px_rgba(234,179,8,0.4)]",
        border: "border-yellow-500/50",
        icon: <Trophy className="w-20 h-20 text-yellow-400" strokeWidth={1.5} />,
        scale: "scale-110 z-10",
        delay: 0.2
    },
    {
        rank: 2,
        title: "First Runner-Up",
        amount: "RS. 8,000",
        currency: "INR",
        perks: "1 Trophy + Medals + Certificates",
        color: "from-gray-300 to-gray-500",
        glow: "shadow-[0_0_40px_rgba(156,163,175,0.3)]",
        border: "border-gray-400/50",
        icon: <Medal className="w-16 h-16 text-gray-300" strokeWidth={1.5} />,
        scale: "scale-100",
        delay: 0.4
    },
    {
        rank: 3,
        title: "Second Runner-Up",
        amount: "RS. 5,000",
        currency: "INR",
        perks: "1 Trophy + Medals + Certificates",
        color: "from-amber-600 to-amber-800",
        glow: "shadow-[0_0_40px_rgba(180,83,9,0.3)]",
        border: "border-amber-700/50",
        icon: <Award className="w-16 h-16 text-amber-600" strokeWidth={1.5} />,
        scale: "scale-100",
        delay: 0.6
    }
];

const specialPrizes = [
    {
        title: "Pre-Placement Interviews",
        desc: "Exclusive interviews for 4th-year winners immediately after the contest.",
        icon: <Target className="w-10 h-10 text-cyan-500" strokeWidth={1.5} />,
        colSpan: "md:col-span-2"
    },
    {
        title: "Best Innovative Idea + Performance",
        subtitle: "Girl's Team",
        desc: "Medals + Certificates",
        icon: <Users className="w-10 h-10 text-pink-500" strokeWidth={1.5} />,
        colSpan: "md:col-span-1"
    },
    {
        title: "Best Innovative Idea + Performance",
        subtitle: "Boy's Team",
        desc: "Medals + Certificates",
        icon: <Zap className="w-10 h-10 text-blue-500" strokeWidth={1.5} />,
        colSpan: "md:col-span-1"
    }
];

const Prizes = () => {
    return (
        <section id="prizes" className="py-32 relative overflow-hidden bg-black min-h-screen flex flex-col justify-center">
            {/* 3D Spline Astronaut Background */}
            <div className="absolute inset-0 z-0 overflow-hidden mix-blend-screen opacity-70">
                {/* Fallback ambient color/gradient just in case */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none" />

                {/* 3D iframe */}
                <div className="absolute inset-0">
                    <iframe
                        src='https://my.spline.design/astronautinspace-bmxHukEVvI3bP0fBSVAQrQ4u/'
                        frameBorder='0'
                        width='100%'
                        height='100%'
                        className="w-full h-full pointer-events-auto"
                    />
                </div>

                {/* Spline Logo Mask (hides branding at bottom right) */}
                <div className="absolute bottom-0 right-0 w-[150px] h-[50px] bg-black z-40 pointer-events-none select-none" />

                {/* Floating Binary Overlay */}
                <div className="absolute inset-0 overflow-hidden opacity-[0.03] select-none pointer-events-none font-mono text-2xl" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                    <div className="absolute top-[10%] left-[5%]">01001</div>
                    <div className="absolute top-[30%] right-[10%]">11001</div>
                    <div className="absolute bottom-[20%] left-[15%]">01011</div>
                    <div className="absolute top-[60%] right-[20%]">00001</div>
                    <div className="absolute bottom-[10%] right-[5%]">01111</div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Headers */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-4">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 animate-pulse" />
                        <span className="text-[10px] font-mono tracking-[0.3em] text-yellow-500 uppercase font-bold">Rewards Protocol</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white uppercase italic drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Prizes
                    </h2>
                </motion.div>

                {/* Main Prizes Tier (1, 2, 3) */}
                <div className="flex flex-col md:flex-row justify-center items-end gap-8 mb-32 h-auto md:h-[500px]">
                    {/* Reordering for visually pleasing podium (2nd, 1st, 3rd) on Desktop */}
                    {[mainPrizes[1], mainPrizes[0], mainPrizes[2]].map((prize, idx) => (
                        <motion.div
                            key={prize.rank}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: prize.delay, duration: 0.6, type: "spring" }}
                            className={`relative group w-full md:w-[350px] ${prize.scale} transition-all duration-500`}
                        >
                            {/* Card Body */}
                            <div className={`relative rounded-3xl bg-[#0a0a0a] border ${prize.border} overflow-hidden backdrop-blur-xl flex flex-col items-center text-center p-8 hover:-translate-y-4 hover:${prize.glow} transition-all duration-500`}>

                                {/* Top Aesthetic Curve/Highlight */}
                                <div className="absolute top-0 left-0 right-0 h-32 opacity-20 bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-b-[100%] border-b border-white/10" />

                                {/* Icon / Trophy Graphic */}
                                <div className="relative mb-8 mt-4">
                                    <div className={`absolute inset-0 blur-2xl opacity-50 bg-gradient-to-tr ${prize.color}`} />
                                    <div className="relative z-10 flex flex-col items-center">
                                        {prize.icon}
                                        {/* Rank Badge inside/near trophy */}
                                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center font-black text-xl text-white shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                                            {prize.rank}
                                        </div>
                                    </div>
                                </div>

                                {/* Prize Money Content */}
                                <div className="mt-4 flex flex-col items-center gap-2">
                                    <span className="text-sm font-bold text-gray-400 tracking-[0.2em]">{prize.currency}</span>
                                    <h3 className={`text-4xl md:text-5xl font-black italic tracking-tighter ${prize.rank === 1 ? 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'text-white'}`}>
                                        {prize.amount}
                                    </h3>
                                    <p className="text-sm font-medium text-gray-400 mt-2 tracking-wide font-light">
                                        {prize.perks}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Special Prizes Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase">Special Prizes</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {specialPrizes.map((special, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`relative py-12 px-6 rounded-lg bg-black border border-white/10 hover:border-cyan-500/30 backdrop-blur-sm group transition-all duration-300 ${special.colSpan} flex flex-col items-center justify-center text-center overflow-hidden`}
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 bg-white/[0.02] border border-white/5">
                                    {special.icon}
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide">{special.title}</h4>
                                {special.subtitle && <h5 className="text-lg font-bold text-cyan-400 mb-4">{special.subtitle}</h5>}
                                <p className="text-sm font-light text-gray-400 tracking-wide">{special.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Participation Certificate Banner */}
                    <div className="mt-16 text-center relative py-6 flex items-center justify-center gap-4">
                        <span className="text-lg md:text-xl font-light text-gray-300 tracking-wide">
                            Participation certificates for all the participants.
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Prizes;
