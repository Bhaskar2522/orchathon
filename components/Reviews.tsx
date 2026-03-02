'use client';

import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
    {
        id: "1",
        text: "The NKOCET Hackathon completely changed how I approach problem solving. The 36 hours felt like 3 hours. Best coding event of the year!",
        author: "@hacker_01",
        role: "Frontend Developer"
    },
    {
        id: "2",
        text: "CSESA organized an incredibly flawless event! From the Wi-Fi to the mentorship, everything was top-tier. Highly recommended.",
        author: "@webdev_guru",
        role: "Full Stack Engineer"
    },
    {
        id: "3",
        text: "Sitting in those NKOCET labs at 4 AM debugging Next.js with my team was an unforgettable experience. The mentors were lifesavers.",
        author: "@nextjs_fan",
        role: "Student"
    },
    {
        id: "4",
        text: "Best 36 hours of my life! The energy, the people, the code. CSESA really knows how to put together a hacker's paradise.",
        author: "@sleepdeprived",
        role: "Backend Developer"
    },
    {
        id: "5",
        text: "The prizes and swag were insane, but the community was even better. Massive respect to the CSESA organizing committee.",
        author: "@swaghunter",
        role: "UI/UX Designer"
    },
    {
        id: "6",
        text: "Our team built a decentralized space app and actually won best UI! The judging panel was super insightful and gave great feedback.",
        author: "@crypto_king",
        role: "Web3 Developer"
    },
    {
        id: "7",
        text: "NKOCET College campus is beautiful and the labs are perfectly equipped. Didn't have a single hardware issue during the whole hack.",
        author: "@college_hacker",
        role: "Machine Learning"
    },
    {
        id: "8",
        text: "Thank you CSESA for organizing such an open, inclusive, and fiercely competitive coding environment. Can't wait for next year!",
        author: "@open_source",
        role: "Open Source Contrib"
    }
];

// Duplicate arrays to create a seamless infinite scroll effect
const col1 = [...reviews, ...reviews, ...reviews];
const col2 = [...reviews].reverse();
const col2Arr = [...col2, ...col2, ...col2];
const col3 = [...reviews.slice(4), ...reviews.slice(0, 4)];
const col3Arr = [...col3, ...col3, ...col3];
const col4 = [...reviews.slice(2), ...reviews.slice(0, 2), ...reviews.slice(4)];
const col4Arr = [...col4, ...col4, ...col4];

const Reviews = () => {
    return (
        <section id="reviews" className="relative overflow-hidden bg-black py-32 flex flex-col items-center justify-center min-h-[120vh]">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050510] to-black z-0"></div>

            {/* Header Content */}
            <div className="relative z-10 mb-20 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-widest uppercase mb-4">
                        HACKER <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">TESTIMONIALS</span>
                    </h2>
                    <p className="text-cyan-500 font-mono tracking-widest uppercase mt-4 text-sm md:text-lg">
                        NKOCET College • Organized by CSESA
                    </p>
                </motion.div>
            </div>

            {/* Tilted Scroll Container */}
            <div className="relative z-0 w-full overflow-hidden flex justify-center items-center h-[700px] perspective-[1000px] mt-10">
                <div
                    className="flex gap-6 w-max absolute"
                    style={{
                        transform: "rotateX(20deg) rotateZ(-20deg) skewX(20deg)",
                        transformStyle: "preserve-3d"
                    }}
                >
                    {/* SCROLLING COLUMNS */}
                    <div className="flex flex-col gap-6 animate-tilted-scroll-down w-[300px] md:w-[350px]">
                        {col1.map((review, i) => (
                            <ReviewCard key={`col1-${i}`} review={review} />
                        ))}
                    </div>

                    <div className="flex flex-col gap-6 animate-tilted-scroll-up w-[300px] md:w-[350px] -mt-40">
                        {col2Arr.map((review, i) => (
                            <ReviewCard key={`col2-${i}`} review={review} />
                        ))}
                    </div>

                    <div className="flex flex-col gap-6 animate-tilted-scroll-down w-[300px] md:w-[350px] -mt-20">
                        {col3Arr.map((review, i) => (
                            <ReviewCard key={`col3-${i}`} review={review} />
                        ))}
                    </div>

                    <div className="hidden md:flex flex-col gap-6 animate-tilted-scroll-up w-[300px] md:w-[350px] mt-20">
                        {col4Arr.map((review, i) => (
                            <ReviewCard key={`col4-${i}`} review={review} />
                        ))}
                    </div>
                </div>

                {/* Blending Masks to hide sharp tilted edges - strictly visually */}
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-20 md:w-64 h-full bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-20 md:w-64 h-full bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
            </div>

        </section>
    );
};

const ReviewCard = ({ review }: { review: any }) => (
    <div className="flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-white/[0.06] hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(255,77,0,0.2)] group cursor-pointer">
        <div className="flex gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 text-orange-500 overflow-visible" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
            ))}
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 font-light italic">"{review.text}"</p>
        <div className="flex items-center gap-4 mt-auto">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-[0_0_10px_rgba(0,255,255,0.3)] group-hover:scale-110 transition-transform">
                {review.author.charAt(1).toUpperCase()}
            </div>
            <div className="flex flex-col">
                <span className="text-white font-mono text-sm">{review.author}</span>
                <span className="text-cyan-400 text-[10px] tracking-widest uppercase">{review.role}</span>
            </div>
        </div>
    </div>
);

export default Reviews;
