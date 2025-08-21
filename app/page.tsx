"use client"

import Image from "next/image"
import { FaBluetooth, FaFeather, FaMobileAlt, FaChartBar, FaBullseye, FaClock } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState({ left: false, middle: false, right: false })
  const [scrollTextIndex, setScrollTextIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollSectionRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollSectionRef.current) return

      const rect = scrollSectionRef.current.getBoundingClientRect()
      const sectionHeight = scrollSectionRef.current.offsetHeight
      const viewportHeight = window.innerHeight

      // Calculate scroll progress through the section
      const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (sectionHeight + viewportHeight)))

      // Change text when scrolled 40% through the section
      if (scrollProgress < 0.4) {
        setScrollTextIndex(0)
      } else {
        setScrollTextIndex(1)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTexts = [
    {
      content: (
        <>
          A <span className="bg-blue-500 text-white px-2 py-1 rounded italic">portable</span> breath
          <br />
          analyzer that
          <br />
          measures what truly
          <br />
          matters —
        </>
      ),
    },
    {
      content: (
        <>
          <span className="bg-blue-500 text-white px-2 py-1 rounded italic">
            VO<sub className="text-xl sm:text-2xl lg:text-3xl">2</sub> max
          </span>
          ,
          <br />
          metabolic efficiency,
          <br />
          and recovery trends —
          <br />
          with <em>lab-grade precision</em>
        </>
      ),
    },
  ]

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
                    <Image src="/nextjs/exercise-outdoors.jpg" alt="Woman sitting outdoors" fill className="object-cover" />
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
                    <Image src="/nextjs/biking.jpg" alt="Cyclist training outdoors" fill className="object-cover" />
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
                <div className="flex-shrink-0 w-half flex items-center justify-center lg:hidden">
                  <div className="relative h-32 w-24 mb-2 flex items-center justify-center">
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
        {/* Background */}
        <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none select-none z-0">
          <Image src="/nextjs/vortex-bg-1.png" alt="Background" fill className="object-cover" priority draggable={false} />
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
      <div className="bg-[#181818] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Meet <span className="text-blue-500 italic bg-blue-500 text-white px-4 py-2 rounded">Vortex</span>
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
                <Image src="/nextjs/Mask_1.png" alt="Vortex Device" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={scrollSectionRef} className="bg-[#181818] min-h-[100vh] relative overflow-hidden">
        <div className="sticky top-0 h-screen flex flex-col lg:flex-row">
          {/* Left Side - Person wearing mask (fixed) */}
          <div className="w-full lg:w-1/2 bg-[#181818] flex items-center justify-center relative h-1/2 lg:h-full">
            <div className="relative w-3/4 h-3/4 max-w-md max-h-[70vh] lg:max-h-[70vh]">
              <Image
                src="/nextjs/wearing-mask.jpg"
                alt="Person wearing Vortex device"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Horizontal line at the top */}
          <div className="absolute top-0 left-0 w-full h-px bg-white z-10"></div>
          {/* Vertical divider line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 w-px h-full bg-white transform -translate-x-1/2 z-10"></div>

          {/* Right Side - Scrollable text */}
          <div className="w-full lg:w-1/2 bg-[#181818] flex items-center justify-center relative h-1/2 lg:h-full">
            <div className="text-center px-4 lg:px-16">
              <div className="text-2xl sm:text-3xl lg:text-6xl font-medium text-white leading-relaxed transition-all duration-1000 ease-out transform">
                {scrollTexts[scrollTextIndex].content}
              </div>

              {/* Scroll indicator */}
              <div className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8">
                <ChevronDown className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400 animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 w-px h-16 bg-white transform -translate-x-1/2"></div>
      </div>

      {/* Horizontal connecting line */}
      <div className="bg-[#181818] relative">
        <div className="h-px bg-white w-full"></div>
        <div className="absolute left-1/2 top-0 w-px h-px bg-white transform -translate-x-1/2"></div>
      </div>

      {/* Horizontal image section */}
      <div className="relative h-[60vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src="/nextjs/pushup-track.jpg" alt="Runner on track" fill className="object-cover object-bottom" />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white px-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">From Track to Office</h2>
            <p className="text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto">
              <span className="border-2 border-white px-3 py-1 mr-2">Compact,</span>
              lightweight, and designed to fit anywhere your day takes you—indoors, outdoors, on track, treadmill, or
              bike.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom horizontal connecting line */}
      <div className="bg-[#181818] relative">
        <div className="h-px bg-white w-full"></div>
      </div>

      {/* Continuing vertical line section */}
      <div className="bg-[#181818] h-32 relative">
        <div className="absolute left-1/2 top-0 w-px h-full bg-white transform -translate-x-1/2"></div>
      </div>

      <div className="bg-[#181818] min-h-screen relative overflow-hidden">
        <div className="h-screen flex flex-col lg:flex-row">
          {/* Left Side - Text content */}
          <div className="w-full lg:w-1/2 bg-[#181818] flex items-center justify-center relative h-1/2 lg:h-full">
            <div className="text-center lg:text-center px-8 lg:px-16">
              <div className="text-2xl sm:text-3xl lg:text-6xl font-medium text-white leading-relaxed space-y-2 lg:space-y-4">
                <div>
                  The{" "}
                  <span className="bg-blue-500 text-white px-2 py-1 lg:px-3 lg:py-2 rounded italic">Vortex App</span>
                </div>
                <div>transforms each breath</div>
                <div>into clear metrics,</div>
                <div>training zones, and</div>
                <div>trends you can act on</div>
                <div>immediately.</div>
              </div>

              {/* Scroll indicator */}
              <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8">
                <ChevronDown className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Vertical divider line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 w-px h-full bg-white transform -translate-x-1/2 z-10"></div>

          {/* Right Side - Mobile app mockups */}
          <div className="w-full lg:w-1/2 bg-[#181818] flex items-center justify-center relative h-1/2 lg:h-full">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Main dashboard phone */}
              <div className="relative w-48 h-96 lg:w-72 lg:h-[600px] z-20">
                <Image src="/nextjs/app-showcase.png" alt="Vortex Metrics Dashboard" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom horizontal line */}
      <div className="bg-[#181818] relative">
        <div className="h-px bg-white w-full"></div>
      </div>

      {/* Vortex Performance Section */}
      <div className="bg-[#181818] min-h-screen relative overflow-hidden">
        <div className="h-screen flex flex-col lg:flex-row items-center">
          {/* Left Side - Vortex Device Image */}
          <div className="w-full lg:w-1/2 bg-[#181818] flex items-center justify-center relative h-1/2 lg:h-full">
            <div className="relative w-[28rem] h-[28rem] lg:w-[38rem] lg:h-[38rem] flex flex-col items-center">
              {/* Main image */}
              <Image
                src="/nextjs/Mask_2.png"
                alt="Vortex Device"
                fill
                className="object-contain object-center"
                style={{ transform: "translateY(-5%)" }} // Move up a bit if needed
              />
              {/* Reflection */}
              <div className="absolute left-0 right-0 top-[95%] w-full h-1/2 pointer-events-none">
                <Image
                  src="/nextjs/Mask_2.png"
                  alt="Vortex Device Reflection"
                  fill
                  className="object-contain scale-y-[-1]"
                  style={{
                    maskImage: "linear-gradient(to top, rgba(0,0,0,0.7) 70%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.7) 70%, transparent 100%)",
                    opacity: 0.5,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Side - Text and CTA */}
          <div className="w-full lg:w-1/2 bg-[#181818] flex items-center justify-center relative h-1/2 lg:h-full">
            <div className="text-center px-8 lg:px-16 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-white leading-tight">
                  <span className="bg-blue-500 text-white px-3 py-2 rounded italic">Vortex</span>
                </h2>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-white leading-tight">
                  Reach your performance
                </h2>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-white leading-tight">
                  and fitness goals faster
                </h2>
              </div>

              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto">
                Every inhale and exhale analyzed, every data point translated into guidance to help you train smarter
                and live healthier.
              </p>

              <Button
                size="lg"
                className="w-auto max-w-fit px-8 py-4 rounded-full font-bold text-white text-lg transition-all hover:shadow-lg hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #3399ff 0%, #8533ff 50%, #8b5cf6 100%)",
                }}
              >
                Pre-Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Features Section */}
      <div className="bg-gray-50 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get the Most Out of Every Breath
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Vortex combines lab-grade accuracy with everyday usability.
              <br />
              Here's everything packed inside this compact device.
            </p>
          </div>

          {/* Desktop Layout - Features around device */}
          <div className="hidden lg:grid grid-cols-3 gap-8 items-center relative">
            {/* Left Features */}
            <div className="flex flex-col justify-between h-full space-y-12">
              {/* 100% Wireless */}
              <div className="max-w-xs flex flex-col items-center text-center">
                <FaBluetooth className="w-8 h-8 text-gray-800 mb-2" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">100% Wireless</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  No bulky lab masks or cables. Just clip on and start testing anywhere.
                </p>
              </div>
              {/* Portable & Lightweight */}
              <div className="max-w-xs flex flex-col items-center text-center">
                <FaFeather className="w-8 h-8 text-gray-800 mb-2" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Portable & Lightweight</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  At under 100g, Vortex fits in your gym bag, backpack, or even your pocket.
                </p>
              </div>
              {/* App-Connected Insights */}
              <div className="max-w-xs flex flex-col items-center text-center">
                <FaMobileAlt className="w-8 h-8 text-gray-800 mb-2" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">App-Connected Insights</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Seamlessly sync with the Vortex app via bluetooth to see VO₂, recovery trends, and personalized
                  training plans. Works with iOS and Android, phones and tablets.
                </p>
              </div>
            </div>
            {/* Center Device Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-96 h-96">
                <Image src="/nextjs/Mask_1.png" alt="Vortex Device" fill className="object-contain" />
              </div>
            </div>
            {/* Right Features */}
            <div className="flex flex-col justify-between h-full space-y-12">
              {/* Multi-Metric Tracking */}
              <div className="max-w-xs flex flex-col items-center text-center ml-auto">
                <FaChartBar className="w-8 h-8 text-gray-800 mb-2" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Metric Tracking</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  VO₂ Max, VCO₂, Respiratory Exchange Ratio, Metabolic Rate, Ventilatory Threshold and much more.
                </p>
              </div>
              {/* Pinpoint Accuracy */}
              <div className="max-w-xs flex flex-col items-center text-center ml-auto">
                <FaBullseye className="w-8 h-8 text-gray-800 mb-2" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pinpoint Accuracy</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Direct gas analysis based on clinical principles — no estimation algorithms.
                </p>
              </div>
              {/* Real-Time Feedback */}
              <div className="max-w-xs flex flex-col items-center text-center ml-auto">
                <FaClock className="w-8 h-8 text-gray-800 mb-2" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Feedback</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Know exactly when to push harder, hold steady, or recover. Vortex delivers instant VO₂ data so your
                  training adapts with every breath.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Stacked features */}
          <div className="lg:hidden">
            {/* Device image */}
            <div className="flex justify-center mb-12">
              <div className="relative w-80 h-80">
                <Image src="/nextjs/Mask_1.png" alt="Vortex Device" fill className="object-contain" />
              </div>
            </div>

            {/* Features list */}
            <div className="space-y-8">
              {/* 100% Wireless */}
              <div className="flex items-start space-x-4">
                <FaBluetooth className="w-8 h-8 text-gray-800 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">100% Wireless</h3>
                  <p className="text-gray-600 leading-relaxed">
                    No bulky lab masks or cables. Just clip on and start testing anywhere.
                  </p>
                </div>
              </div>

              {/* Multi-Metric Tracking */}
              <div className="flex items-start space-x-4">
                <FaChartBar className="w-8 h-8 text-gray-800 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Metric Tracking</h3>
                  <p className="text-gray-600 leading-relaxed">
                    VO₂ Max, VCO₂, Respiratory Exchange Ratio, Metabolic Rate, Ventilatory Threshold and much more.
                  </p>
                </div>
              </div>

              {/* Portable & Lightweight */}
              <div className="flex items-start space-x-4">
                <FaFeather className="w-8 h-8 text-gray-800 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Portable & Lightweight</h3>
                  <p className="text-gray-600 leading-relaxed">
                    At under 100g, Vortex fits in your gym bag, backpack, or even your pocket.
                  </p>
                </div>
              </div>

              {/* Pinpoint Accuracy */}
              <div className="flex items-start space-x-4">
                <FaBullseye className="w-8 h-8 text-gray-800 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pinpoint Accuracy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Direct gas analysis based on clinical principles — no estimation algorithms.
                  </p>
                </div>
              </div>

              {/* App-Connected Insights */}
              <div className="flex items-start space-x-4">
                <FaMobileAlt className="w-8 h-8 text-gray-800 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">App-Connected Insights</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Seamlessly sync with the Vortex app via bluetooth to see VO₂, recovery trends, and personalized
                    training plans. Works with iOS and Android, phones and tablets.
                  </p>
                </div>
              </div>

              {/* Real-Time Feedback */}
              <div className="flex items-start space-x-4">
                <FaClock className="w-8 h-8 text-gray-800 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Feedback</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Know exactly when to push harder, hold steady, or recover. Vortex delivers instant VO₂ data so your
                    training adapts with every breath.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table Section */}
      <div className="bg-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Vortex: Smarter Than a Watch. Simpler Than a Lab
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Find out why you should choose Vortex instead of other fitness tools.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-6xl mx-auto">
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-hidden rounded-2xl shadow-2xl">
              <table className="w-full">
                {/* Header Row */}
                <thead>
                  <tr>
                    <th className="bg-gray-100 p-6 text-left"></th>
                    <th className="bg-blue-100 p-6 text-center text-2xl font-bold text-gray-900 italic">Vortex</th>
                    <th className="bg-gray-100 p-6 text-center text-2xl font-bold text-gray-900">Smartwatches</th>
                    <th className="bg-gray-100 p-6 text-center text-2xl font-bold text-gray-900">Lab Testing</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Accuracy Row */}
                  <tr className="border-t border-gray-200">
                    <td className="bg-gray-50 p-6 font-bold text-xl text-gray-900">Accuracy</td>
                    <td className="bg-blue-50 p-6 text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">Lab-grade</div>
                          <div className="text-sm text-gray-600">real time data</div>
                        </div>
                      </div>
                    </td>
                    <td className="bg-white p-6 text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">Low</div>
                          <div className="text-sm text-gray-600">(estimates only)</div>
                        </div>
                      </div>
                    </td>
                    <td className="bg-white p-6 text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">Gold-standard</div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* VO2 Max Measurement Row */}
                  <tr className="border-t border-gray-200">
                    <td className="bg-gray-50 p-6 font-bold text-xl text-gray-900">
                      VO<sub>2</sub> Max
                      <br />
                      Measurement
                    </td>
                    <td className="bg-blue-50 p-6 text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">Direct real</div>
                          <div className="text-sm text-gray-600">time tracking</div>
                        </div>
                      </div>
                    </td>
                    <td className="bg-white p-6 text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">Predicts and</div>
                          <div className="text-sm text-gray-600">indirect</div>
                        </div>
                      </div>
                    </td>
                    <td className="bg-white p-6 text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">Direct and</div>
                          <div className="text-sm text-gray-600">clinical</div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Portability Row */}
                  <tr className="border-t border-gray-200">
                    <td className="bg-gray-50 p-6 font-bold text-xl text-gray-900">Portability</td>
                    <td className="bg-blue-50 p-6 text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">Compact,</div>
                          <div className="text-sm text-gray-600">wireless, train</div>
                          <div className="text-sm text-gray-600">anywhere</div>
                        </div>
                      </div>
                    </td>
                    <td className="bg-white p-6 text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">Very</div>
                          <div className="text-sm text-gray-600">convenient</div>
                        </div>
                      </div>
                    </td>
                    <td className="bg-white p-6 text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">Requires</div>
                          <div className="text-sm text-gray-600">appointment</div>
                          <div className="text-sm text-gray-600">and setup</div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Personalized Training Guides Row */}
                  <tr className="border-t border-gray-200">
                    <td className="bg-gray-50 p-6 font-bold text-xl text-gray-900">
                      Personalized
                      <br />
                      Training Guides
                    </td>
                    <td className="bg-blue-50 p-6 text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">Dynamic,</div>
                          <div className="text-sm text-gray-600">auto-calibrated</div>
                        </div>
                      </div>
                    </td>
                    <td className="bg-white p-6 text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">Often</div>
                          <div className="text-sm text-gray-600">generalized</div>
                        </div>
                      </div>
                    </td>
                    <td className="bg-white p-6 text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">Only after</div>
                          <div className="text-sm text-gray-600">testing</div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Cost Over Time Row */}
                  <tr className="border-t border-gray-200">
                    <td className="bg-gray-50 p-6 font-bold text-xl text-gray-900">Cost Over Time</td>
                    <td className="bg-blue-50 p-6 text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">Affordable,</div>
                          <div className="text-sm text-gray-600">one-time device</div>
                        </div>
                      </div>
                    </td>
                    <td className="bg-white p-6 text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">Low upfront</div>
                        </div>
                      </div>
                    </td>
                    <td className="bg-white p-6 text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">High</div>
                          <div className="text-sm text-gray-600">($200-500/test)</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-8">
              {/* Vortex Card */}
              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-6 italic">Vortex</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Lab-grade real time data</div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Direct real time tracking</div>
                      <div className="text-sm text-gray-600">VO₂ Max Measurement</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Compact, wireless, train anywhere</div>
                      <div className="text-sm text-gray-600">Portability</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Dynamic, auto-calibrated</div>
                      <div className="text-sm text-gray-600">Personalized Training Guides</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Affordable, one-time device</div>
                      <div className="text-sm text-gray-600">Cost Over Time</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smartwatches Card */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Smartwatches</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Low (estimates only)</div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Predicts and indirect</div>
                      <div className="text-sm text-gray-600">VO₂ Max Measurement</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Very convenient</div>
                      <div className="text-sm text-gray-600">Portability</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Often generalized</div>
                      <div className="text-sm text-gray-600">Personalized Training Guides</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Low upfront</div>
                      <div className="text-sm text-gray-600">Cost Over Time</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lab Testing Card */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Lab Testing</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Gold-standard</div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Direct and clinical</div>
                      <div className="text-sm text-gray-600">VO₂ Max Measurement</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Requires appointment and setup</div>
                      <div className="text-sm text-gray-600">Portability</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Only after testing</div>
                      <div className="text-sm text-gray-600">Personalized Training Guides</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">High ($200-500/test)</div>
                      <div className="text-sm text-gray-600">Cost Over Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
