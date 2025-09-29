"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight, Building2, Users, Lightbulb } from "lucide-react"
import Link from "next/link"
import Navbar from "../../components/navbar"

export default function IndustriesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [windowDimensions, setWindowDimensions] = useState({ width: 1920, height: 1080 })

  // Helper function to safely get window dimensions
  const getWindowDimensions = () => {
    if (typeof window === 'undefined') {
      return { width: 1920, height: 1080 }
    }
    return { width: window.innerWidth, height: window.innerHeight }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => setScrollY(window.scrollY)

    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }

    // Set initial dimensions
    setWindowDimensions(getWindowDimensions())

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-white text-gray-900 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-[#D4AF37]/5 to-[#F7DC6F]/5 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.02 + 100,
            top: mousePosition.y * 0.02 + 100,
            transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0001})`,
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-[#F7DC6F]/3 to-[#D4AF37]/3 rounded-full blur-2xl animate-pulse delay-1000"
          style={{
            right: mousePosition.x * 0.015 + 150,
            bottom: mousePosition.y * 0.015 + 150,
            transform: `translate(50%, 50%) scale(${1 + scrollY * 0.0002})`,
          }}
        />
      </div>

      <Navbar />

      {/* Header */}
      <div className="relative z-10 pt-8 px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div
            className="space-y-8 transform transition-all duration-1000 ease-out"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-thin tracking-[-0.02em] text-[#111111] leading-[0.9] relative group cursor-default"
              style={{
                transform: `translateX(${(mousePosition.x - windowDimensions.width / 2) * 0.01}px)`,
              }}
            >
              Other Industries
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10" />
            </h1>

            <div className="relative">
              <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F7DC6F] to-[#D4AF37] rounded-full mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
              </div>
            </div>

            <p className="text-2xl md:text-3xl font-extralight text-gray-600 tracking-wide leading-relaxed max-w-4xl mx-auto">
              We are always looking to expand to new markets and we love learning
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-6 bg-gradient-to-b from-white via-gray-50/20 to-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-thin text-[#111111] mb-8 tracking-[-0.01em] leading-tight">
              Let's Work Together
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F7DC6F] to-[#D4AF37] rounded-full mx-auto mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
            </div>
            <p className="text-xl font-light text-gray-500 max-w-4xl mx-auto leading-relaxed">
              We would love to work in your industry so we can learn all we can
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto mb-24">
            {[
              {
                icon: Building2,
                title: "Industry Expertise",
                description: "We dive deep into your industry's unique challenges and opportunities to create tailored automation solutions.",
                delay: "0ms",
              },
              {
                icon: Users,
                title: "Collaborative Learning",
                description: "We work closely with your team to understand workflows and identify automation opportunities.",
                delay: "200ms",
              },
              {
                icon: Lightbulb,
                title: "Innovation Focus",
                description: "Every new industry teaches us something valuable that we can apply to future projects.",
                delay: "400ms",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-700 border border-gray-100/50 hover:border-[#D4AF37]/30 group relative overflow-hidden"
                style={{ animationDelay: card.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl relative">
                    <card.icon className="w-6 h-6 text-[#D4AF37] group-hover:text-[#F7DC6F] transition-colors duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-2xl font-light text-[#111111] mb-6 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed font-light group-hover:text-gray-600 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border border-gray-100/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-thin text-[#111111] mb-6 tracking-tight">
                  Ready to Explore Your Industry?
                </h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
                  Please sign up here with what your industry is and company is. We'll reach out to discuss how we can help automate your processes.
                </p>

                <Link
                  href="/industry-signup"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] text-white px-12 py-5 rounded-full text-lg font-semibold hover:from-[#C19B2A] hover:to-[#E6C85A] transition-all duration-200 shadow-lg"
                >
                  Sign Up Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-t from-gray-50 to-white py-16 px-6 border-t border-gray-100/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-base font-light tracking-wide">
            © 2025 Pillar. Expanding automation across all industries.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mx-auto mt-4" />
        </div>
      </footer>
    </div>
  )
}
