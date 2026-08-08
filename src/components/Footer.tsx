import React from 'react';

import { Facebook, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white/70 py-16 px-6 lg:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & Socials */}
        <div className="flex flex-col gap-6">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/logo.svg" alt="Explicit Chemicals Logo" className="h-16 lg:h-20 w-auto object-contain brightness-0 invert self-start max-w-[200px] lg:max-w-[250px]" onError={(e) => {
              (e.target as HTMLImageElement).src = '/logo.png';
              (e.target as HTMLImageElement).onerror = null;
            }} />
          </a>
          <p className="text-sm leading-relaxed">
            Leading manufacturer & supplier of quality chemical solutions for diverse industries globally.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white hover:text-teal-accent">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white hover:text-teal-accent">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white hover:text-teal-accent">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-lg mb-2">Quick Links</h4>
          <a href="#about" className="hover:text-teal-accent transition-colors w-fit">About Us</a>
          <a href="#products" className="hover:text-teal-accent transition-colors w-fit">Products</a>
          <a href="#research" className="hover:text-teal-accent transition-colors w-fit">Research & Development</a>
          <a href="#careers" className="hover:text-teal-accent transition-colors w-fit">Careers</a>
          <a href="#contact" className="hover:text-teal-accent transition-colors w-fit">Contact Us</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-lg mb-2">Contact Info</h4>
          <div className="flex gap-3 items-start">
            <MapPin size={20} className="shrink-0 mt-0.5 text-teal-accent" />
            <span className="text-sm leading-relaxed">
              Corporate Office: Suyash RDM Center Plot No. J-52/1/2, MIDC Bhosari, Pune, Maharashtra, India - 411026
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <Phone size={20} className="shrink-0 text-teal-accent" />
            <span className="text-sm">+91 9146004195</span>
          </div>
          <div className="flex gap-3 items-center">
            <Mail size={20} className="shrink-0 text-teal-accent" />
            <a href="mailto:sales@explicitchemicals.com" className="text-sm hover:text-white transition-colors">
              sales@explicitchemicals.com
            </a>
          </div>
        </div>

        {/* Global Branches */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-lg mb-2">Branches</h4>
          <div className="flex flex-col gap-4 text-sm">
            <div>
              <strong className="text-white/90 block">North America</strong>
              <span className="text-white/60">PapChem International LLC, 30 New Brooklyn Rd, Edison, NJ 08817, USA</span>
            </div>
            <div>
              <strong className="text-white/90 block">United Kingdom</strong>
              <span className="text-white/60">PapChem International UK Ltd, 83 Grasmere Gardens, Harrow, HA3 7PS, United Kingdom</span>
            </div>
            <div>
              <strong className="text-white/90 block">India (Mumbai)</strong>
              <span className="text-white/60">PapChem Lifesciences, 1305, Kamadhenu Commerz, Sector 14, Kharghar, Navi Mumbai, Maharashtra, India – 410210</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
        <p>© 2024 Explicit Chemicals. All Rights Reserved Credit line: Website Designed & Developed by Digital Flame Marketing Solutions Pvt. Ltd.</p>
      </div>
    </footer>
  );
};
