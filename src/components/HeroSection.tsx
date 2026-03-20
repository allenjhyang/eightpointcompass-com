import { Button } from './ui/button'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function HeroSection() {
  const ref = useScrollAnimation()

  return (
    <section
      id="top"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-12 bg-epc-bg"
    >
      <div
        ref={ref}
        className="max-w-[960px] mx-auto text-center opacity-0 translate-y-4 transition-all duration-1000 ease-out"
      >
        <h1 className="font-headings text-4xl md:text-5xl lg:text-6xl text-epc-navy leading-tight mb-8">
          AI strategy and product leadership for companies navigating what's
          next.
        </h1>

        <div className="flex justify-center mb-8">
          <img
            src="/epc_logo_black.png"
            alt=""
            aria-hidden="true"
            className="h-12 md:h-14 w-auto opacity-20"
          />
        </div>

        <p className="font-body text-lg md:text-xl text-epc-text-light font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          Eight Point Compass helps growth-stage companies and PE-backed
          portfolios <span className="text-epc-gold">cut through the AI noise</span>, identifying where AI creates
          real operational value, building the roadmap to get there, and executing efficiently.
        </p>

        <div className="flex flex-col items-center space-y-6">
          <Button
            asChild
            size="lg"
            className="bg-epc-navy hover:bg-epc-navy/90 text-white font-body text-base px-8 py-6 rounded-none transition-all hover:shadow-lg"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get in Touch
            </a>
          </Button>

          <a
            href="https://www.linkedin.com/in/allenjhyang/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-epc-text-light hover:text-epc-navy transition-colors group flex items-center"
          >
            Learn more about Allen
            <span className="ml-1 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
