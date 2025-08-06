"use client"

import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const featuredArticles = [
  {
    id: 1,
    title: "The Ultimate Fitness and Health Signal: What is VO₂ Max and Why it Matters?",
    excerpt: "VO₂ Max is the maximum amount of oxygen your body can use during intense exercise. It's one of the most accurate indicators of your cardiovascular fitness and endurance capacity.",
    date: "August 5, 2025",
    readTime: "3 mins read",
    image: "/featured-vo2-max.png",
    categories: ["Fitness", "Research"]
  },
  {
    id: 2,
    title: "Understanding Metabolic Flexibility: The Key to Optimal Health",
    excerpt: "Metabolic flexibility is your body's ability to efficiently switch between different fuel sources. Learn how to optimize this crucial aspect of your health.",
    date: "August 3, 2025",
    readTime: "5 mins read",
    image: "/metabolic-flexibility.jpg",
    categories: ["Research", "Health"]
  },
  {
    id: 3,
    title: "Recovery Metrics That Actually Matter for Athletes",
    excerpt: "Not all recovery metrics are created equal. Discover which biomarkers provide the most actionable insights for athletic performance.",
    date: "August 1, 2025",
    readTime: "4 mins read",
    image: "/recovery-metrics.png",
    categories: ["Athletic Performance", "Research"]
  }
]

export default function BlogsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredArticles.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Featured Article Carousel */}
      <div className="mb-16">
        <h2 className="text-lg font-medium text-gray-600 mb-4">Featured Article</h2>
        <div className="relative bg-gray-50 rounded-lg overflow-hidden">
          {/* Carousel Container */}
          <div className="relative h-auto overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredArticles.map((article, index) => (
                <div key={article.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    {/* Article Content */}
                    <div className="space-y-6">
                      <h1 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
                        {article.title}
                      </h1>
                      
                      <div className="flex flex-wrap gap-2">
                        {article.categories.map((category) => (
                          <span
                            key={category}
                            className="px-3 py-1 border border-gray-300 rounded-full text-sm font-medium text-gray-700"
                          >
                            {category}
                          </span>
                        ))}
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">{article.date}</span>
                        <span className="text-blue-600 font-medium">{article.readTime}</span>
                      </div>

                      <Button className="bg-gray-800 text-white hover:bg-gray-900 px-8 py-3 rounded-full">
                        Read More
                      </Button>
                    </div>

                    {/* Article Image */}
                    <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {featuredArticles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}