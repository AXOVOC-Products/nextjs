"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

const StravaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.172" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-8 border-t border-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/axovoc-logo-footer.png"
            alt="AXOVOC"
            width={120}
            height={40}
            className="w-[120px] h-auto object-contain"
            priority
          />
        </div>
        {/* Quote */}
        <div className="text-center flex-1">
          <span className="italic text-xl text-black">
            "Every breath tells a story. With Vortex, you’ll finally hear it."
          </span>
        </div>
        {/* Socials */}
        <div className="flex items-center space-x-4">
          <Link href="https://www.youtube.com/@axovoc" target="_blank" aria-label="YouTube">
            <FaYoutube className="w-6 h-6 text-black hover:text-blue-600" />
          </Link>
          <Link href="https://www.strava.com/clubs/axovoc/" target="_blank" aria-label="Strava">
            <StravaIcon className="w-6 h-6 text-black hover:text-blue-600" />
          </Link>
          <Link href="https://www.linkedin.com/in/iamtaruntyagi/" target="_blank" aria-label="LinkedIn">
            <FaLinkedinIn className="w-6 h-6 text-black hover:text-blue-600" />
          </Link>
          <Link href="https://www.instagram.com/axovoc/" target="_blank" aria-label="Instagram">
            <FaInstagram className="w-6 h-6 text-black hover:text-blue-600" />
          </Link>
          <Link href="https://www.facebook.com/axovoc" target="_blank" aria-label="Facebook">
            <FaFacebookF className="w-6 h-6 text-black hover:text-blue-600" />
          </Link>
        </div>
      </div>
    </footer>
  );
}