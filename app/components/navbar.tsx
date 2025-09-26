"use client"

import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6">
      <div
        className={`transition-all duration-700 ease-out ${
          scrollY > 50
            ? "bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
            : "bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
        } rounded-2xl`}
      >
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-thin tracking-tight text-[#111111] relative hover:text-[#D4AF37] transition-colors duration-300"
            >
              Pillar
              <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-[#D4AF37] to-transparent opacity-60"></div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/features"
                className="text-gray-700 hover:text-[#D4AF37] transition-all duration-300 font-light relative group"
              >
                Features
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></div>
              </Link>
              <a
                href="#"
                className="text-gray-700 hover:text-[#D4AF37] transition-all duration-300 font-light relative group"
              >
                Pricing
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></div>
              </a>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#D4AF37] transition-all duration-300 font-light relative group"
              >
                About
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></div>
              </Link>
              <button className="bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] text-white px-6 py-2 rounded-full text-sm font-light hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-[#D4AF37]/20">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-500 overflow-hidden ${
              isMenuOpen ? "max-h-64 opacity-100 mt-6" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-4 border-t border-white/10 pt-6">
              <Link
                href="/features"
                className="block text-gray-700 hover:text-[#D4AF37] transition-colors duration-300 font-light py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <a
                href="#"
                className="block text-gray-700 hover:text-[#D4AF37] transition-colors duration-300 font-light py-2"
              >
                Pricing
              </a>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-[#D4AF37] transition-colors duration-300 font-light py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] text-white px-6 py-3 rounded-full text-sm font-light mt-4">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
