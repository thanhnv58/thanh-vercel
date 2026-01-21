'use client';

import { motion } from 'framer-motion';
import { PenTool, Hammer, RefreshCw, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: PenTool,
        title: "Thiết kế & Thi công trọn gói",
        desc: "Giải pháp đồng bộ từ ý tưởng đến hiện thực. Tiết kiệm thời gian và chi phí cho gia chủ.",
        href: "#"
    },
    {
        icon: Hammer,
        title: "Sản xuất nội thất lẻ",
        desc: "Cung cấp Sofa, Giường, Tủ bếp,... may đo theo kích thước và yêu cầu riêng.",
        href: "#"
    },
    {
        icon: RefreshCw,
        title: "Cải tạo không gian cũ",
        desc: "F5 lại diện mạo căn nhà. Phá dỡ, xây trát và làm mới nội thất toàn diện.",
        href: "#"
    }
];

export default function Services() {
    return (
        <section className="py-20 bg-white dark:bg-black" id="services">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4 text-stone-900 dark:text-white">Giải pháp trọn gói</h2>
                    <p className="text-base lg:text-lg text-stone-600 dark:text-stone-400">Đáp ứng mọi nhu cầu về không gian sống của bạn</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-stone-50 dark:bg-stone-900 p-8 rounded-2xl group hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                        >
                            <div className="w-16 h-16 bg-white dark:bg-stone-800 dark:group-hover:bg-stone-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all">
                                <service.icon className="w-8 h-8 text-stone-900 dark:text-white" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold mb-4 text-stone-900 dark:text-white">{service.title}</h3>
                            <p className="text-stone-600 dark:text-stone-400 mb-8 leading-relaxed">
                                {service.desc}
                            </p>
                            <a href={service.href} className="inline-flex items-center text-sm font-bold text-stone-900 dark:text-white hover:underline gap-2">
                                Xem chi tiết <ArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
