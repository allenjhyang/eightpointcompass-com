import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function WritingSection() {
  const ref = useScrollAnimation()

  const columnOne = {
    topic: 'AI Strategy',
    articles: [
      {
        title: "AI isn't eating SaaS, it's racing against it",
        description: 'The stock selloff is justified. But not for the reason most people think.',
        href: 'https://allenjhyang.substack.com/p/ai-isnt-eating-saas-its-racing-against',
      },
      {
        title: 'The data moat is dead. Long live the data moat.',
        description: 'Friction used to keep customers locked in. Now the moat has to actually earn its keep.',
        href: 'https://allenjhyang.substack.com/p/the-data-moat-is-dead-long-live-the',
      },
      {
        title: 'Product reflections & predictions on OpenClaw',
        description: 'What OpenClaw means for those of us in Product',
        href: 'https://allenjhyang.substack.com/p/product-reflections-and-predictions',
      },
    ],
  }

  const columnTwo = {
    topic: 'Product Leadership',
    articles: [
      {
        title: "AI's impact on PM",
        description: "AI won't eliminate the product manager. It will fork the role into two distinct species",
        href: 'https://allenjhyang.substack.com/p/ais-impact-on-pm-part-1-the-pm-role',
      },
      {
        title: 'OpenClaw (Clawdbot) explained for non-technical people',
        description: 'What it is, what it can do, and why people are all abuzz about it',
        href: 'https://allenjhyang.substack.com/p/openclaw-clawdbot-explained-for-non',
      },
    ],
  }

  return (
    <section id="writing" className="py-24 px-6 md:px-12 bg-epc-bg-alt">
      <div className="max-w-[960px] mx-auto">
        <div
          ref={ref}
          className="opacity-0 translate-y-4 transition-all duration-1000 ease-out"
        >
          <h2 className="font-headings text-3xl md:text-4xl text-epc-navy mb-6">
            Thinking &amp; Writing
          </h2>

          <p className="font-body text-lg text-epc-text-light mb-14">
            I write about AI strategy, product leadership, and building in the
            current moment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-14">
            <div>
              <h3 className="font-headings text-lg text-epc-navy font-semibold mb-6 pb-3 border-b border-epc-gold/30">
                {columnOne.topic}
              </h3>
              <div className="space-y-6">
                {columnOne.articles.map((article, index) => (
                  <div key={index} className="group">
                    <a href={article.href} className="block">
                      <h4 className="font-headings text-base text-epc-navy mb-1 group-hover:text-epc-gold transition-colors">
                        {article.title}
                      </h4>
                      <p className="font-body text-sm text-epc-text-light leading-relaxed">
                        {article.description}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-headings text-lg text-epc-navy font-semibold mb-6 pb-3 border-b border-epc-gold/30">
                {columnTwo.topic}
              </h3>
              <div className="space-y-6">
                {columnTwo.articles.map((article, index) => (
                  <div key={index} className="group">
                    <a href={article.href} className="block">
                      <h4 className="font-headings text-base text-epc-navy mb-1 group-hover:text-epc-gold transition-colors">
                        {article.title}
                      </h4>
                      <p className="font-body text-sm text-epc-text-light leading-relaxed">
                        {article.description}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a
            href="https://allenjhyang.substack.com/"
            className="font-body text-sm text-epc-navy hover:text-epc-gold transition-colors group inline-flex items-center font-medium"
          >
            Read more on Substack
            <span className="ml-1 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
