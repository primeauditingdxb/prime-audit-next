import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { uploadBlogImageToR2 } from '@/lib/r2';

const prisma = new PrismaClient();

// Helper to strip &nbsp; entities and non-breaking space characters from text
function sanitizeText(text: string): string {
  if (!text) return text;
  return text.replace(/&nbsp;/gi, ' ').replace(/\u00A0/g, ' ');
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extract form fields and sanitize &nbsp; entities
    const metaTitle = sanitizeText(formData.get('metaTitle') as string);
    const metaDescription = sanitizeText(formData.get('metaDescription') as string);
    const canonical = formData.get('canonical') as string;
    const h1Title = sanitizeText(formData.get('h1Title') as string);
    const date = formData.get('date') as string;
    const tags = sanitizeText(formData.get('tags') as string);
    const excerpt = sanitizeText(formData.get('excerpt') as string);
    const content = sanitizeText(formData.get('content') as string);
    const slug = formData.get('slug') as string;
    
    // File processing
    const coverImageFile = formData.get('coverImage') as File | null;
    let coverImagePath = '';

    if (coverImageFile && coverImageFile.name && coverImageFile.size > 0) {
      const bytes = await coverImageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Upload to Cloudflare R2
      coverImagePath = await uploadBlogImageToR2(
        buffer,
        coverImageFile.name,
        coverImageFile.type
      );
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
