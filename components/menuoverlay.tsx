"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MenuOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-white flex">
      
      {/* LEFT IMAGE */}
      <div className="hidden md:block w-1/3 relative">
        <Image
          src="/profile.jpg"   // put image in /public
          alt="Profile"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 flex flex-col justify-between p-10">
        
        {/* TOP */}
        <div className="flex justify-between items-center">
          <span className="text-sm opacity-60">© 2025</span>
          <Button variant="ghost" onClick={onClose}>
            CLOSE ✕
          </Button>
        </div>

        {/* NAV LINKS */}
        <nav className="space-y-6 text-2xl font-medium">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block w-fit border-b border-transparent hover:border-black transition"
              onClick={onClose}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* FOOTER */}
        <div className="text-sm space-y-2">
          <p>shreyaan@email.com</p>
          <p>LinkedIn · GitHub · Twitter</p>
        </div>
      </div>
    </div>
  );
}