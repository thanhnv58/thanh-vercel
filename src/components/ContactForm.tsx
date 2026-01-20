'use client';


import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

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
            const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz7asUzWvF0-IvSoxKNwN8bUNIdSpw2zPij6lRST0Ojh4UmM_Ndswro20aTktWDh1AVlg/exec";

            // Sending JSON data
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Offer Content */}
                    <div>
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-6 border border-orange-200">
                            🎁 Ưu đãi đặc biệt
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight text-stone-900 dark:text-white">
                            Nhận ngay bộ bản vẽ 3D <br />
                            <span className="text-orange-600">trị giá 10 triệu đồng</span>
                        </h2>
                        <p className="text-stone-600 dark:text-stone-300 mb-8 text-lg leading-relaxed">
                            Khi ký hợp đồng thi công trọn gói trong tháng này. Hãy để lại thông tin, kiến trúc sư trưởng sẽ liên hệ tư vấn trực tiếp cho bạn trong vòng 30 phút.
                        </p>

                        <div className="flex gap-8 border-t border-stone-200 dark:border-stone-800 pt-8">
                            <div>
                                <h4 className="font-bold text-2xl mb-1 text-stone-900 dark:text-white">500+</h4>
                                <span className="text-stone-500 text-sm">Dự án hoàn thành</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-2xl mb-1 text-stone-900 dark:text-white">98%</h4>
                                <span className="text-stone-500 text-sm">Hài lòng tuyệt đối</span>
                            </div>
                        </div>
                    </div>

                    {/* Simple Form */}
                    <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-xl border border-stone-100 dark:border-stone-700 relative">
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
