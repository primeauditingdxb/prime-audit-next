import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { date: 'desc' },
      select: {
        id: true,
        slug: true,
        h1Title: true,
        date: true,
        createdAt: true,
        coverImage: true,
      }
    });
    return NextResponse.json({ success: true, data: blogs });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}
