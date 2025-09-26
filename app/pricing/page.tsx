"use client"

import Navbar from "../../components/navbar"
import GetStartedModal from "../../components/get-started-modal"
import { useState, useEffect } from "react"
import { ArrowRight, CheckCircle, Clock, TrendingUp, Users } from "lucide-react"

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
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

      <main className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-24">
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-thin tracking-[-0.02em] text-[#111111] leading-[0.9] relative group cursor-default mb-8"
              style={{
                transform: `translateX(${(mousePosition.x - windowDimensions.width / 2) * 0.01}px)`,
              }}
            >
              Pricing
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10" />
            </h1>

            <div className="relative mb-8">
              <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F7DC6F] to-[#D4AF37] rounded-full mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
              </div>
            </div>

            <p className="text-2xl md:text-3xl font-extralight text-gray-600 tracking-wide leading-relaxed max-w-4xl mx-auto">
              Custom automation solutions tailored to your business needs
            </p>
          </div>

          {/* Process Cards */}
          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto mb-32">
            {[
              {
                icon: Clock,
                title: "Discovery Day",
                description: "I'll spend a full day at your office learning your daily processes, identifying pain points, and mapping out automation opportunities.",
                delay: "0ms",
              },
              {
                icon: TrendingUp,
                title: "Custom Analysis",
                description: "I'll analyze your workflow, calculate potential time savings, and create a detailed automation roadmap with ROI projections.",
                delay: "200ms",
              },
              {
                icon: CheckCircle,
                title: "Transparent Quote",
                description: "You'll receive a detailed, transparent quote with no hidden fees. We'll work within your budget to maximize value.",
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

          {/* Pricing Philosophy */}
          <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-32 px-6 relative overflow-hidden mb-32">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-20 w-32 h-32 border border-[#D4AF37] rounded-full" />
              <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#F7DC6F] rounded-full" />
              <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-[#D4AF37] rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-5xl md:text-6xl font-thin text-[#111111] mb-10 tracking-[-0.01em] leading-tight">
                Our Pricing Philosophy
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F7DC6F] to-[#D4AF37] rounded-full mx-auto mb-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
              </div>
              <p className="text-xl font-light text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
                We're college students building something amazing, not a corporate machine trying to maximize profits. Our goal is to create incredible value for your business while funding our next ventures.
              </p>

              <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {[
                  {
                    icon: CheckCircle,
                    title: "Fair & Transparent",
                    description: "No hidden fees, no corporate markup. Just honest pricing for quality work.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Budget Conscious",
                    description: "We work with your budget to deliver maximum ROI, not maximum invoice.",
                  },
                  {
                    icon: Users,
                    title: "Value Focused",
                    description: "Every dollar you invest should save you 10x in time and efficiency.",
                  },
                  {
                    icon: Clock,
                    title: "Long-term Partnership",
                    description: "We're building relationships, not just completing projects.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100/50 hover:border-[#D4AF37]/30 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-md">
                        <item.icon className="w-5 h-5 text-[#D4AF37] group-hover:text-[#F7DC6F] transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-light text-[#111111] mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-600 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl font-thin text-[#111111] mb-10 tracking-[-0.01em] leading-tight">
              Ready to Get Started?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F7DC6F] to-[#D4AF37] rounded-full mx-auto mb-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
            </div>
            <p className="text-xl font-light text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your automation needs and create a custom solution that fits your budget.
            </p>

            <div className="relative group inline-block">
              <button
                onClick={() => setIsModalOpen(true)}
                className="relative bg-gradient-to-r from-[#111111] via-gray-800 to-[#111111] text-white px-12 py-5 rounded-full text-lg font-light hover:shadow-2xl transform transition-all duration-700 hover:scale-[1.05] inline-flex items-center gap-3 border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 overflow-hidden"
                style={{
                  transform: `translateX(${(mousePosition.x - windowDimensions.width / 2) * 0.003}px) translateY(${(mousePosition.y - windowDimensions.height / 2) * 0.003}px)`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/10 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="relative z-10">Get Your Custom Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </button>

              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#F7DC6F]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 scale-150" />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-t from-gray-50 to-white py-16 px-6 border-t border-gray-100/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-base font-light tracking-wide">
            © 2025 Pillar. Building the future of real estate automation.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mx-auto mt-4" />
        </div>
      </footer>

      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
