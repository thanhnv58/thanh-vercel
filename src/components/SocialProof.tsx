'use client';

export default function SocialProof() {
    const brands = [
        "VnExpress", "CafeF", "KienViet",
        "An Cuong", "Vicostone", "Hafele"
    ];

    return (
        <section className="py-12 border-y border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/50">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm font-semibold text-stone-400 uppercase tracking-wider mb-8">
                    Được tin tưởng và nhắc đến bởi
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Text Placeholders for Logos to ensure clear communication without fake images */}
                    {brands.map((brand, index) => (
                        <span key={index} className="text-xl md:text-2xl font-bold font-serif text-stone-600 dark:text-stone-300">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
