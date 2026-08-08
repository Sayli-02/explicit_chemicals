import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Reveal } from '../components/Reveal';
import { Search, FlaskConical, TestTube, Leaf, X } from 'lucide-react';

interface ProductSpec {
  name: string;
  cas: string;
  specs: { [key: string]: string } | null; // null means "spec on request"
  category: string;
  icon: React.ElementType;
}

const PRODUCTS: ProductSpec[] = [
  // Category A
  { name: 'Phthalimide', cas: '85-41-6', category: 'A', icon: FlaskConical, specs: { 'Appearance': 'White Powder', 'Purity': 'NLT 99%', 'Melting Point': '231–235°C', 'Moisture': 'NMT 0.5%' } },
  { name: 'Potassium Phthalimide', cas: '1074-82-4', category: 'A', icon: FlaskConical, specs: { 'Appearance': 'White to Off-White Powder', 'Purity HPLC': 'NLT 98%', 'Assay': 'NLT 98%', 'Moisture': '<0.5%' } },
  { name: 'N-Hydroxy Phthalimide', cas: '524-38-9', category: 'A', icon: FlaskConical, specs: { 'Appearance': 'Off White to Creamish Fluffy Powder', 'Purity': 'NLT 99%', 'Melting Point': '231–235°C', 'Moisture (KF)': 'NMT 0.5%' } },
  { name: 'N-Methyl Phthalimide', cas: '550-44-7', category: 'A', icon: FlaskConical, specs: { 'Appearance': 'White Crystalline Powder', 'Purity': 'NLT 98.5%', 'Moisture': 'NMT 0.5%', 'Solubility': 'soluble in Toluene' } },
  { name: 'N-Hydroxyl-Methyl Phthalimide', cas: '118-29-6', category: 'A', icon: FlaskConical, specs: { 'Appearance': 'White to Off White Powder', 'Purity': 'NLT 99%', 'Melting Point': '142–146°C', 'Moisture': '<0.5%' } },
  { name: 'N-(2-Hydroxyethyl) Phthalimide', cas: '727384-00', category: 'A', icon: FlaskConical, specs: { 'Appearance': 'White Crystalline Powder', 'Purity': 'NLT 98%', 'Melting Point': '126–131°C', 'Water (KF)': 'NMT 0.5%' } },
  { name: 'N-Chloro Phthalimide', cas: '3481-09-02', category: 'A', icon: FlaskConical, specs: { 'Appearance': 'White to Off White Crystalline Powder', 'Assay': 'NLT 98%', 'Melting Point': '184–188°C', 'LOD': 'NMT 2%' } },
  { name: 'N-Propyl Phthalimide', cas: '5323-50-2', category: 'A', icon: FlaskConical, specs: { 'Appearance': 'White to Off White Powder', 'Purity (HPLC)': 'NLT 98–99%', 'Moisture': 'NMT 0.5%' } },
  { name: 'N-Butyl Phthalimide', cas: '1515-72-6', category: 'A', icon: FlaskConical, specs: { 'Appearance': 'Slight yellow liquid', 'Purity by GC': 'NLT 96–97%', 'Moisture': 'NMT 0.5%' } },
  { name: 'N-Isopropyl Phthalimide', cas: '304-17-6', category: 'A', icon: FlaskConical, specs: { 'Appearance': 'White to Off White Powder', 'Purity': 'NLT 98%', 'Melting Point': '80–84°C', 'Moisture': 'NMT 0.5%' } },
  { name: '1,2,3,6-Tetrahydrophthalimide', cas: '4720-86-9', category: 'A', icon: FlaskConical, specs: { 'Appearance': 'White to Pale Yellow Powder', 'Purity': 'NLT 97%', 'Melting Point': '172–174°C', 'Moisture': 'NMT 1%' } },
  { name: '3,4,5,6-Tetrahydrophthalimide', cas: '4720-86-9', category: 'A', icon: FlaskConical, specs: { 'Appearance': 'White to Pale Yellow Powder', 'Purity': 'NLT 97%', 'Melting Point': '172–174°C', 'Moisture': 'NMT 1%' } },
  { name: 'N-(2-Hydroxyethyl)-1,2,3,6-Tetrahydrophthalimide', cas: '85-40-5', category: 'A', icon: FlaskConical, specs: { 'Appearance': 'White to Off White Powder', 'Purity': 'NLT 98%', 'Moisture': 'NMT 1%' } },
  { name: 'HOBT: 1-Hydroxybenzotriazole Monohydrate', cas: '123333-53-9', category: 'A', icon: FlaskConical, specs: { 'Appearance': 'White to Off White Crystalline Powder', 'Purity/Assay': 'NLT 99%', 'Melting Point': '154–160°C', 'Moisture': '10–14%' } },
  { name: 'Barbituric Acid', cas: '67-52-7', category: 'A', icon: FlaskConical, specs: { 'Appearance': 'White to Off White Powder', 'Assay': 'NLT 98%', 'Melting Point': '248–256°C', 'Moisture': 'NMT 0.5%' } },
  { name: 'Benzyl Nicotinate', cas: '4736-60-1', category: 'A', icon: FlaskConical, specs: { 'Appearance': 'White to Off White Crystalline Powder', 'Assay': 'NLT 99%', 'Melting Point': '164–170°C', 'Moisture': 'NMT 0.5%' } },
  { name: 'Chloramine-T (trihydrate)', cas: '7080-50-4', category: 'A', icon: FlaskConical, specs: { 'Appearance': 'White Powder', 'Assay': 'NLT 98%', 'pH (5%)': '8–10 @25°C', 'Solubility': 'clear solution in water, insoluble in alcohol NMT 1.5%' } },
  { name: '2-Nitrobenzaldehyde (ONB)', cas: '552-89-6', category: 'A', icon: FlaskConical, specs: { 'Appearance': 'Pale Yellow to Beige Powder', 'Purity': 'NLT 99%', 'Melting Point': '41–44°C', 'Moisture': 'NMT 0.5%' } },
  { name: 'Ethyl Triphenyl Phosphonium Bromide/Iodide', cas: 'N/A', category: 'A', icon: FlaskConical, specs: null },
  { name: 'Indole-3-Acetic Acid', cas: 'N/A', category: 'A', icon: FlaskConical, specs: null },
  { name: 'Indole-3-Butyric Acid', cas: 'N/A', category: 'A', icon: FlaskConical, specs: null },
  { name: '2-Anilinophenyl Acetic Acid', cas: 'N/A', category: 'A', icon: FlaskConical, specs: null },
  
  // Category B
  { name: 'Ninhydrin (ACS grade)', cas: '485-47-2', category: 'B', icon: TestTube, specs: { 'Appearance': 'Off White / White Crystalline Powder', 'Purity': 'NLT 99%', 'Melting Point': '250–255°C', 'pH (1%)': '4–5.5', 'Other': 'passes amino acid sensitivity' } },
  { name: 'Murexide (Ammonium Purpurate)', cas: '3051-09-0', category: 'B', icon: TestTube, specs: { 'Appearance': 'Red Purple Powder', 'Wavelength': '520–525nm', 'Absorbance': 'NLT 350%', 'Moisture & Ash': '<1%' } },
  { name: 'Dithizone 85% and 98%', cas: '60-10-6', category: 'B', icon: TestTube, specs: { 'Appearance': 'Dark Reddish Black/Purple-Black Powder', 'Absorbance ratio': '≥1.55 au', 'Purity': 'NLT 85%/98%', 'Residue on ignition': 'NMT 0.5%' } },
  { name: 'Alloxan Monohydrate', cas: '2244-11-03', category: 'B', icon: TestTube, specs: { 'Appearance': 'Yellow Crystalline Powder', 'Purity': 'NLT 98%', 'Moisture': '11–12% (H2O)', 'Ash': 'NMT 0.1%', 'Packaging': '1/5/25 kg' } },
  { name: 'Chloranilic Acid', cas: '87-88-7', category: 'B', icon: TestTube, specs: { 'Appearance': 'Reddish Orange Crystalline Powder', 'Purity': 'NLT 98%', 'Moisture': 'NMT 2%', 'Solubility': 'soluble in hot water/methanol' } },
  { name: 'Barium Chloranilate', cas: '32458-20-1', category: 'B', icon: TestTube, specs: { 'Appearance': 'Brown Powder', 'Assay': 'NLT 98%', 'LOD': '12–16%', 'Other': 'passes sulphate suitability, soluble in alkaline solution only' } },

  // Category C
  { name: 'I3C: Indole-3-Carbinol', cas: '700-06-1', category: 'C', icon: Leaf, specs: { 'Appearance': 'White to Off White Powder', 'Assay': 'NLT 99%', 'Melting Point': '97–100°C', 'Moisture': 'NMT 0.5%' } },
  { name: 'DIM: 3\'3-Diindolylmethane', cas: '1968-05-04', category: 'C', icon: Leaf, specs: { 'Appearance': 'White to Off White Powder', 'Assay': 'NLT 99%', 'Melting Point': '164–168°C', 'LOD': 'NMT 0.5%' } },
  { name: 'I3CA: Indole-3-Carboxaldehyde', cas: '487-89-8', category: 'C', icon: Leaf, specs: { 'Appearance': 'Off White to Pale Yellow Powder', 'Assay': 'NLT 98%', 'Melting Point': '194–198°C', 'Moisture': 'NMT 0.5%' } },
  { name: 'DMG.HCL: N-N Dimethylglycine HCl', cas: '2491-06-07', category: 'C', icon: Leaf, specs: { 'Appearance': 'White to Off White Powder', 'Assay': 'NLT 99%', 'Melting Point': '188–194°C', 'LOD': 'NMT 1%' } },
  { name: 'PEA: Palmitoylethanolamide', cas: '544-31-0', category: 'C', icon: Leaf, specs: { 'Appearance': 'White to Off White Powder', 'Assay': 'NLT 99%', 'Melting Point': '93–101°C', 'LOD': 'NMT 0.5%' } },
  { name: 'Ipriflavone', cas: '35212-22-7', category: 'C', icon: Leaf, specs: { 'Appearance': 'White to Off Crystalline Powder', 'Assay': 'NLT 99%', 'LOD': 'NMT 0.5%' } },
  { name: 'Vinpocetine', cas: 'N/A', category: 'C', icon: Leaf, specs: null },
  { name: 'Theobromine', cas: '83-67-0', category: 'C', icon: Leaf, specs: { 'Appearance': 'White to Off white Powder', 'Assay': 'NLT 99%', 'Sulphated Ash': 'NMT 0.1%' } },
  { name: 'Alpha Lipoic Acid', cas: '1077-28-7', category: 'C', icon: Leaf, specs: { 'Appearance': 'Yellow Powder', 'Assay': 'NLT 99%', 'LOD': '0.5%' } },
  { name: 'Calcium Undecylenate', cas: '1322-14-1', category: 'C', icon: Leaf, specs: { 'Appearance': 'White to Off White Powder', 'Assay': 'NLT 98%', 'LOD': 'loses 2–5.7%', 'Free undecylenic acid': 'NMT 0.1%' } },
  { name: 'Sodium Butyrate', cas: '22457-89-2', category: 'C', icon: Leaf, specs: { 'Appearance': 'White to Off White Powder', 'Assay': 'NLT 98%', 'LOD': 'NMT 1.5%', 'Solubility': 'slightly soluble in water/methanol' } },
  { name: 'Inositol Hexanicotinate', cas: '130-40-5', category: 'C', icon: Leaf, specs: { 'Appearance': 'Yellow/Orange-Yellow Crystalline Powder', 'Assay': 'NLT 73%', 'LOD': 'NMT 8%', 'pH': '5–6.5' } },
  { name: 'Magnesium L-Threonate', cas: '58-85-5', category: 'C', icon: Leaf, specs: { 'Appearance': 'White Crystalline Powder', 'Assay': 'NLT 98%', 'LOD': 'NMT 1.0%' } },
  { name: 'Benfotiamine', cas: '8075-98-7', category: 'C', icon: Leaf, specs: { 'Appearance': 'Off White to Yellow Powder', 'Purity by HPLC': 'NLT 97%' } },
  { name: 'R5P: Riboflavin 5 Phosphate', cas: 'N/A', category: 'C', icon: Leaf, specs: { 'Appearance': 'White to Yellow White Powder', 'Assay': 'NLT 98%', 'LOD': 'NMT 2%' } },
  { name: 'Biotin', cas: 'N/A', category: 'C', icon: Leaf, specs: { 'Appearance': 'White to Slightly yellow powder', 'Assay': 'NLT 98%', 'pH': '5.5–8' } },
  { name: 'Ca-MTHF: Calcium L-5 Methyltetrahydrofolate', cas: 'N/A', category: 'C', icon: Leaf, specs: null },
  { name: 'Ascorbigen', cas: 'N/A', category: 'C', icon: Leaf, specs: null },
  { name: 'Ascorbyl Palmitate (Vit C Ester)', cas: 'N/A', category: 'C', icon: Leaf, specs: null },
  { name: 'Calcium Ascorbate', cas: 'N/A', category: 'C', icon: Leaf, specs: null },
  { name: 'Zinc Ascorbate', cas: 'N/A', category: 'C', icon: Leaf, specs: null },
  { name: 'Natural Vegan Vitamin D3 Powder (NLT 1,00,000 IU/gm)', cas: '67-97-0', category: 'C', icon: Leaf, specs: { 'Appearance': 'White Powder', 'Assay as Vit D3': 'NLT 1,00,000 IU/g', 'LOD': 'NMT 7%', 'Other': 'characteristic taste/odor' } },
];

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<ProductSpec | null>(null);

  const filterProducts = (category: string) => {
    return PRODUCTS.filter(p => 
      p.category === category && 
      (p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       p.cas.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const catA = filterProducts('A');
  const catB = filterProducts('B');
  const catC = filterProducts('C');

  return (
    <>
      <Helmet>
        <title>Manufacturer of Pharma KSMs, Vitamins, Nutraceuticals & Lab Reagents</title>
        <meta name="description" content="Explicit Chemicals - Top supplier of Pharmaceuticals KSMs, Intermediates, Fine Chemicals, Vitamins, Nutraceutical Ingredients, and Laboratory Reagents." />
      </Helmet>

      {/* Hero Strip */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-navy to-navy-hover"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Our <span className="text-teal-accent">Products</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Crafting chemical solutions that redefine manufacturing processes, setting new standards in quality and efficiency.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sticky Jump Nav */}
      <div className="sticky top-20 lg:top-24 z-40 w-full px-4 sm:px-6 lg:px-10 mt-8 mb-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="flex items-center gap-4 lg:gap-8 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 shadow-md border border-black/5 overflow-x-auto whitespace-nowrap scrollbar-hide pointer-events-auto max-w-full">
            <a href="#cat-a" className="text-navy font-medium hover:text-teal-heading transition-colors text-sm lg:text-base">Pharma & Fine Chemicals</a>
            <div className="w-px h-4 bg-navy/20 shrink-0"></div>
            <a href="#cat-b" className="text-navy font-medium hover:text-teal-heading transition-colors text-sm lg:text-base">Laboratory Reagents</a>
            <div className="w-px h-4 bg-navy/20 shrink-0"></div>
            <a href="#cat-c" className="text-navy font-medium hover:text-teal-heading transition-colors text-sm lg:text-base">Vitamins & Nutraceuticals</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full pb-28">
        
        {/* Search */}
        <div className="mb-16 flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-steelblue" size={20} />
            <input 
              type="text" 
              placeholder="Search by product name or CAS number..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border border-black/10 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-accent/50 focus:border-teal-accent transition-all duration-300 text-navy bg-white/80 backdrop-blur-md focus:bg-white focus:-translate-y-1"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-24">
          
          <div id="cat-a" className="scroll-mt-40">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-teal-heading mb-8 border-b border-black/5 pb-4">
                Pharmaceuticals Reagents, Intermediates & Fine Chemicals
              </h2>
              {catA.length === 0 ? (
                <p className="text-steelblue text-center py-8">No products found matching your search.</p>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {catA.map((p, i) => <ProductCard key={i} product={p} onClick={() => setSelectedProduct(p)} />)}
                </div>
              )}
            </Reveal>
          </div>

          <div id="cat-b" className="scroll-mt-40">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-teal-heading mb-8 border-b border-black/5 pb-4">
                Laboratory Reagents
              </h2>
              {catB.length === 0 ? (
                <p className="text-steelblue text-center py-8">No products found matching your search.</p>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {catB.map((p, i) => <ProductCard key={i} product={p} onClick={() => setSelectedProduct(p)} />)}
                </div>
              )}
            </Reveal>
          </div>

          <div id="cat-c" className="scroll-mt-40">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-teal-heading mb-8 border-b border-black/5 pb-4">
                Vitamins & Nutraceuticals Ingredients
              </h2>
              {catC.length === 0 ? (
                <p className="text-steelblue text-center py-8">No products found matching your search.</p>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {catC.map((p, i) => <ProductCard key={i} product={p} onClick={() => setSelectedProduct(p)} />)}
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}></div>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 md:p-8 border-b border-black/5 flex justify-between items-start bg-gray-50/50">
              <div>
                <h3 className="text-2xl font-bold text-navy mb-2">{selectedProduct.name}</h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-accent/10 text-teal-heading text-sm font-medium border border-teal-accent/20">
                  CAS: {selectedProduct.cas}
                </span>
              </div>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="p-2 hover:bg-black/5 rounded-full transition-colors text-navy/60 hover:text-navy shrink-0"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 md:p-8 overflow-y-auto">
              {!selectedProduct.specs ? (
                <div className="text-center py-8">
                  <selectedProduct.icon size={48} className="mx-auto text-teal-accent mb-4 opacity-50" />
                  <p className="text-xl font-medium text-navy mb-2">Full specification sheet available on request</p>
                  <p className="text-steelblue mb-8">Please contact our sales team to receive detailed documentation for this compound.</p>
                  <a href="/contact" className="inline-block bg-navy hover:bg-navy-hover text-white px-8 py-3 rounded-full font-medium transition-colors shadow-sm">
                    Contact Us
                  </a>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-xl border border-black/10">
                  <table className="w-full text-left text-sm">
                    <tbody className="divide-y divide-black/5">
                      {Object.entries(selectedProduct.specs).map(([key, value], idx) => (
                        <tr key={key} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                          <th className="px-6 py-4 font-semibold text-navy w-1/3 border-r border-black/5">{key}</th>
                          <td className="px-6 py-4 text-steelblue">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ProductCard: React.FC<{ product: ProductSpec, onClick: () => void }> = ({ product, onClick }) => {
  const Icon = product.icon;
  return (
    <button 
      onClick={onClick}
      className="glass-card hover:border-teal-accent/30 hover:shadow-xl hover:-translate-y-2 duration-300 transition-all rounded-2xl p-6 text-left group flex flex-col"
    >
      <div className="w-12 h-12 rounded-xl bg-teal-accent/10 flex items-center justify-center text-teal-heading mb-4 group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <h4 className="font-bold text-navy text-lg mb-2 leading-snug group-hover:text-teal-heading transition-colors">{product.name}</h4>
      <p className="text-steelblue/80 text-sm mt-auto">CAS: {product.cas}</p>
    </button>
  );
}

export default Products;
