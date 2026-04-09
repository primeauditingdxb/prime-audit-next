"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      if (data.success) {
        setBlogs(data.data);
      } else {
        setError(data.error || 'Failed to fetch blogs');
      }
    } catch (err: any) {
      setError(err?.message || 'Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      const res = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setBlogs(blogs.filter(b => b.id !== id));
      } else {
        alert(data.error || 'Failed to delete blog');
      }
    } catch (err: any) {
      alert(err?.message || 'Error deleting blog');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans p-6 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 flex flex-col md:flex-row justify-between items-center bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 p-6 rounded-2xl shadow-xl gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Master Dashboard
            </h1>
            <p className="text-neutral-400 mt-2">Manage all your published blog posts.</p>
          </div>
          <Link
            href="/ppdl-admin/blog"
            className="whitespace-nowrap bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-blue-500/20"
          >
            + Create New Blog
          </Link>
        </header>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <svg className="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        ) : error ? (
          <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-4 rounded-lg">
            {error}
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20 bg-neutral-900/30 border border-neutral-800 rounded-2xl">
            <p className="text-neutral-400 text-lg">No blogs found.</p>
          </div>
        ) : (
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-neutral-300">
                <thead className="bg-neutral-900 text-xs uppercase text-neutral-400 border-b border-neutral-800">
                  <tr>
                    <th scope="col" className="px-6 py-4">Title</th>
                    <th scope="col" className="px-6 py-4">Slug</th>
                    <th scope="col" className="px-6 py-4">Date</th>
                    <th scope="col" className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr key={blog.id} className="border-b border-neutral-800/50 hover:bg-neutral-800/30 transition-colors">
                      <td className="px-6 py-4 font-medium text-white max-w-xs truncate">
                        {blog.h1Title}
                      </td>
                      <td className="px-6 py-4 text-neutral-400">
                        {blog.slug}
                      </td>
                      <td className="px-6 py-4 text-neutral-400 whitespace-nowrap">
                        {blog.date}
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap">
                        <Link href={`/ppdl-admin/edit/${blog.id}`} className="font-medium text-blue-500 hover:text-blue-400 mr-4">
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="font-medium text-rose-500 hover:text-rose-400"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
