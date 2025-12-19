interface FeatureListProps {
  items: string[];
}

export default function FeatureList({ items = [] }: FeatureListProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
      {items.map((f, i) => (
        <li key={i} className="flex items-start gap-3 bg-primary/5 border border-primary/10 px-4 py-2 rounded-lg text-sm">
          <span className="text-primary-dark font-bold">✓</span>
          <span className="text-muted">{f}</span>
        </li>
      ))}
    </ul>
  )
}

