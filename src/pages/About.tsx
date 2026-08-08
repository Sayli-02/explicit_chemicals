import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Reveal } from '../components/Reveal';
import { StatCounter } from '../components/StatCounter';
import { Target, Lightbulb, Users, Leaf, FlaskConical, HeartHandshake, TrendingUp, ShieldCheck, Factory } from 'lucide-react';

const About: React.FC = () => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Explicit Chemicals | Chemical Manufacturing Company In India</title>
        <meta name="description" content="Excellence in manufacturing & exporting top-quality chemicals for diverse industries. Pioneers in Pharmaceuticals, Nutraceuticals, Vitamins, lab chemicals & more." />
      </Helmet>

      {/* Hero Strip */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Chemical Facility Exterior" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              About <span className="text-teal-accent">Explicit Chemicals</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              14+ years of unwavering commitment to excellence in manufacturing and export of premium quality chemicals.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
        
        {/* Intro Section */}
        <section className="py-20 lg:py-28">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div className="flex flex-col gap-6">
                <p className="text-steelblue leading-relaxed text-lg">
                  We at Explicit Chemicals Pvt. Ltd., earned wide accolades in the field of manufacturing and exporting an unmatched quality range of chemicals since our establishment in 2011 – a journey spanning over 14+ years. This remarkable journey is a testament to the assistance and guidance of our highly respected visionary global leaders who have propelled the company to extraordinary heights, establishing us as pioneers in our industry.
                </p>
                <p className="text-steelblue leading-relaxed text-lg">
                  We have earned wide accolades in the field of manufacturing and exporting an unmatched quality range of chemicals. Our products are supplied to various industries such as Pharmaceuticals, Nutraceuticals & Vitamins, Laboratory Chemicals, Agro-industry, Cosmetics, Pigments, Water Treatment Chemicals, and Textile Industries. Our products are adeptly tested on various parameters at our in-house quality testing facility to ensure impeccable quality for our clients.
                </p>

                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isReadMoreOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col gap-6 pt-2">
                    <p className="text-steelblue leading-relaxed text-lg">
                      Harnessing the strength of our state-of-the-art infrastructure, we're adept at satisfying our clients' varied demands. Our facility houses an impressive array of tools, from glass-lined reactors to stainless steel reactors and fluidized bed dryers, all geared towards meeting production targets on schedule. Our achievements are a testament to our dedicated team of experienced experts, who not only excel in crafting quality chemicals but also champion waste reduction and environmental safety.
                    </p>
                    <p className="text-steelblue leading-relaxed text-lg">
                      Behind our triumphant journey lies a passionate and diverse team- including management, marketing, R&D experts, chemists, tech wizards, accountants, and support staff. Together, we harmonize as a united front, realizing the dream of one visionary and igniting the ambitions of countless others.
                    </p>
                    <p className="text-steelblue leading-relaxed text-lg">
                      We're not just a company with a strong history; we're a forward-looking entity, ready for significant growth ahead.
                    </p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}
                  className="self-start text-teal-heading font-semibold underline underline-offset-4 mt-2 hover:text-teal-accent transition-colors"
                >
                  {isReadMoreOpen ? "Read Less" : "Show More"}
                </button>
              </div>
              <div className="relative sticky top-32 group">
                <div className="absolute -inset-2 bg-gradient-to-r from-teal-accent to-navy rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Laboratory Interior" className="relative rounded-2xl shadow-lg w-full h-[400px] lg:h-[500px] object-cover border border-white/20 animate-float" />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Vision / Mission */}
        <section className="pb-20 lg:pb-28">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50/50 p-10 rounded-3xl border border-black/5 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center text-teal-heading mb-6">
                  <Lightbulb size={28} />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
                <p className="text-steelblue leading-relaxed">
                  To be a global leader in chemical manufacturing, setting industry standards and delivering innovative solutions that positively impact various sectors to contribute to a bright future.
                </p>
              </div>
              <div className="bg-gray-50/50 p-10 rounded-3xl border border-black/5 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center text-teal-heading mb-6">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
                <p className="text-steelblue leading-relaxed">
                  To deliver top-quality innovative chemical solutions, foster sustainability, and prioritize customer satisfaction through a dedicated, empowered, and inspired team.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Stat Counter */}
        <section className="pb-20 lg:pb-28">
          <StatCounter end={15} suffix="+" label="Years Of Remarkable Manufacturing Journey" />
        </section>

        {/* Core Values (AIMCCC) */}
        <section className="pb-20 lg:pb-28">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-heading tracking-tight mb-4">Core Values</h2>
              <p className="text-lg text-steelblue">Our approach to delivering excellence</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex-1 bg-white border border-black/5 rounded-2xl p-8 text-center shadow-sm relative z-10 w-full md:w-auto">
                <FlaskConical size={32} className="mx-auto text-teal-accent mb-4" />
                <h4 className="text-xl font-bold text-navy">Concept</h4>
              </div>
              <div className="hidden md:block h-1 w-12 bg-teal-accent/30 shrink-0"></div>
              <div className="md:hidden w-1 h-12 bg-teal-accent/30 shrink-0"></div>
              
              <div className="flex-1 bg-white border border-black/5 rounded-2xl p-8 text-center shadow-sm relative z-10 w-full md:w-auto">
                <Leaf size={32} className="mx-auto text-teal-accent mb-4" />
                <h4 className="text-xl font-bold text-navy">Creation</h4>
              </div>
              <div className="hidden md:block h-1 w-12 bg-teal-accent/30 shrink-0"></div>
              <div className="md:hidden w-1 h-12 bg-teal-accent/30 shrink-0"></div>
              
              <div className="flex-1 bg-white border border-black/5 rounded-2xl p-8 text-center shadow-sm relative z-10 w-full md:w-auto">
                <Users size={32} className="mx-auto text-teal-accent mb-4" />
                <h4 className="text-xl font-bold text-navy">Customer</h4>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Philosophy Block */}
        <section className="pb-20 lg:pb-28">
          <Reveal>
            <div className="bg-navy rounded-3xl p-12 lg:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-teal-accent tracking-tight mb-4 font-display italic">
                "One World, One Future."
              </h2>
              <p className="text-white/80 font-medium">Our Guiding Philosophy</p>
            </div>
          </Reveal>
        </section>

        {/* Our Team */}
        <section className="pb-20 lg:pb-28">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-heading tracking-tight mb-4">Leadership Team</h2>
              <p className="text-lg text-steelblue">Guided by visionaries propelling us to extraordinary heights.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {[
                { name: "Mr. Ravindra Yashwant Patil", title: "Founder & Managing Director", creds: "M.Tech, IIT Mumbai; Business Leadership, Harvard Business School, Boston, USA", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                { name: "Mr. Harshad R. Patil", title: "Executive Director", creds: "Master's in Chemical Engineering, Illinois Institute of Technology, Chicago, USA", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                { name: "Mr. Paresh Patil", title: "Executive Director", creds: "MBA in Sales & Marketing; Strategic Business Leadership, Cambridge and Oxford University", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
              ].map((member, i) => (
                <div key={i} className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="h-64 overflow-hidden relative">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  </div>
                  <div className="p-6 relative">
                    <h4 className="text-lg font-bold text-navy mb-1">{member.name}</h4>
                    <p className="text-teal-heading font-semibold text-sm mb-4">{member.title}</p>
                    <p className="text-steelblue text-sm leading-relaxed">{member.creds}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Corporate Social Responsibility */}
        <section className="pb-20 lg:pb-28">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-heading tracking-tight mb-4">Giving Back</h2>
              <div className="bg-teal-accent/10 rounded-2xl p-8 mt-8 border border-teal-accent/20">
                <HeartHandshake size={32} className="mx-auto text-teal-accent mb-4" />
                <p className="text-xl md:text-2xl text-navy italic font-semibold font-display">
                  "देणाऱ्याने देत जावे, घेणाऱ्याने घेत जावे । घेता घेता एक दिवस, देणाऱ्याचे हात घ्यावे"
                </p>
                <p className="text-steelblue/80 text-sm mt-4 font-semibold">
                  - MD Ravindra Patil
                </p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {[
                { title: "Ambulance Donation", desc: "Donated toward Covid-19 relief, in memory of Late Rajendra Bhai Yashwant Patil", img: "https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { title: "Zilla Parishad School Support", desc: "Donations of uniforms & notebooks on Independence Day, Teachers' Day & Republic Day", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { title: "World Environment Day", desc: "Annual observance at Bhosari HQ, planting trees and promoting sustainability", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { title: "Digital Classrooms", desc: "Providing digital infrastructure for rural primary schools", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { title: "School Building Fund", desc: "Contributions to the Nandurbar Patel Chatralay building fund", img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" },
                { title: "Heritage Conservation", desc: "Renovation of Hot Water Spring & Lord Shiva Temple at Satpuda Mountain Range", img: "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
              ].map((csr, i) => (
                <div key={i} className="flex flex-col glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all group hover:-translate-y-1">
                  <div className="h-48 overflow-hidden relative">
                    <img src={csr.img} alt={csr.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col bg-white/50">
                    <h4 className="font-bold text-navy text-lg mb-2">{csr.title}</h4>
                    <p className="text-steelblue text-sm leading-relaxed">{csr.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

      </div>
    </>
  );
};

export default About;
