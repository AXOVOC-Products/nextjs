"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { useState } from "react"
import { ArrowUp, FileText, Wrench, Users, Share2 } from "lucide-react"

export default function ContactPage() {
  const [selectedInquiry, setSelectedInquiry] = useState<string>("")

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
    <div id="top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Stay Connected Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Stay Connected</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
          Follow Axovoc on your favorite platforms to learn, share, and breathe with us.
        </p>

        {/* Social Media Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 mb-12 max-w-6xl mx-auto">
          {/* YouTube Card */}
          <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden rounded-3xl">
            <CardContent className="p-0">
              <div className="relative h-80 bg-gradient-to-br from-red-50 to-red-100">
                <img src="/nextjs/axovoc-yt.jpg" alt="YouTube Channel" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-lg mb-1">Explore VO₂ science on YouTube</h3>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Strava Card */}
          <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden rounded-3xl">
            <CardContent className="p-0">
              <div className="relative h-80 bg-gradient-to-br from-orange-50 to-orange-100">
                <img src="/nextjs/axovoc-strava.jpg" alt="Strava Community" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-lg mb-1">Want to join our Strava community?</h3>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* LinkedIn Card */}
          <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden rounded-3xl">
            <CardContent className="p-0">
              <div className="relative h-80 bg-gradient-to-br from-blue-50 to-blue-100">
                <img src="/nextjs/axovoc-linkedin.png" alt="LinkedIn Network" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-lg mb-1">Let's connect on LinkedIn!</h3>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Instagram Card */}
          <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden rounded-3xl">
            <CardContent className="p-0">
              <div className="relative h-80 bg-gradient-to-br from-purple-50 to-pink-100">
                <img src="/nextjs/axovoc-insta.png" alt="Instagram Feed" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-lg mb-1">Follow Axovoc on Instagram</h3>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Facebook Card */}
          <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden rounded-3xl">
            <CardContent className="p-0">
              <div className="relative h-80 bg-gradient-to-br from-blue-50 to-indigo-100">
                <img src="/nextjs/axovoc-fb.jpg" alt="Facebook Community" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-lg mb-1">Join the conversation on Facebook</h3>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Email Subscription */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 p-6 bg-white rounded-2xl shadow-lg">
            <Input
              type="email"
              placeholder="Enter your email to join our waitlist"
              className="flex-1 text-lg py-6 px-6 border-gray-200 rounded-xl"
            />
            <Button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-6 rounded-xl text-lg font-medium">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Information Sections */}
      <div className="space-y-24">
        {/* Have a Question Section */}
        <section className="bg-gray-50 rounded-3xl p-8 lg:p-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-16">Have a Question?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/nextjs/FAQ.png"
                alt="FAQ blocks"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
                We might already have the answer for you!
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Browse our Frequently Asked Questions to find quick solutions, device info, and VO₂ insights — no wait
                time required.
              </p>
              <Button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-medium">
                Explore FAQs
              </Button>
            </div>
          </div>
        </section>

        {/* Curious about VO2 Science Section */}
        <section className="bg-gray-50 rounded-3xl p-8 lg:p-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-16">Curious about VO₂ Science?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/nextjs/featured-vo2-max.png"
                alt="VO₂ Science Featured Content"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">Read our Blogs!</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Dive into our latest blog posts to learn how the Vortex device works, why respiratory data matters, and
                what you can do with your breath.
              </p>
              <Link href="/blogs">
                <Button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-medium">
                  Read Blogs
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What is Vortex Section */}
        <section className="bg-gray-50 rounded-3xl p-8 lg:p-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-16">What is Vortex?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-black rounded-2xl p-12 flex items-center justify-center h-80">
                <img
                  src="/nextjs/axovoc-circle-black.png"
                  alt="AXOVOC Logo"
                  className="w-full h-full max-w-sm max-h-48 object-contain"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">Learn more about the Vortex Device</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover how Vortex measures your VO₂ in real time — and why it's changing the way we understand human
                performance.
              </p>
              <Link href="/product">
                <Button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-medium">
                  Explore the Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Options Section */}
        <section className="bg-gray-50 rounded-3xl p-8 lg:p-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-16">
            Don't see your questions answered?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Have an inquiry Card - Spans 2 of 3 columns */}
            <Card
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 rounded-3xl p-10 lg:col-span-2 h-40"
              onClick={() => handleCardClick("General Inquiry")}
            >
              <CardContent className="p-0 flex items-center gap-6 h-full">
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-10 h-10 text-gray-700" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Have an inquiry?</h3>
                  <p className="text-gray-600">Send us a message and we will get back to you ASAP</p>
                </div>
              </CardContent>
            </Card>

            {/* Technical Support Card - Single column */}
            <Card
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 rounded-3xl p-10 h-40"
              onClick={() => handleCardClick("Technical Support")}
            >
              <CardContent className="p-0 text-center space-y-4 flex flex-col justify-center h-full">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center">
                  <Wrench className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Technical Support</h3>
              </CardContent>
            </Card>

            {/* For Business Card - Single column */}
            <Card
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 rounded-3xl p-10 h-40"
              onClick={() => handleCardClick("Business Collaboration")}
            >
              <CardContent className="p-0 text-center space-y-4 flex flex-col justify-center h-full">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">For Business</h3>
              </CardContent>
            </Card>

            {/* Stay Connected Card - Spans 2 of 3 columns */}
            <Card
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 rounded-3xl p-10 lg:col-span-2 h-40"
              onClick={() => handleCardClick("stay-connected")}
            >
              <CardContent className="p-0 flex items-center gap-6 h-full">
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Share2 className="w-10 h-10 text-gray-700" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Stay Connected</h3>
                  <p className="text-gray-600">Follow us on our social platforms to see what we're working on</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="bg-white rounded-3xl p-8 lg:p-16 shadow-lg">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">Contact Us</h2>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Leave us any question and our team will get back to you as quickly as possible. We respect your privacy.
              Your contact information will never be shared and is only used to respond to your inquiry.
            </p>

            <form className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Name*"
                  className="w-full text-lg py-6 px-6 border-gray-200 rounded-xl bg-gray-50"
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email*"
                  className="w-full text-lg py-6 px-6 border-gray-200 rounded-xl bg-gray-50"
                  required
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  className="w-full text-lg py-6 px-6 border-gray-200 rounded-xl bg-gray-50"
                />
              </div>

              <div>
                <Select value={selectedInquiry} onValueChange={setSelectedInquiry}>
                  <SelectTrigger className="w-full text-lg py-6 px-6 border-gray-200 rounded-xl bg-gray-50">
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
                  placeholder="Message*"
                  className="w-full min-h-32 text-lg py-6 px-6 border-gray-200 rounded-xl bg-gray-50 resize-none"
                  required
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-gray-700 hover:bg-gray-800 text-white px-12 py-4 rounded-xl text-lg font-medium"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
