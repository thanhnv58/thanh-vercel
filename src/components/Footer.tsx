import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white text-stone-600 py-10 border-t border-stone-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                    {/* Left: Brand & Slogan */}
                    <div className="max-w-md">
                        <h3 className="text-xl font-bold font-serif text-stone-900 mb-3">Thanh Design</h3>
                        <p className="text-sm leading-relaxed text-stone-500 mb-4">
                            Kiến tạo không gian sống đẳng cấp, mang lại giá trị bền vững cho ngôi nhà của bạn. Chúng tôi cam kết chất lượng và thẩm mỹ trong từng chi tiết.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-stone-400 hover:text-orange-600 transition-colors"><Facebook size={20} strokeWidth={1.5} /></a>
                            <a href="#" className="text-stone-400 hover:text-orange-600 transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
                            <a href="#" className="text-stone-400 hover:text-orange-600 transition-colors"><Youtube size={20} strokeWidth={1.5} /></a>
                        </div>
                    </div>

                    {/* Right: Contact & Address */}
                    <div className="text-sm space-y-2 md:text-right">
                        <h4 className="font-bold text-stone-900 mb-2">Liên hệ</h4>
                        <p>Tòa nhà ABC, Phố X, Hà Nội</p>
                        <p>contact@thanhdesign.vn</p>
                        <p>0912 345 678</p>
                    </div>
                </div>

                <div className="border-t border-stone-100 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400">
                    <p>© {new Date().getFullYear()} Thanh Design.</p>
                    <div className="mt-2 md:mt-0">
                        Website made by <span className="text-stone-900 font-bold">ThanhNV</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
