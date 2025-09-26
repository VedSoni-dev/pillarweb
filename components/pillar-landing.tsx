import { ArrowRight, Clock, TrendingUp, BarChart3 } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Pillar Graphic - Large cream pillar in background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-96 bg-gradient-to-b from-yellow-100 to-amber-100 rounded-t-full shadow-2xl opacity-20 transform -rotate-3"></div>
          <div className="w-40 h-[500px] bg-gradient-to-b from-yellow-50 to-amber-50 rounded-t-lg shadow-xl opacity-30 transform rotate-2 -ml-20"></div>
          <div className="w-36 h-[450px] bg-[#F5E1C8] rounded-t-lg shadow-2xl opacity-40 transform -rotate-1 -ml-24"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-[#111111] mb-6">Pillar AI</h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-12 tracking-wide">
            Automations for Real Estate
          </p>
          <button className="bg-[#F5E1C8] text-[#111111] px-12 py-5 rounded-2xl text-xl font-bold hover:scale-105 transform transition-all duration-300 hover:shadow-2xl inline-flex items-center gap-3 group">
            Build Smarter with Pillar
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-gray-400 to-transparent rounded-full"></div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-[#111111] mb-6">Why Choose Pillar?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your real estate operations with intelligent automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#F5E1C8] rounded-2xl flex items-center justify-center mb-8">
                <Clock className="w-8 h-8 text-[#111111]" />
              </div>
              <h3 className="text-3xl font-black text-[#111111] mb-4">Save Time</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Automate repetitive tasks and focus on closing deals that matter most to your business.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#F5E1C8] rounded-2xl flex items-center justify-center mb-8">
                <TrendingUp className="w-8 h-8 text-[#111111]" />
              </div>
              <h3 className="text-3xl font-black text-[#111111] mb-4">Boost Revenue</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Streamline workflows to unlock more opportunities and maximize your earning potential.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#F5E1C8] rounded-2xl flex items-center justify-center mb-8">
                <BarChart3 className="w-8 h-8 text-[#111111]" />
              </div>
              <h3 className="text-3xl font-black text-[#111111] mb-4">Smarter Decisions</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Data-driven insights for real estate operations that give you the competitive edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Call-to-Action */}
      <section className="bg-[#F5E1C8] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-[#111111] mb-8">Ready to Build with Pillar?</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Join thousands of real estate professionals who trust Pillar AI to automate their success.
          </p>
          <button className="bg-[#111111] text-white px-12 py-6 rounded-2xl text-xl font-bold hover:scale-105 transform transition-all duration-300 hover:shadow-2xl inline-flex items-center gap-3 group">
            Get Started
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-lg">© 2025 Pillar AI. Building the future of real estate automation.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
