"use client"

import { useState, useEffect } from "react"
import { Shield, Zap, Smartphone, Code, Users, Clock, CheckCircle, Star, Building } from "lucide-react"
import Navbar from "../components/navbar"

export default function FeaturesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Navbar />

      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-96 h-96 bg-gradient-to-br from-[#D4AF37]/5 to-[#F7DC6F]/5 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-br from-gray-200/10 to-gray-300/10 rounded-full blur-2xl transition-all duration-1500 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37]/10 to-[#F7DC6F]/10 backdrop-blur-sm border border-[#D4AF37]/20 rounded-full px-6 py-3 mb-8">
            <Star className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm font-light text-gray-600">Complete Business Automation</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-thin text-[#111111] mb-8 tracking-[-0.02em] leading-[0.9]">
            Total Process
            <span className="block bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] bg-clip-text text-transparent">
              Automation
            </span>
          </h1>

          <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            From email drafting to data pipelines, financial quotas to physical connections — we automate literally
            every aspect of your business process with complete security.
          </p>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "100% Local Security",
                description:
                  "Your data never leaves your premises. All AI models and automations run on your dedicated hardware with zero external access.",
                highlight: "0% Data Leak Risk",
              },
              {
                icon: Code,
                title: "Hand-Coded Solutions",
                description:
                  "Every automation is custom-built from scratch to match your exact processes. No templates, no limitations.",
                highlight: "Unlimited Customization",
              },
              {
                icon: Smartphone,
                title: "Jarvis-Like Mobile Control",
                description:
                  "Monitor and control all automations from your phone. Talk to your AI assistant anywhere, anytime.",
                highlight: "Voice Commands",
              },
              {
                icon: Users,
                title: "Complete Process Analysis",
                description:
                  "We spend a full day learning your business operations to identify every automation opportunity.",
                highlight: "Personalized Approach",
              },
              {
                icon: Building,
                title: "Any Industry Connection",
                description:
                  "Connect to any device, software, or physical system. From CRMs to manufacturing equipment.",
                highlight: "Universal Integration",
              },
              {
                icon: Clock,
                title: "24/7 Autonomous Operation",
                description: "Your automations work around the clock, handling tasks while you focus on growth.",
                highlight: "Always Active",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#F7DC6F]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#F7DC6F]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>

                  <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 rounded-full px-3 py-1 mb-4">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-[#D4AF37]">{feature.highlight}</span>
                  </div>

                  <h3 className="text-2xl font-light text-[#111111] mb-4 tracking-tight">{feature.title}</h3>

                  <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50/50 to-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-thin text-[#111111] mb-8 tracking-[-0.01em]">Our Process</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F7DC6F] to-[#D4AF37] rounded-full mx-auto mb-8" />
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive approach to understanding and automating your unique business processes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Deep Dive Analysis",
                description:
                  "I spend a full day at your location, observing and documenting every process, pain point, and automation opportunity in your daily operations.",
              },
              {
                step: "02",
                title: "Custom Development",
                description:
                  "Hand-code every automation from scratch, tailored specifically to your workflows. No generic solutions — everything built for your exact needs.",
              },
              {
                step: "03",
                title: "Local Deployment",
                description:
                  "Install everything on your dedicated hardware. You maintain complete control and ownership of all data, AI models, and automations.",
              },
            ].map((process, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                  <div className="text-6xl font-thin text-[#D4AF37]/20 mb-4 group-hover:text-[#D4AF37]/40 transition-colors duration-500">
                    {process.step}
                  </div>
                  <h3 className="text-2xl font-light text-[#111111] mb-4 tracking-tight">{process.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-thin text-[#111111] mb-8 tracking-[-0.01em]">Custom Pricing</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F7DC6F] to-[#D4AF37] rounded-full mx-auto mb-12" />

          <div className="bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-12 hover:shadow-xl transition-all duration-500">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 rounded-full px-4 py-2 mb-6">
                <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm font-medium text-[#D4AF37]">Honest Pricing</span>
              </div>

              <h3 className="text-3xl font-light text-[#111111] mb-6 tracking-tight">
                No Fixed Packages — Just Fair Quotes
              </h3>

              <p className="text-lg font-light text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                After our comprehensive analysis, we'll provide a custom quote based on your specific needs. Don't worry
                — we won't break your bank. We're both college students trying to make some money for other ventures, so
                we understand budgets! 😄
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-600 font-light">Free initial consultation and analysis</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-600 font-light">Transparent, itemized quotes</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-600 font-light">Flexible payment plans available</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-600 font-light">Student-friendly pricing</span>
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
            Ready for Total Automation?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F7DC6F] to-[#D4AF37] rounded-full mx-auto mb-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
          </div>
          <p className="text-xl font-light text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with secure, local automations that give you complete control and peace of mind.
          </p>
          <p className="text-lg font-light text-gray-500 mb-16 max-w-2xl mx-auto leading-relaxed">
            Get a custom quote after our comprehensive analysis — affordable solutions from college entrepreneurs who
            understand your budget.
          </p>

          <div className="relative group inline-block">
            <button className="relative bg-gradient-to-r from-[#111111] via-gray-800 to-[#111111] text-white px-12 py-5 rounded-full text-lg font-light hover:shadow-2xl transform transition-all duration-700 hover:scale-[1.05] inline-flex items-center gap-3 border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/10 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="relative z-10">Start Your Automation Journey</span>
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
            </button>

            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#F7DC6F]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 scale-150" />
          </div>
        </div>
      </section>

      {/* Footer */}
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
