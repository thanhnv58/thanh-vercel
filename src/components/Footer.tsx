
export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold text-white mb-4">BrandName</h3>
                        <p className="max-w-xs mb-6">
                            Chúng tôi cung cấp giải pháp chuyển đổi số toàn diện cho doanh nghiệp, từ thiết kế website đến phát triển phần mềm.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons Placeholders */}
                            <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">F</div>
                            <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer">T</div>
                            <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">I</div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Liên kết</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Về chúng tôi</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Dịch vụ</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Dự án</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Tin tức</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Liên hệ</h4>
                        <ul className="space-y-2 text-sm">
                            <li>123 Đường ABC, Quận 1, TP.HCM</li>
                            <li>hello@brandname.com</li>
                            <li>1900 1234</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>© {new Date().getFullYear()} BrandName. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Điều khoản sử dụng</a>
                        <a href="#" className="hover:text-white">Chính sách bảo mật</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
