import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blogs')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  imageUrl?: string
  content: string
}

export async function getBlogPosts(limit?: number): Promise<BlogPost[]> {
  try {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        // Handle image URL - check multiple possible fields from workflow
        let imageUrl = data.imageUrl || data.featuredImage || '';
        if (imageUrl && imageUrl.startsWith('/images/blog/')) {
          imageUrl = imageUrl; // Already correct path
        } else if (imageUrl && !imageUrl.startsWith('http')) {
          imageUrl = `/images/blog/${imageUrl}`; // Add path prefix
        }

        return {
          slug,
          title: data.title || 'Untitled',
          description: data.description || '',
          date: data.date || new Date().toISOString().split('T')[0],
          readTime: data.readTime || '5 min read',
          tags: data.tags || [],
          imageUrl,
          content,
        }
      })

    // Sort posts by date (newest first)
    const sortedPosts = allPostsData.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    return limit ? sortedPosts.slice(0, limit) : sortedPosts
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Handle image URL - check multiple possible fields from workflow
    let imageUrl = data.imageUrl || data.featuredImage || '';
    if (imageUrl && imageUrl.startsWith('/images/blog/')) {
      imageUrl = imageUrl; // Already correct path
    } else if (imageUrl && !imageUrl.startsWith('http')) {
      imageUrl = `/images/blog/${imageUrl}`; // Add path prefix
    }

    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || new Date().toISOString().split('T')[0],
      readTime: data.readTime || '5 min read',
      tags: data.tags || [],
      imageUrl,
      content,
    }
  } catch (error) {
    console.error('Error reading blog post:', error)
    return null
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => fileName.replace(/\.mdx$/, ''))
  } catch (error) {
    console.error('Error getting blog slugs:', error)
    return []
  }
}