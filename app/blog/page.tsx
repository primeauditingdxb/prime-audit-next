import { Metadata } from 'next';
import { PrismaClient } from '@prisma/client';
import BlogList from '@/components/BlogList';

export const metadata: Metadata = {
    title: 'Blog | Prime Audit Next',
    description: 'Latest news, insights, and tutorials from the Prime Audit team.',
};

const prisma = new PrismaClient();

export const revalidate = 60; // Revalidate every minute if necessary

export default async function BlogIndex() {
    const totalPosts = await prisma.blog.count();
    const initialPosts = await prisma.blog.findMany({
        take: 12,
        orderBy: {
            date: 'desc'
        },
        select: {
            slug: true,
            coverImage: true,
            h1Title: true,
            metaDescription: true,
            excerpt: true,
            date: true,
        }
    });

    return (
        <div className="bg-white min-h-screen py-20 lg:py-40">
            <div className="container mx-auto px-4 max-w-6xl">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                        Our Blogs
                    </h1>

                </header>

                <BlogList initialPosts={initialPosts} totalPosts={totalPosts} />
            </div>
        </div>
    );
}
