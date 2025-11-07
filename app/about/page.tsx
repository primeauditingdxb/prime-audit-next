import { getMarkdownSync } from '@/lib/content'
import MarkdownRenderer from '../components/MarkdownRenderer'
import Link from 'next/link'
import LongCard from '../components/LongCard'
import Card from '../components/Card'

export const metadata = {
    title: 'About — Prime Audit Solutions',
    description: 'About Prime Audit Solutions: bookkeeping, auditing and software customization.',
}

export default function AboutPage() {
    const data = getMarkdownSync('about')
    const banner = data.meta.bannerImage
    return (
        <>
            <section
                className="about-bg relative"
                style={{
                    backgroundImage: `url(${banner})`,
                }}
                aria-label={data.meta.bannerTitle || 'About'}
            >
                {/* Decorative overlay for contrast */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Hidden text for screen readers describing the banner */}
                <span className="sr-only">{data.meta.description || data.meta.title}</span>

                {/* Content container: centered on mobile, left-aligned on md+ */}
                <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
                    <div className="max-w-3xl md:max-w-2xl lg:max-w-xl">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight md:leading-snug drop-shadow-lg text-center md:text-left">
                            {data.meta.bannerTitle}
                        </h1>

                    </div>
                </div>
            </section>
            {/* <div className="mt-4 text-white/90 text-base sm:text-lg md:text-base lg:text-lg text-center md:text-left">
                <MarkdownRenderer html={data.contentHtml} />
            </div> */}

            <div className="container mx-auto px-4 py-12">
                <h2 className="text-2xl font-semibold">{data.meta.mainTitle}</h2>
                <div className="mt-4 text-on-primary"><MarkdownRenderer html={data.contentHtml} /></div>

                <LongCard
                    title={data.meta.cardTitle1}
                    content={data.meta.cardContent1}
                    image={data.meta.cardImage1}
                    tag="ABOUT"
                    // link="#"
                    reverse={false}
                />

                <LongCard
                    title={data.meta.cardTitle2}
                    content={data.meta.cardContent2}
                    image={data.meta.cardImage2}
                    tag="ABOUT"
                    // link="#"
                    reverse={true}
                />

                <LongCard
                    title={data.meta.cardTitle3}
                    content={data.meta.cardContent3}
                    image={data.meta.cardImage3}
                    tag="ABOUT"
                    // link="#"
                    reverse={false}
                />
                 
            </div>
        </>
    )
}
