"use client"

import { useRouter } from "next/navigation"
import { X } from "lucide-react"

interface GetStartedModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const router = useRouter()

  const handleGetStarted = () => {
    onClose()
    router.push('/get-started')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-gray-100/80 hover:bg-gray-200/80 transition-colors duration-200 backdrop-blur-sm"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Content */}
        <div className="p-8 pt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-thin mb-4 bg-gradient-to-r from-[#111111] to-[#D4AF37] bg-clip-text text-transparent">
            Get Started
          </h2>
          <p className="text-gray-600 mb-8">Ready to transform your real estate operations?</p>
          
          <div className="space-y-4">
            <button
              onClick={handleGetStarted}
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F7DC6F] text-white px-6 py-3 rounded-full font-semibold hover:from-[#C19B2A] hover:to-[#E6C85A] transition-all duration-200 shadow-lg"
            >
              Start Your Journey
            </button>
            
            <p className="text-sm text-gray-500">
              We'll guide you through our comprehensive automation process
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
