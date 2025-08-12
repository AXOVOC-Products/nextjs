import type { Metadata } from "next"
import BlogPostClientPage from "./BlogPostClientPage"
import { getBlogPostBySlug, getAllSlugs } from "@/lib/blog-data"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: `${post.title} | AXOVOC Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  return <BlogPostClientPage params={resolvedParams} />
}
