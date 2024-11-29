import React from 'react';
import { Hero } from '../components/Hero';
import { Testimonials } from '../components/Testimonials';

export function HomePage() {
  return (
    <div>
      <Hero />
      <Testimonials />
    </div>
  );
}