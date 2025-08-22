"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useRef } from "react"
import { Check } from "lucide-react"
import emailjs from "@emailjs/browser"

export function JoinUsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current || isSubmitting || isSubmitted) return

    setIsSubmitting(true)
    emailjs.sendForm("service_axovoc_join", "template_join_us", form.current, "F7O73kEPRyUeLudzX").then(
      () => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        alert("Welcome to the Vortex community!")
        form.current?.reset()
        // Reset the submitted state after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000)
      },
      () => {
        setIsSubmitting(false)
        alert("Failed to submit. Please try again.")
      },
    )
  }

  return (
    <>
      <section
        id="join-us"
        className="py-16 lg:py-24"
        style={{
          background: "linear-gradient(135deg, #3399ff 0%, #8533ff 50%, #8b5cf6 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Join Us Now</h2>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Be among the first to experience lab-grade VO₂ tracking — anytime, anywhere. Secure your spot now and join
              the movement to bring breath-based biometrics out of the lab and into everyday life.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Name<span className="text-red-500">*</span>
                </label>
                <Input
                  name="user_name"
                  type="text"
                  placeholder="John Smith"
                  className="w-full text-lg py-6 px-6 border-gray-200 rounded-xl bg-gray-50"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  E-mail<span className="text-red-500">*</span>
                </label>
                <Input
                  name="user_email"
                  type="email"
                  placeholder="john.smith@gmail.com"
                  className="w-full text-lg py-6 px-6 border-gray-200 rounded-xl bg-gray-50"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-gray-500"></span>
                </label>
                <Input
                  name="user_phone"
                  type="tel"
                  placeholder="(647) 938 - 7689"
                  className="w-full text-lg py-6 px-6 border-gray-200 rounded-xl bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  City and Country<span className="text-red-500">*</span>
                </label>
                <Input
                  name="user_location"
                  type="text"
                  placeholder="Toronto, Canada"
                  className="w-full text-lg py-6 px-6 border-gray-200 rounded-xl bg-gray-50"
                  required
                />
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`px-12 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-600 hover:bg-green-600 text-white"
                      : "bg-gray-700 hover:bg-gray-800 text-white"
                  } ${isSubmitting || isSubmitted ? "cursor-not-allowed" : ""}`}
                >
                  {isSubmitted ? (
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      Joined!
                    </div>
                  ) : isSubmitting ? (
                    "Submitting..."
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </form>
          </div>

          <div className="text-center mt-12 space-y-6">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Your journey with Vortex starts now. While your device is being prepared, explore more about the science
              behind your breath:
            </p>

            <div className="space-y-3 text-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="text-gray-700">
                  Visit our{" "}
                  <a href="/blogs" className="text-blue-600 hover:underline font-medium">
                    Blogs
                  </a>{" "}
                  for insights into VO₂, recovery, and healthspan.
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="text-gray-700">
                  Check our{" "}
                  <a href="/faq" className="text-blue-600 hover:underline font-medium">
                    FAQs
                  </a>{" "}
                  for quick answers.
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="text-gray-700">
                  Join our community on{" "}
                  <a href="https://www.youtube.com/@axovoc" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                  ,{" "}
                  <a href="https://www.strava.com/clubs/axovoc/" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                    Strava
                  </a>
                  ,{" "}
                  <a href="https://www.instagram.com/axovoc/" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                  ,{" "}
                  <a href="https://www.facebook.com/axovoc" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                  {" "}and{" "}
                  <a href="https://www.linkedin.com/in/iamtaruntyagi/" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </span>
              </div>
            </div>
                    {/* Already in footer... */}
            {/* <div className="pt-8">
              <p className="text-2xl font-medium text-gray-800 italic">
                "Every breath tells a story. With Vortex, you'll finally hear it."
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
