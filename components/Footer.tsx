import Link from 'next/link'
import { Heart, Zap, Mail, Twitter, Github } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neo-black text-neo-white border-t-4 border-neo-black">
      <div className="neo-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-neo-yellow border-4 border-neo-white p-2">
                <Zap className="h-6 w-6 text-neo-black" />
              </div>
              <span className="neo-subheader text-neo-white">TRENDSCOPE</span>
            </div>
            <p className="text-neo-white/80">
              Discover trending topics and expert insights. 
              Weekly content powered by data analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg uppercase tracking-wide text-neo-yellow">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neo-white/80 hover:text-neo-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neo-white/80 hover:text-neo-yellow transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neo-white/80 hover:text-neo-yellow transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neo-white/80 hover:text-neo-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg uppercase tracking-wide text-neo-pink">
              Subscribe
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/subscribe" className="text-neo-white/80 hover:text-neo-pink transition-colors">
                  Premium Content
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-neo-white/80 hover:text-neo-pink transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/rss" className="text-neo-white/80 hover:text-neo-pink transition-colors">
                  RSS Feed
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg uppercase tracking-wide text-neo-cyan">
              Connect
            </h3>
            <div className="flex space-x-3">
              <a
                href="mailto:contact@aiblog.com"
                className="bg-neo-cyan border-2 border-neo-white p-2 hover:bg-neo-yellow transition-colors"
              >
                <Mail className="h-5 w-5 text-neo-black" />
              </a>
              <a
                href="https://twitter.com/aiblog"
                className="bg-neo-cyan border-2 border-neo-white p-2 hover:bg-neo-yellow transition-colors"
              >
                <Twitter className="h-5 w-5 text-neo-black" />
              </a>
              <a
                href="https://github.com/aiblog"
                className="bg-neo-cyan border-2 border-neo-white p-2 hover:bg-neo-yellow transition-colors"
              >
                <Github className="h-5 w-5 text-neo-black" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-neo-white mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neo-white/60 text-sm">
            © {currentYear} AI Blog. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-neo-white/60 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-neo-red fill-current" />
            <span>and passion</span>
          </div>
        </div>
      </div>
    </footer>
  )
}