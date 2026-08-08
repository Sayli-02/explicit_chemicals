import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Reveal } from '../components/Reveal';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Top Chemical Manufacturer & Supplier in India: Explicit Chemicals</title>
        <meta name="description" content="Connect with Explicit Chemicals Pvt. Ltd. for inquiries about our top-quality chemical products and services." />
      </Helmet>

      {/* Hero Strip */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy text-center">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-navy to-navy-hover"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Contact <span className="text-teal-accent">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              We're here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full py-20 lg:py-28">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Form Column */}
            <div className="glass-card bg-white/60 p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-fit">
              <h2 className="text-2xl font-bold text-teal-heading mb-8">Send us a message</h2>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center p-8 py-16 animate-in fade-in zoom-in duration-500">
                  <CheckCircle2 size={64} className="text-teal-accent mb-6" />
                  <h3 className="text-2xl font-bold text-navy mb-2">Message Sent!</h3>
                  <p className="text-steelblue mb-8">Thank you for reaching out. A member of our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-navy hover:bg-navy-hover text-white px-8 py-3 rounded-full font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2 group">
                    <label htmlFor="name" className="block text-sm font-semibold text-navy group-focus-within:text-teal-heading transition-colors">Full Name <span className="text-red-500">*</span></label>
                    <input required type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:ring-2 focus:ring-teal-accent/50 focus:border-teal-accent outline-none transition-all duration-300 text-navy bg-white/80 focus:bg-white focus:-translate-y-1 shadow-sm focus:shadow-md" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <label htmlFor="email" className="block text-sm font-semibold text-navy group-focus-within:text-teal-heading transition-colors">Email Address <span className="text-red-500">*</span></label>
                      <input required type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:ring-2 focus:ring-teal-accent/50 focus:border-teal-accent outline-none transition-all duration-300 text-navy bg-white/80 focus:bg-white focus:-translate-y-1 shadow-sm focus:shadow-md" />
                    </div>
                    <div className="space-y-2 group">
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy group-focus-within:text-teal-heading transition-colors">Phone Number <span className="text-red-500">*</span></label>
                      <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:ring-2 focus:ring-teal-accent/50 focus:border-teal-accent outline-none transition-all duration-300 text-navy bg-white/80 focus:bg-white focus:-translate-y-1 shadow-sm focus:shadow-md" />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label htmlFor="message" className="block text-sm font-semibold text-navy group-focus-within:text-teal-heading transition-colors">Your Message <span className="text-red-500">*</span></label>
                    <textarea required id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-black/10 focus:ring-2 focus:ring-teal-accent/50 focus:border-teal-accent outline-none transition-all duration-300 text-navy bg-white/80 focus:bg-white focus:-translate-y-1 shadow-sm focus:shadow-md resize-none"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-navy hover:bg-navy-hover text-white py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 mt-4">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info Column */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-8 glass-card bg-white/60 p-8 md:p-10 rounded-3xl hover:shadow-xl transition-shadow duration-500">
                <div>
                  <h3 className="text-xl font-bold text-navy mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-full bg-teal-accent/10 text-teal-heading flex items-center justify-center shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-steelblue font-medium mb-1">Call us at</p>
                        <p className="text-navy font-semibold text-lg">+91 91460 04195</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-full bg-teal-accent/10 text-teal-heading flex items-center justify-center shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-steelblue font-medium mb-1">Mail us at</p>
                        <a href="mailto:sales@explicitchemicals.com" className="text-navy font-semibold text-lg hover:text-teal-heading transition-colors">sales@explicitchemicals.com</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-black/5"></div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-6">Our Locations</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-navy/5 text-navy flex items-center justify-center shrink-0 mt-1">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-navy font-bold mb-1">Corporate Office</p>
                        <p className="text-steelblue leading-relaxed text-sm">Suyash RDM Center Plot No. J-52/1/2, MIDC Bhosari, Pune, Maharashtra, India - 411026</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-navy/5 text-navy flex items-center justify-center shrink-0 mt-1">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-navy font-bold mb-1">Manufacturing Unit</p>
                        <p className="text-steelblue leading-relaxed text-sm">Explicit Chemicals Pvt. Ltd. Plot No. A-32, MIDC Kurkumbh, Taluka-Daund, District-Pune, Maharashtra, India - 413802</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="relative rounded-3xl overflow-hidden border border-black/5 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-[300px] w-full bg-gray-100 group">
                <iframe 
                  src="https://maps.google.com/maps?q=Explicit%20Chemicals,%20Suyash%20RDM%20Center,%20MIDC%20Bhosari,%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MIDC Bhosari Map"
                  className="opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                ></iframe>
                {/* Custom Map Marker Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
                  <div className="bg-red-500 text-white p-2.5 rounded-full shadow-lg shadow-red-500/40 animate-bounce">
                    <MapPin size={24} className="fill-red-500 text-white" />
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-md mt-2 border border-black/5">
                    <p className="text-navy font-bold text-xs">Explicit Chemicals</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </>
  );
};

export default Contact;
