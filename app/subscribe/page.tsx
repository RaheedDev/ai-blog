'use client'

import React from 'react'
import { useState } from 'react'
import { Check, Crown, Zap, Star, Mail, Bell } from 'lucide-react'

export default function SubscribePage() {
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'premium'>('premium')
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscription:', { plan: selectedPlan, email })
    // Integrate with your payment processor (Stripe, etc.)
  }

  return (
    <div className="min-h-screen bg-neo-white">
      {/* Header */}
      <section className="bg-neo-pink border-b-4 border-neo-black">
        <div className="neo-container py-16">
          <h1 className="neo-header text-neo-white mb-4">
            SUBSCRIBE
          </h1>
          <p className="neo-text text-neo-white/90 max-w-2xl">
            Get premium access to AI-generated insights and support our mission 
            to democratize trending content.
          </p>
        </div>
      </section>

      <div className="neo-container py-12">
        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Free Plan */}
          <div className={`neo-card ${selectedPlan === 'free' ? 'bg-neo-yellow' : ''} cursor-pointer`}
               onClick={() => setSelectedPlan('free')}>
            <div className="text-center mb-6">
              <Zap className="h-12 w-12 mx-auto mb-4 text-neo-black" />
              <h2 className="neo-subheader text-2xl">FREE READER</h2>
              <p className="text-4xl font-black mt-4">₹0<span className="text-lg font-normal">/month</span></p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-neo-green" />
                <span>Weekly AI blog posts</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-neo-green" />
                <span>Google Trends insights</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-neo-green" />
                <span>Featured AI images</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-neo-green" />
                <span>RSS feed access</span>
              </li>
              <li className="flex items-center space-x-3 text-neo-black/60">
                <span className="h-5 w-5 border-2 border-neo-black/30 rounded"></span>
                <span>Ad-free experience</span>
              </li>
              <li className="flex items-center space-x-3 text-neo-black/60">
                <span className="h-5 w-5 border-2 border-neo-black/30 rounded"></span>
                <span>Early access to posts</span>
              </li>
              <li className="flex items-center space-x-3 text-neo-black/60">
                <span className="h-5 w-5 border-2 border-neo-black/30 rounded"></span>
                <span>Exclusive content</span>
              </li>
            </ul>
            
            <button 
              className={`neo-button w-full text-center ${selectedPlan === 'free' ? 'neo-button-primary' : ''}`}
              onClick={() => setSelectedPlan('free')}
            >
              SELECT FREE
            </button>
          </div>

          {/* Premium Plan */}
          <div className={`neo-card ${selectedPlan === 'premium' ? 'bg-neo-cyan' : ''} cursor-pointer relative`}
               onClick={() => setSelectedPlan('premium')}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-neo-yellow border-4 border-neo-black px-4 py-1">
                <span className="font-bold text-sm uppercase">POPULAR</span>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <Crown className="h-12 w-12 mx-auto mb-4 text-neo-black" />
              <h2 className="neo-subheader text-2xl">PREMIUM</h2>
              <p className="text-4xl font-black mt-4">₹299<span className="text-lg font-normal">/month</span></p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-neo-green" />
                <span>Everything in Free</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-neo-green" />
                <span><strong>Ad-free experience</strong></span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-neo-green" />
                <span><strong>Early access</strong> (24h before)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-neo-green" />
                <span><strong>Exclusive content</strong> & insights</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-neo-green" />
                <span><strong>Email notifications</strong></span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-neo-green" />
                <span><strong>Priority support</strong></span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-neo-green" />
                <span><strong>Download posts</strong> as PDF</span>
              </li>
            </ul>
            
            <button 
              className={`neo-button w-full text-center ${selectedPlan === 'premium' ? 'neo-button-primary' : ''}`}
              onClick={() => setSelectedPlan('premium')}
            >
              SELECT PREMIUM
            </button>
          </div>
        </div>

        {/* Subscription Form */}
        <div className="max-w-2xl mx-auto">
          <div className="neo-card bg-neo-yellow">
            <h3 className="neo-subheader text-center mb-8">
              {selectedPlan === 'premium' ? 'START PREMIUM' : 'JOIN FREE'}
            </h3>
            
            <form onSubmit={handleSubscribe} className="space-y-6">
              <div>
                <label htmlFor="email" className="block font-bold text-sm uppercase tracking-wide mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neo-black/60" />
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="neo-input pl-12 w-full"
                    placeholder="YOUR@EMAIL.COM"
                  />
                </div>
              </div>
              
              {selectedPlan === 'premium' && (
                <div className="bg-neo-white border-4 border-neo-black p-6">
                  <h4 className="font-bold text-lg mb-4 uppercase">Payment Details</h4>
                  <p className="text-neo-black/80 mb-4">
                    You'll be redirected to our secure payment processor to complete your subscription.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-neo-black/60">
                    <Star className="h-4 w-4" />
                    <span>Cancel anytime • 7-day money-back guarantee</span>
                  </div>
                </div>
              )}
              
              <button
                type="submit"
                className="neo-button neo-button-primary w-full text-center flex items-center justify-center space-x-2"
              >
                {selectedPlan === 'premium' ? (
                  <>
                    <Crown className="h-5 w-5" />
                    <span>START PREMIUM - ₹299/MONTH</span>
                  </>
                ) : (
                  <>
                    <Bell className="h-5 w-5" />
                    <span>JOIN FREE</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h3 className="neo-subheader text-center mb-12">WHY SUBSCRIBE?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neo-card text-center">
              <div className="bg-neo-pink border-4 border-neo-black p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-neo-white" />
              </div>
              <h4 className="font-bold text-lg mb-2 uppercase">SUPPORT AI INNOVATION</h4>
              <p className="text-neo-black/80">
                Help us improve our AI systems and create better content for everyone.
              </p>
            </div>
            
            <div className="neo-card text-center">
              <div className="bg-neo-cyan border-4 border-neo-black p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-neo-black" />
              </div>
              <h4 className="font-bold text-lg mb-2 uppercase">EXCLUSIVE ACCESS</h4>
              <p className="text-neo-black/80">
                Get premium content, early access, and features not available to free users.
              </p>
            </div>
            
            <div className="neo-card text-center">
              <div className="bg-neo-green border-4 border-neo-black p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Crown className="h-8 w-8 text-neo-black" />
              </div>
              <h4 className="font-bold text-lg mb-2 uppercase">AD-FREE EXPERIENCE</h4>
              <p className="text-neo-black/80">
                Enjoy clean, distraction-free reading with no advertisements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}