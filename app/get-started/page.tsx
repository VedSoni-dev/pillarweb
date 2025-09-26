"use client"

import { useState } from "react"
import { createBrowserClient } from "@supabase/ssr"
import { ArrowLeft, Check, Mail, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function GetStartedPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    website: "",
  })

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email.trim()) return

    setIsSubmitting(true)
    try {
      const { error } = await supabase.from("leads").insert([
        {
          email: formData.email,
          website: formData.website,
        },
      ])

      if (error) throw error

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your information. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setFormData({ email: "", website: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-white text-gray-900">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-[#D4AF37]/5 to-[#F7DC6F]/5 rounded-full blur-3xl animate-pulse top-20 left-20" />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-[#F7DC6F]/3 to-[#D4AF37]/3 rounded-full blur-2xl animate-pulse delay-1000 bottom-20 right-20" />
      </div>

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

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6">
        <div className="w-full max-w-lg">
          {!isSubmitted ? (
            <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-thin mb-4 bg-gradient-to-r from-[#111111] to-[#D4AF37] bg-clip-text text-transparent">
                  Get Started
                </h1>
                <p className="text-gray-600 text-lg">Share your details and we'll reach out to you!</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 bg-white/60 border border-gray-200/50 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37]/50 transition-all duration-200 backdrop-blur-sm"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Website or LinkedIn</label>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    className="w-full px-4 py-3 bg-white/60 border border-gray-200/50 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37]/50 transition-all duration-200 backdrop-blur-sm"
                    placeholder="https://yourcompany.com or https://linkedin.com/in/yourname"
                  />
                </div>

                <div className="bg-white/40 border border-gray-200/50 rounded-xl p-6 mt-8 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-[#D4AF37] mb-3">Our Contact Information</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#D4AF37]" />
                      <span>pillaraitech@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#D4AF37]" />
                      <span>(555) 987-6543</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                      <span>We typically respond within 24 hours</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!formData.email.trim() || isSubmitting}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] text-white px-6 py-3 rounded-full font-semibold hover:from-[#C19B2A] hover:to-[#E6C85A] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Thank you!</h2>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto mb-8">
                We've received your information and will reach out to you within 24 hours to discuss your automation needs.
              </p>
              <div className="bg-white/40 border border-gray-200/50 rounded-xl p-6 mb-8 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-[#D4AF37] mb-3">What's Next?</h3>
                <div className="space-y-2 text-gray-700 text-left">
                  <p>✓ We'll review your information</p>
                  <p>✓ Schedule a discovery call</p>
                  <p>✓ Plan your on-site visit</p>
                  <p>✓ Create your custom automation roadmap</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={resetForm}
                  className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-200"
                >
                  Submit Another
                </button>
                <Link
                  href="/"
                  className="flex-1 bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] text-white px-6 py-3 rounded-full font-semibold hover:from-[#C19B2A] hover:to-[#E6C85A] transition-all duration-200 shadow-lg text-center"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
