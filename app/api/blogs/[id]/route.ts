import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const prisma = new PrismaClient();

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await context.params;
    const { id } = resolvedParams;

    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    const blog = await prisma.blog.findUnique({
      where: { id: parseInt(id) }
    });

    if (!blog) return NextResponse.json({ error: 'Blog not found' }, { status: 404 });

    return NextResponse.json({ success: true, data: blog });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await context.params;
    const { id } = resolvedParams;
    
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    const formData = await request.formData();
    
    const metaTitle = formData.get('metaTitle') as string;
    const metaDescription = formData.get('metaDescription') as string;
    const canonical = formData.get('canonical') as string;
    const h1Title = formData.get('h1Title') as string;
    const date = formData.get('date') as string;
    const tags = formData.get('tags') as string;
    const excerpt = formData.get('excerpt') as string;
    const content = formData.get('content') as string;
    const slug = formData.get('slug') as string;
    
    const coverImageFile = formData.get('coverImage') as File | null;
    let coverImagePath = formData.get('existingCoverImage') as string || '';

    if (coverImageFile && coverImageFile.name && coverImageFile.size > 0) {
      const bytes = await coverImageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileExtension = coverImageFile.name.split('.').pop();
      const filename = `${slug || 'blog'}-${Date.now()}.${fileExtension}`;
      const filepath = join(process.cwd(), 'public', 'images', 'blogs', filename);
      
      await writeFile(filepath, buffer);
      coverImagePath = `/images/blogs/${filename}`;
    }

    const parsedTags = tags ? (tags.includes(',') ? tags.split(',').map(t => t.trim()) : [tags]) : [];

    const updatedBlog = await prisma.blog.update({
      where: { id: parseInt(id) },
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

    return NextResponse.json({ success: true, data: updatedBlog });
  } catch (error: any) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update blog' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await context.params;
    const { id } = resolvedParams;
    
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    await prisma.blog.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete blog' },
      { status: 500 }
    );
  }
}
