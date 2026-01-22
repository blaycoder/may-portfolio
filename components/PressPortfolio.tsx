import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRESS_PORTFOLIO } from '../constants';
import { FileText, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PressPortfolio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".press-card");
      if (!cards || cards.length === 0) return;

      // Set cards to be visible by default
      gsap.set(".press-card", { opacity: 1, y: 0 });
      
      // Animate on scroll - only if ScrollTrigger is available
      try {
        gsap.fromTo(".press-card", 
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            immediateRender: false,
          }
        );
      } catch (error) {
        console.warn('GSAP ScrollTrigger animation failed, content will remain visible:', error);
        // Ensure content is visible if animation fails
        gsap.set(".press-card", { opacity: 1, y: 0 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const newsletters = PRESS_PORTFOLIO.filter(item => item.type === 'newsletter');
  const pressReleases = PRESS_PORTFOLIO.filter(item => item.type === 'press-release');

  // Ensure content is visible even if GSAP fails
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll('.press-card');
      cards.forEach((card) => {
        const element = card as HTMLElement;
        if (element.style.opacity === '0' || window.getComputedStyle(element).opacity === '0') {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }, 1000); // Fallback after 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="press" ref={sectionRef} className="py-24 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">Press & Media</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A selection of press releases, newsletters, and media communications showcasing strategic brand messaging and stakeholder engagement.
          </p>
        </div>

        {/* Press Releases */}
        {pressReleases.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-primary/10 rounded-xl mr-4">
                <FileText className="text-primary h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-secondary">Press Releases</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressReleases.map((item) => (
                <div
                  key={item.id}
                  className="press-card bg-surface p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                      Press Release
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-slate-400">
                      <span className="font-medium mr-2">Platform:</span>
                      <span>{item.platform}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <span className="font-medium mr-2">Date:</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primaryDark transition-colors text-sm font-medium"
                    >
                      View Article
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Newsletters */}
        {newsletters.length > 0 && (
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-accent/10 rounded-xl mr-4">
                <FileText className="text-accent h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-secondary">Newsletters</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsletters.map((item) => (
                <div
                  key={item.id}
                  className="press-card bg-surface p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
                      Newsletter
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-secondary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-slate-400">
                      <span className="font-medium mr-2">Platform:</span>
                      <span>{item.platform}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <span className="font-medium mr-2">Date:</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                    >
                      View Newsletter
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PressPortfolio;
