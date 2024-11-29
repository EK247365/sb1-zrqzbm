import React from 'react';

export function Contact() {
  return (
    <div id="contact" className="bg-gray-50 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold font-display text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-600 font-light">
            Let's discuss how we can help optimize your business
          </p>
        </div>

        <div className="mt-12">
          <iframe
            src="https://share.hsforms.com/1n94qefE0QLiV0MGu_uByGAsse8n"
            style={{
              width: '100%',
              height: '750px',
              border: 'none',
              marginBottom: '20px'
            }}
            title="Contact Form"
          />
        </div>
      </div>
    </div>
  );
}