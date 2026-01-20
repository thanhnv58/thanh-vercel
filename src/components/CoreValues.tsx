'use client';

import { Maximize, Leaf, UserCheck, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
    {
        icon: Maximize,
        title: "Tối ưu diện tích",
        description: "Mọi góc chết đều được xử lý để trở thành không gian hữu dụng, giúp căn nhà rộng rãi hơn."
    },
    {
        icon: Leaf,
        title: "Vật liệu xanh",
        description: "Ưu tiên gỗ công nghiệp đạt chuẩn E1, sơn không mùi, an toàn tuyệt đối cho trẻ nhỏ."
    },
    {
        icon: UserCheck,
        title: "Cá nhân hóa",
        description: "Mỗi thiết kế là độc bản, phản ánh đúng gu thẩm mỹ và phong cách sống của gia chủ."
    },
    {
        icon: ShieldCheck,
        title: "Cam kết chất lượng",
        description: "Quy trình kiểm soát chất lượng nghiêm ngặt 3 lớp đảm bảo độ bền vượt thời gian."
    }
];

export default function CoreValues() {
    return (
        <section className="py-20 bg-stone-50 dark:bg-stone-900" id="values">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-serif mb-4 text-stone-900 dark:text-white">Triết lý thiết kế</h2>
                    <div className="w-20 h-1 bg-stone-300 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-14 h-14 bg-stone-100 dark:bg-stone-700 rounded-full flex items-center justify-center mb-6 text-stone-800 dark:text-stone-200">
                                <item.icon className="w-7 h-7" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-stone-900 dark:text-white">{item.title}</h3>
                            <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
