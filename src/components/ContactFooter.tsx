import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function ContactFooter() {
  const ref = useScrollAnimation()

  return (
    <footer
      id="contact"
      className="bg-epc-navy text-white pt-24 pb-12 px-6 md:px-12"
    >
      <div className="max-w-[960px] mx-auto">
        <div
          ref={ref}
          className="opacity-0 translate-y-4 transition-all duration-1000 ease-out"
        >
          <div className="mb-24">
            <h2 className="font-headings text-3xl md:text-4xl mb-6 text-white">
              Let's Talk
            </h2>

            <p className="font-body text-lg text-white/80 leading-relaxed mb-12 max-w-2xl">
              If my AI & Product consulting services can be useful for you, I'd love to hear from you:
            </p>

            <a
              href="mailto:allen@eightpointcompass.com"
              className="inline-block font-headings text-2xl md:text-3xl text-epc-gold hover:text-white transition-colors border-b border-epc-gold hover:border-white pb-1"
            >
              allen [at] eightpointcompass.com
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 text-sm font-body text-white/60 relative">
            <img
              src="/epc_logo_white.png"
              alt="Eight Point Compass"
              className="h-8 w-auto opacity-60 mb-4 md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-12 md:mb-0"
            />
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="https://allenyang.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                allenyang.com
              </a>
              <a
                href="https://allenjhyang.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Substack
              </a>
              <a
                href="https://www.linkedin.com/in/allenjhyang/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>

            <div>&copy; 2026 Eight Point Compass LLC</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
