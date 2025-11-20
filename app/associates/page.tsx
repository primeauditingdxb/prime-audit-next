import { getMarkdownSync } from '@/lib/content'
import MarkdownRenderer from '../components/MarkdownRenderer'
import AssociateCard from '@/app/components/AssociateCard'
import AssociateDetail from '@/app/components/AssociateDetail'

export default function AssociatesPage() {
    const data = getMarkdownSync('associates')
    const banner = data.meta.bannerImage
    const associates = Array.isArray(data.meta.associates) ? data.meta.associates : []

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
                        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-center drop-shadow-lg">
                            {data.meta.bannerTitle}
                        </h1>
                        {/* {data.meta.description && (
                            <p className="mt-4 text-white/90 max-w-2xl">{data.meta.description}</p>
                        )} */}
                    </div>
                </div>
            </section>

            <main className="container mx-auto px-4 py-10">
                {/* <div className="max-w-3xl mx-auto text-center"> */}
                    <h2 className="text-2xl font-semibold text-primary-dark">{data.meta.mainTitle}</h2>
                    {/* <div className="mt-4 text-muted"><MarkdownRenderer html={data.contentHtml} /></div> */}
                    <div className="mt-4 text-muted">Business formation • Typing services • Visa services</div>
                {/* </div> */}

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {associates.map((a: any) => (
                        <AssociateCard key={a.id || a.slug} associate={a} />
                    ))}
                </div>

                <div className="mt-16">
                    {associates.map((a: any, idx: number) => (
                        <AssociateDetail key={a.id || a.slug} associate={{ id: a.slug || a.id, name: a.name, content: a.content || a.short, image: a.image, website: a.website, contact: a.contact }} reverse={idx % 2 === 1} />
                    ))}
                </div>
            </main>
        </>
    )
}
