
'use client';

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const packages = [
    {
        name: "Cơ bản",
        price: "10tr",
        desc: "Dành cho cá nhân hoặc Startup nhỏ.",
        features: ["Landing Page 1 trang", "Thiết kế chuẩn Mobile", "Tối ưu SEO cơ bản", "Hỗ trợ 1 tháng"]
    },
    {
        name: "Nâng cao",
        price: "25tr",
        popular: true,
        desc: "Dành cho doanh nghiệp đang tăng trưởng.",
        features: ["Website 5-7 trang", "CMS quản trị nội dung", "Tối ưu tốc độ tải trang", "Tích hợp Analytics", "Hỗ trợ 3 tháng"]
    },
    {
        name: "Toàn diện",
        price: "50tr+",
        desc: "Giải pháp thiết kế riêng biệt.",
        features: ["Thiết kế UI/UX độc quyền", "Tính năng phức tạp (E-com, booking)", "Bảo mật nâng cao", "Hỗ trợ 24/7", "Bảo hành trọn đời"]
    }
];

export default function Services() {
    return (
        <section id="process" className="py-24 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                        Bảng giá dịch vụ
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        Chi phí minh bạch, không phát sinh. Chọn gói phù hợp nhất với nhu cầu của bạn.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative p-8 rounded-2xl bg-white dark:bg-black border flex flex-col ${pkg.popular
                                    ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-xl'
                                    : 'border-zinc-200 dark:border-zinc-800'
                                }`}
                        >
                            {pkg.popular && (
                                <span className="absolute top-0 right-0 -mt-3 mr-4 px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg">
                                    Phổ biến nhất
                                </span>
                            )}

                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">{pkg.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-extrabold text-zinc-900 dark:text-white">{pkg.price}</span>
                                    <span className="text-zinc-500">/dự án</span>
                                </div>
                                <p className="text-sm text-zinc-500 mt-2">{pkg.desc}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {pkg.features.map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                                        <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-semibold transition-all ${pkg.popular
                                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25'
                                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700'
                                }`}>
                                Chọn gói này
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
