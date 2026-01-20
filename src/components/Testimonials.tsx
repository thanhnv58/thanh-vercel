'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        name: "Chị Minh Anh",
        role: "Cư dân Vinhomes Smart City",
        content: "Mình rất kỹ tính nhưng khi nhận nhà thì hoàn toàn bị chinh phục. Đội ngũ thi công rất sạch sẽ, các đường keo silicon sắc nét. 10 điểm cho sự tận tâm!",
        avatar: "/images/file.svg" // Placeholder or skip visual avatar
    },
    {
        name: "Anh Tuấn Hưng",
        role: "Penthouse Ecopark",
        content: "Thiết kế 3D đã đẹp, ra thực tế còn đẹp hơn vì chất cảm của vật liệu. Xưởng gỗ làm việc rất chuyên nghiệp, đúng tiến độ cam kết.",
        avatar: "/images/file.svg"
    },
    {
        name: "Cô Thanh",
        role: "Biệt thự KĐT Ciputra",
        content: "Cách các bạn tối ưu không gian bếp và phòng thay đồ làm cô rất ưng ý. Chắc chắn sẽ giới thiệu cho bạn bè.",
        avatar: "/images/file.svg"
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-stone-50 dark:bg-stone-900" id="testimonials">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-serif mb-4 text-stone-900 dark:text-white">Khách hàng nói gì?</h2>
                    <p className="text-stone-600 dark:text-stone-400">Sự hài lòng của bạn là thước đo thành công của chúng tôi</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm relative"
                        >
                            <Quote className="absolute top-8 right-8 text-stone-200 dark:text-stone-800 w-12 h-12 rotate-180" />
                            <div className="flex gap-1 text-orange-400 mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <p className="text-stone-600 dark:text-stone-300 mb-6 leading-relaxed italic">
                                "{item.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center font-bold text-stone-500 text-sm">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 dark:text-white">{item.name}</h4>
                                    <span className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wide">{item.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
