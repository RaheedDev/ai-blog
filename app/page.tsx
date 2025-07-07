import Link from 'next/link'
import { ArrowRight, Zap, TrendingUp, Bot, Clock } from 'lucide-react'
import { AdSenseBanner } from '@/components/AdSenseScript'
import { getBlogPosts } from '@/lib/blog'

export default async function Home() {
  const latestPosts = await getBlogPosts(3) // Get latest 3 posts

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-neo-yellow border-b-4 border-neo-black">
        <div className="neo-container py-20">
          <div className="max-w-4xl">
            <h1 className="neo-header mb-6">
              DISCOVER
              <br />
              <span className="text-neo-pink">TRENDING</span>
              <br />
              INSIGHTS
            </h1>
            <p className="neo-text mb-8 max-w-2xl">
              Stay ahead with the latest trending topics and insights. 
              Weekly content based on Google Trends India, featuring in-depth 
              analysis and stunning visuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blog" className="neo-button neo-button-primary">
                READ LATEST POSTS
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </Link>
              <Link href="/subscribe" className="neo-button neo-button-secondary">
                SUBSCRIBE NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neo-white">
        <div className="neo-container">
          <h2 className="neo-subheader text-center mb-12">
            WHY CHOOSE TRENDSCOPE?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neo-card neo-card-hover text-center">
              <div className="bg-neo-pink border-4 border-neo-black p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-neo-white" />
              </div>
              <h3 className="font-bold text-xl mb-4 uppercase">TRENDING TOPICS</h3>
              <p className="text-neo-black/80">
                Stay ahead with content based on real-time Google Trends data from India.
              </p>
            </div>
            
            <div className="neo-card neo-card-hover text-center">
              <div className="bg-neo-cyan border-4 border-neo-black p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Bot className="h-8 w-8 text-neo-black" />
              </div>
              <h3 className="font-bold text-xl mb-4 uppercase">EXPERT ANALYSIS</h3>
              <p className="text-neo-black/80">
                High-quality content with deep insights and expert analysis.
              </p>
            </div>
            
            <div className="neo-card neo-card-hover text-center">
              <div className="bg-neo-green border-4 border-neo-black p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Clock className="h-8 w-8 text-neo-black" />
              </div>
              <h3 className="font-bold text-xl mb-4 uppercase">WEEKLY UPDATES</h3>
              <p className="text-neo-black/80">
                Fresh content delivered every Monday at 10 AM, automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Banner */}
      <section className="py-8 bg-neo-white">
        <div className="neo-container">
          <AdSenseBanner adSlot="1234567890" />
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-20 bg-neo-white">
        <div className="neo-container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="neo-subheader">LATEST POSTS</h2>
            <Link href="/blog" className="neo-button">
              VIEW ALL POSTS
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <article key={post.slug} className="neo-card neo-card-hover">
                <div className={`h-2 ${index === 0 ? 'bg-neo-pink' : index === 1 ? 'bg-neo-cyan' : 'bg-neo-yellow'} mb-4`} />
                <h3 className="font-bold text-xl mb-3 overflow-hidden" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
                  {post.title}
                </h3>
                <p className="text-neo-black/80 mb-4 overflow-hidden" style={{display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'}}>
                  {post.description}
                </p>
                <div className="flex justify-between items-center text-sm text-neo-black/60 mb-4">
                  <span className="font-mono">{post.date}</span>
                  <span className="font-mono">{post.readTime}</span>
                </div>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="neo-button w-full text-center"
                >
                  READ MORE
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neo-black text-neo-white py-20">
        <div className="neo-container text-center">
          <h2 className="neo-subheader text-neo-yellow mb-6">
            READY TO STAY AHEAD?
          </h2>
          <p className="neo-text mb-8 max-w-2xl mx-auto text-neo-white/80">
            Join thousands of readers who get weekly trending insights 
            delivered straight to their inbox. Premium subscribers get early 
            access and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/subscribe" className="neo-button bg-neo-pink text-neo-white border-neo-white hover:bg-neo-yellow hover:text-neo-black">
              START SUBSCRIPTION
            </Link>
            <Link href="/blog" className="neo-button bg-neo-cyan text-neo-black border-neo-white">
              BROWSE POSTS
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}