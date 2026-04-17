import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center">
        <span className="text-5xl sm:text-6xl block mb-6">🌿</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-forest-900 mb-4">Page Not Found</h1>
        <p className="text-stone-500 mb-8 max-w-sm mx-auto">
          This guide doesn't exist yet. Check back soon - more healing guides are being added regularly.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-forest-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-forest-700 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
