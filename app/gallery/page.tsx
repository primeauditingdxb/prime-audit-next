import { getMarkdownSync } from '@/lib/content'

export default function GalleryPage() {
    const data = getMarkdownSync('gallery')
    const banner = data.meta.bannerImage

    return (

        <>
            <section
                className="about-bg relative"
                style={{
                    backgroundImage: `url(${banner})`,
                }}
                aria-label={data.meta.bannerTitle || 'Associates'}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 container mx-auto px-4 py-16 md:py-28">
                    <div className="max-w-3xl">
                        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-center md:text-left drop-shadow-lg">
                            {data.meta.bannerTitle}
                        </h1>
                        {/* {data.meta.description && (
                            <p className="mt-4 text-white/90 max-w-2xl">{data.meta.description}</p>
                        )} */}
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                {/* <h2 className="text-2xl font-semibold text-primary-dark">{data.meta.title}</h2> */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="aspect-3/4 bg-gray-100 rounded overflow-hidden transform transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1.5">
                            <img
                                alt={`gallery-${i}`}
                                src={`/images/gallery/gallery-${i + 1}.jpg`}
                                className="w-full h-full object-cover "
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}