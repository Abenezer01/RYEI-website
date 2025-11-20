"use client";

import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ProgramCard } from '@/components/cards/ProgramCard';
import { PROGRAMS } from '@/lib/constants';

export default function Programs() {
  return (
    <>
      <div className="bg-navy pt-40 pb-24 text-center relative overflow-hidden">
         <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-repeat" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-white mb-8">Our Programs</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive solutions designed to uplift rural youth and communities through skills, finance, and organizational support.
          </p>
        </div>
      </div>

      <SectionWrapper background="light">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-32 relative z-20">
          {PROGRAMS.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <div className="bg-navy rounded-[2rem] p-10 md:p-20 overflow-hidden relative shadow-2xl">
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block text-sm">Systemic Change</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-8">Policy–Practice Linkage</h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              We don't just work on the ground; we ensure rural voices are heard at the top. 
              We promote communication between policymakers and rural communities to support youth-focused development strategies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
               <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur hover:bg-white/10 transition-colors">
                 <div className="text-primary font-bold text-xl font-heading mb-2">Dialogue</div>
                 <div className="text-gray-400 text-sm">Bridging gaps between youth and leaders</div>
               </div>
               <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur hover:bg-white/10 transition-colors">
                 <div className="text-primary font-bold text-xl font-heading mb-2">Advocacy</div>
                 <div className="text-gray-400 text-sm">Championing rural youth interests</div>
               </div>
               <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur hover:bg-white/10 transition-colors">
                 <div className="text-primary font-bold text-xl font-heading mb-2">Strategy</div>
                 <div className="text-gray-400 text-sm">Input on national development plans</div>
               </div>
               <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur hover:bg-white/10 transition-colors">
                 <div className="text-primary font-bold text-xl font-heading mb-2">Action</div>
                 <div className="text-gray-400 text-sm">Implementing policy at grassroots</div>
               </div>
            </div>
          </div>
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
      </SectionWrapper>
    </>
  );
}