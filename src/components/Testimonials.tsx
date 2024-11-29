import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Owner",
      company: "Urban Yoga Studio",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128",
      content: "Kane Enterprise helped me reclaim 15 hours per week by optimizing our scheduling and client management systems. Now I can focus on growing my yoga practice instead of managing it."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Owner",
      company: "Elite Fitness Center",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&h=128",
      content: "Their consulting services helped us identify and eliminate bottlenecks in our gym operations. Our member satisfaction scores have improved significantly, and we're seeing more referrals than ever."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder",
      company: "Core Pilates Studio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=128&h=128",
      content: "Working with Kane Enterprise transformed how we manage our client communications and marketing campaigns. Their automation solutions have helped us grow our client base while maintaining personalized service."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-primary-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-display text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600 font-light">
            Real results from business owners like you
          </p>
        </div>

        <div className="mt-20 relative">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            <div className="flex flex-col items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover mb-6 shadow-md"
              />
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 text-center mb-6 font-light italic">
                "{testimonials[currentIndex].content}"
              </blockquote>
              <div className="text-center">
                <div className="font-display text-lg text-gray-900">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-primary-600 font-light">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}