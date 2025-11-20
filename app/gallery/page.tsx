import { getMarkdownSync } from '@/lib/content'

export default function GalleryPage() {
  const data = getMarkdownSync('gallery')
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-primary-dark">{data.meta.title}</h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-3/4 bg-gray-100 rounded overflow-hidden">
            <img
              alt={`gallery-${i}`}
              src={`/images/gallery/gallery-${i + 1}.jpg`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}