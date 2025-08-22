"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Target, Zap, Heart, Users, Shield, Leaf, Activity, Smartphone } from "lucide-react"
import { FaLinkedinIn, FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa"
import Link from "next/link"
const StravaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.172" />
  </svg>
)

const values = [
  {
    icon: Users,
    title: "Customer First",
    description: "Your success is our success. Every decision we make starts with your needs."
  },
  {
    icon: Target,
    title: "Accuracy",
    description: "Every measurement you see is grounded in science and precision. No gimmicks, no inflated claims."
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "We're committed to transparency — in our data, in our communication, and in the way we support you."
  },
  {
    icon: Heart,
    title: "Simplicity & Sustainability",
    description: "We believe in building technology that is not only easy to use but also respects the world we live in."
  }
]

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Text content on top */}
        <div className="pt-20 lg:pt-24 pb-8 lg:pb-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left space-y-6 relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Every breath tells a story.
              </h1>
              <p className="text-2xl lg:text-3xl xl:text-4xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                We help you hear it!
              </p>
              
              {/* Scroll Arrow - Positioned in middle of text */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <ChevronDown className="w-8 h-8 lg:w-10 lg:h-10 text-gray-600 animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Image at bottom - aligned with heading */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[50vh] lg:h-[60vh] bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl overflow-hidden">
            <Image
              src="/hear-a-story.jpg"
              alt="Hear a Story"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>

        {/* Extra padding space after image */}
        <div className="pb-20 lg:pb-32"></div>
      </section>

      {/* Challenges Section */}
      <section className="pt-24 lg:pt-32 pb-32 lg:pb-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black tracking-tight">
              The Challenges We All Face
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
              You want to train smarter, live healthier, and make the most of your time. But so often, the path feels unclear.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Challenge 1 */}
            <div className="text-center space-y-6">
              <div className="relative w-full h-48 sm:h-56 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/men-gym-frustrate.jpg"
                  alt="Fitness Tracking Visualization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                You work hard in the gym, but aren't sure if your effort is paying off.
              </p>
            </div>

            {/* Challenge 2 */}
            <div className="text-center space-y-6">
              <div className="relative w-full h-48 sm:h-56 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/smart-watch-estimate.jpg"
                  alt="Smartwatch Estimates"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your smartwatch spits out estimated numbers, but you're left wondering if they are correct or not.
              </p>
            </div>

            {/* Challenge 3 */}
            <div className="text-center space-y-6">
              <div className="relative w-full h-48 sm:h-56 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/lab-test-complicate.webp"
                  alt="Lab Testing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Lab tests promise accuracy, but they're expensive, time-consuming, and built for professionals — not everyday people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Familiar Section */}
      <section className="py-16 lg:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Text Content */}
              <div className="space-y-8">
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Maybe you've tried pushing harder in training, but progress stalls and the result didn't match your effort. 
                  You've tried to eat better, but energy still dips. You want answers, but all you get is frustration, 
                  confusion, and wasted effort.
                </p>
                
                <div className="pt-8">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-black">Sound Familiar?</h3>
                  <p className="text-xl lg:text-2xl text-gray-600">You're not alone.</p>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl overflow-hidden shadow-lg">
                              <Image
                src="/man-depressed.jpg"
                alt="Frustration with Current Technology"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={75}
                loading="lazy"
              />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto relative">
            <h2 className="text-3xl lg:text-4xl font-bold mb-20 text-black text-left">
              A different way forward.<br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">That's where Axovoc comes in.</span>
            </h2>
            
            {/* Large Background Arrow - Positioned slightly higher */}
            <div className="absolute -right-16 top-2/3 transform -translate-y-1/2 hidden lg:flex items-center justify-center w-64">
              <div className="flex flex-col items-center space-y-4">
                <ChevronDown className="w-64 h-64 text-gray-200" />
              </div>
            </div>

            {/* Staggered What If statements */}
            <div className="space-y-20 relative">
              {/* First What If - Slightly right of center */}
              <div className="flex items-start space-x-4 max-w-2xl ml-16 lg:ml-32">
                <div className="flex-shrink-0 mt-2">
                  <Activity className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    <span className="text-2xl lg:text-3xl font-bold text-gray-600">What if </span>
                    you could actually see what your body was doing — right now, in real time?
                  </p>
                </div>
              </div>

              {/* Second What If - Left aligned */}
              <div className="flex items-start space-x-4 max-w-2xl">
                <div className="flex-shrink-0 mt-2">
                  <Target className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    <span className="text-2xl lg:text-3xl font-bold text-gray-600">What if </span>
                    every inhale and exhale gave you answers instead of guesses?
                  </p>
                </div>
              </div>

              {/* Third What If - Aligned with first */}
              <div className="flex items-start space-x-4 max-w-2xl ml-16 lg:ml-32">
                <div className="flex-shrink-0 mt-2">
                  <Smartphone className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    <span className="text-2xl lg:text-3xl font-bold text-gray-600">What if </span>
                    science that used to belong only to labs and elite athletes could finally be in your hands — simple, portable, and always with you?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Why & Approach Section */}
      <section className="w-full">
        {/* Row 1: Our Why - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="relative h-64 sm:h-80 lg:h-full bg-gradient-to-r from-blue-100 to-purple-100 order-2 lg:order-1">
                          <Image
                src="/group-people-exercise.jpg"
                alt="Lab vs Portable Testing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={75}
                loading="lazy"
              />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 sm:p-12 lg:p-20 flex items-center order-1 lg:order-2">
            <div className="max-w-xl w-full">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 lg:mb-12 text-black font-serif">Our Why</h2>
              <div className="space-y-6 lg:space-y-8">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                  For too long, true VO₂ and metabolic testing have been locked away in labs. That means most people never discover their real potential.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                  At Axovoc, we believe clarity should belong to everyone — not just athletes, not just coaches — but anyone who cares about performance, recovery, or simply living well for longer.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Vortex Creation - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 sm:p-12 lg:p-20 flex items-center">
            <div className="max-w-xl w-full">
              <div className="space-y-6 lg:space-y-8">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                  You don't need another wearable giving ballpark estimates. You deserve real answers, measured from your own breath, in real time.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-800">
                  That's why we created <span className="text-blue-600 font-semibold">Vortex</span>.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 lg:h-full bg-gradient-to-r from-purple-100 to-pink-100 p-8">
            <Image
              src="/Mask_1.png"
              alt="Vortex Device"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={75}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>

        {/* Row 3: Our Approach - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="relative h-64 sm:h-80 lg:h-full bg-gradient-to-r from-green-100 to-blue-100 order-2 lg:order-1">
                          <Image
                src="/running-on-a-dock.jpg"
                alt="Breath Analysis"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={75}
                loading="lazy"
              />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 sm:p-12 lg:p-20 flex items-center order-1 lg:order-2">
            <div className="max-w-xl w-full">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 lg:mb-12 text-black font-serif">Our Approach</h2>
              <div className="space-y-6 lg:space-y-8">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                  With Vortex—you finally have the power to see what your body is doing as you move. Every inhale and exhale becomes a signal — showing you how efficiently you use oxygen, when your body shifts fuels, and what it takes to recover fully. No guesswork. No waiting. Just clarity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4: Movement - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 sm:p-12 lg:p-20 flex items-center">
            <div className="max-w-xl w-full">
              <div className="space-y-6 lg:space-y-8">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                  But this isn't only about performance. It's about living with strength and longevity. It's about giving you the right tools to finally see what your body is telling you.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                  And here's the truth: we can only succeed if you succeed. When you use Vortex, you're not just using a product — you're joining a movement.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                  Together, we're proving that science doesn't belong in a lab; it belongs in your hands. That's why you matter to us. Because your progress is the reason we exist.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 lg:h-full bg-gradient-to-r from-indigo-100 to-blue-100">
                          <Image
                src="/success-hands.jpg"
                alt="Team Collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={75}
                loading="lazy"
              />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 lg:py-48 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-20">
            {/* Left: Full-screen Image (3 columns) */}
            <div className="lg:col-span-3">
              <div className="relative h-64 sm:h-80 lg:h-[600px] bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl overflow-hidden shadow-xl w-full">
                <Image
                  src="/company-building.jpg"
                  alt="Team Collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Right: Values Grid (7 columns) */}
            <div className="lg:col-span-7">
              <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-black">Our Company Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105">
                  <CardContent className="p-8 lg:p-10">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl shadow-sm">
                        <Users className="w-8 h-8 text-blue-600 drop-shadow-sm" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold mb-4 text-black">Customer First</h3>
                        <p className="text-gray-700 leading-relaxed">Your success is our success. Every decision we make starts with your needs.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105">
                  <CardContent className="p-8 lg:p-10">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl shadow-sm">
                        <Target className="w-8 h-8 text-purple-600 drop-shadow-sm" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold mb-4 text-black">Accuracy</h3>
                        <p className="text-gray-700 leading-relaxed">Every measurement you see is grounded in science and precision. No gimmicks, no inflated claims.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105">
                  <CardContent className="p-8 lg:p-10">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 rounded-xl shadow-sm">
                        <Shield className="w-8 h-8 text-green-600 drop-shadow-sm" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold mb-4 text-black">Trust & Integrity</h3>
                        <p className="text-gray-700 leading-relaxed">We're committed to transparency — in our data, in our communication, and in the way we support you.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105">
                  <CardContent className="p-8 lg:p-10">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl shadow-sm">
                        <Leaf className="w-8 h-8 text-emerald-600 drop-shadow-sm" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold mb-4 text-black">Simplicity & Sustainability</h3>
                        <p className="text-gray-700 leading-relaxed">We believe in building technology that is not only easy to use but also respects the world we live in.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-black">Who We Are?</h2>
            
            <div className="space-y-8">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                We're a team of engineers and health enthusiasts who know the frustration of wasted training, inaccessible testing and confusing tools.
              </p>
              
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                We combined our backgrounds in biomedical research, performance science, and engineering to build something that is simple, usable and practical. But at the end of the day, this isn't about us. It's about you — and the movement we're building together.
              </p>
              
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Our role is simple: we are your guide. You bring the drive, the effort, the vision for the life you want. We bring the tools to help you get there with clarity.
              </p>
            </div>

            {/* Team Image */}
            <div className="mt-12 relative w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl overflow-hidden shadow-lg">
                              <Image
                  src="/team-who-we-are.png"
                  alt="AXOVOC Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                  loading="lazy"
                />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-gray-900">
              Every breath tells a story.
            </h2>
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 leading-relaxed">
              With Vortex, you can finally listen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/#join-us"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-3 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:scale-105 border-0 shadow-lg"
              >
                Join us today
              </Link>
              <Link 
                
                href="/#features"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-12 py-3 rounded-full text-lg font-semibold transition-all hover:shadow-lg"
              >
                Learn more
              </Link>
            </div>
            
            {/* Decorative Elements */}
            <div className="mt-16 flex justify-center space-x-8 opacity-30 animate-pulse">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}