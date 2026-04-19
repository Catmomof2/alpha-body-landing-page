import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call for newsletter signup
    console.log('Newsletter signup:', email);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gray-800 border-t border-gray-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-indigo-500/20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 bg-indigo-600/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Join the <span className="text-indigo-400">Alpha List</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Be the first to know about new Alpha Techwear drops, exclusive performance protocols, and private community events.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="h-16 w-16 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">You're on the list.</h3>
                <p className="text-gray-400">Watch your inbox for the next transmission.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  required
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition shadow-lg shadow-indigo-600/20"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Subscribe
                </button>
              </form>
            )}
            
            <div className="mt-12 pt-12 border-t border-gray-800 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-bold mb-2">Alpha Techwear</h4>
                <p className="text-gray-500 text-sm">Next drop: Summer 2026</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Elite Protocols</h4>
                <p className="text-gray-500 text-sm">New modules monthly</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Global Domain</h4>
                <p className="text-gray-500 text-sm">Private events coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
