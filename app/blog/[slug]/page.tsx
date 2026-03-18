import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Helper to clean &nbsp; entities from plain text fields
function cleanText(text: string): string {
    return text
        .replace(/&nbsp;/gi, ' ')
        .replace(/\u00A0/g, ' ');
}

// Helper to clean &nbsp; entities from HTML content
function cleanHtml(html: string): string {
    return html.replace(/&nbsp;/gi, ' ');
}

// Generate static params for all posts
export async function generateStaticParams() {
    const posts = await prisma.blog.findMany({ select: { slug: true } });
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export const revalidate = 60; // Revalidate every minute if necessary

// Generate metadata for the post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    
    try {
        const post = await prisma.blog.findUnique({ where: { slug } });
        if (!post) throw new Error();

        return {
            title: cleanText(post.metaTitle),
            description: cleanText(post.metaDescription),
            alternates: {
                canonical: post.canonical || undefined,
            },
            openGraph: {
                title: cleanText(post.metaTitle),
                description: cleanText(post.metaDescription),
                type: 'article',
                publishedTime: post.date,
                images: post.coverImage ? [post.coverImage] : [],
            },
        };
    } catch (error) {
        return {
            title: 'Post Not Found',
        };
    }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
    const post = await prisma.blog.findUnique({ where: { slug } });
    if (!post) {
        notFound();
    }

    const title = cleanText(post.h1Title);
    const cleanedContent = cleanHtml(post.content);

    return (
        <article className="min-h-screen bg-white py-12">
            <div className="container mx-auto px-4 max-w-3xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 mb-8 transition-colors"
                >
                    ← Back to Blog
                </Link>

                <header className="mb-8">
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex gap-2 mb-4">
                            {post.tags.map(tag => (
                                <span key={tag} className="text-sm font-medium text-[#1e643e]">
                                    #{cleanText(tag)}
                                </span>
                            ))}
                        </div>
                    )}

                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
                        {title}
                    </h1>
                </header>

                {post.coverImage && (
                    <div className="relative w-full overflow-hidden rounded-xl mb-12 bg-zinc-100">
                        <img
                            src={post.coverImage}
                            alt={title}
                            className="object-cover h-auto w-full"
                        />
                    </div>
                )}

                <div
                    className="prose prose-lg prose-zinc max-w-none"
                    dangerouslySetInnerHTML={{ __html: cleanedContent }}
                />
            </div>
        </article>
    );
}
