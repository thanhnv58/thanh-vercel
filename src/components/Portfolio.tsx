
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
    { title: "Minimalist Bedroom", category: "Interior Design", image: "/images/interior_portfolio_1.png" },
    { title: "Modern Kitchen", category: "Architecture", image: "/images/interior_portfolio_2.png" },
    { title: "Luxury Living Room", category: "Visualization", image: "/images/interior_hero.png" }, // Reusing hero for now
    { title: "Scandinavian Office", category: "Styling", image: "/images/interior_portfolio_1.png" } // Reusing for 4th grid item
];

export default function Portfolio() {
    return (
        <section className="py-24 bg-white dark:bg-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Portfolio</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-zinc-900 dark:text-zinc-100">
                            Dự án tiêu biểu
                        </h2>
                    </div>
                    <button className="text-zinc-900 dark:text-zinc-100 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Xem tất cả dự án &rarr;
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-video overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 cursor-pointer"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={800}
                                height={600}
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <span className="text-blue-400 font-medium text-sm mb-2">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
