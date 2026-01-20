'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-black">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 dark:opacity-20 pointer-events-none">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-400 rounded-full blur-[100px]" />
                <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-amber-200 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-6 border border-orange-100 dark:border-orange-800">
                            ✨ Kiến tạo không gian sống đẳng cấp
                        </span>
                        <h1 className="max-w-4xl text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-white leading-tight">
                            Mang nghệ thuật vào <br />
                            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                                Ngôi nhà của bạn
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="max-w-2xl text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed"
                    >
                        Chúng tôi chuyên thiết kế và thi công nội thất trọn gói, biến mọi không gian trở nên tinh tế, tiện nghi và đậm chất riêng.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-lg hover:shadow-xl">
                            Bắt đầu ngay <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all">
                            <Play className="w-5 h-5 fill-current" /> Xem Demo
                        </button>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-20 relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 aspect-video group"
                    >
                        <Image
                            src="/images/interior_hero.png"
                            alt="Modern Interior Design"
                            width={1920}
                            height={1080}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
