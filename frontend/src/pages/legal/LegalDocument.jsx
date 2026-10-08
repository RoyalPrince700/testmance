import { Link } from 'react-router-dom';
import Footer from '../HomeSections/Footer';

const LegalDocument = ({ eyebrow, title, summary, updated, sections, related }) => {
  return (
    <div className="bg-canvas text-ink">
      <section className="pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="rise-in text-sm font-medium text-accent">{eyebrow}</p>
          <h1
            className="rise-in mt-4 max-w-3xl text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]"
            style={{ animationDelay: '70ms' }}
          >
            {title}
          </h1>
          <p className="rise-in mt-6 max-w-2xl text-lg leading-relaxed text-graphite" style={{ animationDelay: '140ms' }}>
            {summary}
          </p>
          <p className="rise-in mt-4 text-sm text-slate" style={{ animationDelay: '210ms' }}>
            Last updated {updated}
          </p>
        </div>
      </section>

      <div className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:px-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 lg:py-16">
          <nav aria-label="On this page" className="lg:sticky lg:top-20 lg:self-start">
            <p className="text-sm font-medium text-ink">On this page</p>
            <ul className="mt-4 space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="text-sm text-slate hover:text-ink">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="max-w-2xl">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 border-t border-line py-8 first:border-t-0 first:pt-0">
                <h2 className="text-lg font-medium tracking-tight text-ink">{section.title}</h2>
                <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-graphite">
                  {section.blocks.map((block, index) => {
                    if (block.type === 'list') {
                      return (
                        <ul key={index} className="list-disc space-y-2 pl-5">
                          {block.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      );
                    }

                    return <p key={index}>{block.text}</p>;
                  })}
                </div>
              </section>
            ))}

            {related && (
              <div className="mt-4 rounded-3xl border border-line bg-surface p-6">
                <h2 className="text-lg font-medium tracking-tight text-ink">{related.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{related.text}</p>
                <Link to={related.to} className="mt-4 inline-block text-sm font-medium text-accent">
                  {related.label}
                </Link>
              </div>
            )}
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LegalDocument;
