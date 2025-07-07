import Link from 'next/link'
import { Search, Filter, Calendar, Clock } from 'lucide-react'
import { AdSenseBanner } from '@/components/AdSenseScript'
import { getBlogPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog - Trending Insights',
  description: 'Explore our collection of blog posts covering trending topics from Google Trends India.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-neo-white">
      {/* Header */}
      <section className="bg-neo-pink border-b-4 border-neo-black">
        <div className="neo-container py-16">
          <h1 className="neo-header text-neo-white mb-4">
            BLOG POSTS
          </h1>
          <p className="neo-text text-neo-white/90 max-w-2xl">
            Discover expert insights on trending topics. Fresh content 
            delivered weekly, powered by Google Trends data.
          </p>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="bg-neo-white border-b-4 border-neo-black">
        <div className="neo-container py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="relative flex-grow md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neo-black/60" />
                <input
                  type="text"
                  placeholder="SEARCH POSTS..."
                  className="neo-input pl-12 w-full uppercase placeholder:text-neo-black/40"
                />
              </div>
              <button className="neo-button flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>FILTER</span>
              </button>
            </div>
            <div className="text-sm font-mono text-neo-black/60">
              {posts.length} POSTS FOUND
            </div>
          </div>
        </div>
      </section>

      <div className="neo-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {posts.length === 0 ? (
              <div className="neo-card text-center py-12">
                <h3 className="neo-subheader mb-4">NO POSTS YET</h3>
                <p className="text-neo-black/80 mb-6">
                  We're working hard to create amazing content. 
                  Check back soon for trending insights!
                </p>
                <Link href="/" className="neo-button">
                  RETURN HOME
                </Link>
              </div>
            ) : (
              <div className="space-y-8">
                {posts.map((post, index) => (
                  <article key={post.slug} className="neo-card neo-card-hover">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Featured Image Placeholder */}
                      <div className="md:w-1/3">
                        <div className={`aspect-video ${
                          index % 3 === 0 ? 'bg-neo-yellow' : 
                          index % 3 === 1 ? 'bg-neo-cyan' : 'bg-neo-pink'
                        } border-4 border-neo-black flex items-center justify-center`}>
                          {post.imageUrl ? (
                            <img 
                              src={post.imageUrl} 
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="font-mono text-neo-black/60 text-sm">
                              IMAGE
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="md:w-2/3 space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span 
                              key={tag}
                              className="bg-neo-black text-neo-white px-3 py-1 text-xs font-mono uppercase"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h2 className="font-bold text-2xl hover:text-neo-pink transition-colors">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h2>
                        
                        <p className="text-neo-black/80 line-clamp-3">
                          {post.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-neo-black/60">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center space-x-1 font-mono">
                              <Calendar className="h-4 w-4" />
                              <span>{post.date}</span>
                            </span>
                            <span className="flex items-center space-x-1 font-mono">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime}</span>
                            </span>
                          </div>
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="neo-button text-sm px-4 py-2"
                          >
                            READ MORE
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* AdSense */}
            <AdSenseBanner adSlot="0987654321" />
            
            {/* Subscribe CTA */}
            <div className="neo-card bg-neo-yellow">
              <h3 className="font-bold text-xl mb-4 uppercase">
                GET PREMIUM ACCESS
              </h3>
              <p className="text-neo-black/80 mb-6">
                Subscribe for early access to posts, exclusive content, 
                and ad-free reading experience.
              </p>
              <Link href="/subscribe" className="neo-button neo-button-primary w-full text-center">
                SUBSCRIBE NOW
              </Link>
            </div>
            
            {/* Popular Tags */}
            <div className="neo-card">
              <h3 className="font-bold text-xl mb-4 uppercase">
                POPULAR TAGS
              </h3>
              <div className="flex flex-wrap gap-2">
                {['AI', 'Technology', 'Trends', 'India', 'Innovation', 'Future', 'Digital', 'Science'].map((tag) => (
                  <span 
                    key={tag}
                    className="bg-neo-cyan text-neo-black px-3 py-1 text-sm font-mono uppercase cursor-pointer hover:bg-neo-pink hover:text-neo-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}