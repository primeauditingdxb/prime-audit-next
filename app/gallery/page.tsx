import { getMarkdownSync } from '@/lib/content'

export default function GalleryPage() {
  const data = getMarkdownSync('gallery')
  // images referenced as /uploads/filename from Netlify CMS
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">{data.meta.title}</h2>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-32 bg-gray-100 rounded overflow-hidden">
            <img alt={`gallery-${i}`} src={`/uploads/gallery-${i+1}.jpg`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
