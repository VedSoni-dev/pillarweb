"use client"

import { ArrowRight, Clock, TrendingUp, BarChart3 } from "lucide-react"
import Navbar from "../components/navbar"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

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

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-white text-gray-900 overflow-x-hidden">
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

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left side - Content */}
          <div
            className="space-y-8 transform transition-all duration-1000 ease-out"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <div className="space-y-6">
              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-thin tracking-[-0.02em] text-[#111111] leading-[0.9] relative group cursor-default"
                style={{
                  transform: `translateX(${(mousePosition.x - getWindowDimensions().width / 2) * 0.01}px)`,
                }}
              >
                Pillar
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10" />
              </h1>

              <div className="relative">
                <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F7DC6F] to-[#D4AF37] rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                </div>
              </div>

              <p className="text-2xl md:text-3xl font-extralight text-gray-600 tracking-wide leading-relaxed">
                AI automations for real estate
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg font-light text-gray-500 leading-relaxed max-w-lg">
                Transform your real estate operations with intelligent automation that saves time, boosts revenue, and
                enables smarter decisions.
              </p>

              <div className="relative group">
                <Link
                  href="/get-started"
                  className="relative bg-gradient-to-r from-[#111111] via-gray-800 to-[#111111] text-white px-10 py-4 rounded-full text-lg font-light hover:shadow-2xl transform transition-all duration-700 hover:scale-[1.02] inline-flex items-center gap-3 overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/40"
                  style={{
                    transform: `translateX(${(mousePosition.x - getWindowDimensions().width / 2) * 0.005}px) translateY(${(mousePosition.y - getWindowDimensions().height / 2) * 0.005}px)`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10">Build Smarter with Pillar</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Interactive pillar image */}
          <div
            className="relative flex justify-center lg:justify-end"
            style={{
              transform: `translateY(${scrollY * -0.05}px)`,
            }}
          >
            <div className="relative group">
              <div
                className="w-32 h-[600px] bg-gradient-to-b from-gray-100 via-gray-50 to-gray-200 rounded-t-3xl shadow-2xl transform rotate-1 relative overflow-hidden transition-all duration-700 group-hover:shadow-3xl group-hover:scale-[1.02]"
                style={{
                  transform: `rotate(${1 + (mousePosition.x - getWindowDimensions().width / 2) * 0.01}deg) translateX(${(mousePosition.x - getWindowDimensions().width / 2) * 0.01}px)`,
                }}
              >
                <div className="absolute top-0 left-4 w-px h-full bg-gradient-to-b from-[#D4AF37] via-[#F7DC6F] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-[#D4AF37] blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                </div>
                <div className="absolute top-0 right-4 w-px h-full bg-gradient-to-b from-[#D4AF37] via-[#F7DC6F] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-[#D4AF37] blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              <div
                className="absolute -left-8 top-16 w-20 h-[500px] bg-gradient-to-b from-gray-100/80 to-gray-200/80 rounded-t-2xl shadow-xl transform -rotate-2 -z-10 transition-all duration-700 group-hover:shadow-2xl"
                style={{
                  transform: `rotate(${-2 + (mousePosition.x - getWindowDimensions().width / 2) * 0.005}deg) translateY(${scrollY * 0.02}px)`,
                }}
              />
              <div
                className="absolute -right-6 top-24 w-24 h-[480px] bg-gradient-to-b from-gray-50/60 to-gray-100/60 rounded-t-2xl shadow-lg transform rotate-3 -z-10 transition-all duration-700 group-hover:shadow-xl"
                style={{
                  transform: `rotate(${3 + (mousePosition.x - getWindowDimensions().width / 2) * 0.008}deg) translateY(${scrollY * -0.01}px)`,
                }}
              />

              <div
                className="absolute top-20 -left-4 w-3 h-3 bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] rounded-full animate-pulse shadow-lg"
                style={{
                  transform: `translate(${(mousePosition.x - getWindowDimensions().width / 2) * 0.02}px, ${(mousePosition.y - getWindowDimensions().height / 2) * 0.02}px)`,
                }}
              >
                <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-md opacity-50" />
              </div>
              <div
                className="absolute top-40 -right-2 w-2 h-2 bg-gradient-to-r from-[#F7DC6F] to-[#D4AF37] rounded-full animate-pulse delay-1000 shadow-md"
                style={{
                  transform: `translate(${(mousePosition.x - getWindowDimensions().width / 2) * 0.015}px, ${(mousePosition.y - getWindowDimensions().height / 2) * 0.015}px)`,
                }}
              />
              <div
                className="absolute top-60 left-2 w-2 h-2 bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] rounded-full animate-pulse delay-2000 shadow-md"
                style={{
                  transform: `translate(${(mousePosition.x - getWindowDimensions().width / 2) * 0.01}px, ${(mousePosition.y - getWindowDimensions().height / 2) * 0.01}px)`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 group">
          <div className="w-px h-16 bg-gradient-to-b from-[#D4AF37] via-[#F7DC6F] to-transparent animate-pulse relative">
            <div className="absolute inset-0 bg-[#D4AF37] blur-sm opacity-50" />
          </div>
          <div className="w-2 h-2 bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] rounded-full mx-auto mt-2 animate-bounce shadow-lg relative">
            <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-md opacity-50" />
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-white via-gray-50/20 to-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-thin text-[#111111] mb-8 tracking-[-0.01em] leading-tight">
              Why Choose Pillar?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F7DC6F] to-[#D4AF37] rounded-full mx-auto mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
            </div>
            <p className="text-xl font-light text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Transform your real estate operations with intelligent automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Save Time",
                description: "Automate repetitive tasks and focus on closing deals that matter most to your business.",
                delay: "0ms",
              },
              {
                icon: TrendingUp,
                title: "Boost Revenue",
                description: "Streamline workflows to unlock more opportunities and maximize your earning potential.",
                delay: "200ms",
              },
              {
                icon: BarChart3,
                title: "Smarter Decisions",
                description: "Data-driven insights for real estate operations that give you the competitive edge.",
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
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-[#D4AF37] rounded-full" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#F7DC6F] rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-[#D4AF37] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-thin text-[#111111] mb-10 tracking-[-0.01em] leading-tight">
            Ready to Build with Pillar?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F7DC6F] to-[#D4AF37] rounded-full mx-auto mb-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
          </div>
          <p className="text-xl font-light text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            Join thousands of real estate professionals who trust Pillar to automate their success.
          </p>

          <div className="relative group inline-block">
            <button
              onClick={() => setIsModalOpen(true)}
              className="relative bg-gradient-to-r from-[#111111] via-gray-800 to-[#111111] text-white px-12 py-5 rounded-full text-lg font-light hover:shadow-2xl transform transition-all duration-700 hover:scale-[1.05] inline-flex items-center gap-3 border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 overflow-hidden"
              style={{
                transform: `translateX(${(mousePosition.x - getWindowDimensions().width / 2) * 0.003}px) translateY(${(mousePosition.y - getWindowDimensions().height / 2) * 0.003}px)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/10 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </button>

            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#F7DC6F]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 scale-150" />
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-t from-gray-50 to-white py-16 px-6 border-t border-gray-100/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-base font-light tracking-wide">
            © 2025 Pillar. Building the future of real estate automation.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mx-auto mt-4" />
        </div>
      </footer>

      {/* Modal removed: direct navigation to /get-started */}
    </div>
  )
}
