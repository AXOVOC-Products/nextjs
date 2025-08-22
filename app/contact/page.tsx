"use client"


import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { useState } from "react"
import { FileText, Wrench, Users, Share2, Check, MessageCircle, Building2, Handshake, Mail, ArrowRight } from "lucide-react"
import Footer from "@/components/footer"
import { useRouter } from "next/navigation"

import emailjs from "@emailjs/browser"
import { useRef } from "react"


export default function ContactPage() {
  const [selectedInquiry, setSelectedInquiry] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)


  const form = useRef<HTMLFormElement>(null)

  const router = useRouter()

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current || isSubmitting || isSubmitted) return


    setIsSubmitting(true)
    // Axovoc: ("service_axovoc", "template_wcqq2rp", form.current, "F7O73kEPRyUeLudzX")
    // Test:    ("service_test", "template_592mftc", form.current, "XMhXHlRkawb8MpODV")
    emailjs.sendForm("service_test", "template_592mftc", form.current, "XMhXHlRkawb8MpODV").then(
      () => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        alert("Message sent!")
        form.current?.reset()
        setSelectedInquiry("")
        // Reset the submitted state after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000)
      },
      () => {
        setIsSubmitting(false)
        alert("Failed to send message.")
      },
    )
  }


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }


  const handleCardClick = (inquiryType: string) => {
    if (inquiryType === "stay-connected") {
      scrollToSection("top")
    } else {
      setSelectedInquiry(inquiryType)
      scrollToSection("contact-form")
    }
  }


  return (
    <div id="top" className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Stay Connected Section */}
        <div className="text-center mb-20 lg:mb-24">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-8 lg:mb-10 tracking-tight leading-tight">
            Stay Connected
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto mb-16 lg:mb-20 leading-relaxed font-light">
            Follow Axovoc on your favorite platforms to learn, share, and breathe with us.
          </p>


          {/* Social Media Cards - Made Longer */}
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 lg:gap-10 mb-16 lg:mb-20 max-w-7xl mx-auto">
            {/* YouTube Card */}
            <Card className="group cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden rounded-3xl border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="relative h-96 lg:h-[420px] bg-gradient-to-br from-red-50 to-red-100">
                  <Image
                    src="/axovoc-yt.jpg"
                    alt="YouTube Channel"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 1280px) 100vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="font-bold text-xl lg:text-2xl mb-3 leading-tight">Explore VO₂ science on YouTube</h3>
                      <p className="text-sm lg:text-base opacity-90 leading-relaxed">Watch our latest videos and tutorials</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>


            {/* Strava Card */}
            <Card className="group cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden rounded-3xl border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="relative h-96 lg:h-[420px] bg-gradient-to-br from-orange-50 to-orange-100">
                  <Image
                    src="/axovoc-strava.jpg"
                    alt="Strava Community"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 1280px) 100vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="font-bold text-xl lg:text-2xl mb-3 leading-tight">Join our Strava community</h3>
                      <p className="text-sm lg:text-base opacity-90 leading-relaxed">Track your progress with fellow athletes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>


            {/* LinkedIn Card */}
            <Card className="group cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden rounded-3xl border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="relative h-96 lg:h-[420px] bg-gradient-to-br from-blue-50 to-blue-100">
                  <Image
                    src="/axovoc-linkedin.png"
                    alt="LinkedIn Network"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 1280px) 100vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="font-bold text-xl lg:text-2xl mb-3 leading-tight">Connect on LinkedIn</h3>
                      <p className="text-sm lg:text-base opacity-90 leading-relaxed">Network with professionals and experts</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>


            {/* Instagram Card */}
            <Card className="group cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden rounded-3xl border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="relative h-96 lg:h-[420px] bg-gradient-to-br from-purple-50 to-pink-100">
                  <Image
                    src="/axovoc-insta.png"
                    alt="Instagram Feed"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 1280px) 100vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="font-bold text-xl lg:text-2xl mb-3 leading-tight">Follow on Instagram</h3>
                      <p className="text-sm lg:text-base opacity-90 leading-relaxed">See our daily updates and stories</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>


            {/* Facebook Card */}
            <Card className="group cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden rounded-3xl border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="relative h-96 lg:h-[420px] bg-gradient-to-br from-blue-50 to-indigo-100">
                  <Image
                    src="/axovoc-fb.jpg"
                    alt="Facebook Community"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 1280px) 100vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="font-bold text-xl lg:text-2xl mb-3 leading-tight">Join Facebook community</h3>
                      <p className="text-sm lg:text-base opacity-90 leading-relaxed">Engage in discussions and share experiences</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Waitlist Subscription Section - Full Width */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-16 shadow-xl border border-gray-200">
            <div className="text-center space-y-8">
              {/* Icon and Heading */}
              <div className="flex justify-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg">
                  <Mail className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                  Be the first to know
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Join our exclusive waitlist and get early access to Vortex updates, exclusive content, and special offers.
                </p>
              </div>

              {/* Benefits List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Early access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Exclusive content</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Special offers</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:scale-105 border-0 shadow-lg group"
                  onClick={() => router.push("/#join-us")}
                >
                  <span>Join our waitlist</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Trust Indicator */}
              <p className="text-sm text-gray-500">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>

        {/* Information Sections */}
        <div className="space-y-24">
          {/* Have a Question Section */}
          <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-16 shadow-lg border border-gray-200">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12">Have a Question?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative h-80 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl shadow-lg overflow-hidden">
                  <Image
                    src="/FAQ.png"
                    alt="FAQ blocks"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                  We might already have the answer for you!
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Browse our Frequently Asked Questions to find quick solutions, device info, and VO₂ insights — no wait
                  time required.
                </p>
                <div className="pt-4">
                  <Link href="/faq">
                    <Button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-6 rounded-xl text-lg font-medium transition-all hover:shadow-lg">
                      Explore FAQs
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Curious about VO2 Science Section */}
          <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-16 shadow-lg border border-gray-200">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12">
              Curious about VO₂ Science?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative h-80 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl shadow-xl overflow-hidden">
                  <Image
                    src="/featured-vo2-max.png"
                    alt="VO₂ Science Featured Content"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">Read our Blogs!</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dive into our latest blog posts to learn how the Vortex device works, why respiratory data matters,
                  and what you can do with your breath.
                </p>
                <div className="pt-4">
                  <Link href="/blogs">
                    <Button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-6 rounded-xl text-lg font-medium transition-all hover:shadow-lg">
                      Read Blogs
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* What is Vortex Section */}
          <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-16 shadow-lg border border-gray-200">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12">What is Vortex?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-12 flex items-center justify-center h-80 shadow-xl">
                  <Image
                    src="/axovoc-logo-trim.png"
                    alt="AXOVOC Logo"
                    width={200}
                    height={120}
                    className="object-contain filter invert"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">Learn more about the Vortex Device</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Discover how Vortex measures your VO₂ in real time — and why it's changing the way we understand human
                  performance.
                </p>
                <div className="pt-4">
                  <Link href="/">
                    <Button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-6 rounded-xl text-lg font-medium transition-all hover:shadow-lg">
                      Explore Homepage
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Options Section - 2x2 Grid with Centered Layout */}
          <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-16 shadow-lg border border-gray-200">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12">
              Don't see your questions answered?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* General Inquiry Card */}
              <Card
                className="group cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-3xl p-8 border-0 shadow-lg bg-white/60 backdrop-blur-sm"
                onClick={() => handleCardClick("General Inquiry")}
              >
                <CardContent className="p-0 text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-10 h-10 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">General Inquiry</h3>
                    <p className="text-gray-600 leading-relaxed">Have questions about our products, services, or company? Send us a message and we'll get back to you as soon as possible.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Technical Support Card */}
              <Card
                className="group cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-3xl p-8 border-0 shadow-lg bg-white/60 backdrop-blur-sm"
                onClick={() => handleCardClick("Technical Support")}
              >
                <CardContent className="p-0 text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center shadow-lg">
                    <Wrench className="w-10 h-10 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Technical Support</h3>
                    <p className="text-gray-600 leading-relaxed">Need help with your Vortex device or experiencing technical issues? Our support team is here to assist you.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Business Collaboration Card */}
              <Card
                className="group cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-3xl p-8 border-0 shadow-lg bg-white/60 backdrop-blur-sm"
                onClick={() => handleCardClick("Business Collaboration")}
              >
                <CardContent className="p-0 text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center shadow-lg">
                    <Building2 className="w-10 h-10 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Business Collaboration</h3>
                    <p className="text-gray-600 leading-relaxed">Interested in partnerships, bulk orders, or integrating Vortex into your business? Let's explore opportunities together.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Stay Connected Card */}
              <Card
                className="group cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-3xl p-8 border-0 shadow-lg bg-white/60 backdrop-blur-sm"
                onClick={() => handleCardClick("stay-connected")}
              >
                <CardContent className="p-0 text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center shadow-lg">
                    <Handshake className="w-10 h-10 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Stay Connected</h3>
                    <p className="text-gray-600 leading-relaxed">Follow us on social media to stay updated with the latest news, tips, and community stories from the Axovoc family.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact Form Section */}
          <section id="contact-form" className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-16 shadow-lg border border-gray-200">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">Contact Us</h2>
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Leave us any question and our team will get back to you as quickly as possible. We respect your privacy.
                Your contact information will never be shared and is only used to respond to your inquiry.
              </p>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <Input
                    name="user_name"
                    type="text"
                    placeholder="Name*"
                    className="w-full text-lg py-6 px-6 border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm"
                    required
                  />
                </div>

                <div>
                  <Input
                    name="user_email"
                    type="email"
                    placeholder="Email*"
                    className="w-full text-lg py-6 px-6 border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm"
                    required
                  />
                </div>

                <div>
                  <Input
                    name="user_phone"
                    type="tel"
                    placeholder="Phone Number (optional)"
                    className="w-full text-lg py-6 px-6 border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <Select name="inquiry_type" value={selectedInquiry} onValueChange={setSelectedInquiry}>
                    <SelectTrigger className="w-full text-lg py-6 px-6 border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm">
                      <SelectValue placeholder="I am contacting you about...*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                      <SelectItem value="Technical Support">Technical Support</SelectItem>
                      <SelectItem value="Business Collaboration">Business Collaboration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Message*"
                    className="w-full min-h-32 text-lg py-6 px-6 border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm resize-none"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`px-12 py-6 rounded-xl text-lg font-medium transition-all duration-300 ${
                      isSubmitted
                        ? "bg-green-600 hover:bg-green-600 text-white"
                        : "bg-gray-700 hover:bg-gray-800 text-white"
                    } ${isSubmitting || isSubmitted ? "cursor-not-allowed" : "hover:shadow-lg"}`}
                  >
                    {isSubmitted ? (
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        Sent
                      </div>
                    ) : isSubmitting ? (
                      "Sending..."
                    ) : (
                      "Send"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
    
  )
}