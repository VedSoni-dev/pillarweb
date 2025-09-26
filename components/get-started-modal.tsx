"use client"

import type React from "react"

import { useState } from "react"
import { createBrowserClient } from "@supabase/ssr"
import { X, Check } from "lucide-react"

interface GetStartedModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
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

  const resetModal = () => {
    setIsSubmitted(false)
    setFormData({ email: "", website: "" })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={resetModal} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-black/95 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={resetModal}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Content */}
        <div className="p-8 pt-16">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-thin mb-2 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                  Get Started
                </h2>
                <p className="text-gray-400">Share your details and we'll reach out to you!</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all duration-200"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Website or LinkedIn</label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all duration-200"
                    placeholder="https://yourcompany.com or https://linkedin.com/in/yourname"
                  />
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-8">
                  <h3 className="text-lg font-semibold text-amber-400 mb-3">Our Contact Information</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>📧 Email: hello@pillar-ai.com</p>
                    <p>📱 Phone: (555) 987-6543</p>
                    <p>💬 We typically respond within 24 hours</p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!formData.email.trim() || isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:from-amber-400 hover:to-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Thank you!</h3>
              <p className="text-gray-300 leading-relaxed max-w-md mx-auto">
                We've received your information and will reach out to you within 24 hours to discuss your automation
                needs.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-8">
                <h4 className="text-lg font-semibold text-amber-400 mb-3">What's Next?</h4>
                <div className="space-y-2 text-gray-300 text-left">
                  <p>✓ We'll review your information</p>
                  <p>✓ Schedule a discovery call</p>
                  <p>✓ Plan your on-site visit</p>
                  <p>✓ Create your custom automation roadmap</p>
                </div>
              </div>
              <button
                onClick={resetModal}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:from-amber-400 hover:to-yellow-400 transition-all duration-200"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
