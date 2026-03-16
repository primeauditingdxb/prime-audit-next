import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const metaTitle = formData.get('metaTitle') as string;
    const metaDescription = formData.get('metaDescription') as string;
    const canonical = formData.get('canonical') as string;
    const h1Title = formData.get('h1Title') as string;
    const date = formData.get('date') as string;
    const tags = formData.get('tags') as string;
    const excerpt = formData.get('excerpt') as string;
    const content = formData.get('content') as string;
    const slug = formData.get('slug') as string;
    
    // File processing
    const coverImageFile = formData.get('coverImage') as File | null;
    let coverImagePath = '';

    if (coverImageFile && coverImageFile.name) {
      const bytes = await coverImageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Save to public/images/blogs
      const fileExtension = coverImageFile.name.split('.').pop();
      const filename = `${slug || 'blog'}-${Date.now()}.${fileExtension}`;
      const filepath = join(process.cwd(), 'public', 'images', 'blogs', filename);
      
      await writeFile(filepath, buffer);
      coverImagePath = `/images/blogs/${filename}`;
    }

    // Parse tags JSON or comma-separated
    const parsedTags = tags ? tags.split(',').map(t => t.trim()) : [];

    const newBlog = await prisma.blog.create({
      data: {
        metaTitle,
        metaDescription,
        canonical: canonical || null,
        coverImage: coverImagePath || '/images/blogs/default.jpg',
        h1Title,
        date: date || new Date().toISOString().split('T')[0],
        tags: parsedTags,
        excerpt,
        content,
        slug,
      },
    });

    return NextResponse.json({ success: true, data: newBlog });
  } catch (error: any) {
    console.error('Error saving blog:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to save blog' },
      { status: 500 }
    );
  }
}
