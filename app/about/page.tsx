import Link from 'next/link'
import { Bot, TrendingUp, Zap, Users, Target, Lightbulb } from 'lucide-react'

export const metadata = {
  title: 'About - AI Blog',
  description: 'Learn about our AI-powered blog that generates trending insights from Google Trends data.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neo-white">
      {/* Hero Section */}
      <section className="bg-neo-green border-b-4 border-neo-black">
        <div className="neo-container py-20">
          <div className="max-w-4xl">
            <h1 className="neo-header mb-6">
              ABOUT OUR
              <br />
              <span className="text-neo-black">AI BLOG</span>
            </h1>
            <p className="neo-text mb-8">
              We're revolutionizing content creation with artificial intelligence. 
              Our automated system generates high-quality blog posts based on 
              trending topics from Google Trends India, delivering fresh insights 
              every week.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="neo-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="neo-subheader mb-6">OUR MISSION</h2>
              <p className="neo-text mb-6">
                To democratize access to trending insights and make quality content 
                creation scalable through artificial intelligence. We believe that 
                everyone should have access to timely, relevant, and well-researched 
                content about what's happening in the world.
              </p>
              <p className="neo-text">
                Our AI-powered workflow automatically identifies trending topics, 
                generates comprehensive articles, creates stunning visuals, and 
                delivers everything in a beautiful, accessible format.
              </p>
            </div>
            <div className="neo-card bg-neo-yellow p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-black mb-2">100%</div>
                  <div className="font-mono text-sm uppercase">AI Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-black mb-2">24/7</div>
                  <div className="font-mono text-sm uppercase">Automated</div>
                </div>
                <div>
                  <div className="text-3xl font-black mb-2">Weekly</div>
                  <div className="font-mono text-sm uppercase">Fresh Content</div>
                </div>
                <div>
                  <div className="text-3xl font-black mb-2">∞</div>
                  <div className="font-mono text-sm uppercase">Scalable</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-neo-cyan">
        <div className="neo-container">
          <h2 className="neo-subheader text-center mb-12">HOW IT WORKS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neo-card text-center">
              <div className="bg-neo-pink border-4 border-neo-black p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-neo-white" />
              </div>
              <h3 className="font-bold text-xl mb-4 uppercase">1. TREND DETECTION</h3>
              <p className="text-neo-black/80">
                Our system monitors Google Trends India RSS feed every Monday 
                to identify the top 5 trending topics.
              </p>
            </div>
            
            <div className="neo-card text-center">
              <div className="bg-neo-purple border-4 border-neo-black p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Bot className="h-8 w-8 text-neo-white" />
              </div>
              <h3 className="font-bold text-xl mb-4 uppercase">2. AI GENERATION</h3>
              <p className="text-neo-black/80">
                Advanced AI creates comprehensive 800-1200 word articles with 
                proper structure, SEO optimization, and engaging content.
              </p>
            </div>
            
            <div className="neo-card text-center">
              <div className="bg-neo-orange border-4 border-neo-black p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Zap className="h-8 w-8 text-neo-black" />
              </div>
              <h3 className="font-bold text-xl mb-4 uppercase">3. AUTO PUBLISH</h3>
              <p className="text-neo-black/80">
                Content is automatically formatted, images are generated, 
                and everything is published to our blog with notifications sent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="neo-container">
          <h2 className="neo-subheader text-center mb-12">OUR VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="neo-card neo-card-hover">
              <Target className="h-12 w-12 text-neo-pink mb-4" />
              <h3 className="font-bold text-xl mb-3 uppercase">ACCURACY</h3>
              <p className="text-neo-black/80">
                We ensure our AI generates factual, well-researched content 
                based on reliable trending data.
              </p>
            </div>
            
            <div className="neo-card neo-card-hover">
              <Lightbulb className="h-12 w-12 text-neo-yellow mb-4" />
              <h3 className="font-bold text-xl mb-3 uppercase">INNOVATION</h3>
              <p className="text-neo-black/80">
                Constantly improving our AI workflow to deliver better, 
                more engaging content experiences.
              </p>
            </div>
            
            <div className="neo-card neo-card-hover">
              <Users className="h-12 w-12 text-neo-cyan mb-4" />
              <h3 className="font-bold text-xl mb-3 uppercase">ACCESSIBILITY</h3>
              <p className="text-neo-black/80">
                Making trending insights available to everyone, regardless 
                of their background or technical expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-neo-black text-neo-white">
        <div className="neo-container">
          <h2 className="neo-subheader text-neo-yellow text-center mb-12">
            TECHNOLOGY STACK
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-neo-yellow text-neo-black p-4 rounded-lg mb-4 font-mono font-bold">
                N8N
              </div>
              <p className="text-sm text-neo-white/80">Workflow Automation</p>
            </div>
            <div>
              <div className="bg-neo-pink text-neo-white p-4 rounded-lg mb-4 font-mono font-bold">
                AI
              </div>
              <p className="text-sm text-neo-white/80">Content Generation</p>
            </div>
            <div>
              <div className="bg-neo-cyan text-neo-black p-4 rounded-lg mb-4 font-mono font-bold">
                NEXT.JS
              </div>
              <p className="text-sm text-neo-white/80">Frontend Framework</p>
            </div>
            <div>
              <div className="bg-neo-green text-neo-black p-4 rounded-lg mb-4 font-mono font-bold">
                VERCEL
              </div>
              <p className="text-sm text-neo-white/80">Hosting Platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neo-pink">
        <div className="neo-container text-center">
          <h2 className="neo-subheader text-neo-white mb-6">
            JOIN THE FUTURE OF CONTENT
          </h2>
          <p className="neo-text text-neo-white/90 mb-8 max-w-2xl mx-auto">
            Experience the power of AI-generated insights. Subscribe today 
            and never miss a trending topic again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/subscribe" className="neo-button bg-neo-white text-neo-black">
              START SUBSCRIPTION
            </Link>
            <Link href="/blog" className="neo-button bg-neo-yellow text-neo-black">
              READ LATEST POSTS
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}