import React from "react";

export default function Clients() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-5xl font-bold mb-10 dance-font">
        What Says Our Customers
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4 mb-10">
        <div className="bg-dark text-white rounded-lg p-6">
          <p className="text-white mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h4 className="font-semibold">Moana Michell</h4>
          <span className="text-sm text-white">magna aliqua</span>
      
        </div>

        <div className="bg-dark text-white rounded-lg p-6">
          <p className="text-white mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h4 className="font-semibold text-white">Mike Hamell</h4>
          <span className="text-sm text-white">magna aliqua</span>

        </div>
      </div>
    </section>
  );
}