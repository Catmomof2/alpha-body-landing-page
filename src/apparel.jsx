import React from 'react';
import PropTypes from 'prop-types';
import { ShoppingBag, ShieldCheck } from 'lucide-react';

const Apparel = ({ onShopNow }) => {
  const products = [
    {
      id: 'vanguard-tee',
      name: 'Vanguard Training Tee',
      price: '$68',
      tag: 'Core Performance',
      description: 'Proprietary technical blend. Moisture-wicking, anti-odor, four-way stretch.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'pulse-jogger',
      name: 'Pulse Joggers',
      price: '$118',
      tag: 'Core Performance',
      description: 'Engineered for durability and functional fitness. Minimalist tactical design.',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'kinetic-hoodie',
      name: 'Kinetic Zip Hoodie',
      price: '$188',
      tag: 'Alpha Techwear',
      description: 'Weighted recovery fabric with advanced thermal regulation.',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    }
  ];

  return (
    <section id="apparel" className="py-20 sm:py-28 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Engineered <span className="text-indigo-400">Gear</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Minimalist, tactical, and functional. Not just clothing, but essential gear designed for the high-performance individual.
            </p>
          </div>
          <div className="flex space-x-4 text-sm font-bold tracking-widest uppercase">
            <div className="flex items-center text-emerald-400">
              <ShieldCheck className="h-4 w-4 mr-2" />
              Tested in Domain
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group relative flex flex-col bg-gray-800/50 rounded-3xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition duration-500">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-md text-xs font-bold text-indigo-400 rounded-full border border-indigo-500/30">
                    {product.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  <span className="text-xl font-black text-white">{product.price}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {product.description}
                </p>
                <button 
                  onClick={() => onShopNow(product.id)}
                  className="w-full flex items-center justify-center py-3 bg-gray-700 hover:bg-indigo-600 text-white font-bold rounded-xl transition duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/20"
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to Domain
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Apparel.propTypes = {
  onShopNow: PropTypes.func.isRequired,
};

export default Apparel;
