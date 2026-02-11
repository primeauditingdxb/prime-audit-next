import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import { getAllPostSlugs, getPostData } from '@/lib/blog';

// Generate static params for all posts
export async function generateStaticParams() {
    const posts = getAllPostSlugs();
    return posts.map((post) => ({
        slug: post.params.slug,
    }));
}

// Generate metadata for the post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    try {
        const post = await getPostData(slug);
        return {
            title: post.metaTitle,
            description: post.metaDescription,
            alternates: {
                canonical: post.canonical,
            },
            openGraph: {
                title: post.metaTitle,
                description: post.metaDescription,
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
    let post;
    try {
        post = await getPostData(slug);
    } catch (error) {
        notFound();
    }

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
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
                        {post.h1Title}
                    </h1>

                    <div className="flex items-center gap-4 text-zinc-500">
                        <time dateTime={post.date}>
                            {format(parseISO(post.date), 'MMMM d, yyyy')}
                        </time>
                    </div>
                </header>

                {post.coverImage && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-12 bg-zinc-100">
                        <img
                            src={post.coverImage}
                            alt={post.h1Title}
                            className="object-cover h-full w-full"
                        />
                    </div>
                )}

                <div
                    className="prose prose-lg prose-zinc max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />
            </div>
        </article>
    );
}
