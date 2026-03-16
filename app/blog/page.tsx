import { Metadata } from 'next';
import { PrismaClient } from '@prisma/client';
import BlogCard from '@/components/BlogCard';

export const metadata: Metadata = {
    title: 'Blog | Prime Audit Next',
    description: 'Latest news, insights, and tutorials from the Prime Audit team.',
};

const prisma = new PrismaClient();

export const revalidate = 60; // Revalidate every minute if necessary

export default async function BlogIndex() {
    const allPosts = await prisma.blog.findMany({
        orderBy: {
            date: 'desc'
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

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:pt-20">
                    {allPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
