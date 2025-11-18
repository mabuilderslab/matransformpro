"use client";

import { useState } from 'react';
import Image from 'next/image';
import Starfield from '@/components/Starfield';
import AnimatedCounters from '@/components/AnimatedCounters';
import ColorTransition from '@/components/ColorTransition';
import ScrollToTop from '@/components/ScrollToTop';
import { Menu, X, Check, Star, Users, Zap, TrendingUp, Heart, Brain, Rocket, Globe, Building2, GraduationCap, Briefcase, Video } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: "Mahmoud Ahmed",
      role: "Founder & Chief Transformation Officer",
      description: "15+ years optimizing human systems across 5 continents",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e6ab26a9-75a3-4719-b089-616b33bce8f6/generated_images/professional-corporate-headshot-of-a-mid-166b717a-20251117194132.jpg",
      gradient: "linear-gradient(135deg, #8b5cf6, #fbbf24)",
      color: "text-purple-400"
    },
    {
      name: "Dr. Farouk",
      role: "Medical Director",
      description: "Metabolic health specialist, diabetes reversal expert",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e6ab26a9-75a3-4719-b089-616b33bce8f6/generated_images/professional-corporate-headshot-of-a-mid-7c73cfb2-20251117194129.jpg",
      gradient: "linear-gradient(135deg, #3b82f6, #10b981)",
      color: "text-blue-400"
    },
    {
      name: "Ayan Abdi",
      role: "Emotional Mastery Coach",
      description: "Boundary engineering and emotional regulation specialist",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e6ab26a9-75a3-4719-b089-616b33bce8f6/generated_images/professional-corporate-headshot-of-a-you-f92c6f83-20251117194133.jpg",
      gradient: "linear-gradient(135deg, #10b981, #fbbf24)",
      color: "text-green-400"
    },
    {
      name: "Sagal Hussain",
      role: "Business Strategist",
      description: "Digital business launch and AI integration expert",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e6ab26a9-75a3-4719-b089-616b33bce8f6/generated_images/professional-corporate-headshot-of-a-you-a8c4b20d-20251117194131.jpg",
      gradient: "linear-gradient(135deg, #f97316, #8b5cf6)",
      color: "text-orange-400"
    },
    {
      name: "Keshav Agrawal",
      role: "Technology Architect",
      description: "AI systems and automation implementation lead",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e6ab26a9-75a3-4719-b089-616b33bce8f6/generated_images/professional-corporate-headshot-of-a-you-53855038-20251117194132.jpg",
      gradient: "linear-gradient(135deg, #3b82f6, #fbbf24)",
      color: "text-blue-400"
    }
  ];

  return (
    <>
      <Starfield />
      <ColorTransition />
      <ScrollToTop />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold gradient-purple-gold">MA Transform Lab</div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#programs" className="text-gray-300 hover:text-white transition">Programs</a>
              <a href="#products" className="text-gray-300 hover:text-white transition">Products</a>
              <a href="#team" className="text-gray-300 hover:text-white transition">Team</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#programs" className="block py-2 text-gray-300 hover:text-white">Programs</a>
              <a href="#products" className="block py-2 text-gray-300 hover:text-white">Products</a>
              <a href="#team" className="block py-2 text-gray-300 hover:text-white">Team</a>
              <a href="#contact" className="block py-2 text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section data-bg-color="#000000" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your{' '}
              <span className="gradient-purple-gold">Life Systems</span>
              <br />
              Build Your{' '}
              <span className="gradient-blue-gold">Dream Business</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Evidence-based human optimization systems that reverse disease, master emotions, 
              and architect sustainable business empires.
            </p>

            <div className="glass-panel inline-block px-8 py-4 rounded-full mb-16">
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base">
                <Globe className="w-5 h-5 text-purple-400" />
                <span>5 Continents |</span>
                <span className="text-purple-400">Canada</span>
                <span>•</span>
                <span className="text-blue-400">UK</span>
                <span>•</span>
                <span className="text-green-400">Europe</span>
                <span>•</span>
                <span className="text-orange-400">East Africa</span>
                <span>•</span>
                <span className="text-gold-400">Digital Worldwide</span>
              </div>
            </div>

            <AnimatedCounters />

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#programs"
                className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #fbbf24 100%)',
                  boxShadow: '0 4px 20px rgba(139, 92, 246, 0.5)'
                }}
              >
                Explore Programs
              </a>
              <a 
                href="#products"
                className="px-8 py-4 rounded-full font-semibold text-lg box-light transition-all duration-300 hover:scale-105 hover:border-purple-400"
              >
                Digital Products
              </a>
            </div>
          </div>
        </section>

        {/* Free Resources Section */}
        <section data-bg-color="#1a0a2e" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Free Resources to <span className="gradient-purple-gold">Get Started</span>
            </h2>
            <p className="text-center text-gray-300 mb-12 text-lg">
              Begin your transformation journey with these powerful tools
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="box-light p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                <Brain className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Mental Mastery Guide</h3>
                <p className="text-gray-300 mb-4">7-day emotional regulation framework</p>
                <button className="text-purple-400 hover:text-purple-300 font-semibold">Download Free →</button>
              </div>

              <div className="box-dark p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                <Heart className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Health Reset Blueprint</h3>
                <p className="text-gray-300 mb-4">14-day metabolic optimization starter</p>
                <button className="text-red-400 hover:text-red-300 font-semibold">Download Free →</button>
              </div>

              <div className="box-light p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                <Rocket className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Business Validator</h3>
                <p className="text-gray-300 mb-4">7-day idea validation roadmap</p>
                <button className="text-blue-400 hover:text-blue-300 font-semibold">Download Free →</button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section data-bg-color="#0a1a2e" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              The <span className="gradient-orange-gold">Real Problem</span> Nobody Talks About
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="box-dark p-8 rounded-2xl border-l-4 border-red-500">
                <h3 className="text-2xl font-bold mb-4 text-red-400">Traditional Approach</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><X className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" /> Treats symptoms, ignores root causes</li>
                  <li className="flex items-start"><X className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" /> Separates health, mindset, and business</li>
                  <li className="flex items-start"><X className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" /> Generic programs that don't scale</li>
                  <li className="flex items-start"><X className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" /> Unsustainable "hustle culture" mentality</li>
                </ul>
              </div>

              <div className="box-light p-8 rounded-2xl border-l-4 border-green-500">
                <h3 className="text-2xl font-bold mb-4 text-green-400">MA Transform Lab Way</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" /> Systemic optimization from cellular level up</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" /> Integrated approach: health + mindset + business</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" /> Evidence-based protocols proven across 750+ clients</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" /> Sustainable systems that compound over time</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Phase Transformation System */}
        <section data-bg-color="#1e3a8a" id="programs" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              The 4-Phase <span className="gradient-purple-gold">Transformation System</span>
            </h2>
            <p className="text-center text-gray-300 mb-16 text-lg max-w-3xl mx-auto">
              A proven pathway from chronic dysfunction to peak performance and business mastery
            </p>

            {/* Phase 1 */}
            <div className="mb-12 p-8 md:p-10 rounded-3xl hover:scale-[1.02] transition-all duration-300"
                 style={{
                   background: 'rgba(109, 40, 217, 0.1)',
                   border: '2px solid transparent',
                   backgroundImage: 'linear-gradient(rgba(109, 40, 217, 0.1), rgba(109, 40, 217, 0.1)), linear-gradient(135deg, #8b5cf6, #fbbf24)',
                   backgroundOrigin: 'border-box',
                   backgroundClip: 'padding-box, border-box'
                 }}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0"
                     style={{ background: 'linear-gradient(135deg, #8b5cf6, #fbbf24)' }}>
                  1
                </div>
                <h3 className="text-3xl font-bold gradient-purple-gold">Mental & Wellness Foundation</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="box-dark p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 text-purple-400">Life Architecture</h4>
                  <p className="text-gray-300 mb-4">Design your ideal life blueprint before building anything else</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Values clarification & alignment</li>
                    <li>• Personal brand architecture</li>
                    <li>• Life vision mapping</li>
                  </ul>
                </div>

                <div className="box-light p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 text-gold-400">Emotional Mastery</h4>
                  <p className="text-gray-300 mb-4">Master your emotional landscape to unlock peak performance</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Boundary engineering systems</li>
                    <li>• Emotional regulation protocols</li>
                    <li>• Stress transformation techniques</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <span className="text-gray-400">Duration: 4-6 weeks</span>
                <button className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="mb-12 p-8 md:p-10 rounded-3xl hover:scale-[1.02] transition-all duration-300"
                 style={{
                   background: 'rgba(37, 99, 235, 0.1)',
                   border: '2px solid transparent',
                   backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.1), rgba(37, 99, 235, 0.1)), linear-gradient(135deg, #3b82f6, #10b981)',
                   backgroundOrigin: 'border-box',
                   backgroundClip: 'padding-box, border-box'
                 }}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0"
                     style={{ background: 'linear-gradient(135deg, #3b82f6, #10b981)' }}>
                  2
                </div>
                <h3 className="text-3xl font-bold gradient-blue-gold">Health System Upgrade</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="box-light p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 text-blue-400">Metabolic Reset & Diabetes Reversal</h4>
                  <p className="text-gray-300 mb-4">Reverse metabolic dysfunction and optimize cellular energy</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Type 2 diabetes reversal protocols</li>
                    <li>• Insulin sensitivity optimization</li>
                    <li>• Inflammation reduction systems</li>
                    <li>• Blood sugar stabilization</li>
                  </ul>
                </div>

                <div className="box-dark p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 text-green-400">Performance Nutrition</h4>
                  <p className="text-gray-300 mb-4">Executive-level meal planning and supplement optimization</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Personalized macro protocols</li>
                    <li>• Energy optimization strategies</li>
                    <li>• Recovery enhancement systems</li>
                    <li>• Supplement stack design</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <span className="text-gray-400">Duration: 12 weeks</span>
                <button className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="mb-12 p-8 md:p-10 rounded-3xl hover:scale-[1.02] transition-all duration-300"
                 style={{
                   background: 'rgba(16, 185, 129, 0.1)',
                   border: '2px solid transparent',
                   backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.1)), linear-gradient(135deg, #10b981, #fbbf24)',
                   backgroundOrigin: 'border-box',
                   backgroundClip: 'padding-box, border-box'
                 }}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0"
                     style={{ background: 'linear-gradient(135deg, #10b981, #fbbf24)' }}>
                  3
                </div>
                <h3 className="text-3xl font-bold gradient-green-gold">Growth & Power Development</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="box-dark p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 text-green-400">Personal Power Systems</h4>
                  <p className="text-gray-300 mb-4">Build unshakeable confidence and executive presence</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Leadership identity development</li>
                    <li>• Decision-making frameworks</li>
                    <li>• Influence & persuasion mastery</li>
                  </ul>
                </div>

                <div className="box-light p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 text-gold-400">Strategic Positioning</h4>
                  <p className="text-gray-300 mb-4">Position yourself as the obvious choice in your market</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Authority building strategies</li>
                    <li>• Content ecosystem design</li>
                    <li>• Network architecture</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <span className="text-gray-400">Duration: 8-10 weeks</span>
                <button className="px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 transition font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="p-8 md:p-10 rounded-3xl hover:scale-[1.02] transition-all duration-300"
                 style={{
                   background: 'rgba(249, 115, 22, 0.1)',
                   border: '2px solid transparent',
                   backgroundImage: 'linear-gradient(rgba(249, 115, 22, 0.1), rgba(249, 115, 22, 0.1)), linear-gradient(135deg, #f97316, #8b5cf6)',
                   backgroundOrigin: 'border-box',
                   backgroundClip: 'padding-box, border-box'
                 }}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0"
                     style={{ background: 'linear-gradient(135deg, #f97316, #8b5cf6)' }}>
                  4
                </div>
                <h3 className="text-3xl font-bold gradient-orange-gold">Business & AI Mastery</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="box-light p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 text-orange-400">Digital Business Launch</h4>
                  <p className="text-gray-300 mb-4">Build and launch profitable digital businesses systematically</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Product validation frameworks</li>
                    <li>• Offer architecture & pricing</li>
                    <li>• Launch sequence systems</li>
                  </ul>
                </div>

                <div className="box-dark p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 text-purple-400">AI Integration</h4>
                  <p className="text-gray-300 mb-4">Leverage AI to 10x your productivity and scale</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• AI workflow automation</li>
                    <li>• Content generation systems</li>
                    <li>• Business intelligence tools</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <span className="text-gray-400">Duration: 12-16 weeks</span>
                <button className="px-6 py-3 rounded-full bg-orange-600 hover:bg-orange-700 transition font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Products Section */}
        <section data-bg-color="#2563eb" id="products" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="gradient-purple-gold">Digital Products</span> for Self-Guided Transformation
            </h2>
            <p className="text-center text-gray-300 mb-16 text-lg">
              Start your journey with our comprehensive digital toolkits
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Product 1 */}
              <div className="box-light p-8 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="text-purple-400 font-semibold mb-2">PHASE 1</div>
                <h3 className="text-2xl font-bold mb-3">Sovereign Identity Framework</h3>
                <div className="text-4xl font-bold mb-4 gradient-purple-gold">$97</div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start"><Check className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" /> 47-page strategic workbook</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" /> Values clarification exercises</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" /> Personal brand blueprint</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" /> 45-min video guide</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" /> Notion template system</li>
                </ul>
                <a 
                  href="https://gumroad.com/l/sovereign-identity"
                  className="gumroad-button block w-full py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition text-center font-semibold"
                >
                  Add to Cart - $97
                </a>
              </div>

              {/* Product 2 */}
              <div className="box-dark p-8 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="text-gold-400 font-semibold mb-2">PHASE 1</div>
                <h3 className="text-2xl font-bold mb-3">AI-Powered Boundary Engineering</h3>
                <div className="text-4xl font-bold mb-4 gradient-blue-gold">$67</div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start"><Check className="w-5 h-5 text-gold-400 mr-2 mt-1 flex-shrink-0" /> Boundary assessment tool</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-gold-400 mr-2 mt-1 flex-shrink-0" /> AI boundary builder app</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-gold-400 mr-2 mt-1 flex-shrink-0" /> Communication scripts</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-gold-400 mr-2 mt-1 flex-shrink-0" /> 2-hour video training</li>
                </ul>
                <a 
                  href="https://gumroad.com/l/boundary-engineering"
                  className="gumroad-button block w-full py-3 rounded-full bg-amber-600 hover:bg-amber-700 transition text-center font-semibold"
                >
                  Add to Cart - $67
                </a>
              </div>

              {/* Product 3 */}
              <div className="box-light p-8 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="text-green-400 font-semibold mb-2">PHASE 2</div>
                <h3 className="text-2xl font-bold mb-3">Metabolic Mastery for Executives</h3>
                <div className="text-4xl font-bold mb-4 gradient-green-gold">$127</div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" /> 90-day reset plan</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" /> Executive meal planning</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" /> Supplement guide</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" /> Energy tracking tools</li>
                </ul>
                <a 
                  href="https://gumroad.com/l/metabolic-mastery"
                  className="gumroad-button block w-full py-3 rounded-full bg-green-600 hover:bg-green-700 transition text-center font-semibold"
                >
                  Add to Cart - $127
                </a>
              </div>

              {/* Product 4 */}
              <div className="box-dark p-8 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="text-orange-400 font-semibold mb-2">PHASE 4</div>
                <h3 className="text-2xl font-bold mb-3">Digital Business Validator</h3>
                <div className="text-4xl font-bold mb-4 gradient-orange-gold">$47</div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start"><Check className="w-5 h-5 text-orange-400 mr-2 mt-1 flex-shrink-0" /> 7-day validation roadmap</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-orange-400 mr-2 mt-1 flex-shrink-0" /> Market research templates</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-orange-400 mr-2 mt-1 flex-shrink-0" /> AI prompt library</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-orange-400 mr-2 mt-1 flex-shrink-0" /> Competitive analysis tools</li>
                </ul>
                <a 
                  href="https://gumroad.com/l/business-validator"
                  className="gumroad-button block w-full py-3 rounded-full bg-orange-600 hover:bg-orange-700 transition text-center font-semibold"
                >
                  Add to Cart - $47
                </a>
              </div>

              {/* Bundle */}
              <div className="lg:col-span-2 box-light p-10 rounded-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-amber-600 px-4 py-2 rounded-full text-sm font-bold">
                  BEST VALUE
                </div>
                <h3 className="text-3xl font-bold mb-3">Complete Transformation Toolkit</h3>
                <div className="flex flex-wrap items-baseline gap-3 mb-4">
                  <span className="text-5xl font-bold gradient-purple-gold">$338</span>
                  <span className="text-2xl text-gray-500 line-through">$538</span>
                  <span className="text-green-400 font-semibold">Save $200</span>
                </div>
                <p className="text-gray-300 mb-6 text-lg">All 4 digital products PLUS:</p>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-start"><Star className="w-6 h-6 text-amber-400 mr-3 mt-1 flex-shrink-0" /> 1-hour personal strategy call ($200 value)</li>
                  <li className="flex items-start"><Star className="w-6 h-6 text-amber-400 mr-3 mt-1 flex-shrink-0" /> Lifetime access to MA Builders Lab community</li>
                  <li className="flex items-start"><Star className="w-6 h-6 text-amber-400 mr-3 mt-1 flex-shrink-0" /> All future product updates included</li>
                </ul>
                <a 
                  href="https://gumroad.com/l/transformation-bundle"
                  className="gumroad-button inline-block px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #fbbf24 100%)',
                    boxShadow: '0 8px 30px rgba(139, 92, 246, 0.5)'
                  }}
                >
                  Get Complete Bundle - $338
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MA Builders Lab & AI Courses */}
        <section data-bg-color="#5b21b6" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="gradient-purple-gold">MA Builders Lab</span> Community
            </h2>
            <p className="text-center text-gray-300 mb-12 text-lg">
              Lifetime community access with comprehensive AI training included
            </p>

            <div className="box-light p-10 rounded-3xl mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4 gradient-blue-gold">Community Benefits</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start"><Check className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" /> Weekly live Q&A sessions</li>
                    <li className="flex items-start"><Check className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" /> Private community forum</li>
                    <li className="flex items-start"><Check className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" /> Accountability partnerships</li>
                    <li className="flex items-start"><Check className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" /> Resource library access</li>
                    <li className="flex items-start"><Check className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" /> All AI courses included ($347 value)</li>
                  </ul>
                </div>

                <div className="box-dark p-6 rounded-xl">
                  <h4 className="text-2xl font-bold mb-4 text-purple-400">Included AI Courses</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span className="text-gray-300">AI Essentials for Individuals</span>
                      <span className="text-green-400 font-semibold">$47</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span className="text-gray-300">AI Life Transformation Program</span>
                      <span className="text-green-400 font-semibold">$97</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span className="text-gray-300">AI Wellness Coach Certification</span>
                      <span className="text-green-400 font-semibold">$197</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-white font-bold">Total Value</span>
                      <span className="text-2xl font-bold gradient-purple-gold">$347</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button className="px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
                        style={{
                          background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                          boxShadow: '0 4px 20px rgba(139, 92, 246, 0.5)'
                        }}>
                  Join MA Builders Lab
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Services */}
        <section data-bg-color="#7c3aed" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="gradient-orange-gold">Enterprise Services</span>
            </h2>
            <p className="text-center text-gray-300 mb-16 text-lg">
              Custom transformation programs for organizations
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="box-light p-8 rounded-2xl hover:scale-105 transition-all duration-300">
                <Building2 className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Healthcare Organizations</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive wellness programs for medical teams and patients
                </p>
                <div className="text-3xl font-bold mb-6 gradient-purple-gold">
                  $15K - $30K
                </div>
                <ul className="space-y-2 text-gray-400 text-sm mb-6">
                  <li>• Staff burnout prevention</li>
                  <li>• Patient education systems</li>
                  <li>• Metabolic health protocols</li>
                  <li>• Custom training programs</li>
                </ul>
                <button className="w-full py-3 rounded-full bg-red-600 hover:bg-red-700 transition font-semibold">
                  Request Proposal
                </button>
              </div>

              <div className="box-dark p-8 rounded-2xl hover:scale-105 transition-all duration-300">
                <GraduationCap className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Educational Institutions</h3>
                <p className="text-gray-300 mb-4">
                  Student wellness and faculty development programs
                </p>
                <div className="text-3xl font-bold mb-6 gradient-blue-gold">
                  $5K - $20K
                </div>
                <ul className="space-y-2 text-gray-400 text-sm mb-6">
                  <li>• Student mental health</li>
                  <li>• Faculty wellness programs</li>
                  <li>• Performance optimization</li>
                  <li>• Leadership development</li>
                </ul>
                <button className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold">
                  Request Proposal
                </button>
              </div>

              <div className="box-light p-8 rounded-2xl hover:scale-105 transition-all duration-300">
                <Briefcase className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Corporate Partners</h3>
                <p className="text-gray-300 mb-4">
                  Executive coaching and team transformation programs
                </p>
                <div className="text-3xl font-bold mb-6 gradient-green-gold">
                  $10K - $50K
                </div>
                <ul className="space-y-2 text-gray-400 text-sm mb-6">
                  <li>• Executive wellness programs</li>
                  <li>• Team performance systems</li>
                  <li>• Leadership transformation</li>
                  <li>• Culture optimization</li>
                </ul>
                <button className="w-full py-3 rounded-full bg-green-600 hover:bg-green-700 transition font-semibold">
                  Request Proposal
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section data-bg-color="#6366f1" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Real <span className="gradient-purple-gold">Transformations</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="box-light p-8 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Reversed my Type 2 diabetes in 12 weeks. Lost 45 lbs and launched my coaching business. 
                  MA Transform Lab changed my entire life trajectory."
                </p>
                <div className="font-bold">Sarah Mitchell</div>
                <div className="text-gray-400 text-sm">Health Coach, Toronto</div>
              </div>

              <div className="box-dark p-8 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "The 4-phase system gave me the structure I desperately needed. 
                  Built a 6-figure business while finally getting my health under control."
                </p>
                <div className="font-bold">James Peterson</div>
                <div className="text-gray-400 text-sm">Digital Entrepreneur, London</div>
              </div>

              <div className="box-light p-8 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "The emotional mastery work was transformative. I finally understand how to set boundaries 
                  and lead with confidence. Game-changing."
                </p>
                <div className="font-bold">Dr. Emily Chen</div>
                <div className="text-gray-400 text-sm">Physician, Singapore</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section data-bg-color="#1a0a2e" id="team" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Meet the <span className="gradient-purple-gold">Transformation Team</span>
            </h2>
            <p className="text-center text-gray-300 mb-16 text-lg">
              World-class experts committed to your success
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'box-light' : 'box-dark'} p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300`}>
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full" 
                         style={{
                           background: member.gradient,
                           padding: '4px'
                         }}>
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover"
                          priority={index < 3}
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <div className={`${member.color} font-semibold mb-3`}>{member.role}</div>
                  <p className="text-gray-400 text-sm">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section data-bg-color="#000000" id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-purple-gold">Transform Your Life?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join 750+ individuals who have optimized their health, mindset, and business with our proven systems
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="box-light p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Book a Strategy Call</h3>
                <p className="text-gray-300 mb-6">
                  30-minute complimentary consultation to discuss your transformation goals
                </p>
                <button className="w-full py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition font-semibold">
                  Schedule Call
                </button>
              </div>

              <div className="box-dark p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
                <p className="text-gray-300 mb-6">
                  Browse our digital products and begin your journey immediately
                </p>
                <button className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold">
                  View Products
                </button>
              </div>
            </div>

            <div className="text-gray-400">
              <p className="mb-2">Email: contact@matransformlab.com</p>
              <p>Global Presence: Canada • UK • Europe • East Africa • Digital Worldwide</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer data-bg-color="#000000" className="py-12 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold mb-4 gradient-purple-gold">MA Transform Lab</h4>
                <p className="text-gray-400 text-sm">
                  Evidence-based human optimization for health, mindset, and business mastery
                </p>
              </div>

              <div>
                <h5 className="font-bold mb-4">Programs</h5>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition">Phase 1: Mental & Wellness</a></li>
                  <li><a href="#" className="hover:text-white transition">Phase 2: Health System</a></li>
                  <li><a href="#" className="hover:text-white transition">Phase 3: Growth & Power</a></li>
                  <li><a href="#" className="hover:text-white transition">Phase 4: Business & AI</a></li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold mb-4">Products</h5>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition">Sovereign Identity</a></li>
                  <li><a href="#" className="hover:text-white transition">Boundary Engineering</a></li>
                  <li><a href="#" className="hover:text-white transition">Metabolic Mastery</a></li>
                  <li><a href="#" className="hover:text-white transition">Business Validator</a></li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold mb-4">Company</h5>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition">Team</a></li>
                  <li><a href="#" className="hover:text-white transition">Enterprise Services</a></li>
                  <li><a href="#" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2024 MA Transform Lab. All rights reserved.</p>
              <p className="mt-2">Transforming lives across 5 continents • 750+ systems optimized • 28+ businesses launched</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Gumroad Script */}
      <script src="https://gumroad.com/js/gumroad.js" async></script>
    </>
  );
}