import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data - in a real app this would come from a database or CMS
const projects = [
    {
        slug: "modern-luxury-living",
        title: "Modern Luxury Living",
        category: "Phòng Khách",
        image: "/images/portfolio_living.png",
        description: "Một không gian phòng khách hiện đại với tông màu trung tính, kết hợp giữa vật liệu tự nhiên và công nghệ chiếu sáng tiên tiến.",
        details: [
            "Diện tích: 45m2",
            "Phong cách: Modern Luxury",
            "Vật liệu chủ đạo: Đá Marble, Gỗ Óc Chó, Da Bò Ý",
            "Thời gian thi công: 25 ngày"
        ]
    },
    {
        slug: "cozy-master-bedroom",
        title: "Cozy Master Bedroom",
        category: "Phòng Ngủ",
        image: "/images/portfolio_bedroom.png",
        description: "Phòng ngủ master ấm cúng, nơi mỗi giấc ngủ là một trải nghiệm nghỉ dưỡng 5 sao ngay tại nhà.",
        details: [
            "Diện tích: 30m2",
            "Phong cách: Minimalism",
            "Vật liệu chủ đạo: Gỗ Sồi, Vải Linen",
            "Thời gian thi công: 15 ngày"
        ]
    },
    {
        slug: "minimalist-kitchen",
        title: "Minimalist Kitchen",
        category: "Phòng Bếp",
        image: "/images/portfolio_kitchen.png",
        description: "Căn bếp tối giản nhưng đầy đủ tiện nghi, tối ưu hóa công năng sử dụng cho gia chủ yêu thích nấu ăn.",
        details: [
            "Diện tích: 20m2",
            "Phong cách: Japandi",
            "Thiết bị: Bosch, Hafele",
            "Thời gian thi công: 20 ngày"
        ]
    }
];

export default async function PosterPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-stone-50 dark:bg-black selection:bg-orange-200 selection:text-orange-900 flex flex-col">
            <Header />

            <article className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4">


                    {/* Breadcrumb removed - Moved to Floating Action Button */}

                    {/* Header Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
                        <div>
                            <span className="text-orange-600 font-bold tracking-wider uppercase mb-2 block">{project.category}</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-stone-900 dark:text-white mb-6 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-xl">
                                {project.description}
                            </p>
                        </div>

                        {/* Project Details */}
                        <div className="bg-white dark:bg-stone-900 p-8 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800">
                            <h3 className="text-xl font-bold font-serif mb-4 text-stone-900 dark:text-white">Thông tin dự án</h3>
                            <ul className="space-y-3">
                                {project.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-stone-600 dark:text-stone-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Main Hero Image */}
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-20 shadow-2xl">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content Section with additional images (Simulated generated content) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                            <Image
                                src={project.image} // Reusing image as placeholder for generated detail shot
                                alt="Detail shot 1"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                        <div className="flex flex-col justify-center space-y-6">
                            <h3 className="text-3xl font-bold font-serif text-stone-900 dark:text-white">Ý tưởng thiết kế</h3>
                            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                                Mỗi đường nét trong thiết kế đều mang một ý nghĩa riêng. Chúng tôi tập trung vào việc tối ưu hóa không gian nhưng vẫn giữ được nét thẩm mỹ tinh tế. Ánh sáng tự nhiên được tận dụng tối đa để tạo cảm giác thoáng đãng và gần gũi với thiên nhiên.
                            </p>
                            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                                Sự kết hợp hài hòa giữa các vật liệu cao cấp và màu sắc trang nhã tạo nên một tổng thể sang trọng nhưng không kém phần ấm cúng. Đây chính là triết lý thiết kế mà chúng tôi luôn theo đuổi.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="relative aspect-square rounded-xl overflow-hidden">
                                    <Image src="/images/hero_bg.png" alt="Detail 2" fill className="object-cover" />
                                </div>
                                <div className="relative aspect-square rounded-xl overflow-hidden">
                                    <Image src="/images/empty_room.png" alt="Detail 3" fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation to other projects */}
                    <div className="border-t border-stone-200 dark:border-stone-800 pt-12">
                        <div className="flex justify-between items-center">
                            <h4 className="text-2xl font-serif font-bold text-stone-900 dark:text-white">Dự án khác</h4>
                            <Link href="/#portfolio" className="text-orange-600 font-medium hover:underline">Xem tất cả</Link>
                        </div>
                        {/* Simple suggestion grid could go here */}
                    </div>

                </div>
            </article>

            {/* Floating Back Button (FAB) */}
            <Link
                href="/"
                className="fixed bottom-8 left-8 z-50 flex items-center gap-2 bg-stone-900 hover:bg-black text-white px-6 py-3 rounded-full shadow-2xl shadow-stone-900/40 border border-stone-800 transition-all transform hover:scale-105 hover:-translate-y-1 group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                    <path d="m15 18-6-6 6-6" />
                </svg>
                <span className="font-semibold tracking-wide">Quay lại</span>
            </Link>

            <Footer />
        </main>
    );
}
