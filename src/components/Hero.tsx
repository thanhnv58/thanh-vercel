'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const heroSlides = [
    "/images/hero_bg.png",
    "/images/hero_slide_2.png",
    "/images/hero_slide_3.png",
    "/images/hero_slide_4.png",
    "/images/hero_slide_5.png",
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    const goToSlide = (index: number) => {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
    };

    // Optional: Auto-slide
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 1
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 1
        })
    };

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-50 dark:bg-black">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-amber-100 rounded-full blur-[100px]" />
                <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-stone-200 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300 text-sm font-semibold mb-6 border border-stone-200 dark:border-stone-800">
                            ✨ Yêu từ cái nhìn đầu tiên
                        </span>
                        <h1 className="max-w-5xl text-5xl lg:text-7xl font-bold font-serif tracking-tight mb-8 text-stone-900 dark:text-white leading-tight">
                            Định hình không gian <br />
                            <span className="text-stone-600 dark:text-stone-400">
                                Nâng tầm đẳng cấp
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="max-w-2xl text-xl text-stone-600 dark:text-stone-400 mb-10 leading-relaxed font-sans"
                    >
                        Chúng tôi kiến tạo những không gian sống đầy cảm xúc, nơi thẩm mỹ tinh tế giao hòa cùng công năng hoàn hảo.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Link
                            href="#portfolio"
                            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-stone-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-stone-800 dark:hover:bg-stone-200 transition-all shadow-lg hover:shadow-xl"
                        >
                            Khám phá bộ sưu tập
                        </Link>
                        <Link
                            href="#contact"
                            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-white font-semibold hover:bg-stone-100 dark:hover:bg-stone-900 transition-all"
                        >
                            Tư vấn thiết kế miễn phí
                        </Link>
                    </motion.div>

                    {/* Hero Slider */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-20 relative w-full max-w-6xl aspect-video group rounded-2xl overflow-hidden shadow-2xl shadow-stone-200 dark:shadow-stone-900 border border-stone-200 dark:border-stone-800"
                    >
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentSlide}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "tween", duration: 1, ease: "easeInOut" },
                                }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={heroSlides[currentSlide]}
                                    alt={`Luxury Interior Slide ${currentSlide + 1}`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors opacity-0 group-hover:opacity-100 z-10"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors opacity-0 group-hover:opacity-100 z-10"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {heroSlides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
