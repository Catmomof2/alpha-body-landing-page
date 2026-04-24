import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SizeGuide = () => {
  const [expandedSize, setExpandedSize] = useState(null);

  const sizeData = {
    'Vanguard Training Tee': [
      { size: 'XS', chest: '32-34"', length: '27"', fit: 'Slim, athletic' },
      { size: 'S', chest: '34-36"', length: '28"', fit: 'Fitted, athletic' },
      { size: 'M', chest: '38-40"', length: '29"', fit: 'Standard, athletic' },
      { size: 'L', chest: '42-44"', length: '30"', fit: 'Relaxed, athletic' },
      { size: 'XL', chest: '46-48"', length: '31"', fit: 'Relaxed, athletic' },
      { size: '2XL', chest: '50-52"', length: '32"', fit: 'Relaxed, athletic' },
    ],
    'Pulse Joggers': [
      { size: 'XS', waist: '26-28"', inseam: '28"', fit: 'Slim, tapered' },
      { size: 'S', waist: '28-30"', inseam: '30"', fit: 'Slim, tapered' },
      { size: 'M', waist: '30-32"', inseam: '32"', fit: 'Standard, tapered' },
      { size: 'L', waist: '32-34"', inseam: '34"', fit: 'Relaxed, tapered' },
      { size: 'XL', waist: '34-36"', inseam: '36"', fit: 'Relaxed, tapered' },
      { size: '2XL', waist: '36-38"', inseam: '38"', fit: 'Relaxed, tapered' },
    ],
    'Kinetic Zip Hoodie': [
      { size: 'XS', chest: '32-34"', length: '27"', fit: 'Slim, athletic' },
      { size: 'S', chest: '34-36"', length: '28"', fit: 'Fitted, athletic' },
      { size: 'M', chest: '38-40"', length: '29"', fit: 'Standard, athletic' },
      { size: 'L', chest: '42-44"', length: '30"', fit: 'Relaxed, athletic' },
      { size: 'XL', chest: '46-48"', length: '31"', fit: 'Relaxed, athletic' },
      { size: '2XL', chest: '50-52"', length: '32"', fit: 'Relaxed, athletic' },
    ],
  };

  return (
    <section id="size-guide" className="py-20 sm:py-28 bg-gray-800 border-t border-gray-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Size <span className="text-emerald-400">Guide</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Find your perfect fit. All measurements are in inches for precision and accuracy.
          </p>
        </div>

        <div className="space-y-6">
          {Object.entries(sizeData).map(([product, sizes]) => (
            <div key={product} className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden">
              {/* Product Header */}
              <div className="px-6 py-4 bg-gray-800/50 border-b border-gray-700">
                <h3 className="text-xl font-bold text-white">{product}</h3>
              </div>

              {/* Size Chart Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700 bg-gray-800/30">
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Size</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">
                        {product.includes('Jogger') ? 'Waist' : 'Chest'}
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">
                        {product.includes('Jogger') ? 'Inseam' : 'Length'}
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Fit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizes.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-700 hover:bg-gray-800/50 transition">
                        <td className="px-6 py-4 text-sm font-bold text-emerald-400">{row.size}</td>
                        <td className="px-6 py-4 text-sm text-gray-300">
                          {row.chest || row.waist}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-300">
                          {row.length || row.inseam}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-400">{row.fit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Sizing Tips */}
        <div className="mt-12 bg-indigo-900/20 border border-indigo-500/30 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-4">Sizing Tips</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-emerald-400 font-bold mr-3">•</span>
              <span>For the most accurate fit, measure yourself in a t-shirt and comfortable pants.</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 font-bold mr-3">•</span>
              <span>All measurements are taken with the garment laid flat on a surface.</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 font-bold mr-3">•</span>
              <span>Our apparel is engineered for athletic performance with a fitted silhouette.</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 font-bold mr-3">•</span>
              <span>If between sizes, we recommend sizing up for maximum comfort during training.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SizeGuide;
