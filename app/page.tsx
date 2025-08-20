"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState({ left: false, middle: false, right: false })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animations
            setTimeout(() => setIsVisible((prev) => ({ ...prev, left: true })), 100)
            setTimeout(() => setIsVisible((prev) => ({ ...prev, middle: true })), 300)
            setTimeout(() => setIsVisible((prev) => ({ ...prev, right: true })), 500)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Content - Takes up 2/3 of the space */}
          <div className="lg:col-span-2 text-center lg:text-left space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black leading-tight">
                Lab-Grade{" "}
                <span className="text-blue-500 italic">
                  VO<sub className="text-xl sm:text-2xl lg:text-3xl">2</sub>
                </span>{" "}
                Tracking
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black leading-tight mt-2">
                <span className="italic">Anywhere You Train.</span>
              </h1>
            </div>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              For athletes, longevity and health enthusiasts who know the value of VO<sub>2</sub> Max — Vortex delivers
              real-time, breath-by-breath analysis without the lab.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button
                size="lg"
                className="w-auto max-w-fit px-6 py-2 rounded-full font-bold text-white text-sm transition-all hover:shadow-lg hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #3399ff 0%, #8533ff 50%, #8b5cf6 100%)",
                }}
              >
                Pre-Order Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-auto max-w-fit border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white px-8 py-4 text-lg rounded-full font-medium transition-colors bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Images - Takes up 1/3 of the space, hidden on mobile */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="relative h-full flex justify-end mt-12">
              {/* Decorative squares */}
              <div className="absolute -top-4 right-16 w-8 h-8 bg-blue-200 transform rotate-12"></div>
              <div className="absolute top-12 -right-4 w-6 h-6 bg-blue-300 transform -rotate-12"></div>
              <div className="absolute bottom-32 -left-8 w-10 h-10 bg-orange-200 transform rotate-45"></div>

              {/* Increased gap from gap-6 to gap-8 and enhanced shadows */}
              <div className="grid grid-cols-2 gap-8 w-full max-w-sm">
                {/* Left Column */}
                <div className="space-y-6 flex flex-col items-end">
                  {/* Space on top */}
                  <div className="h-20"></div>
                  {/* Square image */}
                  <div className="relative h-40 w-40 overflow-hidden shadow-xl shadow-gray-500/60">
                    <Image
                      src="/nextjs/exercise-outdoors.jpg"
                      alt="Woman sitting outdoors"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Landscape image */}
                  <div className="relative h-32 w-48 overflow-hidden shadow-xl shadow-gray-500/60">
                    <Image src="/nextjs/gym.jpg" alt="Person planking in gym" fill className="object-cover" />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Square image on top */}
                  <div className="relative h-40 w-40 overflow-hidden shadow-xl shadow-gray-500/60">
                    <Image
                      src="/nextjs/biking.jpg"
                      alt="Cyclist training outdoors"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Portrait rectangular image */}
                  <div className="relative h-60 w-40 overflow-hidden shadow-xl shadow-gray-500/60">
                    <Image src="/nextjs/woman-running.jpg" alt="Woman running" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center pb-8">
        <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
      </div>

      {/* Animated feature cards section */}
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Card - Performance Ready - Now spans 2 columns */}
          <div
            className={`lg:col-span-2 rounded-2xl p-8 text-white shadow-xl transition-all duration-700 relative overflow-hidden ${
              isVisible.left ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
            style={{ backgroundColor: "#2d89cd" }}
          >
            <div className="flex flex-col lg:block">
              <div className="flex flex-row lg:block">
                {/* Text content */}
                <div className="flex-1 lg:relative lg:z-10 space-y-4 lg:space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-4xl font-extrabold mb-2">Performance-Ready</h3>
                    <h3 className="text-2xl lg:text-4xl font-extrabold mb-2 lg:mb-4">
                      VO<sub className="text-lg lg:text-2xl">2</sub> Max with
                    </h3>
                    <h3 className="text-2xl lg:text-4xl font-extrabold italic mb-4 lg:mb-6">Lab-Standard Accuracy</h3>
                  </div>

                  <p className="text-blue-100 leading-relaxed text-sm lg:text-base max-w-md">
                    Vortex packs clinical-grade airflow, O<sub>2</sub>, and CO<sub>2</sub> gas sensors into a portable
                    device, giving you real-time, research-level breath analysis wherever you are.
                  </p>
                </div>

                {/* Mobile images on right side */}
                <div className="flex-shrink-0 ml-4 lg:hidden">
                  <div className="relative h-52 w-52">
                    <Image src="/nextjs/pcb-board.png" alt="Technical device components" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop positioned images */}
            <div className="hidden lg:block">
              <div className="absolute top-4 right-4 h-20 w-28">
                <Image src="/nextjs/co2-sensor.png" alt="Technical device component" fill className="object-contain" />
              </div>
              <div className="absolute -bottom-30 -right-16 h-44 w-52 overflow-hidden">
                <Image src="/nextjs/flow-sensor.png" alt="Technical device component" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-16 h-52 w-80 overflow-hidden">
                <Image src="/nextjs/pcb-board.png" alt="Technical device components" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Middle Card - Much More Than VO2 */}
          <div
            className={`bg-gray-100 rounded-2xl overflow-hidden shadow-xl transition-all duration-700  ${
              isVisible.middle ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            <div className="flex flex-col lg:block lg:relative lg:h-full">
              <div className="flex flex-row lg:block">
                {/* Text content */}
                <div className="flex-1 p-6 lg:relative lg:z-10 lg:p-8 lg:pt-52">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">Much More</h3>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6">
                      Than Just VO<sub className="text-sm lg:text-lg">2</sub>
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    Track metabolic efficiency, trends, and performance thresholds directly on your phone with training
                    guidance.
                  </p>
                </div>

                {/* Mobile image on right side */}
                <div className="flex-shrink-0 ml-4 lg:hidden">
                  <div className="relative h-24 w-20 mb-2">
                    <Image src="/nextjs/app-showcase.png" alt="App Showcase" fill className="object-contain" />
                  </div>
                </div>
              </div>

              <div className="hidden lg:block lg:absolute lg:top-0 lg:right-0 lg:h-52 lg:w-48">
              <Image
                src="/nextjs/app-showcase-trim.png"
                alt="App interface with data visualization"
                fill
                className="object-cover"
              />
            </div>
            </div>
          </div>

          {/* Right Card - Ultra Portable */}
          <div
            className={`bg-gray-100 rounded-2xl p-6 lg:p-8 shadow-xl transition-all duration-700 relative ${
              isVisible.right ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <div className="flex flex-col lg:block">
              <div className="flex flex-row lg:block">
                {/* Text content */}
                <div className="flex-1 space-y-4 lg:space-y-6">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                      Ultra <span className="italic">Portable</span>
                    </h3>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6">and Lightweight</h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base mb-4 lg:mb-6">
                    Start your assessment anywhere, any time—no appointments, no bulky gear.
                  </p>
                </div>

                {/* Mobile image on right side */}
                <div className="flex-shrink-0 ml-4 lg:hidden">
                  <div className="relative h-32 w-24">
                    <Image src="/nextjs/flying-man.png" alt="Athlete in motion" fill className="object-contain" />
                  </div>
                </div>
              </div>

              <div className="hidden lg:block lg:absolute lg:bottom-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:h-80 lg:w-60 lg:-mb-20">
                <Image src="/nextjs/flying-man.png" alt="Athlete in motion" fill className="object-contain" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-20 relative overflow-hidden">
        {/* Background watermark circle */}
        <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none select-none z-0">
          <Image
            src="/nextjs/vortex-bg-1.png"
            alt="Background"
            fill
            className="object-cover"
            priority
            draggable={false}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">Now, Let's Show You</h2>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12">
            What <span className="text-blue-500 italic">Vortex</span> Can Do.
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            From your first breath to your next personal best — see how Vortex changes the way you train, recover, and
            live.
          </p>
        </div>
      </div>
      <div className="bg-gray-900 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Meet <span className="text-white italic bg-blue-500 text-white px-4 py-2 rounded">Vortex</span>
                </h2>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
                  —Your New Guide
                </h2>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-2">
                  to Smarter Training
                </h2>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-2">and Health</h2>
              </div>
            </div>
            {/* Right Content - Device Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <Image
                  src="/nextjs/Mask_1.png"
                  alt="Vortex Device"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
