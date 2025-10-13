import React, { useState } from 'react';
import { Menu, X, Zap, Target, Shield, Rocket } from 'lucide-react';

// === Main App Component (Final Branded Version) ===
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simplified Mock data
  const features = [
    { icon: Zap, title: "Max Energy Protocol", description: "Unlock protocols to eliminate slumps and maximize daily vitality. Sustain peak mental and physical output." },
    { icon: Target, title: "Precision Training", description: "Customized plans based on data, not guesswork. Hit your exact physique goals faster and smarter." },
    { icon: Shield, title: "Rapid Recovery & Longevity", description: "Advanced techniques for maximum muscle repair and injury prevention. Build durable, resilient strength." },
  ];

  const plans = [
    { name: "Core Access", price: "$49", features: ["Essential Programs", "Basic Nutrition Guide", "Community Access"], highlight: false },
    { name: "Pro Elite", price: "$99", features: ["All Core Access", "1:1 Coaching Session (Monthly)", "Advanced Bio-Tracking", "Priority Support"], highlight: true },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans antialiased">
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-gray-900/90 backdrop-blur-md shadow-lg shadow-indigo-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-indigo-400" />
            <span className="text-2xl font-extrabold tracking-tight text-white">Alpha Body</span>
          </a>
          
          <nav className="hidden md:flex space-x-8 font-medium">
            <a href="#features" className="text-gray-300 hover:text-indigo-400 transition duration-200">System</a>
            <a href="#pricing" className="text-gray-300 hover:text-indigo-400 transition duration-200">Pricing</a>
          </nav>

          <a 
            href="#signup" 
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-full shadow-lg text-gray-900 bg-emerald-400 hover:bg-emerald-300 transition duration-300 transform hover:scale-105"
          >
            Start Protocol
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-indigo-400 p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-gray-900 md:hidden pt-16" onClick={() => setIsMenuOpen(false)}>
          <div className="flex flex-col space-y-4 p-6 border-t border-gray-700">
            <a href="#features" className="text-xl p-2 hover:text-indigo-400">System</a>
            <a href="#pricing" className="text-xl p-2 hover:text-indigo-400">Pricing</a>
            <a 
              href="#signup" 
              className="mt-4 text-center px-4 py-3 font-bold rounded-xl text-gray-900 bg-emerald-400 hover:bg-emerald-300 transition"
            >
              Start Protocol
            </a>
          </div>
        </div>
      )}

      <main>
        
        {/* 1. Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-36 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 top-1/4 opacity-10 pointer-events-none">
              <div className="h-96 w-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob absolute top-10 left-10"></div>
              <div className="h-96 w-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 absolute bottom-10 right-10"></div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 relative z-20">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Achieve Your Peak</span>
              <span className="block text-indigo-400 mt-2">Alpha Body Potential.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-10 font-light">
              The elite performance system used by high-achievers to sculpt superior physique, maximize cognitive clarity, and sustain energy.
            </p>
            <a 
              href="#pricing" 
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-xl shadow-2xl text-gray-900 bg-emerald-400 hover:bg-emerald-300 transition duration-300 transform hover:scale-105 hover:shadow-emerald-500/50 relative"
            >
              Start Your Protocol Today
            </a>
          </div>
        </section>

        {/* 2. Features/Pillars Section */}
        <section id="features" className="py-20 sm:py-28 bg-gray-800 border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-white">
                The Core <span className="text-indigo-400">System</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700 hover:shadow-indigo-500/30 transition duration-500 group"
                >
                  <div className="p-3 w-fit rounded-full bg-indigo-600/20 mb-5">
                    <feature.icon className="h-8 w-8 text-indigo-400 group-hover:text-emerald-400 transition duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-base">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 3. Pricing Section */}
        <section id="pricing" className="py-20 sm:py-28 bg-gray-900 border-t border-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-white">
                Choose Your <span className="text-emerald-400">Protocol</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col bg-gray-800 rounded-3xl shadow-2xl p-8 
                    ${plan.highlight 
                      ? 'border-4 border-emerald-500 ring-4 ring-emerald-500/30 transform scale-105 transition duration-500' 
                      : 'border border-gray-700'
                    }`}
                >
                  <h3 className={`text-3xl font-black mb-4 ${plan.highlight ? 'text-emerald-400' : 'text-indigo-400'}`}>{plan.name}</h3>
                  <p className="text-6xl font-black text-white mb-6">
                    {plan.price}<span className="text-xl font-normal text-gray-400">/mo</span>
                  </p>

                  <ul className="flex-grow space-y-4 mb-10">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-300 font-medium">
                        <svg className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={`#checkout-${plan.name.toLowerCase().replace(' ', '-')}`} 
                    className={`mt-auto block w-full text-center px-6 py-3.5 font-bold text-lg rounded-xl transition duration-300 shadow-xl
                      ${plan.highlight 
                        ? 'bg-emerald-400 text-gray-900 hover:bg-emerald-300' 
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      }`}
                  >
                    Enroll Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Simplified Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-400 hover:text-indigo-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 text-sm">Terms of Service</a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Alpha Body. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

