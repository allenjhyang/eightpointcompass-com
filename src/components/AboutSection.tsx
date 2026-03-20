import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function AboutSection() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-epc-bg">
      <div className="max-w-[800px] mx-auto">
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
                  Most recently, I was VP of Product at Bubble, where I was the
                  first product hire and helped scale the team and company from
                  $2M to over $40M in ARR. Before that, I co-founded an
                  AI-native startup, and held product and strategy roles at
                  Google, Better Mortgage, and Morgan Stanley.
                </p>
                <p>I studied at Harvard College and Harvard Business School.</p>
                <p>
                  I work best with leaders who want clear thinking and real
                  execution — not more decks.
                </p>
              </div>

              <div className="mt-10 flex items-center space-x-6">
                <a
                  href="https://allenyang.com"
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
                  href="https://linkedin.com/in/allenyang"
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
              <div className="w-48 h-48 rounded-full bg-[#D4CFC7] flex items-center justify-center shadow-inner">
                <span className="font-headings text-5xl text-epc-navy tracking-widest">
                  AY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
