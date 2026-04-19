import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Rocket, ArrowLeft, CheckCircle2 } from 'lucide-react';

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const planParam = searchParams.get('plan');
  const itemParam = searchParams.get('item');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    plan: planParam || 'pro-elite',
    item: itemParam || '',
  });

  const [submitted, setSubmitted] = useState(false);

  const plans = {
    'core-access': { name: 'Core Access Protocol', price: '$49' },
    'pro-elite': { name: 'Pro Elite Protocol', price: '$99' },
    'vanguard-tee': { name: 'Vanguard Training Tee', price: '$68' },
    'pulse-jogger': { name: 'Pulse Joggers', price: '$118' },
    'kinetic-hoodie': { name: 'Kinetic Zip Hoodie', price: '$188' },
  };

  const selectedPlan = plans[formData.item] || plans[formData.plan] || plans['pro-elite'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-gray-800 p-8 rounded-3xl border border-emerald-500/30 text-center">
          <CheckCircle2 className="h-16 w-16 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Protocol Initiated</h2>
          <p className="text-gray-400 mb-8">
            Thank you, {formData.firstName}. We've sent the onboarding details for the {selectedPlan.name} protocol to {formData.email}.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans antialiased pb-20">
      <header className="h-20 flex items-center px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-gray-400 hover:text-white transition group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <div className="flex-grow flex justify-center mr-10">
          <div className="flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-indigo-400" />
            <span className="text-xl font-extrabold tracking-tight text-white">Alpha Body</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto mt-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form Side */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{formData.item ? 'Secure Checkout' : 'Enroll in Protocol'}</h1>
            <p className="text-gray-400 mb-8">Complete the form below to {formData.item ? 'secure your gear' : 'start your transformation'}.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">First Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Last Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Selected Protocol</label>
                <select 
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition appearance-none"
                  value={formData.plan}
                  onChange={(e) => setFormData({...formData, plan: e.target.value})}
                >
                  <option value="core-access">Core Access - $49/mo</option>
                  <option value="pro-elite">Pro Elite - $99/mo</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-emerald-400 hover:bg-emerald-300 text-gray-900 font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition transform hover:scale-[1.02]"
              >
                {formData.item ? 'Place Order' : 'Complete Enrollment'}
              </button>
            </form>
          </div>

          {/* Summary Side */}
          <div className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 h-fit">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400">{selectedPlan.name}</span>
              <span className="font-bold">{selectedPlan.price}</span>
            </div>
            <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-700">
              <span className="text-gray-400">Setup Fee</span>
              <span className="text-emerald-400 font-bold">FREE</span>
            </div>
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total Today</span>
              <span>{selectedPlan.price}</span>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 mr-3 mt-0.5" />
                <span className="text-sm text-gray-400">Instant access to training modules</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 mr-3 mt-0.5" />
                <span className="text-sm text-gray-400">Secure 256-bit encrypted checkout</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
