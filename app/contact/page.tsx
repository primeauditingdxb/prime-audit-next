import { getMarkdownSync } from '@/lib/content'
import MarkdownRenderer from '../components/MarkdownRenderer'

export default function ContactPage() {
  const data = getMarkdownSync('contact')
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-primary-dark">{data.meta.title}</h2>
  <div className="mt-2 text-muted"><MarkdownRenderer html={data.contentHtml} /></div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <form className="space-y-4" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <div>
            <label className="block text-sm font-medium text-primary-dark">Name</label>
            <input name="name" required className="mt-1 block w-full border rounded px-3 py-2 text-muted" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary-dark">Email</label>
            <input name="email" type="email" required className="mt-1 block w-full border rounded px-3 py-2 text-muted" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary-dark">Message</label>
            <textarea name="message" required className="mt-1 block w-full border rounded px-3 py-2 text-muted" rows={5} placeholder="How can we help?"></textarea>
          </div>
          <div>
            <button type="submit" className="px-4 py-2 btn-primary rounded">Send Message</button>
          </div>
        </form>

        <div>
          <h4 className="font-semibold text-primary-dark">Office</h4>
          <p className="text-muted mt-2">Kerala, India</p>
          <p className="text-muted mt-2">Email: info@primeaudit.example</p>
        </div>
      </div>
    </div>
  )
}
