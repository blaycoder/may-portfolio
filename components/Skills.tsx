import React from 'react';
import { SKILLS } from '../constants';
import { Code, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-background border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div className="flex flex-col justify-center">
             <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-6">My Skills</h2>
             <p className="text-muted text-lg mb-8 leading-relaxed">
               I bring a unique combination of technical proficiency and administrative excellence.
               Whether it's building responsive web interfaces or managing complex data systems, I focus on precision and efficiency.
             </p>
          </div>

          <div className="grid gap-8">
            {SKILLS.map((category, idx) => (
              <div key={idx} className="bg-surface rounded-2xl p-8 border border-gray-200 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gray-100 rounded-xl text-primary mr-4">
                    {idx === 0 ? <Code size={24} /> : <Layers size={24} />}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-secondary">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-background text-secondary text-sm font-medium rounded-lg border border-gray-200 hover:text-primary hover:border-primary transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;