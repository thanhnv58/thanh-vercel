'use client';

import { Zap, Shield, Rocket, Smartphone, Globe, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';


const features = [
    {
        icon: <Zap className="w-6 h-6 text-orange-500" />,
        title: "Thiết kế Cá nhân hóa",
        desc: "Mỗi bản vẽ được may đo riêng theo gu thẩm mỹ và lối sống của gia chủ."
    },
    {
        icon: <Shield className="w-6 h-6 text-green-500" />,
        title: "Vật liệu Cao cấp",
        desc: "Cam kết sử dụng vật liệu chính hãng, bền đẹp theo thời gian."
    },
    {
        icon: <Rocket className="w-6 h-6 text-blue-500" />,
        title: "Thi công Nhanh chóng",
        desc: "Quy trình tối ưu giúp rút ngắn thời gian hoàn thiện mà vẫn đảm bảo chất lượng."
    },
    {
        icon: <Smartphone className="w-6 h-6 text-purple-500" />,
        title: "Smart Home Ready",
        desc: "Tích hợp các giải pháp nhà thông minh tiện lợi vào thiết kế nội thất."
    },
    {
        icon: <Globe className="w-6 h-6 text-cyan-500" />,
        title: "Phong thủy",
        desc: "Tư vấn bố trí nội thất hợp phong thủy, mang lại tài lộc và bình an."
    },
    {
        icon: <BarChart className="w-6 h-6 text-red-500" />,
        title: "Chi phí Minh bạch",
        desc: "Báo giá chi tiết từng hạng mục, không phát sinh chi phí ẩn."
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-white dark:bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        Tại sao chọn dịch vụ của chúng tôi?
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        Chúng tôi không chỉ bán nội thất, chúng tôi mang đến giá trị sống đích thực cho ngôi nhà của bạn.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-shadow"
                        >
                            <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">{feature.title}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
