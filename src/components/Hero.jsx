import React from 'react';
import { heroBg } from '../utils/image';

export default function Hero() {

  const heroStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center right',
  };

  return (
      <div style={heroStyle} className="h-[100vh] overflow-hidden relative text-left px-10 bg-dark">
        <nav className="bg-transparent text-white ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

       
            <h1 className="text-2xl font-bold">Feane</h1>

          <div className="hidden md:flex space-x-8">
            <button className="text-white">Home</button>
            <button className="text-white">Menu</button>
            <button className="text-white">About</button>
            <button className="text-white">Book Table</button>
          </div>
        </div>
      </div>
    </nav>
    <div className='max-w-6xl mx-auto px-4'>
        <h1 className="text-6xl dance-font  font-bold mb-5 pt-20 py-5 text-white">Fast Food Restaurant</h1>
        <p className="mb-5 text-white font-light py-3">
         Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
        </p>
        <button className="px-10 py-3 mb-10 bg-yellow text-white rounded-lg">
          Order Now
        </button>
        </div>
      </div>
  );
}
