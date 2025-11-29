// app/components/Testimonials.jsx
export default function Testimonials({ serviceId }) {
  // in production fetch real testimonials keyed by serviceId
  const sample = [
    { name: 'A. Khader', role: 'CFO', quote: 'Excellent delivery and fast turnaround.' },
    { name: 'M. Rahman', role: 'Founder', quote: 'Great attention to detail and domain knowledge.' }
  ]

  return (
    <div className="bg-primary-light/5 border border-primary-light/10 rounded-lg p-4">
      <h4 className="font-semibold text-primary-dark">Client feedback</h4>
      <div className="mt-3 space-y-3">
        {sample.map((t, i) => (
          <blockquote key={i} className="text-sm">
            <p className="text-muted">“{t.quote}”</p>
            <footer className="text-xs mt-1 font-medium text-muted">{t.name} — <span className="text-muted">{t.role}</span></footer>
          </blockquote>
        ))}
      </div>
    </div>
  )
}
