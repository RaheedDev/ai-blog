import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'content/blogs')

// Webhook endpoint specifically for n8n
export async function POST(request: NextRequest) {
  try {
    // Optional: Add webhook secret validation
    const webhookSecret = process.env.WEBHOOK_SECRET
    const providedSecret = request.headers.get('x-webhook-secret')
    
    if (webhookSecret && providedSecret !== webhookSecret) {
      return NextResponse.json(
        { error: 'Invalid webhook secret' },
        { status: 401 }
      )
    }

    const body = await request.json()
    console.log('Received webhook data:', body)
    
    // Handle different data structures from n8n
    const blogData = body.data || body
    
    const { 
      title, 
      content, 
      description, 
      tags, 
      slug,
      imageUrl,
      featuredImage,
      readTime 
    } = blogData
    
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Missing required fields: title, content' },
        { status: 400 }
      )
    }

    // Generate slug if not provided
    const finalSlug = slug || title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    // Ensure the blogs directory exists
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true })
    }

    // Clean content - remove HTML document structure if present
    let cleanContent = content;
    if (content.includes('<!DOCTYPE html>')) {
      // Extract only the content between body tags or use a simple text extraction
      const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      if (bodyMatch) {
        cleanContent = bodyMatch[1].replace(/<[^>]*>/g, '').trim();
      } else {
        // Fallback: remove all HTML tags
        cleanContent = content.replace(/<[^>]*>/g, '').trim();
      }
    }

    // Handle image URL from either field
    const finalImageUrl = imageUrl || featuredImage || '';

    // Create frontmatter
    const frontmatter = `---
title: "${title}"
description: "${description || title}"
date: "${new Date().toISOString().split('T')[0]}"
readTime: "${readTime || '5 min read'}"
tags: ${JSON.stringify(tags || ['trending'])}
imageUrl: "${finalImageUrl}"
---

${cleanContent}`

    // Write the file
    const filePath = path.join(postsDirectory, `${finalSlug}.mdx`)
    fs.writeFileSync(filePath, frontmatter, 'utf8')

    console.log(`Blog post created: ${finalSlug}.mdx`)

    return NextResponse.json(
      { 
        message: 'Blog post created successfully', 
        slug: finalSlug,
        filePath: `${finalSlug}.mdx`
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error in webhook:', error)
    return NextResponse.json(
      { error: 'Failed to process webhook', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}