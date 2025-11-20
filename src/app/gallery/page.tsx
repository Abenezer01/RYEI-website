"use client";

import { SectionWrapper } from '../../components/SectionWrapper';

export default function Gallery() {
  const photos = [
    "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070",
    "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=2070",
    "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5763?q=80&w=2070",
    "https://images.unsplash.com/photo-1594708767767-4d7984dca6da?q=80&w=2070",
    "https://images.unsplash.com/photo-1605116863958-527e2034fa55?q=80&w=2070",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888"
  ];

  return (
    <div className="pt-20">
       <div className="bg-navy py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Gallery</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Moments of empowerment and growth from our community.</p>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((src, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl h-80">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-white font-bold tracking-wider border-2 border-white px-4 py-2 rounded-lg">VIEW</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}