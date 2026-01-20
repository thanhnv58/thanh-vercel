'use client';

import { motion } from 'framer-motion';

export default function ContactForm() {
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
                    <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-xl border border-stone-100 dark:border-stone-700">
                        <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-6 font-serif">Đăng ký tư vấn miễn phí</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Họ và tên</label>
                                <input
                                    type="text"
                                    placeholder="Ví dụ: Nguyễn Văn A"
                                    className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-600 focus:ring-2 focus:ring-orange-500 focus:outline-none text-stone-900 dark:text-white dark:bg-stone-700 placeholder:text-stone-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Số điện thoại</label>
                                <input
                                    type="tel"
                                    placeholder="0912 345 678"
                                    className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-600 focus:ring-2 focus:ring-orange-500 focus:outline-none text-stone-900 dark:text-white dark:bg-stone-700 placeholder:text-stone-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Diện tích căn hộ (m2)</label>
                                <input
                                    type="number"
                                    placeholder="Ví dụ: 85"
                                    className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-600 focus:ring-2 focus:ring-orange-500 focus:outline-none text-stone-900 dark:text-white dark:bg-stone-700 placeholder:text-stone-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Nhu cầu cụ thể</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-600 focus:ring-2 focus:ring-orange-500 focus:outline-none text-stone-900 dark:text-white dark:bg-stone-700">
                                    <option>Thiết kế & Thi công trọn gói</option>
                                    <option>Thiết kế nội thất (Chưa thi công)</option>
                                    <option>Cải tạo nhà cũ</option>
                                    <option>Mua đồ nội thất lẻ</option>
                                </select>
                            </div>
                            <button className="w-full py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 mt-2">
                                Gửi đăng ký ngay
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
