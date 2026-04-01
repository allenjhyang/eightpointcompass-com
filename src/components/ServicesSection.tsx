import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function ServicesSection() {
  const headerRef = useScrollAnimation()
  const gridRef = useScrollAnimation()

  const services = [
    {
      title: 'Portfolio AI Assessment',
      description:
        'Evaluating your portfolio for AI risk, opportunity, and cross-company leverage, including diligence support on new deals. I assess competitive threats, identify where product roadmaps need to evolve, spot opportunities for shared platform investments, and conduct AI-focused due diligence on prospective acquisitions.',
    },
    {
      title: 'AI Strategy to Product Roadmap',
      description:
        "Working with the C-suite to set AI strategy, then translating it into a product roadmap and cross-functional execution plan. This starts with educating leadership on what's real in AI for their specific market, then pressure-testing company strategy, prioritizing the 3-5 highest-value initiatives, and producing a concrete roadmap the team can execute against.",
    },
    {
      title: 'AI-Native Product Development Operating Model',
      description:
        'Redesigning how the Product team works with an AI-first operating model. I assess how the team operates today, design an operating model that embeds AI into discovery, prioritization, and the build cycle, and evaluate AI adoption across the broader organization. For engagements spanning Product and Engineering, I bring in a partner to cover Eng Ops.',
    },
    {
      title: 'Fractional Product Leadership',
      description:
        "For companies that need senior product leadership but aren't ready for a full-time hire. I embed with the team to set product direction, improve execution cadence, and make sure what you're building maps to business outcomes. This can include defining and hiring for a permanent CPO role and designing the interview process.",
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
            I work across four levels of engagement, from fund-level portfolio assessment to company strategy to hands-on operating model design to embedded product leadership. Each is designed to meet companies where they are.
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
