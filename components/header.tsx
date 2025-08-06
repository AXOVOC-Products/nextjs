"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Youtube, Linkedin, Instagram, Facebook, Menu, X } from 'lucide-react'
import { useState } from 'react'

const StravaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.172"/>
  </svg>
)

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'PRODUCT', href: '/product' },
  { name: 'TBD', href: '/tbd' },
  { name: 'BLOGS', href: '/blogs' },
  { name: 'CONTACT US', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/axovoc-logo.png"
              alt="AXOVOC"
              width={160}
              height={44}
              className="w-[120px] min-w-[100px] md:w-[160px] md:min-w-[120px] h-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.youtube.com/@axovoc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            </a>
            <a
              href="https://www.strava.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Strava"
            >
              <StravaIcon className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/axovoc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            </a>
            <a
              href="https://www.facebook.com/axovoc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            </a>
          </div>

          {/* Mobile menu button and social icons */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Social Icons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.youtube.com/@axovoc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              </a>
              <a
                href="https://www.strava.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Strava"
              >
                <StravaIcon className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/axovoc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              </a>
              <a
                href="https://www.facebook.com/axovoc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              </a>
            </div>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
