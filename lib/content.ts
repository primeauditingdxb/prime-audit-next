import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export type MarkdownFile = {
  meta: Record<string, any>
  contentHtml: any,
  raw: string
}

const contentDir = path.join(process.cwd(), 'content')

export function getMarkdownSync(slug: string): MarkdownFile {
  const filePath = path.join(contentDir, `${slug}.md`)
  const file = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(file)
  const contentHtml = marked.parse(content || '')
  return { meta: (data || {}), contentHtml, raw: content || '' }
}

export function listPages(): string[] {
  return fs.readdirSync(contentDir).filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''))
}
