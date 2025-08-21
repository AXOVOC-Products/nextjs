"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Search, Heart, Zap, FileText, Globe } from "lucide-react"
import { getFeaturedArticles, getAllBlogPosts } from "@/lib/blog-data"
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import { IoFitness } from "react-icons/io5";
import { FaRunning } from "react-icons/fa";


const categories = [
  { name: "Latest Blogs", icon: "new"},
  { name: "Fitness", icon: IoFitness},
  { name: "Athletic Performance", icon: FaRunning},
  { name: "Research", icon: HiDocumentMagnifyingGlass},
]

export default function BlogsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("Latest Blogs")
  const [searchQuery, setSearchQuery] = useState("")

  const featuredArticles = getFeaturedArticles()
  const blogPosts = getAllBlogPosts()

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredArticles.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length)
  }

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "Latest Blogs" || post.categories.includes(selectedCategory)
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Full-width carousel container */}
      <div className="w-full mb-16 min-h-[90vh] relative">
        <div className="relative overflow-hidden h-[90vh]">
          {/* Background Image with Low Opacity */}
          <div className="absolute inset-0 z-0">
            <Image
              src={featuredArticles[currentSlide].image || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover opacity-20"
            />
          </div>
          
          {/* Carousel Container */}
          <div className="relative h-full overflow-hidden z-10 pt-2">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredArticles.map((article, index) => (
                <Link key={article.id} href={`/blogs/${article.slug}`} className="w-full flex-shrink-0 h-full">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-8 lg:gap-x-20 pt-2 pb-6 lg:pt-4 lg:pb-8 px-4 lg:px-12 cursor-pointer hover:bg-white/10 transition-colors h-full items-center backdrop-blur-sm">
                      {/* Article Content */}
                      <div className="space-y-4 lg:space-y-6">
                        <h2 className="text-xs lg:text-sm font-medium text-gray-600 uppercase tracking-wide mb-1">
                          Featured Article
                        </h2>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight">{article.title}</h1>

                        <div className="flex flex-wrap gap-2">
                          {article.categories.map((category) => (
                            <span
                              key={category}
                              className="px-2 lg:px-3 py-1 border border-gray-300 rounded-full text-xs lg:text-sm font-medium text-gray-700 bg-white/80"
                            >
                              {category}
                            </span>
                          ))}
                        </div>

                        <p className="text-gray-600 leading-relaxed text-sm lg:text-lg">{article.excerpt}</p>

                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 text-sm">{article.date}</span>
                          <span className="text-blue-600 font-medium text-sm">{article.readTime}</span>
                        </div>

                        <Button className="bg-gray-800 text-white hover:bg-gray-900 px-6 lg:px-8 py-2 lg:py-3 rounded-full text-sm lg:text-base">
                          Read More
                        </Button>
                      </div>

                      {/* Article Image */}
                      <div className="relative h-48 sm:h-56 lg:h-72 xl:h-[500px] rounded-lg overflow-hidden">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Moved further out */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-8 lg:left-16 top-1/2 transform -translate-y-1/2 p-2 lg:p-3 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors z-20"
          >
            <ChevronLeft className="w-4 h-4 lg:w-6 lg:h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-8 lg:right-16 top-1/2 transform -translate-y-1/2 p-2 lg:p-3 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors z-20"
          >
            <ChevronRight className="w-4 h-4 lg:w-6 lg:h-6 text-gray-600" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-2 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {featuredArticles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-gray-800" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Scroll Indicator - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center relative">
                <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
                <div className="absolute inset-0 border-2 border-gray-600 rounded-full animate-ping opacity-20"></div>
              </div>
              <span className="text-xs text-gray-600 font-medium animate-pulse">Scroll</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const IconComponent = category.icon === "new" ? null : category.icon
                  return (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        selectedCategory === category.name ? "bg-gray-100 border-2 border-gray-300" : "hover:bg-gray-50"
                      }`}
                    >
                      {category.icon === "new" ? (
                        <span className="px-2 py-1 bg-black text-white text-xs font-bold rounded">new</span>
                      ) : (
                        IconComponent && <IconComponent className="w-5 h-5 text-black" />
                      )}
                      <span className="font-medium text-gray-800">{category.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-black">
                {selectedCategory === "Latest Blogs" ? "Latest Blogs" : selectedCategory}
              </h2>
              <Link href="#" className="flex items-center text-gray-500 hover:text-blue-600">
                View more
                <ChevronRight className="w-4 h-4 ml-1" />
                <ChevronRight className="w-4 h-4 -ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blogs/${post.slug}`} className="block h-full">
                  <Card className="h-full min-h-[440px] flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <CardHeader className="pb-2 flex-1">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {post.categories.map((category) => (
                          <span
                            key={category}
                            className="px-2 py-1 border border-gray-300 rounded-full text-xs font-medium text-gray-700"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span className="text-blue-600 font-medium">{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
