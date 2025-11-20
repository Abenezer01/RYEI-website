import React from 'react';
import { Program } from '../types';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  program: Program;
  index: number;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, index }) => {
  const Icon = program.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 flex flex-col h-full group hover:-translate-y-1"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center mb-8 text-secondary group-hover:bg-primary group-hover:text-navy transition-colors duration-300">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="text-2xl font-bold font-heading text-navy mb-4 group-hover:text-primary-hover transition-colors">{program.title}</h3>
      <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{program.description}</p>
      
      {program.details && (
        <div className="border-t border-gray-100 pt-6 mt-auto">
          <ul className="space-y-3">
            {program.details.map((detail, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-500">
                <div className="min-w-[6px] h-[6px] rounded-full bg-primary mt-1.5 mr-3"></div>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};