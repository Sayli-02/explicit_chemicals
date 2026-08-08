import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Reveal } from '../components/Reveal';
import { FlaskConical, Beaker, BarChart3, Waves, Thermometer, Droplets, ArrowRight, Lightbulb, Search, Users, Target } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Research and Development for Chemical Manufacturing</title>
        <meta name="description" content="Explore our world-class Research & Development unit driving innovation, optimization & top-quality products, supported by advanced Quality Control instrumentation." />
      </Helmet>

      {/* Hero Strip */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy text-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Research Background" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
              Research and <span className="text-teal-accent">Development</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "Green Chemistry", "Good Laboratory Practices", "Eco-Friendly Solutions",
                "Creative Thinking", "Passion for Excellence", "Optimised Processes"
              ].map((chip, i) => (
                <div key={i} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium backdrop-blur-md">
                  {chip}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
        
        {/* Intro Section */}
        <section className="py-20 lg:py-28">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Scientist at HPLC equipment" className="rounded-3xl shadow-xl w-full h-[500px] object-cover" />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border border-black/5 hidden md:block">
                  <div className="w-16 h-16 bg-teal-accent/20 rounded-full flex items-center justify-center text-teal-heading mb-3">
                    <FlaskConical size={32} />
                  </div>
                  <p className="font-bold text-navy text-lg">World-Class Lab</p>
                  <p className="text-steelblue text-sm">Pune, MIDC Bhosari</p>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex flex-col gap-6">
                <ul className="space-y-4">
                  {[
                    "Research and Development forms one of the most important aspects of the company. We have developed a sophisticated world-class R&D unit, which also includes an inhouse analytical laboratory, enabling us to cater to the requirements of our clients and the market.",
                    "Through R&D, we continuously focus on innovation, development of new products, optimization, and providing the highest quality and value-added products and services to our customers.",
                    "Our exclusive state-of-the-art facility located at M.I.D.C Bhosari, Pune supports all our research endeavours under one roof.",
                    "We believe our R&D and its highly qualified and experienced talented professionals form the beacon of light for our future growth prospects.",
                    "Our R&D experts keep themselves abreast with the technological advancements to make sure that our products meet client's specific requirements.",
                    "They carry out continuous market research to discover new and effective range of Chemicals to incorporate them in innovative processing techniques and subsequently in our product range.",
                    "The company has set a goal to ever increase its expansive product basket through R&D to meet the diverse domestic and international market."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-accent shrink-0 mt-2"></div>
                      <span className="text-steelblue leading-relaxed text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Quality Assurance */}
        <section className="pb-20 lg:pb-28">
          <Reveal>
            <div className="bg-gray-50/50 rounded-3xl p-8 lg:p-16 border border-black/5">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-teal-heading tracking-tight mb-6">
                  Quality Assurance / Quality Control
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-steelblue leading-relaxed">
                    We have our In-house Analytical Quality Control/Assurance Department that supports our R&D and Production teams for manufacturing the best quality products to the best of standards.
                  </p>
                  <p className="text-lg text-steelblue leading-relaxed">
                    Our In-house Quality Control/Assurance Department plays a pivotal role in ensuring the production of high-quality products by employing a suite of advanced instruments.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { name: "High-Performance Liquid Chromatography (HPLC's)", icon: BarChart3 },
                  { name: "Gas Chromatography (GC's)", icon: BarChart3 },
                  { name: "Gas Chromatography with head space", icon: BarChart3 },
                  { name: "Atomic Absorption Spectroscopy", icon: Waves },
                  { name: "UV-Spectroscopy", icon: Waves },
                  { name: "Moisture Analyser", icon: Droplets },
                  { name: "Wet Chemistry Lab", icon: Beaker },
                  { name: "Potentiometer", icon: Thermometer },
                  { name: "Physical Characteristic Testing Apparatus (Melting Point Apparatus, Density measuring apparatus, Karl Fischer, Particle Size measurement, etc.)", icon: FlaskConical },
                ].map((inst, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:border-teal-accent/30 transition-colors flex flex-col items-start gap-4 group">
                    <div className="p-3 bg-navy/5 rounded-xl text-teal-heading group-hover:bg-teal-accent/10 transition-colors">
                      <inst.icon size={24} />
                    </div>
                    <span className="font-semibold text-navy leading-tight">{inst.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

      </div>

      {/* CTA Banner */}
      <section className="bg-navy py-20 lg:py-28 px-4 sm:px-6 lg:px-10 text-center">
        <Reveal>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-8 leading-tight">
              Let's Collaborate, <span className="text-teal-accent">Innovate & Elevate</span> in Product Development
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10">
              Partners in Progress, Jointly Shaping a Prosperous Future.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-navy px-8 py-4 rounded-full font-bold transition-colors shadow-lg">
              Get in Touch <ArrowRight size={20} />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Research;
