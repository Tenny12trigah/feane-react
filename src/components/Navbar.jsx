import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-dark  text-white ">
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
  );
}
