import React from 'react';
import { motion } from 'framer-motion';

interface RocketShipProps {
    className?: string; // Additional classes
    active?: boolean; // Whether engines are firing
    variant?: 'standard' | 'cyberpunk';
}

const RocketShip = ({ className, active = false, variant = 'standard' }: RocketShipProps) => {
    return (
        <div className={className}>
            <svg viewBox="0 0 512 512" className="w-full h-full drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <defs>
                    <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#e0e0e0', stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#d0d0d0', stopOpacity: 1 }} />
                    </linearGradient>
                    <linearGradient id="finGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#303030', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#1a1a1a', stopOpacity: 1 }} />
                    </linearGradient>
                    <linearGradient id="windowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#00E0FF', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#0060AA', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>

                {variant === 'standard' ? (
                    <>
                        {/* Main Body */}
                        <path d="M256,40 C190,40 160,150 160,320 L160,400 C160,420 180,440 256,440 C332,440 352,420 352,400 L352,320 C352,150 322,40 256,40 Z" fill="url(#bodyGradient)" stroke="#999" strokeWidth="2" />

                        {/* Nose Cone Detail */}
                        <path d="M256,40 C220,40 200,80 190,120 L322,120 C312,80 292,40 256,40 Z" fill="#333" opacity="0.1" />

                        {/* Fins */}
                        <path d="M160,350 L80,480 L160,450 Z" fill="url(#finGradient)" stroke="#000" strokeWidth="1" />
                        <path d="M352,350 L432,480 L352,450 Z" fill="url(#finGradient)" stroke="#000" strokeWidth="1" />
                        <path d="M256,380 L256,480 L220,440 L292,440 Z" fill="url(#finGradient)" />

                        {/* Window */}
                        <circle cx="256" cy="180" r="30" fill="#111" stroke="#333" strokeWidth="4" />
                        <circle cx="256" cy="180" r="24" fill="url(#windowGradient)" />
                        <path d="M245,170 A10,10 0 0 1 255,160" stroke="white" strokeWidth="3" fill="none" opacity="0.6" />
                    </>
                ) : (
                    // Cyberpunk Variant (Wireframe/Neon)
                    <g style={{ filter: 'drop-shadow(0 0 5px #00E0FF)' }}>
                        {/* Main Body - Dark Fill, Neon Stroke */}
                        <path d="M256,40 C190,40 160,150 160,320 L160,400 C160,420 180,440 256,440 C332,440 352,420 352,400 L352,320 C352,150 322,40 256,40 Z"
                            fill="rgba(10,10,20,0.9)" stroke="#00E0FF" strokeWidth="4" />

                        {/* Internal Tech Lines */}
                        <path d="M200,150 L312,150" stroke="#FF0055" strokeWidth="2" opacity="0.8" />
                        <path d="M256,40 L256,440" stroke="#00E0FF" strokeWidth="1" opacity="0.3" strokeDasharray="5,5" />

                        {/* Fins - Sharp, Neon Pink edges */}
                        <path d="M160,350 L80,480 L160,450 Z" fill="#111" stroke="#FF0055" strokeWidth="3" />
                        <path d="M352,350 L432,480 L352,450 Z" fill="#111" stroke="#FF0055" strokeWidth="3" />
                        <path d="M256,380 L256,480 L220,440 L292,440 Z" fill="#222" stroke="#00E0FF" strokeWidth="2" />

                        {/* Cockpit - Glowing */}
                        <circle cx="256" cy="180" r="30" fill="#000" stroke="#00E0FF" strokeWidth="2" />
                        <circle cx="256" cy="180" r="20" fill="#00E0FF" opacity="0.3">
                            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
                        </circle>
                    </g>
                )}

                {/* Engine Glow (Active State) */}
                {active && (
                    <motion.g
                        initial={{ opacity: 0.8 }}
                        animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.1, repeat: Infinity }}
                    >
                        <path d="M200,440 Q256,580 312,440" fill={variant === 'cyberpunk' ? "#00E0FF" : "#FF4D00"} opacity="0.8" className="blur-md" />
                        <path d="M220,440 Q256,540 292,440" fill={variant === 'cyberpunk' ? "#FF0055" : "#FFDD00"} opacity="0.9" className="blur-sm" />
                        <path d="M240,440 Q256,500 272,440" fill="#FFFFFF" />
                    </motion.g>
                )}
            </svg>
        </div>
    );
};

export default RocketShip;
