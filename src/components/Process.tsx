'use client';

import { motion } from 'framer-motion';

const steps = [
    { number: "01", title: "Khảo sát & Tư vấn", desc: "Đến tận nơi đo đạc và tư vấn giải pháp miễn phí." },
    { number: "02", title: "Thiết kế 3D", desc: "Lên ý tưởng và chỉnh sửa thiết kế đến khi bạn hài lòng." },
    { number: "03", title: "Sản xuất tại xưởng", desc: "Gia công nội thất với giá gốc, không qua trung gian." },
    { number: "04", title: "Thi công lắp đặt", desc: "Quy trình lắp đặt chuyên nghiệp, sạch sẽ, nhanh gọn." },
    { number: "05", title: "Bàn giao & Bảo trì", desc: "Nghiệm thu và bảo hành bảo trì dài hạn 2 năm." }
];

export default function Process() {
    return (
        <section className="py-20 bg-stone-50 dark:bg-stone-900" id="process">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-serif mb-4 text-stone-900 dark:text-white">Quy trình làm việc</h2>
                    <p className="text-stone-600 dark:text-stone-400">Rõ ràng, minh bạch và chuyên nghiệp trong từng khâu</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[2px] bg-stone-200 dark:bg-stone-800 pointer-events-none"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-stone-800 border-2 border-stone-900 dark:border-white flex items-center justify-center text-xl font-bold text-stone-900 dark:text-white z-10 mb-6 group-hover:scale-110 transition-transform">
                                    {step.number}
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-stone-900 dark:text-white">{step.title}</h3>
                                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed px-4">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
