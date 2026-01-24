import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VIDEO_CONTENT } from '../constants';
import { Video, ExternalLink } from 'lucide-react';
import { InstagramEmbed } from 'react-social-media-embed';

gsap.registerPlugin(ScrollTrigger);

const VideoContent: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".video-card");
      if (!cards || cards.length === 0) return;

      // Set cards to be visible by default
      gsap.set(".video-card", { opacity: 1, y: 0 });
      
      // Animate on scroll - only if ScrollTrigger is available
      try {
        gsap.fromTo(".video-card",
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
        gsap.set(".video-card", { opacity: 1, y: 0 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Ensure content is visible even if GSAP fails
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll('.video-card');
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
    <section id="video" ref={sectionRef} className="py-24 bg-primary border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4 text-white">Script Writing & Video Content</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            As a Communications Specialist, I develop parent communication emails, newsletters, press releases, and video scripts that strengthen engagement with current parents while strategically attracting prospective families to the school.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {VIDEO_CONTENT.map((item) => (
            <div
              key={item.id}
              className="video-card bg-surface p-6 rounded-2xl border border-gray-200 hover:border-primary/30 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                    {item.platform}
                  </span>
                  <span className="text-xs text-muted font-medium">{item.role}</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-muted text-sm mb-4">{item.purpose}</p>
              </div>

              {/* Instagram Embed */}
              {item.platform === 'Instagram' && item.instagramUrl && (
                <div className="mb-4 rounded-xl overflow-hidden flex justify-center">
                  <div className="w-full max-w-[328px]">
                    <InstagramEmbed
                      url={item.instagramUrl}
                      width="100%"
                      captioned={false}
                    />
                  </div>
                </div>
              )}

              {/* LinkedIn Link */}
              {item.platform === 'LinkedIn' && item.link && (
                <div className="mb-4 p-6 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primaryDark transition-colors font-medium"
                  >
                    <Video className="mr-2 h-5 w-5" />
                    View on LinkedIn
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              )}

              {/* Fallback link if no embed */}
              {item.link && item.platform !== 'LinkedIn' && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primaryDark transition-colors text-sm font-medium"
                >
                  View Content
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoContent;
