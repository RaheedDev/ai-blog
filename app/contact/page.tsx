'use client'

import React from 'react'
import { useState } from 'react'
import { Mail, MessageSquare, Send, MapPin, Clock, Phone } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with your preferred form handling service
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-neo-white">
      {/* Hero Section */}
      <section className="bg-neo-orange border-b-4 border-neo-black">
        <div className="neo-container py-20">
          <div className="max-w-4xl">
            <h1 className="neo-header mb-6">
              GET IN
              <br />
              <span className="text-neo-black">TOUCH</span>
            </h1>
            <p className="neo-text mb-8">
              Have questions about our AI blog? Want to collaborate or provide 
              feedback? We'd love to hear from you! Reach out and let's start 
              a conversation.
            </p>
          </div>
        </div>
      </section>

      <div className="neo-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="neo-card">
              <h2 className="neo-subheader mb-8">SEND US A MESSAGE</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-bold text-sm uppercase tracking-wide mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="neo-input w-full"
                      placeholder="ENTER YOUR NAME..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-bold text-sm uppercase tracking-wide mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="neo-input w-full"
                      placeholder="YOUR@EMAIL.COM"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-bold text-sm uppercase tracking-wide mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="neo-input w-full"
                  >
                    <option value="">SELECT A SUBJECT...</option>
                    <option value="general">General Inquiry</option>
                    <option value="subscription">Subscription Support</option>
                    <option value="technical">Technical Issue</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-bold text-sm uppercase tracking-wide mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="neo-input w-full resize-none"
                    placeholder="TELL US WHAT'S ON YOUR MIND..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="neo-button neo-button-primary flex items-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="neo-card bg-neo-yellow">
              <h3 className="font-bold text-xl mb-6 uppercase">CONTACT INFO</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-neo-black mt-1" />
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wide">Email</p>
                    <p className="text-neo-black/80 font-mono">contact@aiblog.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-neo-black mt-1" />
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wide">Response Time</p>
                    <p className="text-neo-black/80">Usually within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-neo-black mt-1" />
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wide">Location</p>
                    <p className="text-neo-black/80">India (Remote Team)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="neo-card bg-neo-cyan">
              <h3 className="font-bold text-xl mb-6 uppercase">QUICK ANSWERS</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-sm uppercase tracking-wide mb-1">
                    How often do you publish?
                  </p>
                  <p className="text-neo-black/80 text-sm">
                    Every Monday at 10 AM, automatically generated from trending topics.
                  </p>
                </div>
                
                <div>
                  <p className="font-bold text-sm uppercase tracking-wide mb-1">
                    Can I suggest topics?
                  </p>
                  <p className="text-neo-black/80 text-sm">
                    Our AI picks topics from Google Trends, but we love feedback!
                  </p>
                </div>
                
                <div>
                  <p className="font-bold text-sm uppercase tracking-wide mb-1">
                    Is content really AI-generated?
                  </p>
                  <p className="text-neo-black/80 text-sm">
                    Yes! 100% automated from trend detection to publishing.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="neo-card bg-neo-pink text-neo-white">
              <h3 className="font-bold text-xl mb-6 uppercase">FOLLOW US</h3>
              
              <div className="space-y-3">
                <a 
                  href="https://twitter.com/aiblog" 
                  className="flex items-center space-x-3 text-neo-white/90 hover:text-neo-white transition-colors"
                >
                  <div className="bg-neo-white text-neo-black p-2 rounded">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <span className="font-mono">@aiblog</span>
                </a>
                
                <a 
                  href="mailto:contact@aiblog.com" 
                  className="flex items-center space-x-3 text-neo-white/90 hover:text-neo-white transition-colors"
                >
                  <div className="bg-neo-white text-neo-black p-2 rounded">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="font-mono">contact@aiblog.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}