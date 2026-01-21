'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Materials() {
    return (
        <section className="py-20 bg-white dark:bg-black overflow-hidden" id="workshop">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-stone-500 dark:text-stone-400 font-semibold tracking-wider uppercase text-sm mb-2 block">
                            Chất lượng vượt trội
                        </span>
                        <h2 className="text-2xl md:text-5xl font-bold font-serif mb-6 text-stone-900 dark:text-white leading-tight whitespace-nowrap">
                            Sờ tận tay, <span className="text-stone-600 dark:text-stone-400">thấy tận mắt</span>
                        </h2>
                        <p className="text-lg text-stone-600 dark:text-stone-300 mb-8 leading-relaxed">
                            Chúng tôi sở hữu xưởng sản xuất trực tiếp với hệ thống máy móc hiện đại, loại bỏ hoàn toàn trung gian để mang lại giá gốc cho khách hàng. Vật liệu cao cấp được tuyển chọn kỹ lưỡng.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="text-stone-700 dark:text-stone-300">Gỗ An Cường chính hãng 100%</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="text-stone-700 dark:text-stone-300">Phụ kiện Hafele, Blum cao cấp</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="text-stone-700 dark:text-stone-300">Đá Vicostone chống thấm, chống xước</span>
                            </div>
                        </div>

                        <button className="px-8 py-3 bg-stone-900 dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors">
                            Đăng ký tham quan xưởng
                        </button>
                    </motion.div>

                    {/* Images Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden translate-y-8">
                                <Image
                                    src="/images/workshop.png"
                                    alt="Xưởng sản xuất nội thất"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden -translate-y-8">
                                <Image
                                    src="/images/materials.png"
                                    alt="Vật liệu cao cấp"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Decorative Circle */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-stone-100 dark:bg-stone-900 rounded-full blur-3xl opacity-50"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
