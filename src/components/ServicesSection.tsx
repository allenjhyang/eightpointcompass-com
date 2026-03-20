import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function ServicesSection() {
  const headerRef = useScrollAnimation()
  const gridRef = useScrollAnimation()

  const services = [
    {
      title: 'AI Strategy & Roadmapping',
      description:
        "For companies that want to stay ahead of AI-native startups in their space. I work with leadership teams to audit the current product, strategy and operations, identify the highest-leverage AI opportunities, and build a realistic implementation roadmap.",
    },
    {
      title: 'Fractional Product Leadership',
      description:
        "For companies that need senior product leadership. I embed with your team to set product direction, improve execution cadence, and make sure what you're building maps to business outcomes.",
    },
    {
      title: 'Portfolio AI Assessment',
      description:
        'For PE firms evaluating AI readiness across portfolio companies. I run structured assessments that surface where AI can drive value creation, flag risks, and identify patterns across the portfolio, giving deal and ops teams a clearer picture of the opportunities and risks.',
    },
    {
      title: 'Operational AI Integration',
      description:
        "For companies wanting to shift to the new AI-native way of working. Most AI value isn't in building new products, it's in making your existing operations faster, cheaper, or smarter. I help teams identify and implement AI across internal workflows.",
    },
  ]

  return (
    <section id="what-i-do" className="py-24 px-6 md:px-12 bg-epc-bg-alt">
      <div className="max-w-[960px] mx-auto">
        <div
          ref={headerRef}
          className="opacity-0 translate-y-4 transition-all duration-1000 ease-out mb-16"
        >
          <h2 className="font-headings text-3xl md:text-4xl text-epc-navy mb-6">
            Services Offered
          </h2>
          <p className="font-body text-lg text-epc-charcoal leading-relaxed">
            Every company is being told they need an AI strategy. The harder
            question is which investments actually drive defensibilty, margin, or velocity, and how to execute against them without blowing up
            what already works.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 opacity-0 translate-y-4 transition-all duration-1000 delay-200 ease-out"
        >
          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="font-headings text-xl text-epc-navy mb-4 font-semibold">
                {service.title}
              </h3>
              <p className="font-body text-base text-epc-text-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
