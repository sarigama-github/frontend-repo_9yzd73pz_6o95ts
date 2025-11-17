import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${backend}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
      })
      if (res.ok) setStatus('Thanks! We will reach out shortly.')
      else setStatus('Something went wrong. Please try again.')
    } catch (e) {
      setStatus('Could not reach server. Try again later.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Talk to our team</h2>
          <p className="mt-3 text-gray-600">Tell us about your spend, verticals, and timelines. We'll match the right account pool.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="grid grid-cols-1 gap-4">
              <input name="name" required placeholder="Full name" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="email" type="email" required placeholder="Work email" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea name="message" rows="4" placeholder="What are you looking to run?" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="mt-2 inline-flex items-center justify-center rounded-md bg-blue-600 text-white py-2.5 font-medium hover:bg-blue-700">Send message</button>
            </div>
            {status && <p className="mt-3 text-sm text-gray-700">{status}</p>}
          </form>

          <div className="p-6 rounded-xl border border-gray-200 bg-white">
            <h3 className="text-lg font-semibold text-gray-900">What to expect</h3>
            <ul className="mt-4 space-y-3 text-gray-700 text-sm">
              <li>• Quick discovery call to confirm fit</li>
              <li>• KYC & compliance review</li>
              <li>• Account provisioning and onboarding</li>
              <li>• Live support during ramp-up</li>
            </ul>
            <p className="mt-6 text-sm text-gray-500">By submitting this form, you agree to our acceptable use and policy-compliance requirements.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
