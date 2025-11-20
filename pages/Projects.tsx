import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Projects: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-navy py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Our Projects</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Real world impact through sustainable initiatives.</p>
      </div>

      <SectionWrapper background="light">
        <div className="grid grid-cols-1 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row group hover:shadow-xl transition-all duration-300"
            >
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                   <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${project.category === 'Completed' ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary-hover'}`}>
                     {project.category}
                   </span>
                </div>
                <h3 className="text-3xl font-bold font-heading text-navy mb-4">{project.title}</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{project.description}</p>
                
                <div className="mt-auto border-t border-gray-100 pt-6 flex justify-between items-center">
                   <div>
                     <span className="block text-sm text-gray-400 uppercase tracking-wider font-bold">Impact</span>
                     <span className="text-lg font-bold text-navy">{project.impact}</span>
                   </div>
                   <button className="p-3 rounded-full bg-background group-hover:bg-primary group-hover:text-navy transition-colors">
                     <ArrowUpRight className="w-6 h-6" />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};