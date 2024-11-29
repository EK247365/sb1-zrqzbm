import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div id="home" className="pt-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-display text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Empowering Business Growth</span>
            <span className="block text-primary-600">Through Strategic Optimization</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl font-light">
            We help small and mid-sized business owners focus on what matters most - running their business. Let us handle the optimization and efficiency of your operations.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button 
                id="SOIBTN_Eddie1" 
                style={{
                  background: '#006DAF',
                  color: '#ffffff',
                  padding: '10px 20px',
                  border: '1px solid #c8c8c8',
                  font: 'bold 14px Arial',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0.375rem'
                }}
                data-height="580"
                data-psz="00"
                data-so-page="Eddie1"
                data-delay="1"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <script type="text/javascript" src="https://cdn.oncehub.com/mergedjs/so.js"></script>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}