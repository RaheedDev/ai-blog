import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2, Tag } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { AdSenseBanner } from '@/components/AdSenseScript'
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog'

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - AI Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-neo-white">
      {/* Header */}
      <section className="bg-neo-cyan border-b-4 border-neo-black">
        <div className="neo-container py-8">
          <Link href="/blog" className="neo-button mb-6 inline-flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <span>BACK TO BLOG</span>
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-neo-black text-neo-white px-3 py-1 text-sm font-mono uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="neo-header text-neo-black mb-6">
              {post.title}
            </h1>
            
            <p className="neo-text text-neo-black/80 mb-6">
              {post.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-neo-black/60">
                <span className="flex items-center space-x-2 font-mono">
                  <Calendar className="h-5 w-5" />
                  <span>{post.date}</span>
                </span>
                <span className="flex items-center space-x-2 font-mono">
                  <Clock className="h-5 w-5" />
                  <span>{post.readTime}</span>
                </span>
              </div>
              
              <button className="neo-button flex items-center space-x-2">
                <Share2 className="h-5 w-5" />
                <span>SHARE</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="neo-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Featured Image */}
            {post.imageUrl && (
              <div className="neo-card p-0 mb-8 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            )}
            
            {/* Content */}
            <div className="neo-card prose prose-lg max-w-none">
              <MDXRemote 
                source={post.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [],
                    rehypePlugins: [],
                  },
                }}
              />
            </div>
            
            {/* AdSense */}
            <AdSenseBanner adSlot="1111111111" />
            
            {/* Share Section */}
            <div className="neo-card bg-neo-yellow mt-8">
              <h3 className="font-bold text-xl mb-4 uppercase">
                ENJOYED THIS POST?
              </h3>
              <p className="text-neo-black/80 mb-6">
                Share it with your network and help others discover AI-generated insights!
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="neo-button bg-neo-blue text-neo-white">
                  SHARE ON TWITTER
                </button>
                <button className="neo-button bg-neo-blue text-neo-white">
                  SHARE ON LINKEDIN
                </button>
                <button className="neo-button">
                  COPY LINK
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Subscribe CTA */}
            <div className="neo-card bg-neo-pink text-neo-white">
              <h3 className="font-bold text-xl mb-4 uppercase">
                WANT MORE?
              </h3>
              <p className="text-neo-white/90 mb-6">
                Get premium access to exclusive content and early releases.
              </p>
              <Link href="/subscribe" className="neo-button bg-neo-white text-neo-black w-full text-center">
                SUBSCRIBE NOW
              </Link>
            </div>
            
            {/* AdSense */}
            <AdSenseBanner adSlot="2222222222" />
            
            {/* Related Topics */}
            <div className="neo-card">
              <h3 className="font-bold text-xl mb-4 uppercase">
                RELATED TOPICS
              </h3>
              <div className="space-y-3">
                {post.tags.map((tag) => (
                  <Link 
                    key={tag}
                    href={`/blog?tag=${tag}`}
                    className="flex items-center space-x-2 text-neo-black/80 hover:text-neo-pink transition-colors"
                  >
                    <Tag className="h-4 w-4" />
                    <span className="font-mono uppercase">{tag}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="neo-card bg-neo-green">
              <h3 className="font-bold text-xl mb-4 uppercase">
                WEEKLY NEWSLETTER
              </h3>
              <p className="text-neo-black/80 mb-4">
                Get notified when new AI-generated posts are published.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL..."
                  className="neo-input w-full"
                />
                <button className="neo-button w-full">
                  SUBSCRIBE FREE
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}