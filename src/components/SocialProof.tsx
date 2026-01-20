
'use client';

import { motion } from 'framer-motion';

const partners = [
    "Google", "Microsoft", "Spotify", "Amazon", "Netflix", "Adobe"
];

export default function SocialProof() {
    return (
        <section className="py-10 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm font-medium text-zinc-500 mb-6 uppercase tracking-wider">
                    Được tin dùng bởi hơn 1000+ doanh nghiệp hàng đầu
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-xl md:text-2xl font-bold text-zinc-800 dark:text-zinc-200"
                        >
                            {partner}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
}
