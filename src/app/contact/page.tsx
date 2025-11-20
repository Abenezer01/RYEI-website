"use client";

import React from 'react';
import { SectionWrapper } from '../../components/SectionWrapper';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="pt-20">
      <div className="bg-navy py-20 text-center">
         <h1 className="text-4xl md:text-5xl font-bold font-heading text-white">Contact Us</h1>
      </div>

      <div className="bg-white">
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h4 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">Get in Touch</h4>
              <h2 className="text-4xl font-bold font-heading text-navy mb-6">Let's Build the Future Together</h2>
              <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                Have questions about our programs, partnerships, or how to get involved? Reach out to us today and become part of the movement.
              </p>

              <div className="space-y-10">
                <div className="flex items-start group">
                  <div className="bg-background p-4 rounded-2xl mr-6 group-hover:bg-primary group-hover:text-navy transition-colors text-navy">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-navy font-heading">Our Headquarters</h3>
                    <p className="text-gray-600 mt-2">Addis Ababa, Ethiopia</p>
                    <p className="text-gray-400 text-sm mt-1">Open Mon-Fri, 9am - 5pm</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-background p-4 rounded-2xl mr-6 group-hover:bg-primary group-hover:text-navy transition-colors text-navy">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-navy font-heading">Email Us</h3>
                    <p className="text-gray-600 mt-2">ruralyouthsempowerment25@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-background p-4 rounded-2xl mr-6 group-hover:bg-primary group-hover:text-navy transition-colors text-navy">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-navy font-heading">Call Us</h3>
                    <p className="text-gray-600 mt-2">+251 921 576 359</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background p-10 rounded-3xl shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-bold text-navy mb-2">First Name</label>
                    <input type="text" id="firstName" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white" placeholder="John" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-bold text-navy mb-2">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white" placeholder="Doe" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-navy mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white" placeholder="john@example.com" required />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-navy mb-2">Subject</label>
                  <select id="subject" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white appearance-none">
                    <option>General Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Program Enrollment</option>
                    <option>Media / Press</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-navy mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none bg-white" placeholder="How can we help you?" required></textarea>
                </div>

                <button type="submit" className="w-full bg-primary text-navy font-bold font-heading text-lg py-4 rounded-xl hover:bg-primary-hover hover:text-white transition-colors flex items-center justify-center shadow-lg shadow-primary/20">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </SectionWrapper>
        
        <div className="h-[500px] bg-gray-200 w-full relative grayscale hover:grayscale-0 transition-all duration-700">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Map" />
            <div className="absolute inset-0 flex items-center justify-center bg-navy/10">
                <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                    <MapPin className="text-primary h-6 w-6" />
                    <span className="font-bold text-navy">Addis Ababa, Ethiopia</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}