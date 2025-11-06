import { getMarkdownSync } from '@/lib/content'
import MarkdownRenderer from '../components/MarkdownRenderer'

export default function ServicesPage() {
  const data = getMarkdownSync('services')
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">{data.meta.title}</h2>
      <div className="mt-4 text-slate-600"><MarkdownRenderer html={data.contentHtml} /></div>
    </div>
  )
}
