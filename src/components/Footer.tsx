import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone, Sun } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 border-t border-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <Sun className="text-primary h-8 w-8 fill-current" />
                <span className="text-2xl font-extrabold font-heading text-white">RYEI</span>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-sm">
              Empowering rural youth through entrepreneurship, cooperative development, technology, and skills training.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-navy bg-primary hover:bg-white transition-colors p-2 rounded-lg"><Facebook size={18} /></a>
              <a href="#" className="text-navy bg-primary hover:bg-white transition-colors p-2 rounded-lg"><Twitter size={18} /></a>
              <a href="#" className="text-navy bg-primary hover:bg-white transition-colors p-2 rounded-lg"><Linkedin size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-primary transition-colors inline-block">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-primary transition-colors inline-block">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-primary transition-colors inline-block">Our Programs</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-primary transition-colors inline-block">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary transition-colors inline-block">Contact</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-lg font-bold font-heading mb-6 text-primary">Get Involved</h4>
             <ul className="space-y-3 text-sm">
              <li><Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">Partner With Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">Volunteer</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">Donate</Link></li>
             </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-heading mb-6 text-primary">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 text-primary mt-0.5" size={18} />
                <span className="text-gray-300">Addis Ababa, Ethiopia<br/>Rural Program Centers</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="flex-shrink-0 text-primary" size={18} />
                <span className="text-gray-300">ruralyouthsempowerment25@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="flex-shrink-0 text-primary" size={18} />
                <span className="text-gray-300">+251 921 576 359</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-light mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Rural Youth Empowerment Initiative.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};