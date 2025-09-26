"use client"

import { Award, Building, Users, Zap } from "lucide-react"
import Navbar from "../../components/navbar"
import { useEffect, useState } from "react"

export default function About() {
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
      {/* Ambient background orbs */}
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
              About Pillar
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10" />
            </h1>

            <div className="relative">
              <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F7DC6F] to-[#D4AF37] rounded-full mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
              </div>
            </div>

            <p className="text-2xl md:text-3xl font-extralight text-gray-600 tracking-wide leading-relaxed max-w-4xl mx-auto">
              Two college entrepreneurs revolutionizing business automation with Silicon Valley expertise
            </p>
          </div>
        </div>
      </section>

      {/* Founder Credentials */}
      <section className="py-32 px-6 bg-gradient-to-b from-white via-gray-50/20 to-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-thin text-[#111111] mb-8 tracking-[-0.01em] leading-tight">
              World-Class Expertise
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F7DC6F] to-[#D4AF37] rounded-full mx-auto mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
            </div>
            <p className="text-xl font-light text-gray-500 max-w-4xl mx-auto leading-relaxed">
              Bringing Silicon Valley innovation and academic excellence to real estate automation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Lead Founder Credentials */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-700 border border-gray-100/50 hover:border-[#D4AF37]/30 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl relative">
                  <Award className="w-8 h-8 text-[#D4AF37] group-hover:text-[#F7DC6F] transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="text-2xl font-light text-[#111111] mb-6 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                  Lead Founder & Technical Architect
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600 font-light leading-relaxed">
                      <span className="font-medium text-[#D4AF37]">Silicon Valley Startup Founder</span> — Currently
                      running a successful tech startup in the heart of Silicon Valley
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600 font-light leading-relaxed">
                      <span className="font-medium text-[#D4AF37]">Top 10 National Ranking</span> — Rated top 10 in the
                      nation for AI × Robotics research with published academic papers
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600 font-light leading-relaxed">
                      <span className="font-medium text-[#D4AF37]">Enterprise Experience</span> — Collaborated with
                      NVIDIA, Yale University, Texas A&M, Amazon, and Google on cutting-edge projects
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600 font-light leading-relaxed">
                      <span className="font-medium text-[#D4AF37]">Industrial Automation</span> — Built complex
                      automations for industrial engineering companies before expanding to real estate
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600 font-light leading-relaxed">
                      <span className="font-medium text-[#D4AF37]">Multi-Venture Entrepreneur</span> — Currently
                      managing 2 other successful ventures alongside Pillar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Co-Founder */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-700 border border-gray-100/50 hover:border-[#D4AF37]/30 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl relative">
                  <Users className="w-8 h-8 text-[#D4AF37] group-hover:text-[#F7DC6F] transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="text-2xl font-light text-[#111111] mb-6 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                  Co-Founder & Business Strategy
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600 font-light leading-relaxed">
                      <span className="font-medium text-[#D4AF37]">Business Development</span> — Specializes in
                      identifying automation opportunities and business process optimization
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600 font-light leading-relaxed">
                      <span className="font-medium text-[#D4AF37]">Real Estate Focus</span> — Deep understanding of real
                      estate workflows and pain points from extensive market research
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600 font-light leading-relaxed">
                      <span className="font-medium text-[#D4AF37]">Client Relations</span> — Ensures seamless
                      communication and project delivery for all automation implementations
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600 font-light leading-relaxed">
                      <span className="font-medium text-[#D4AF37]">Strategic Planning</span> — Develops comprehensive
                      automation roadmaps tailored to each client's unique needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-50/20 via-white to-gray-50/20 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-thin text-[#111111] mb-8 tracking-[-0.01em] leading-tight">
            Our Mission
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F7DC6F] to-[#D4AF37] rounded-full mx-auto mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border border-gray-100/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <p className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed mb-8">
                "We're bringing Silicon Valley innovation to real estate — a field we've wanted to revolutionize for
                years."
              </p>
              <p className="text-lg font-light text-gray-600 leading-relaxed max-w-4xl mx-auto">
                As college entrepreneurs, we understand the importance of affordable, high-quality solutions. Our
                mission is to democratize enterprise-level automation, making it accessible to real estate professionals
                of all sizes while maintaining the security and sophistication of Fortune 500 implementations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Real Estate */}
      <section className="py-32 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-thin text-[#111111] mb-8 tracking-[-0.01em] leading-tight">
              Why Real Estate?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F7DC6F] to-[#D4AF37] rounded-full mx-auto mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-gray-100/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl font-light text-gray-700 leading-relaxed">
                  After successfully automating complex industrial engineering processes, we realized real estate was
                  ripe for transformation. The industry is filled with repetitive tasks, manual processes, and untapped
                  potential for AI integration.
                </p>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  From lead generation and client communication to property management and financial tracking — every
                  aspect of real estate can be enhanced with intelligent automation. We're here to make that vision a
                  reality.
                </p>
              </div>

              <div className="relative flex justify-center">
                <div className="relative group">
                  <div
                    className="w-64 h-64 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 rounded-3xl shadow-2xl transform rotate-1 relative overflow-hidden transition-all duration-700 group-hover:shadow-3xl group-hover:scale-[1.02] flex items-center justify-center"
                    style={{
                      transform: `rotate(${1 + (mousePosition.x - windowDimensions.width / 2) * 0.01}deg)`,
                    }}
                  >
                    <Building className="w-24 h-24 text-[#D4AF37] opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10" />
                    <div className="absolute inset-4 border-2 border-[#D4AF37]/20 rounded-2xl group-hover:border-[#D4AF37]/40 transition-colors duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-32 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-thin text-[#111111] mb-10 tracking-[-0.01em] leading-tight">
            Ready to Work Together?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F7DC6F] to-[#D4AF37] rounded-full mx-auto mb-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
          </div>
          <p className="text-xl font-light text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can transform your real estate business with custom automation solutions.
          </p>

          <div className="relative group inline-block">
            <button
              className="relative bg-gradient-to-r from-[#111111] via-gray-800 to-[#111111] text-white px-12 py-5 rounded-full text-lg font-light hover:shadow-2xl transform transition-all duration-700 hover:scale-[1.05] inline-flex items-center gap-3 border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 overflow-hidden"
              style={{
                transform: `translateX(${(mousePosition.x - windowDimensions.width / 2) * 0.003}px) translateY(${(mousePosition.y - windowDimensions.height / 2) * 0.003}px)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/10 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="relative z-10">Let's Talk</span>
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
            </button>

            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#F7DC6F]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 scale-150" />
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-t from-gray-50 to-white py-16 px-6 border-t border-gray-100/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-base font-light tracking-wide">
            © 2025 Pillar. Securing your automation future.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mx-auto mt-4" />
        </div>
      </footer>
    </div>
  )
}
