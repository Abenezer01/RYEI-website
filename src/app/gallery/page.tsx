"use client";

import { SectionWrapper } from '../../components/SectionWrapper';

export default function Gallery() {
const photos = [
  // 1. Portrait: Young boy with a bright smile (Authentic/Rural vibe)
  "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?auto=format&fit=crop&w=1600&q=80",

  // 2. Agriculture: Rural farming context/Greenery
  "https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?auto=format&fit=crop&w=1600&q=80",

  // 3. Culture: Traditional coffee ceremony/preparation details
  "https://images.unsplash.com/photo-1523301386671-870d66f5119f?auto=format&fit=crop&w=1600&q=80",

  // 4. Community: Group of children/youth in a village setting
  "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=1600&q=80",

  // 5. Market/Livelihood: Young woman in a rural market context
  "https://images.unsplash.com/photo-1526315570857-451996726190?auto=format&fit=crop&w=1600&q=80",

  // 6. Pastoral Life: Herding/Cattle context (Very common for rural youth)
  "https://images.unsplash.com/photo-1543169107-19d9b736b761?auto=format&fit=crop&w=1600&q=80",

  // 7. Landscape/Environment: The highlands/rural backdrop
  "https://images.unsplash.com/photo-1469521669194-babb45f8a8d4?auto=format&fit=crop&w=1600&q=80",

  // 8. Portrait: Young girl with traditional braiding/jewelry
  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=80",

  // 9. Entrepreneurship/Work: Hands working with harvest/grain
  "https://images.unsplash.com/photo-1623851786576-9d8a5996057c?auto=format&fit=crop&w=1600&q=80"
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
