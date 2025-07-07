'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-neo-white border-b-4 border-neo-black sticky top-0 z-50">
      <div className="neo-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-neo-yellow border-4 border-neo-black p-2 shadow-neo group-hover:shadow-neo-lg transform group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
              <Zap className="h-6 w-6 text-neo-black" />
            </div>
            <span className="neo-subheader text-2xl">TRENDSCOPE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="neo-button text-sm px-4 py-2 hover:bg-neo-pink hover:text-neo-white"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/subscribe"
              className="neo-button neo-button-primary ml-4"
            >
              SUBSCRIBE
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden neo-button p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t-4 border-neo-black bg-neo-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block neo-button w-full text-left mb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/subscribe"
                className="block neo-button neo-button-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                SUBSCRIBE
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}