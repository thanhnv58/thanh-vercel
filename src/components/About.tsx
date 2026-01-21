
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-2xl"></div>
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-200 dark:bg-zinc-800 shadow-2xl">
                                <Image
                                    src="/images/interior_portfolio_2.png"
                                    alt="Office Workspace"
                                    width={800}
                                    height={600}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
                            Sứ mệnh của chúng tôi
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                            Chúng tôi tin rằng thiết kế tốt không chỉ là vẻ bề ngoài, mà là cách nó vận hành. Với đội ngũ những người đam mê công nghệ và nghệ thuật, chúng tôi cam kết mang lại những sản phẩm số có trải nghiệm người dùng xuất sắc nhất.
                        </p>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                            Mỗi dự án là một câu chuyện riêng, và chúng tôi ở đây để giúp bạn kể câu chuyện đó một cách ấn tượng nhất.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-3xl font-bold text-blue-600">5+</h4>
                                <p className="text-sm font-medium text-zinc-500 mt-1">Năm kinh nghiệm</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-purple-600">200+</h4>
                                <p className="text-sm font-medium text-zinc-500 mt-1">Dự án hoàn thành</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
