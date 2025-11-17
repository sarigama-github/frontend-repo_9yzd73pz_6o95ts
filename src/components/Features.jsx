import { ShieldCheck, Gauge, CreditCard, Globe, Headphones } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "High-trust Accounts",
    desc: "Verified, seasoned, and policy-compliant accounts to reduce bans and keep spend stable.",
  },
  {
    icon: Gauge,
    title: "Scaling Limits",
    desc: "Access higher daily spend and faster ramp-up so your campaigns can scale smoothly.",
  },
  {
    icon: CreditCard,
    title: "Flexible Billing",
    desc: "Card or credit line options. Clean invoicing for agencies and enterprises.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    desc: "Choose geos and verticals. We match accounts to your compliance needs.",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    desc: "Dedicated chat with 24/7 incident response to keep you online.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Built for performance and safety</h2>
          <p className="mt-3 text-gray-600">Everything you need to launch and scale campaigns with confidence.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
