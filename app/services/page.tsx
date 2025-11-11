import { getMarkdownSync } from '@/lib/content'
import MarkdownRenderer from '../components/MarkdownRenderer'
import ServiceCard from '../components/ServiceCard'
import ServiceDetail from '../components/ServiceDetail'

export default function ServicesPage() {
    const data = getMarkdownSync('services')
    const banner = data.meta.bannerImage
    const services = Array.isArray(data.meta.services) ? data.meta.services : []

    return (
        <>
            <section
                className="about-bg relative"
                style={{
                    backgroundImage: `url(${banner})`,
                }}
                aria-label={data.meta.bannerTitle || 'Services'}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 container mx-auto px-4 py-16 md:py-28">
                    <div className="max-w-3xl">
                        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-lg">
                            {data.meta.bannerTitle}
                        </h1>
                        {/* {data.meta.description && (
                            <p className="mt-4 text-white/90 max-w-2xl">{data.meta.description}</p>
                        )} */}
                    </div>
                </div>
            </section>

            <main className="container mx-auto px-4 py-10">
                <h2 className="text-2xl font-semibold text-primary-dark">{data.meta.mainTitle}</h2>
                {/* <div className="mt-4 text-muted"><MarkdownRenderer html={data.contentHtml} /></div> */}


                {/* Services grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s: any) => (
                        <ServiceCard key={s.id || s.slug} service={s} />
                    ))}
                </div>

                {/* Detailed sections */}
                {/* Detailed sections */}
                <div className="mt-12">
                    {services.map((s: any, idx: number) => (
                        <section
                            key={s.id || s.slug}
                            id={s.slug || s.id}  
                            className="scroll-mt-20" 
                        >
                            <ServiceDetail
                                service={{
                                    id: s.slug || s.id,
                                    title: s.title,
                                    content: s.content || s.short,
                                    image: s.image,
                                    features: s.features
                                }}
                                reverse={idx % 2 === 1}
                            />
                        </section>
                    ))}
                </div>
            </main>
        </>
    )
}
