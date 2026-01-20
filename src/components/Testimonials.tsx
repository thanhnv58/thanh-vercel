
'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Nguyễn Văn A",
        role: "CEO, TechStart",
        content: "Dịch vụ tuyệt vời! Doanh thu của chúng tôi tăng 200% sau khi làm lại website. Giao diện rất chuyên nghiệp và dễ sử dụng.",
        avatar: "A"
    },
    {
        name: "Trần Thị B",
        role: "Marketing Manager",
        content: "Tôi ấn tượng với cách team tư vấn và triển khai. Mọi thứ đều đúng tiến độ và vượt mong đợi.",
        avatar: "B"
    },
    {
        name: "Le Hoang C",
        role: "Founder, CoffeeChain",
        content: "Giải pháp công nghệ giúp chúng tôi quản lý chuỗi cửa hàng hiệu quả hơn bao giờ hết. Rất đáng tiền!",
        avatar: "C"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                        Khách hàng nói gì về chúng tôi
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white dark:bg-black border border-zinc-100 dark:border-zinc-800 shadow-sm"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-300 mb-8 italic">
                                "{item.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center font-bold text-blue-700 dark:text-blue-300">
                                    {item.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">{item.name}</h4>
                                    <p className="text-xs text-zinc-500">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
