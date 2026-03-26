"use client";

import { useState } from 'react';
import { Blog } from '@prisma/client';
import BlogCard from '@/components/BlogCard';

interface BlogListProps {
    initialPosts: Pick<Blog, 'slug' | 'coverImage' | 'h1Title' | 'metaDescription' | 'excerpt' | 'date'>[];
    totalPosts: number;
}

export default function BlogList({ initialPosts, totalPosts }: BlogListProps) {
    const [posts, setPosts] = useState(initialPosts);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    
    const limit = 12;
    const hasMore = posts.length < totalPosts;

    const loadMore = async () => {
        if (loading || !hasMore) return;
        setLoading(true);
        try {
            const nextPage = page + 1;
            const res = await fetch(`/api/blogs?page=${nextPage}&limit=${limit}`);
            if (res.ok) {
                const responseData = await res.json();
                if (responseData.success) {
                    setPosts(prev => [...prev, ...responseData.data]);
                    setPage(nextPage);
                } else {
                    console.error("API returned error:", responseData.error);
                }
            } else {
                console.error("Failed to load more blogs");
            }
        } catch (error) {
            console.error("Failed to load more blogs", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:pt-20 w-full mb-12">
                {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
            
            {hasMore && (
                <button 
                    onClick={loadMore} 
                    disabled={loading}
                    className="px-8 py-3 bg-[#1e643e] text-white font-medium rounded-full hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                >
                    {loading ? 'Loading...' : 'Load More Blogs'}
                </button>
            )}
        </div>
    );
}
