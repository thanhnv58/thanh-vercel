'use client';


import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Gift, Sparkles } from 'lucide-react';

const formSchema = z.object({
    name: z.string().min(2, { message: "Vui lòng nhập họ tên đầy đủ" }),
    phone: z.string().regex(/^0\d{9}$/, { message: "Số điện thoại không hợp lệ (cần 10 số, bắt đầu bằng số 0)" }),
    message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
    // Added custom success state
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            // Call local Next.js API (Proxy)
            await fetch('/api/contact', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            setIsSuccess(true);
            reset();

            // Auto hide success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);

        } catch (error) {
            console.error("Submission error:", error);
            alert("Có lỗi xảy ra, vui lòng thử lại sau.");
        }
    };

    return (
        <section className="py-20 bg-stone-50 dark:bg-stone-900 transition-colors" id="contact">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Visual Reward Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full max-w-sm lg:max-w-full mx-auto h-full"
                    >
                        {/* 3D Glass Card */}
                        {/* 3D Glass Card */}
                        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/80 to-white/40 dark:from-stone-800/80 dark:to-stone-900/40 backdrop-blur-md border border-white/50 dark:border-stone-700 shadow-2xl p-10 lg:p-14 text-center group hover:-translate-y-2 transition-transform duration-500 h-full flex flex-col items-center justify-center gap-8 lg:gap-10">

                            {/* Decorative Glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-orange-400/20 rounded-full blur-[60px]" />

                            {/* Animated Badge */}
                            <div className="relative inline-block">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-30"
                                />
                                <div className="relative w-28 h-28 lg:w-32 lg:h-32 bg-gradient-to-tr from-orange-400 to-amber-500 rounded-3xl flex items-center justify-center shadow-lg shadow-orange-500/30 transform rotate-6 border-t border-white/40">
                                    <Gift className="w-14 h-14 lg:w-16 lg:h-16 text-white drop-shadow-md" />
                                    {/* Sparkles Particles */}
                                    <motion.div
                                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                                        className="absolute -top-2 -right-2 text-yellow-300"
                                    >
                                        <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 fill-current" />
                                    </motion.div>
                                    <motion.div
                                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                                        className="absolute -bottom-1 -left-1 text-yellow-200"
                                    >
                                        <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Content Wrapper */}
                            <div className="flex flex-col gap-2">
                                <h2 className="text-lg font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest">Ưu đãi độc quyền</h2>
                                <p className="text-3xl font-serif font-bold text-stone-900 dark:text-white leading-none">
                                    Gói thiết kế 3D
                                </p>
                                <p className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 drop-shadow-sm mt-2">
                                    10.000.000đ
                                </p>
                            </div>

                            <p className="text-stone-600 dark:text-stone-300 text-sm px-2 max-w-[280px] mx-auto leading-relaxed">
                                Dành tặng 30 khách hàng đầu tiên đăng ký tư vấn thi công trọn gói trong tháng này.
                            </p>

                            {/* Action Button */}
                            <button
                                onClick={() => document.getElementById('contact-form-input')?.focus()}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-stone-900 to-stone-800 dark:from-white dark:to-stone-200 text-white dark:text-stone-900 font-bold text-lg shadow-lg shadow-stone-900/20 active:scale-95 transition-all flex items-center justify-center gap-2 group-hover:shadow-xl mt-auto"
                            >
                                <Gift className="w-5 h-5" />
                                NHẬN QUÀ NGAY
                            </button>
                        </div>
                    </motion.div>

                    {/* Simple Form */}
                    <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-xl border border-stone-100 dark:border-stone-700 relative h-full flex flex-col justify-center">
                        {isSuccess ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white/95 dark:bg-stone-800/95 rounded-2xl z-10 animate-fade-in">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-2">Đăng ký thành công!</h3>
                                <p className="text-stone-600 dark:text-stone-400">Cảm ơn bạn đã quan tâm. Chúng tôi sẽ liên hệ trong thời gian sớm nhất.</p>
                                <button onClick={() => setIsSuccess(false)} className="mt-6 text-sm text-stone-500 underline hover:text-orange-600">Gửi phản hồi khác</button>
                            </div>
                        ) : null}

                        <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-6 font-serif">Đăng ký tư vấn miễn phí</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Họ và tên</label>
                                <input
                                    {...register("name")}
                                    id="contact-form-input"
                                    type="text"
                                    placeholder="Ví dụ: Nguyễn Văn A"
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-stone-200 dark:border-stone-600 focus:ring-orange-500'} focus:ring-2 focus:outline-none text-stone-900 dark:text-white dark:bg-stone-700 placeholder:text-stone-400`}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Số điện thoại</label>
                                <input
                                    {...register("phone")}
                                    type="tel"
                                    placeholder="0912 345 678"
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-stone-200 dark:border-stone-600 focus:ring-orange-500'} focus:ring-2 focus:outline-none text-stone-900 dark:text-white dark:bg-stone-700 placeholder:text-stone-400`}
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Yêu cầu</label>
                                <textarea
                                    {...register("message")}
                                    rows={3}
                                    placeholder="Nhập yêu cầu của bạn (Diện tích, phong cách mong muốn...)"
                                    className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-600 focus:ring-2 focus:ring-orange-500 focus:outline-none text-stone-900 dark:text-white dark:bg-stone-700 placeholder:text-stone-400 resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center"
                            >
                                {isSubmitting ? "Đang gửi..." : "Gửi đăng ký ngay"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
