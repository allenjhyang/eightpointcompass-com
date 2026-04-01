import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function AboutSection() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-epc-bg">
      <div className="max-w-[960px] mx-auto">
        <div
          ref={ref}
          className="opacity-0 translate-y-4 transition-all duration-1000 ease-out"
        >
          <h2 className="font-headings text-3xl md:text-4xl text-epc-navy mb-12">
            About
          </h2>

          <div className="flex flex-col-reverse md:flex-row gap-12 items-start">
            <div className="w-full md:w-[60%]">
              <div className="font-body text-lg text-epc-charcoal leading-relaxed space-y-6">
                <p>
                  I'm Allen Yang, founder of Eight Point Compass. I've spent my
                  career at the intersection of product, technology, and
                  business strategy.
                </p>
                <p>
                  Most recently, I was the founder and CEO of a VC-backed, AI-native startup, and before that the VP of Product at a growth-stage company, where I helped scale the company 10x in headcount and revenue.
                  I've held product roles at Google, Better Mortgage, and come from a business background.
                </p>
                <p>I hold an MBA from Harvard Business School and a BA from Harvard College.</p>
                <p>
                  I work best with leaders who want clear thinking and real
                  execution, not more decks.
                </p>
              </div>

              <div className="mt-10 flex items-center space-x-6">
                <a
                  href="https://allenyang.com/?utm_source=epc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-epc-navy hover:text-epc-gold transition-colors group flex items-center font-medium"
                >
                  allenyang.com
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/allenjhyang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-epc-navy hover:text-epc-gold transition-colors group flex items-center font-medium"
                >
                  LinkedIn
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>

            <div className="w-full md:w-[30%] flex justify-center md:justify-end mb-8 md:mb-0">
              <img
                src="/2025_headshot.jpg"
                alt="Allen Yang"
                className="w-48 h-48 rounded-full object-cover shadow-inner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
