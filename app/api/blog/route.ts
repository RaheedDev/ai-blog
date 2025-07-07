import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'content/blogs')

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { title, content, description, tags, slug } = body
    
    if (!title || !content || !slug) {
      return NextResponse.json(
        { error: 'Missing required fields: title, content, slug' },
        { status: 400 }
      )
    }

    // Ensure the blogs directory exists
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true })
    }

    // Create frontmatter
    const frontmatter = `---
title: "${title}"
description: "${description || ''}"
date: "${new Date().toISOString().split('T')[0]}"
readTime: "${body.readTime || '5 min read'}"
tags: ${JSON.stringify(tags || [])}
imageUrl: "${body.imageUrl || ''}"
---

${content}`

    // Write the file
    const filePath = path.join(postsDirectory, `${slug}.mdx`)
    fs.writeFileSync(filePath, frontmatter, 'utf8')

    return NextResponse.json(
      { message: 'Blog post created successfully', slug },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating blog post:', error)
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Blog API endpoint is working' },
    { status: 200 }
  )
}