import React from 'react';

interface ServiceFeature {
  text: string;
}

interface ServiceTierProps {
  name: string;
  price: string;
  description: string;
  features: ServiceFeature[];
}

export function ServiceTier({ name, price, description, features }: ServiceTierProps) {
  return (
    <div className="relative p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="absolute -top-4 left-6 bg-white p-2 rounded-lg shadow-sm">
        <div className="text-primary-600 text-xl font-display">{name}</div>
      </div>
      <div className="mt-8">
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 ml-2">/month</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-6 w-6 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}