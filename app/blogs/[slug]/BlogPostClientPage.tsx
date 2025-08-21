"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Play, Copy, Check } from "lucide-react"
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
      className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors"
    >
      <span className="font-medium">Share article</span>
      {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
    </button>
  )
}

export default function BlogPostClientPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 lg:sticky lg:top-8 lg:self-start space-y-8">
          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Table of Contents</h3>
            <nav className="space-y-2">
              {post.tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors group"
                  onClick={e => {
                    e.preventDefault();
                    const el = document.getElementById(item.id);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                    // Optionally, update the hash in the URL:
                    window.history.replaceState(null, "", `#${item.id}`);
                  }}
                >
                  <span className="text-gray-700 group-hover:text-gray-900">{item.title}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                </a>
              ))}
            </nav>
          </div>

          {/* Related Topics */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Related Topics</h3>
            <div className="space-y-4">
              {post.relatedTopics.map((topic, index) => {
                const isArticle = topic.type === "article" && topic.slug
                return isArticle ? (
                  <Link key={index} href={`/blogs/${topic.slug}`} className="block">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 hover:bg-gray-50 transition">
                      <div className="relative mb-3">
                        <Image
                          src={topic.thumbnail || "/placeholder.svg"}
                          alt={topic.title}
                          width={300}
                          height={180}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        {topic.duration && (
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
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
                    <div className="bg-white rounded-lg p-4 border border-gray-200 hover:bg-gray-50 transition">
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
                            <div className="bg-black/70 rounded-full p-3">
                              <Play className="w-6 h-6 text-white fill-white" />
                            </div>
                          </div>
                        )}
                        {topic.duration && (
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
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
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="px-4 py-2 border-2 border-gray-300 rounded-full text-sm font-medium text-gray-700"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">{post.date}</span>
            </div>

            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight mb-6">{post.title}</h1>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author and Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200 space-y-8">
            {/* About the Author */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">About the Author</h3>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
  <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center overflow-hidden">
    <Image
      src="/nextjs/axovoc-circle-black.png"
      alt="AXOVOC"
      width={80}
      height={80}
      className="w-full h-full object-contain filter invert"
    />
  </div>
</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-black mb-3">Axovoc Editorial Desk</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our team is a group of engineers, researchers, and science communicators passionate about making
                    biometric science accessible and engaging. We work closely with the developers of the Vortex device
                    to bring you accurate, insightful content about VO₂, respiration, and human performance.
                  </p>
                  <p className="text-gray-600 italic">
                    Want to contribute or suggest a topic?{" "}
                    <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                      Contact us
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Share Section */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <Link href="/blogs">
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
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
  )
}
