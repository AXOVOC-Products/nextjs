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
                <Link key={article.id} href={`/blogs/${article.slug}`} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 cursor-pointer hover:bg-gray-100 transition-colors">
                    {/* Article Content */}
                    <div className="space-y-6">
                      <h1 className="text-3xl lg:text-4xl font-bold text-black leading-tight">{article.title}</h1>

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

                      <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>

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
                </Link>
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
                  index === currentSlide ? "bg-gray-800" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
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
                      IconComponent && <IconComponent className="w-5 h-5 text-gray-600" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blogs/${post.slug}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardHeader className="pb-2">
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
                  <CardContent>
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
  )
}
