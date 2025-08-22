"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Play, Copy, Check, Clock, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { getBlogPostBySlug } from "@/lib/blog-data"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

function ShareButton() {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <button
      onClick={handleShare}
      className="w-full sm:w-auto flex items-center justify-center space-x-3 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 border border-blue-200 hover:border-blue-300"
    >
      <span className="font-medium text-gray-700">Share article</span>
      {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-gray-600" />}
    </button>
  )
}

export default function BlogPostClientPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 lg:sticky lg:top-8 lg:self-start space-y-6 lg:space-y-8">
            {/* Table of Contents */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></span>
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {post.tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 transition-all duration-300 group"
                    onClick={e => {
                      e.preventDefault();
                      const el = document.getElementById(item.id);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                      window.history.replaceState(null, "", `#${item.id}`);
                    }}
                  >
                    <span className="text-gray-700 group-hover:text-gray-900 font-medium text-sm lg:text-base">{item.title}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Related Topics */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"></span>
                Related Topics
              </h3>
              <div className="space-y-4">
                {post.relatedTopics.map((topic, index) => {
                  const isArticle = topic.type === "article" && topic.slug
                  return isArticle ? (
                    <Link key={index} href={`/blogs/${topic.slug}`} className="block">
                      <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="relative mb-3">
                          <Image
                            src={topic.thumbnail || "/placeholder.svg"}
                            alt={topic.title}
                            width={300}
                            height={180}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          {topic.duration && (
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                              {topic.duration}
                            </div>
                          )}
                        </div>
                        <h4 className="font-medium text-gray-800 text-sm leading-tight">{topic.title}</h4>
                      </div>
                    </Link>
                  ) : (
                    <a
                      key={index}
                      href={topic.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="relative mb-3">
                          <Image
                            src={topic.thumbnail || "/placeholder.svg"}
                            alt={topic.title}
                            width={300}
                            height={180}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          {topic.type === "video" && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-black/70 rounded-full p-3 backdrop-blur-sm">
                                <Play className="w-6 h-6 text-white fill-white" />
                              </div>
                            </div>
                          )}
                          {topic.duration && (
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                              {topic.duration}
                            </div>
                          )}
                        </div>
                        <h4 className="font-medium text-gray-800 text-sm leading-tight">{topic.title}</h4>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-lg border border-gray-200 mb-6 lg:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <span
                      key={category}
                      className="px-3 lg:px-4 py-1 lg:py-2 border-2 border-gray-300 rounded-full text-xs lg:text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4 text-gray-500 text-xs lg:text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight mb-6 tracking-tight">
                {post.title}
              </h1>
            </div>

            {/* Content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-lg border border-gray-200">
              <div
                className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:font-medium prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-blockquote:border-l-4 prose-blockquote:border-blue-200 prose-blockquote:bg-blue-50 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:rounded-r-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Author and Share Section */}
            <div className="mt-6 lg:mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-lg border border-gray-200">
              {/* About the Author */}
              <div className="mb-6 lg:mb-8">
                <h3 className="text-xl lg:text-2xl font-bold text-black mb-4 lg:mb-6 flex items-center">
                  <User className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3 text-blue-600" />
                  About the Author
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex-shrink-0 flex justify-center sm:justify-start">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center overflow-hidden shadow-lg">
                      <Image
                        src="/nextjs/axovoc-circle-black.png"
                        alt="AXOVOC"
                        width={80}
                        height={80}
                        className="w-full h-full object-contain filter invert"
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="text-lg lg:text-xl font-bold text-black mb-2 lg:mb-3">Axovoc Editorial Desk</h4>
                    <p className="text-gray-600 leading-relaxed mb-3 lg:mb-4 text-sm lg:text-base">
                      Our team is a group of engineers, researchers, and science communicators passionate about making
                      biometric science accessible and engaging. We work closely with the developers of the Vortex device
                      to bring you accurate, insightful content about VO₂, respiration, and human performance.
                    </p>
                    <p className="text-gray-600 italic text-sm lg:text-base">
                      Want to contribute or suggest a topic?{" "}
                      <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline font-medium">
                        Contact us
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* Share Section */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-gray-200">
                <Link href="/blogs">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-gray-400 transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4 rotate-180" />
                    Back to Blog
                  </Button>
                </Link>

                <ShareButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
