export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-slate-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Choose a plan that fits your media buying volume. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {/* Starter */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-gray-900 font-semibold">Starter</h3>
            <p className="mt-1 text-sm text-gray-600">Testing & small budgets</p>
            <p className="mt-6 text-4xl font-bold tracking-tight">$299<span className="text-base font-medium text-gray-500">/mo</span></p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>• 1 warmed account</li>
              <li>• Up to $2k/day spend</li>
              <li>• Standard support</li>
            </ul>
            <a href="#contact" className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-gray-900 text-white py-2.5 font-medium hover:bg-black">Get started</a>
          </div>

          {/* Growth */}
          <div className="rounded-2xl border-2 border-blue-600 bg-white p-6 relative">
            <span className="absolute -top-3 left-6 px-2 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white">Most Popular</span>
            <h3 className="text-gray-900 font-semibold">Growth</h3>
            <p className="mt-1 text-sm text-gray-600">Scaling brands & agencies</p>
            <p className="mt-6 text-4xl font-bold tracking-tight">$899<span className="text-base font-medium text-gray-500">/mo</span></p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>• 3 high-trust accounts</li>
              <li>• Up to $10k/day spend</li>
              <li>• Priority support</li>
              <li>• Fast replacements</li>
            </ul>
            <a href="#contact" className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-blue-600 text-white py-2.5 font-medium hover:bg-blue-700">Choose Growth</a>
          </div>

          {/* Scale */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-gray-900 font-semibold">Scale</h3>
            <p className="mt-1 text-sm text-gray-600">High-volume media buyers</p>
            <p className="mt-6 text-4xl font-bold tracking-tight">Custom</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>• Dedicated pool</li>
              <li>• Higher spend limits</li>
              <li>• 24/7 incident response</li>
              <li>• Compliance matching</li>
            </ul>
            <a href="#contact" className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-gray-900 text-white py-2.5 font-medium hover:bg-black">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
