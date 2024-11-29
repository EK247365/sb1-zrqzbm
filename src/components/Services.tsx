import React from 'react';
import { ServiceTier } from './services/ServiceTier';
import { services } from './services/ServiceData';

export function Services() {
  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-display text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 font-light">
            Comprehensive solutions designed for busy business owners
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceTier
              key={index}
              name={service.name}
              price={service.price}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            All packages include access to our expertise in popular marketing platforms like Mailchimp, 
            Constant Contact, ActiveCampaign, Attentive, BrandBot, and Hubspot. We'll help you choose 
            and optimize the right tools for your business needs.
          </p>
        </div>
      </div>
    </div>
  );
}