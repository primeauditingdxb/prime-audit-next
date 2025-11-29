// app/components/CTA.jsx
export default function CTA() {
  return (
    <section className="bg-linear-to-r from-primary/10 to-transparent rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h4 className="text-xl font-semibold text-primary-dark">Ready to transform your finance operations?</h4>
        <p className="text-muted mt-2">Book a free 30-minute consultation to discuss scope, timeline and pricing.</p>
      </div>
      <div className="flex gap-3">
        <a href="/contact" className="px-5 py-3 rounded-full bg-primary-dark text-white font-medium">Book a call</a>
        <a href="/contact#brief" className="px-5 py-3 rounded-full border text-primary1">Share brief</a>
      </div>
    </section>
  )
}
