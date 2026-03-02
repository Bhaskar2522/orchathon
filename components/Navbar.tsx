'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from './ui/Button';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    const navLinks = [
        { name: 'Mission', href: '#mission' },
        { name: 'Timeline', href: '#timeline' },
        { name: 'Sponsors', href: '#sponsors' },
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="text-2xl font-bold tracking-tighter text-white">
                    ORCH<span className="text-primary">ATON</span>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="secondary" size="sm">
                        Register
                    </Button>
                </div>

                {/* Mobile Menu Toggle would go here */}
            </div>
        </motion.nav>
    );
};

export default Navbar;
