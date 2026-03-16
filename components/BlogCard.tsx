import Link from 'next/link';
import { Blog } from '@prisma/client';

interface BlogCardProps {
    post: Pick<Blog, 'slug' | 'coverImage' | 'h1Title' | 'metaDescription' | 'excerpt' | 'date'>;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <article className="flex flex-col overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl bg-white border border-zinc-100">
            {post.coverImage && (
                <Link href={`/blog/${post.slug}`} className="relative h-48 w-full overflow-hidden">
                    <img
                        src={post.coverImage}
                        alt={post.h1Title}
                        className="object-cover transition-transform duration-300 hover:scale-105 h-full w-full"
                    />
                </Link>
            )}
            <div className="flex flex-1 flex-col p-6">
                <Link href={`/blog/${post.slug}`} className="mt-2 block">
                    <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-[#1e643e] hover:text-[#1e643e] transition-colors">
                        {post.h1Title}
                    </h3>
                </Link>

                <p className="mt-3 flex-1 text-base text-zinc-600 line-clamp-3">
                    {post.excerpt || post.metaDescription}
                </p>
            </div>
        </article>
    );
}
