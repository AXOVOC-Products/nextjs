"use client"

import { useEffect, useState } from "react"

const signals = [
  {
    title: "Respiratory Exchange Ratio (RER)",
    description:
      "The balance between oxygen intake and carbon dioxide output — showing if you're burning carbs or fat for energy.",
  },
  {
    title: "Ventilatory Threshold",
    description:
      "The tipping point when breathing becomes harder and performance strain sets in — essential for training zones.",
  },
  {
    title: "Resting Energy Expenditure (REE)",
    description:
      "How many calories your body burns at rest — key for nutrition, recovery, and long-term health management.",
  },
  {
    title: "Tidal Volume",
    description: "The amount of air you move with each breath — a marker of lung efficiency and fatigue.",
  },
  {
    title: "VCO₂ (Carbon Dioxide Uptake)",
    description: "Reveals how much energy you're burning and when your body shifts fuel sources.",
  },
  {
    title: "VO₂ Max",
    description:
      "Your maximum oxygen consumption — the gold standard for cardiovascular fitness and endurance capacity.",
  },
]

export function SignalsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const duplicatedSignals = [...signals, ...signals]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % signals.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and description */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Understanding the Signals Behind Your Breath
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Improving your fitness isn't a guessing game. It takes a deep, personalized understanding of the factors
              that impact your performance. Get data-driven insights to unlock your potential with the portable,
              lightweight Vortex device.
            </p>
          </div>

          {/* Right side - Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg h-80">
              <div
                className="flex animate-scroll-continuous"
                style={{
                  width: `${duplicatedSignals.length * 300}px`,
                  animation: "scroll-continuous 30s linear infinite",
                }}
              >
                {duplicatedSignals.map((signal, index) => (
                  <div key={index} className="w-72 h-80 flex-shrink-0 p-6 border-r border-gray-100 last:border-r-0">
                    <div className="space-y-4 h-full flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">{signal.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{signal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {signals.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-continuous {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${signals.length * 300}px);
          }
        }
      `}</style>
    </section>
  )
}
