export const dynamic = "force-static";
import { NextResponse } from 'next/server'
import { getMarkdownSync } from '@/lib/content'

export async function GET() {
  try {
    const data = getMarkdownSync('services')
    const services = (data.meta.services || []).map((s: any) => ({ id: s.id, title: s.title, slug: s.slug, short: s.short }))
    return NextResponse.json({ services })
  } catch (err) {
    return NextResponse.json({ services: [] })
  }
}
