"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter, useParams } from 'next/navigation';
import 'react-quill-new/dist/quill.snow.css';
import '../../blog/quill-expandable.css';

// Dynamically import react-quill-new to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false, loading: () => <div className="h-64 border border-neutral-800 bg-neutral-950/80 rounded-lg animate-pulse"></div> });

export default function EditBlogDashboard() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  
  const [content, setContent] = useState('');
  const [blogData, setBlogData] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        const data = await res.json();
        if (data.success) {
          setBlogData(data.data);
          setContent(data.data.content || '');
        } else {
          setError(data.error || 'Failed to load blog.');
        }
      } catch (err: any) {
        setError(err?.message || 'Error fetching blog data.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('content', content); 
    formData.append('existingCoverImage', blogData?.coverImage); 

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Blog post successfully updated!');
        setTimeout(() => router.push('/ppdl-admin'), 1500);
      } else {
        setError(data.error || 'Failed to update blog post.');
      }
    } catch (err: any) {
      setError(err?.message || 'An unexpected error occurred.');
    } finally {
      setSubmitting(false);
    }
  };

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image', 'video'],
      ['clean'],
      [{ 'color': [] }, { 'background': [] }],
    ],
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex justify-center items-center">
        <svg className="animate-spin h-12 w-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  if (error && !blogData) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex justify-center items-center">
        <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 px-6 py-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans p-6 lg:p-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center relative">
          <button 
            type="button" 
            onClick={() => router.push('/ppdl-admin')}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors"
          >
            ← Back to Dash
          </button>
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Edit Blog Dashboard
          </h1>
          <p className="text-neutral-400 text-lg">
            Update your existing content in Neon DB.
          </p>
        </header>

        <main className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 rounded-2xl p-6 md:p-10 shadow-2xl">
          {success && (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-3 rounded-lg mb-6 flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              {success}
            </div>
          )}
          {error && (
            <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 px-4 py-3 rounded-lg mb-6 flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="h1Title" className="text-sm font-medium text-neutral-300">H1 Title</label>
                <input required type="text" id="h1Title" name="h1Title" defaultValue={blogData?.h1Title} placeholder="The Main Blog Title" 
                  className="w-full bg-neutral-950/50 border border-neutral-800 text-neutral-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>

              <div className="space-y-2">
                <label htmlFor="slug" className="text-sm font-medium text-neutral-300">URL Slug</label>
                <input required type="text" id="slug" name="slug" defaultValue={blogData?.slug} placeholder="e.g. how-to-save-taxes" 
                  className="w-full bg-neutral-950/50 border border-neutral-800 text-neutral-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>

              <div className="space-y-2">
                <label htmlFor="metaTitle" className="text-sm font-medium text-neutral-300">Meta Title</label>
                <input required type="text" id="metaTitle" name="metaTitle" defaultValue={blogData?.metaTitle} placeholder="SEO Title" 
                  className="w-full bg-neutral-950/50 border border-neutral-800 text-neutral-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>

              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium text-neutral-300">Publish Date</label>
                <input required type="date" id="date" name="date" defaultValue={blogData?.date}
                  className="w-full bg-neutral-950/50 border border-neutral-800 text-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all [&::-webkit-calendar-picker-indicator]:filter-invert" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="metaDescription" className="text-sm font-medium text-neutral-300">Meta Description</label>
              <textarea required id="metaDescription" name="metaDescription" rows={2} defaultValue={blogData?.metaDescription} placeholder="Brief SEO description..."
                className="w-full bg-neutral-950/50 border border-neutral-800 text-neutral-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"></textarea>
            </div>

            <div className="space-y-2">
              <label htmlFor="canonical" className="text-sm font-medium text-neutral-300">Canonical URL (Optional)</label>
              <input type="url" id="canonical" name="canonical" defaultValue={blogData?.canonical || ''} placeholder="https://yoursite.com/blog/..." 
                className="w-full bg-neutral-950/50 border border-neutral-800 text-neutral-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
            </div>

            <div className="space-y-2">
              <label htmlFor="tags" className="text-sm font-medium text-neutral-300">Tags</label>
              <input type="text" id="tags" name="tags" defaultValue={blogData?.tags ? blogData.tags.join(', ') : ''} placeholder="Tax, Dubai, Compliance (comma separated)" 
                className="w-full bg-neutral-950/50 border border-neutral-800 text-neutral-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
            </div>

            <div className="space-y-2">
              <label htmlFor="excerpt" className="text-sm font-medium text-neutral-300">Excerpt</label>
              <textarea required id="excerpt" name="excerpt" rows={3} defaultValue={blogData?.excerpt} placeholder="A short summary for the blog card..."
                className="w-full bg-neutral-950/50 border border-neutral-800 text-neutral-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"></textarea>
            </div>

            <div className="space-y-2">
              <label htmlFor="content" className="text-sm font-medium text-neutral-300">Rich Text Content</label>
              <div className="bg-neutral-100 text-neutral-950 rounded-lg overflow-hidden border-2 border-neutral-800 focus-within:border-blue-500 transition-all quill-expandable-wrapper">
                <ReactQuill 
                  theme="snow" 
                  value={content} 
                  onChange={setContent} 
                  modules={quillModules}
                  className="quill-expandable"
                />
              </div>
            </div>

            <div className="space-y-2 pt-12 md:pt-14">
              <label htmlFor="coverImage" className="text-sm font-medium text-neutral-300">Replace Cover Image (Leave blank to keep current)</label>
              <input type="file" id="coverImage" name="coverImage" accept="image/*"
                className="w-full file:mr-4 file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 bg-neutral-950/50 border border-neutral-800 text-neutral-300 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer" />
              {blogData?.coverImage && (
                <p className="text-xs text-neutral-500 mt-2">Current image: {blogData.coverImage}</p>
              )}
            </div>

            <button type="submit" disabled={submitting}
              className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 mt-4">
              {submitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving Updates...
                </span>
              ) : (
                'Save Changes'
              )}
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
