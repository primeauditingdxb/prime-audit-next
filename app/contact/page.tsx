import { getMarkdownSync } from '@/lib/content'
import MarkdownRenderer from '../components/MarkdownRenderer'

export default function ContactPage() {
  const data = getMarkdownSync('contact')
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">{data.meta.title}</h2>
      <div className="mt-2 text-slate-600"><MarkdownRenderer html={data.contentHtml} /></div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <form className="space-y-4" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input name="name" required className="mt-1 block w-full border rounded px-3 py-2" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input name="email" type="email" required className="mt-1 block w-full border rounded px-3 py-2" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" required className="mt-1 block w-full border rounded px-3 py-2" rows={5} placeholder="How can we help?"></textarea>
          </div>
          <div>
            <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded">Send Message</button>
          </div>
        </form>

        <div>
          <h4 className="font-semibold">Office</h4>
          <p className="text-slate-600 mt-2">Kerala, India</p>
          <p className="text-slate-600 mt-2">Email: info@primeaudit.example</p>
        </div>
      </div>
    </div>
  )
}
