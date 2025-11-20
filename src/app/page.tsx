"use client";

import Link from 'next/link';
import { ArrowRight, ChevronDown, Lightbulb, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import { IMPACT_STATS, PROGRAMS, MISSION_STATEMENT } from '@/lib/constants';

export default function Home() {
  return (
    <div className="overflow-hidden font-sans">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Cityscape merging with rural horizon" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex mb-8">
              <span className="bg-white/10 backdrop-blur-md text-primary-light border border-white/20 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Youth-Led Organization
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-heading text-white leading-tight mb-8 tracking-tight">
              Empowering Rural<br />
              Youth for a<br />
              <span className="text-transparent bg-clip-text bg-gradient-sunrise">Sustainable</span> Future
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-xl opacity-90 font-light">
              We strengthen rural communities in Ethiopia through entrepreneurship,
              technology, financial inclusion, and skills training. Join us in driving
              social and economic transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-navy text-base font-bold font-heading rounded-xl hover:bg-primary-hover hover:text-white transition-all shadow-[0_0_20px_rgba(249,168,37,0.3)] hover:shadow-[0_0_30px_rgba(249,168,37,0.5)] transform hover:-translate-y-1"
              >
                Learn More
              </Link>
              <Link 
                href="/programs" 
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-base font-bold font-heading rounded-xl text-white hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Our Programs
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20 animate-bounce">
          <ChevronDown className="text-white/40 h-8 w-8" />
        </div>

        <div className="absolute bottom-10 right-10 z-30 hidden md:block">
          <button className="bg-white p-5 rounded-full shadow-2xl border border-gray-100 text-primary hover:text-primary-hover transition-colors group">
            <Lightbulb className="h-7 w-7 group-hover:scale-110 transition-transform fill-current" />
          </button>
        </div>
      </section>

      <SectionWrapper background="white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Our Mission</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-navy mb-8 leading-snug">
            "{MISSION_STATEMENT}"
          </h3>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
             {IMPACT_STATS.map((stat, idx) => (
               <div key={idx} className="text-center p-8 bg-background rounded-2xl border border-gray-100 hover:border-primary/30 transition-colors">
                 <div className="text-4xl md:text-5xl font-bold font-heading text-primary mb-2">{stat.value}<span className="text-2xl">{stat.suffix}</span></div>
                 <div className="text-xs text-navy font-bold uppercase tracking-widest mt-2">{stat.label}</div>
               </div>
             ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="light">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
             <h2 className="text-4xl font-bold font-heading text-navy mb-6">What We Do</h2>
             <p className="text-gray-600 text-lg">
               We focus on holistic development through multiple channels of engagement, ensuring no youth is left behind in the journey towards self-reliance.
             </p>
          </div>
          <Link href="/programs" className="hidden md:flex items-center text-navy font-bold hover:text-primary transition-colors mt-4 md:mt-0 group">
            View All Programs <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROGRAMS.slice(0, 3).map((prog, idx) => {
             const Icon = prog.icon;
             return (
              <Link href="/programs" key={prog.id} className="group">
                <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon size={120} className="text-navy" />
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-light/20 to-primary/20 rounded-2xl flex items-center justify-center mb-8 text-navy group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-navy mb-4">{prog.title}</h3>
                  <p className="text-gray-600 line-clamp-3 leading-relaxed">{prog.description}</p>
                  <div className="mt-6 flex items-center text-secondary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
             );
          })}
        </div>
        
        <div className="mt-10 text-center md:hidden">
           <Link href="/programs" className="inline-flex items-center text-navy font-bold hover:text-primary transition-colors">
            View All Programs <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-3xl rotate-3 opacity-20"></div>
                <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5763?q=80&w=2070&auto=format&fit=crop" 
                    alt="Rural youth meeting" 
                    className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]" 
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-4">
                        <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                            <Users size={24} />
                        </div>
                        <div>
                            <div className="font-bold text-navy text-lg">Community First</div>
                            <div className="text-gray-500 text-sm">Building strong local networks</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-secondary font-bold tracking-widest uppercase mb-3 text-sm">Our Approach</h2>
                <h3 className="text-4xl font-bold font-heading text-navy mb-6">Holistic Development for<br/>Long-term Impact</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    We don't just provide training; we build ecosystems. By connecting youth with mentors, financial institutions, and markets, we ensure that their skills translate into sustainable livelihoods.
                </p>
                <ul className="space-y-4">
                    {[
                        "Market-driven skill acquisition",
                        "Mentorship from industry leaders",
                        "Access to seed funding and credit",
                        "Sustainable agricultural practices"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center text-navy font-medium">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                                <TrendingUp size={14} />
                            </div>
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="mt-10">
                     <Link href="/about" className="text-navy font-bold border-b-2 border-primary hover:text-primary transition-colors pb-1">
                        Read about our objectives
                     </Link>
                </div>
            </div>
        </div>
      </SectionWrapper>

      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-8">Ready to Make an Impact?</h2>
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto font-light">
            Whether you want to partner with us, join our programs, or support our cause, we'd love to hear from you.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-primary text-navy font-bold font-heading px-12 py-5 rounded-xl shadow-[0_0_20px_rgba(249,168,37,0.4)] hover:bg-white hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}