import React from 'react';

const Hero = ({ title, subtitle, btnText }) => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-yellow-50">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{subtitle}</p>
      <button className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700">{btnText}</button>
    </section>
  );
};

export default Hero;