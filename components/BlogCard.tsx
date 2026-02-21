import Link from 'next/link';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { SimplePost } from '@/lib/blog';

interface BlogCardProps {
    post: SimplePost;
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
                {/* <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <time dateTime={post.date}>
                        {format(parseISO(post.date), 'MMMM d, yyyy')}
                    </time>
                </div> */}

                <Link href={`/blog/${post.slug}`} className="mt-2 block">
                    <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-[#1e643e] hover:text-[#1e643e] transition-colors">
                        {post.h1Title}
                    </h3>
                </Link>

                <p className="mt-3 flex-1 text-base text-zinc-600 line-clamp-3">
                    {post.excerpt || post.metaDescription}
                </p>

                {/* {post.tags && post.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="inline-flex items-center rounded-full bg-zinc-50 px-2.5 py-0.5 text-xs font-medium text-zinc-800 border border-zinc-200">
                                {tag}
                            </span>
                        ))}
                    </div>
                )} */}
            </div>
        </article>
    );
}
