import Link from 'next/link';
import Image from 'next/image';
import { Phone, Facebook } from 'lucide-react';

export default function Header() {
    const navItems = [
        { name: 'Tính năng', href: '#features' },
        { name: 'Quy trình', href: '#process' },
        { name: 'Đánh giá', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-all duration-300">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* 1. Logo (Brand Identity) */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/images/logo.png"
                        alt="Brand Logo"
                        width={120}
                        height={120}
                        className="h-[120px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-100 hidden sm:block">
                        Decoration
                    </span>
                </Link>

                {/* 2. Menu điều hướng (Anchor Links) */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* 3 & 4. Right Side: Contact & CTA */}
                <div className="flex items-center gap-4 sm:gap-6">
                    {/* Quick Contact - Hidden on very small screens */}
                    <div className="hidden lg:flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors cursor-pointer">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm font-semibold">1900 1234</span>
                    </div>

                    {/* Social (Optional) */}
                    <a href="#" className="hidden lg:flex text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors">
                        <Facebook className="w-5 h-5" />
                    </a>

                    {/* Primary CTA */}
                    <Link
                        href="#contact"
                        className="flex items-center justify-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-blue-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Nhận tư vấn ngay
                    </Link>
                </div>
            </div>
        </header>
    );
}
