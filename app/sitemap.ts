import { MetadataRoute } from 'next';
import { PrismaClient } from '@prisma/client';
import { getMarkdownSync } from '@/lib/content';

const prisma = new PrismaClient();
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://primeauditsolutions.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/services',
    '/gallery',
    '/associates'
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Services Routes (from Markdown)
  let staticServiceRoutes: any[] = [];
  try {
    const servicesData = getMarkdownSync('services');
    const services = Array.isArray(servicesData?.meta?.services) ? servicesData.meta.services : [];
    
    staticServiceRoutes = services.map((service: any) => ({
      url: `${BASE_URL}/services/${service.slug || service.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }));
  } catch (error) {
    console.error('Failed to parse services for sitemap', error);
  }

  // 3. Dynamic Blog Routes (from Database)
  let blogRoutes: any[] = [];
  try {
    const blogs = await prisma.blog.findMany({
      select: { slug: true, updatedAt: true },
      orderBy: { date: 'desc' }
    });

    blogRoutes = blogs.map((blog) => ({
      url: `${BASE_URL}/blog/${blog.slug}`,
      lastModified: blog.updatedAt,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Failed to fetch blogs for sitemap', error);
  }

  // Combine and return all routes
  return [...staticRoutes, ...staticServiceRoutes, ...blogRoutes];
}
