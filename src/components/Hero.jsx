import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-wider text-blue-700/90 bg-blue-50 ring-1 ring-blue-200 px-2.5 py-1 rounded-full mb-4">Premium FB Advertising</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Rent high-trust FB ad accounts for scale and stability
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Verified, warmed, and ready to spend. Get consistent delivery, higher limits, and faster approvals — without the headaches.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                View Plans
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/80 backdrop-blur ring-1 ring-gray-200 text-gray-900 hover:bg-white transition-colors">
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  );
}
