import Image from "next/image";

export default function ProfileImage() {
    return (
        <div className="h-full flex items-center justify-center p-5 gap-6 relative">
            {/* Image container - removed max-w constraint */}
            <div className="relative h-full flex-1 rounded-xl border border-black/20 overflow-hidden shadow-2xl">
                <Image
                    src="/profilepic.png"
                    alt="Profile"
                    fill
                    className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                    priority
                />
            </div>
            
            {/* Cleaner vertical divider line */}
            <div className="absolute right-0 top-1/4 h-1/2 w-px" />
        </div>
    );
}