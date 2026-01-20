
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "Chi phí thiết kế website trọn gói là bao nhiêu?",
        answer: "Chi phí phụ thuộc vào độ phức tạp của dự án. Gói cơ bản bắt đầu từ 10.000.000 VNĐ. Hãy liên hệ để nhận báo giá chi tiết."
    },
    {
        question: "Thời gian hoàn thành dự án bao lâu?",
        answer: "Trung bình từ 2-4 tuần cho một website doanh nghiệp và 4-8 tuần cho các hệ thống phức tạp hơn."
    },
    {
        question: "Tôi có được bảo hành sau khi bàn giao không?",
        answer: "Có, chúng tôi bảo hành kỹ thuật trọn đời và hỗ trợ chỉnh sửa nội dung miễn phí trong 3 tháng đầu."
    },
    {
        question: "Website có chuẩn SEO không?",
        answer: "Tất nhiên! Tất cả sản phẩm của chúng tôi đều được tối ưu SEO on-page, tốc độ tải trang và tương thích di động ngay từ đầu."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-white dark:bg-black">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-zinc-900 dark:text-zinc-100">
                    Câu hỏi thường gặp
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900/30"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="font-semibold text-zinc-900 dark:text-zinc-100">{faq.question}</span>
                                <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-4 pt-0 text-zinc-600 dark:text-zinc-400">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
