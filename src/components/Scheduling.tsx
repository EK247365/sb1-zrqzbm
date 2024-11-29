import React, { useEffect } from 'react';

export function Scheduling() {
  useEffect(() => {
    // Ensure the OnceHub script is loaded
    const script = document.createElement('script');
    script.src = 'https://cdn.oncehub.com/mergedjs/so.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="schedule" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold font-display text-gray-900 sm:text-4xl">
            Schedule a Consultation
          </h2>
          <p className="mt-4 text-xl text-gray-600 font-light">
            Book a 30 or 60 minute consultation to discover how we can help your business grow
          </p>
          <div className="mt-10 flex justify-center">
            <div 
              id="SOIDIV_Eddie1" 
              data-so-page="Eddie1" 
              data-height="550" 
              data-style="border: 1px solid #d8d8d8; min-width: 290px; max-width: 900px;" 
              data-psz="00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}