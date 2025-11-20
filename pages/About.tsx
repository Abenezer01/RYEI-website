import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { VISION_STATEMENT, MISSION_STATEMENT, WHO_WE_ARE, CORE_VALUES, CORE_OBJECTIVES } from '../constants';
import { Target, Eye, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-navy text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy-light/80 z-10"></div>
        <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="About background" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block">About Us</span>
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">Driving Rural Transformation</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">Dedicated to improving the lives of young people in rural Ethiopia through sustainable empowerment models.</p>
        </div>
      </div>

      {/* Who We Are */}
      <SectionWrapper background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Who We Are</h2>
            <h3 className="text-4xl font-bold font-heading text-navy mb-8">Empowering the Next Generation of Leaders</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {WHO_WE_ARE}
            </p>
            <div className="flex gap-2">
                <div className="h-1.5 w-12 bg-primary rounded-full"></div>
                <div className="h-1.5 w-3 bg-secondary rounded-full"></div>
            </div>
          </div>
          <div className="relative pl-8 pt-8">
            <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-gray-100 rounded-3xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" 
              alt="Youth meeting" 
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[450px] border-4 border-white"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-primary hidden md:block">
                <p className="text-navy font-bold text-lg">"Building confidence and leadership."</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Vision & Mission */}
      <SectionWrapper background="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all"
          >
            <div className="flex items-center mb-8">
              <div className="bg-primary/10 p-4 rounded-2xl mr-5">
                <Eye className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold font-heading text-navy">Our Vision</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">{VISION_STATEMENT}</p>
          </motion.div>

          <motion.div 
             whileHover={{ y: -5 }}
             className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all"
          >
            <div className="flex items-center mb-8">
              <div className="bg-secondary/10 p-4 rounded-2xl mr-5">
                <Target className="text-secondary h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold font-heading text-navy">Our Mission</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">{MISSION_STATEMENT}</p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper background="white">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold font-heading text-navy mb-6">Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">The principles that guide every decision and action we take.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_VALUES.map((value, idx) => (
            <div key={idx} className="bg-background p-8 rounded-2xl border border-gray-100 hover:border-primary/50 hover:bg-white hover:shadow-lg transition-all group">
              <ShieldCheck className="text-navy group-hover:text-primary h-10 w-10 mb-6 transition-colors" />
              <h4 className="text-xl font-bold font-heading text-navy mb-3">{value.title}</h4>
              <p className="text-gray-500 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Core Objectives */}
      <SectionWrapper background="navy">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold font-heading text-white mb-8">Core Objectives</h2>
            <p className="text-gray-300 mb-10 text-lg font-light">
              Our strategic roadmap to achieving sustainable rural transformation through specific, actionable goals.
            </p>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h4 className="text-primary font-bold text-xl mb-3">Impact Focus</h4>
              <p className="text-gray-400">
                From gender equity to peace building, our objectives cover a holistic spectrum of development designed to uplift entire communities.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-4">
              {CORE_OBJECTIVES.map((obj) => (
                <div key={obj.id} className="flex items-start p-6 bg-navy-light/30 rounded-xl border border-white/5 hover:bg-navy-light/50 transition-colors">
                  <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-navy flex items-center justify-center font-bold font-heading text-sm mr-6 mt-0.5">
                    {obj.id}
                  </span>
                  <p className="text-gray-200 text-lg leading-relaxed font-light">{obj.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};