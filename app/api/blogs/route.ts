import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const revalidate = 60; // Cache API responses for 60 seconds

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const pageParam = searchParams.get('page');
        const limitParam = searchParams.get('limit');

        let posts;

        if (pageParam && limitParam) {
            const page = parseInt(pageParam);
            const limit = parseInt(limitParam);
            const skip = (page - 1) * limit;

            posts = await prisma.blog.findMany({
                skip,
                take: limit,
                orderBy: {
                    date: 'desc'
                }
            });
        } else {
            posts = await prisma.blog.findMany({
                orderBy: {
                    date: 'desc'
                }
            });
        }

        return NextResponse.json({ success: true, data: posts }, {
            headers: {
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
            }
        });
    } catch (error: any) {
        console.error("Error fetching blogs:", error);
        return NextResponse.json({ success: false, error: 'Failed to fetch blogs', details: error?.message }, { status: 500 });
    }
}
