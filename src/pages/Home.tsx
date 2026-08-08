import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { FlaskConical, PlayCircle, CheckCircle2, Factory, Beaker, ShieldCheck, Users, Truck, Package, Leaf, Droplet } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

import { BoomerangVideoBg } from '../BoomerangVideoBg';
import { Reveal } from '../components/Reveal';
import { StatCounter } from '../components/StatCounter';
import About from './About';
import Products from './Products';
import Research from './Research';
import Careers from './Careers';
import Contact from './Contact';

const Home: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Lock scroll briefly while intro loads
    document.body.style.overflow = 'hidden';
    
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = 'unset';
      }
    });

    // Animate background opacity
    tl.to(bgRef.current, { opacity: 1, duration: 3, ease: 'power2.inOut' }, 0);
    // Animate overlay from solid navy to transparent navy
    tl.fromTo(overlayRef.current, 
      { backgroundColor: '#022c22' }, 
      { backgroundColor: 'rgba(2, 44, 34, 0.7)', duration: 3, ease: 'power2.inOut' }, 
      0
    );

    // Slowly reveal main text
    tl.fromTo(textRef.current, 
      { opacity: 0, y: 80, scale: 0.95 }, 
      { opacity: 1, y: 0, scale: 1, duration: 2.5, ease: 'power3.out' }, 
      1
    );

    // Slowly reveal CTA
    tl.fromTo(ctaRef.current,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 1.5, ease: 'power2.out' },
      2.5
    );

    // GSAP Scroll Animations (Parallax effect)
    gsap.to(textRef.current, {
      y: -200,
      opacity: 0,
      scale: 0.9,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

  }, { scope: container });

  return (
    <>
      <Helmet>
        <title>Explicit Chemicals Pvt. Ltd: Leading Manufacturer & Supplier</title>
        <meta name="description" content="Leading manufacturer & supplier of Laboratory Chemicals, Pharmaceutical Reagents, Speciality Chemicals, Vitamins & Nutraceutical Ingredients." />
      </Helmet>

      {/* Hero Section */}
      <div ref={container} className="relative min-h-[100svh] flex flex-col -mt-[88px] pt-[88px] overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div ref={bgRef} className="w-full h-full opacity-0">
            <BoomerangVideoBg src="/hero-video.mp4" className="w-full h-full" />
          </div>
          {/* Overlay to ensure text readability */}
          <div ref={overlayRef} className="absolute inset-0"></div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto w-full pb-32">
          <div ref={textRef} className="opacity-0">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 text-center mx-auto tracking-tighter drop-shadow-2xl uppercase leading-tight">
              Explicit Chemicals
            </h1>
            <p className="mt-8 text-xl md:text-2xl lg:text-3xl text-white/90 font-light max-w-3xl mx-auto text-center leading-relaxed tracking-wide drop-shadow-xl">
              Pioneering the Future of <span className="text-teal-accent font-medium">Manufacturing</span>
            </p>
          </div>
        </div>

        {/* Bottom Right Video Link (Desktop) */}
        <div ref={ctaRef} className="hidden lg:flex absolute bottom-12 right-10 z-20 items-center gap-3 cursor-pointer group opacity-0">
          <div className="text-right">
            <p className="text-navy font-semibold text-sm group-hover:text-teal-heading transition-colors">Inside our lab</p>
            <p className="text-navy/60 text-xs font-medium">1:35</p>
          </div>
          <div className="p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-sm border border-white/50 group-hover:bg-white transition-all transform group-hover:scale-105">
            <PlayCircle size={24} className="text-navy group-hover:text-teal-heading transition-colors" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
        
        {/* Welcome Section */}
        <section className="py-20 lg:py-28">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-teal-heading tracking-tight mb-6">
                  Welcome to <span className="text-teal-accent">Explicit Chemicals</span> Pvt. Ltd.
                </h2>
                <p className="text-lg text-steelblue leading-relaxed mb-8">
                  Explicit Chemicals Pvt. Ltd. is a pioneer manufacturer and supplier of Laboratory Chemicals, Pharmaceutical Reagents and Intermediates, Speciality Chemicals, Vitamins and Nutraceuticals Ingredients.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "15+ years of eminent manufacturing journey",
                    "Exporting globally for 12+ years",
                    "State of the art manufacturing facility with all the compliances",
                    "Holding FDA (Food & Drugs Administration) license",
                    "Well-equipped analytical capabilities",
                    "Highly qualified team of experienced professionals and skilled workforce",
                    "Offering value added product services such as granulation, particles size reduction, formulations, customized packaging solution & more",
                    "Worldwide network for efficient supply chain",
                    "Embracing on green chemistry initiatives and eco-friendly practices"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-teal-accent shrink-0 mt-1" />
                      <span className="text-sm text-navy">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#about" className="inline-block bg-navy hover:bg-navy-hover text-white px-8 py-3 rounded-full font-medium transition-colors shadow-sm">
                  Read More
                </a>
              </div>
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Chemical Laboratory" className="rounded-2xl shadow-lg w-full h-[500px] object-cover" />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Stat Counter */}
        <section className="pb-20 lg:pb-28">
          <StatCounter end={15} suffix="+" label="Years Of Remarkable Manufacturing Journey" />
        </section>

        {/* Commitment to Quality Preview */}
        <section className="py-20 bg-gray-50/50 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-heading tracking-tight mb-6">
                Commitment to Quality and Innovation
              </h2>
              <p className="text-lg text-steelblue">
                Crafting chemical solutions that redefine manufacturing processes, setting new standards in quality and efficiency.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Pharmaceuticals KSMs, Intermediates & Fine Chemicals", icon: <FlaskConical size={32} />, items: ["Phthalimide", "N-Hydroxy Phthalimide", "Barbituric Acid"] },
                { title: "Vitamins & Nutraceuticals Ingredients", icon: <Leaf size={32} />, items: ["Indole-3-Carbinol", "Palmitoylethanolamide", "Alpha Lipoic Acid"] },
                { title: "Laboratory Reagents", icon: <Beaker size={32} />, items: ["Ninhydrin", "Murexide", "Chloranilic Acid"] }
              ].map((category, i) => (
                <div key={i} className="glass-card p-8 rounded-2xl flex flex-col h-full group hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-teal-accent/20 flex items-center justify-center text-teal-heading mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4 leading-tight">{category.title}</h3>
                  <ul className="flex-1 space-y-3 mb-8">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-steelblue text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-accent"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#products" className="text-teal-heading font-bold hover:text-teal-accent transition-colors flex items-center gap-2 group-hover:translate-x-2 duration-300">
                    View More <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Our Services */}
        <section className="py-20 lg:py-28">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-heading tracking-tight mb-16 text-center max-w-3xl mx-auto">
              Our Excellence in Quality Chemicals and Trusted Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Manufacturing Excellence", icon: <Factory size={28} /> },
                { title: "Innovation and R&D of New Products", icon: <Beaker size={28} /> },
                { title: "Quality Testing and Assurance", icon: <ShieldCheck size={28} /> },
                { title: "Customer Centric Solutions", icon: <Users size={28} /> },
                { title: "Efficient Supply Chain and Fast Delivery", icon: <Truck size={28} /> },
                { title: "Customized Packaging", desc: "Heat, Light & Weather Resistance", icon: <Package size={28} /> }
              ].map((service, i) => (
                <div key={i} className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-black/5 hover:border-teal-accent/30 transition-colors">
                  <div className="p-3 bg-navy/5 text-navy rounded-xl shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy text-lg mb-1">{service.title}</h4>
                    {service.desc && <p className="text-sm text-steelblue">{service.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Why Choose Us / Industries */}
        <section className="pb-20 lg:pb-28">
          <Reveal>
            <div className="bg-navy rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">
                  Industries We Serve
                </h2>
                <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                  {[
                    { label: "Laboratory Chemicals", icon: <Beaker size={20} /> },
                    { label: "Pharmaceuticals", icon: <FlaskConical size={20} /> },
                    { label: "Dyes & Pigments", icon: <Droplet size={20} /> },
                    { label: "Agro Based Industries", icon: <Leaf size={20} /> },
                    { label: "Nutraceuticals & Health Care", icon: <ShieldCheck size={20} /> },
                    { label: "Water Treatment", icon: <Factory size={20} /> },
                  ].map((ind, i) => (
                    <div key={i} className="flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-white/90 text-sm font-medium border border-white/10 backdrop-blur-sm">
                      {ind.icon}
                      {ind.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

      </div>

      <section id="about">
        <About />
      </section>
      
      <section id="products">
        <Products />
      </section>
      
      <section id="research">
        <Research />
      </section>
      
      <section id="careers">
        <Careers />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
