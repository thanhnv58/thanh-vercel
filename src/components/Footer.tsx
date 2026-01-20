export default function Footer() {
    return (
        <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold font-serif text-white mb-6">Interior Design</h3>
                        <p className="max-w-sm mb-8 leading-relaxed">
                            Kiến tạo không gian sống đẳng cấp, mang lại giá trị bền vững cho ngôi nhà của bạn. Chúng tôi cam kết chất lượng và thẩm mỹ trong từng chi tiết.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer font-bold">Fb</div>
                            <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer font-bold">In</div>
                            <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer font-bold">Yt</div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Dịch vụ</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Thiết kế nội thất</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Thi công trọn gói</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cải tạo nhà cũ</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Xưởng sản xuất</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Văn phòng</h4>
                        <ul className="space-y-3 text-sm">
                            <li>Tòa nhà ABC, Phố X, Hà Nội</li>
                            <li>contact@interior.vn</li>
                            <li>0912 345 678</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider uppercase">
                    <p>© {new Date().getFullYear()} Interior Design Studio.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
