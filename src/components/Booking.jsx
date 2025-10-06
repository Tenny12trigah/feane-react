import React from "react";

export default function BookTable() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl flex font-bold text-center mb-10 dance-font">
          Book A Table
        </h2>

        <div className="grid md:grid-cols-2 gap-1">
          <form className="space-y-4 bg-white rounded-lg ">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="number"
              placeholder="How many persons?"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <button
              type="submit"
              className=" bg-yellow-500 text-white p-3 pl-10 pr-10 rounded-full hover:bg-yellow-600 "
            >
              BOOK NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}