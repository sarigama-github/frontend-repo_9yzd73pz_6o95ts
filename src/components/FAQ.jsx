export default function FAQ() {
  const faqs = [
    {
      q: "Are accounts exclusive?",
      a: "Yes. Each rented account is dedicated to a single client with unique credentials.",
    },
    {
      q: "What happens if an account is restricted?",
      a: "We provide fast replacements subject to policy review and campaign history.",
    },
    {
      q: "How do payments work?",
      a: "We support cards and invoicing. Prepaid balances are available for higher limits.",
    },
    {
      q: "Is this compliant with Facebook policies?",
      a: "We only work with legitimate businesses and policy-compliant verticals. KYC is required.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently asked questions</h2>
          <p className="mt-3 text-gray-600">If you have other questions, our team is ready to help 24/7.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {faqs.map((item) => (
            <div key={item.q} className="p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">{item.q}</h3>
              <p className="mt-2 text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
