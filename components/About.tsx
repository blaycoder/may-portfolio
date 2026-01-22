import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PERSONAL_INFO, SKILLS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="about-reveal font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">Professional Summary</h2>
          <div className="about-reveal w-16 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="about-reveal bg-surface p-8 md:p-12 rounded-3xl border border-white/5 shadow-xl">
          <p className="text-xl text-slate-300 leading-relaxed mb-10 font-light text-center md:text-left">
            {PERSONAL_INFO.bio}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/5 mb-10">
            <div className="flex flex-col text-center md:text-left">
              <span className="text-muted uppercase tracking-wider text-xs font-bold mb-2">Email</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="font-medium text-secondary break-words hover:text-primary transition-colors">{PERSONAL_INFO.email}</a>
            </div>
            <div className="flex flex-col text-center md:text-left">
              <span className="text-muted uppercase tracking-wider text-xs font-bold mb-2">Phone</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="font-medium text-secondary hover:text-primary transition-colors">{PERSONAL_INFO.phone}</a>
            </div>
            <div className="flex flex-col text-center md:text-left">
              <span className="text-muted uppercase tracking-wider text-xs font-bold mb-2">Location</span>
              <span className="font-medium text-secondary">{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex flex-col text-center md:text-left">
              <span className="text-muted uppercase tracking-wider text-xs font-bold mb-2">LinkedIn</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-secondary hover:text-primary transition-colors break-words">View Profile</a>
            </div>
          </div>

          {/* Key Competencies */}
          <div className="pt-8 border-t border-white/5">
            <h3 className="text-2xl font-heading font-bold text-secondary mb-6">Key Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILLS.map((category, idx) => (
                <div key={idx} className="bg-background/50 p-6 rounded-xl border border-white/5">
                  <h4 className="text-lg font-bold text-secondary mb-3">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIdx) => (
                      <li key={skillIdx} className="text-slate-400 text-sm flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;