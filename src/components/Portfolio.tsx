'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Modern Luxury Living",
        category: "Phòng Khách",
        image: "/images/portfolio_living.png",
        slug: "modern-luxury-living"
    },
    {
        title: "Cozy Master Bedroom",
        category: "Phòng Ngủ",
        image: "/images/portfolio_bedroom.png",
        slug: "cozy-master-bedroom"
    },
    {
        title: "Minimalist Kitchen",
        category: "Phòng Bếp",
        image: "/images/portfolio_kitchen.png",
        slug: "minimalist-kitchen"
    }
];

import Link from 'next/link';

export default function Portfolio() {
    return (
        <section className="py-20 bg-white dark:bg-stone-950" id="portfolio">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-serif mb-4 text-stone-900 dark:text-white">Năng lực thiết kế</h2>
                    <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
                        Khám phá những không gian sống đẳng cấp được chúng tôi kiến tạo với tất cả tâm huyết.
                    </p>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {projects.map((project, index) => (
                        <Link href={`/poster/${project.slug}`} key={index} className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/5] cursor-pointer block">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-stone-300 text-sm font-medium uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{project.category}</span>
                                <h3 className="text-white text-xl font-bold mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">{project.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Before / After Comparison */}
                <div className="rounded-2xl bg-stone-100 dark:bg-stone-900 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 flex flex-col justify-center">
                            <span className="text-stone-500 dark:text-stone-400 font-semibold mb-2 tracking-wide uppercase text-sm">Real Transformation</span>
                            <h3 className="text-3xl font-bold font-serif mb-6 text-stone-900 dark:text-white">Từ bản vẽ đến thực tế</h3>
                            <p className="text-stone-600 dark:text-stone-400 mb-8 leading-relaxed">
                                Chúng tôi cam kết thi công chuẩn xác đến 99% so với bản vẽ thiết kế. Sự tỉ mỉ trong từng chi tiết là tôn chỉ hoạt động của chúng tôi.
                            </p>
                            <div className="flex gap-8">
                                <div>
                                    <div className="text-3xl font-bold text-stone-900 dark:text-white mb-1">100%</div>
                                    <div className="text-sm text-stone-500 dark:text-stone-400">Giống thiết kế</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-stone-900 dark:text-white mb-1">2 Năm</div>
                                    <div className="text-sm text-stone-500 dark:text-stone-400">Bảo hành</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] lg:h-auto min-h-[400px] w-full group">
                            <BeforeAfterSlider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function BeforeAfterSlider() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (!containerRef.current) return;

        const { left, width } = containerRef.current.getBoundingClientRect();
        let clientX;

        if ('touches' in event) {
            clientX = event.touches[0].clientX;
        } else {
            clientX = (event as MouseEvent).clientX;
        }

        const position = ((clientX - left) / width) * 100;
        setSliderPosition(Math.min(100, Math.max(0, position)));
    };

    const handleMouseDown = () => {
        isDragging.current = true;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    useEffect(() => {
        const handleGlobalMove = (e: MouseEvent | TouchEvent) => {
            if (isDragging.current) {
                handleMove(e as any);
            }
        };
        const handleGlobalUp = () => {
            isDragging.current = false;
        };

        window.addEventListener('mousemove', handleGlobalMove);
        window.addEventListener('mouseup', handleGlobalUp);
        window.addEventListener('touchmove', handleGlobalMove);
        window.addEventListener('touchend', handleGlobalUp);

        return () => {
            window.removeEventListener('mousemove', handleGlobalMove);
            window.removeEventListener('mouseup', handleGlobalUp);
            window.removeEventListener('touchmove', handleGlobalMove);
            window.removeEventListener('touchend', handleGlobalUp);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full overflow-hidden cursor-ew-resize select-none"
            onMouseDown={handleMove}
            onTouchStart={handleMove}
        >
            {/* Before Image (Bottom Layer) */}
            <Image
                src="/images/empty_room.png"
                alt="Before Construction"
                fill
                className="object-cover"
                priority
            />

            {/* After Image (Top Layer) - Clip Path */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
                <Image
                    src="/images/hero_bg.png"
                    alt="After Completion"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="flex gap-[2px]">
                        <div className="w-[2px] h-3 bg-stone-400"></div>
                        <div className="w-[2px] h-3 bg-stone-400"></div>
                    </div>
                </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-xs font-bold backdrop-blur-sm z-20">BEFORE</div>
            <div className="absolute top-4 right-4 bg-white/50 text-black px-3 py-1 rounded-md text-xs font-bold backdrop-blur-sm z-20">AFTER</div>
        </div>
    );
}
