export default function Footer() {
  return (
    <footer className="bg-surface text-on-surface mt-12">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold">Prime Audit Solutions</h3>
          <p className="text-sm text-muted mt-2">Bookkeeping • Auditing • Software Customization</p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm text-muted mt-2">Email: info@primeaudit.example</p>
          <p className="text-sm text-muted">Phone: +91 1122334455</p>
        </div>
        <div>
          <h4 className="font-semibold">Address</h4>
          <p className="text-sm text-muted mt-2">Kerala, India</p>
        </div>
      </div>
  <div className="border-t border-on-surface py-4 text-center text-sm">© {new Date().getFullYear()} Prime Audit Solutions. All rights reserved.</div>
    </footer>
  )
}
