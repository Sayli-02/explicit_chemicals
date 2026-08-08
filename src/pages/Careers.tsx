import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Reveal } from '../components/Reveal';
import { TrendingUp, Users, Microscope, CheckCircle2 } from 'lucide-react';

const Careers: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Careers | Manufacturing Industry | Explicit Chemicals Pvt. Ltd</title>
        <meta name="description" content="Explore exciting career opportunities at Explicit Chemicals Pvt. Ltd. Join our dynamic team and contribute to our journey of excellence in chemical manufacturing." />
      </Helmet>

      {/* Hero Strip */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-navy to-navy-hover"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              <span className="text-teal-accent">Careers</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Are you passionate about making a difference? Do you thrive in a dynamic, collaborative environment? If so, we want you on our team!
            </p>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full pb-20 lg:pb-28">
        
        {/* Value Proposition Cards */}
        <section className="py-20">
          <Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Continuous Growth", desc: "Unlock your potential with ongoing learning opportunities and clear career progression paths.", icon: TrendingUp },
                { title: "Collaborative Culture", desc: "Work alongside industry experts in a supportive, inclusive environment where your voice matters.", icon: Users },
                { title: "Meaningful Science", desc: "Contribute to cutting-edge manufacturing processes that positively impact global industries.", icon: Microscope }
              ].map((val, i) => (
                <div key={i} className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="w-12 h-12 bg-teal-accent/20 text-teal-heading rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <val.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-teal-heading transition-colors">{val.title}</h3>
                  <p className="text-steelblue leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Application Form */}
        <section className="max-w-3xl mx-auto">
          <Reveal>
            <div className="glass-card bg-white/60 p-8 md:p-12 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-500">
              <div className="mb-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-teal-heading mb-4">Join Our Journey</h2>
                <p className="text-steelblue">
                  While we may not have specific open positions at this very moment, we are always on the lookout for exceptional talent. We'd love to hear from you!
                </p>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-500">
                  <CheckCircle2 size={64} className="text-teal-accent mb-6" />
                  <h3 className="text-2xl font-bold text-navy mb-2">Application Received!</h3>
                  <p className="text-steelblue">Thank you for your interest in joining Explicit Chemicals. We'll review your application and get in touch if there's a fit.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-teal-heading font-medium hover:text-teal-accent underline underline-offset-4"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <label htmlFor="firstName" className="block text-sm font-semibold text-navy group-focus-within:text-teal-heading transition-colors">First Name <span className="text-red-500">*</span></label>
                      <input required type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:ring-2 focus:ring-teal-accent/50 focus:border-teal-accent outline-none transition-all duration-300 text-navy bg-white/80 focus:bg-white focus:-translate-y-1 shadow-sm focus:shadow-md" />
                    </div>
                    <div className="space-y-2 group">
                      <label htmlFor="lastName" className="block text-sm font-semibold text-navy group-focus-within:text-teal-heading transition-colors">Last Name <span className="text-red-500">*</span></label>
                      <input required type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:ring-2 focus:ring-teal-accent/50 focus:border-teal-accent outline-none transition-all duration-300 text-navy bg-white/80 focus:bg-white focus:-translate-y-1 shadow-sm focus:shadow-md" />
                    </div>
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
                    <label htmlFor="resume" className="block text-sm font-semibold text-navy group-focus-within:text-teal-heading transition-colors">Resume (PDF, DOCX) <span className="text-red-500">*</span></label>
                    <input required type="file" id="resume" accept=".pdf,.doc,.docx" className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-white/80 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-navy/5 file:text-navy hover:file:bg-navy/10 transition-all duration-300 text-steelblue cursor-pointer focus:bg-white focus:-translate-y-1 shadow-sm focus:shadow-md" />
                  </div>

                  <div className="space-y-2 group">
                    <label htmlFor="message" className="block text-sm font-semibold text-navy group-focus-within:text-teal-heading transition-colors">Cover Letter / Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-black/10 focus:ring-2 focus:ring-teal-accent/50 focus:border-teal-accent outline-none transition-all duration-300 text-navy bg-white/80 focus:bg-white focus:-translate-y-1 shadow-sm focus:shadow-md resize-none"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-navy hover:bg-navy-hover text-white py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 mt-4">
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </section>

      </div>
    </>
  );
};

export default Careers;
