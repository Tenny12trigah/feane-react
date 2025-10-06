import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center md:text-left">

        <div>
          <h3 className="text-4xl text-center font-semibold dance-font mb-4">Contact Us</h3>
          <p className="mb-2 text-center"> Location</p>
          <p className="mb-2 text-center"> Call +01 1234567890</p>
          <p className="mb-2 text-center"> demo@gmail.com</p>
        </div>

 
        <div>
          <h3 className="text-4xl font-bold mb-4 text-center dance-font">Feane</h3>
          <p className="text-white text-center mb-4">
            Necessary, making this the first true generator on the Internet.
            It uses a dictionary of over 200 Latin words, combined with.
          </p>

          <div className="flex justify-center gap-4 text-white text-lg">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaPinterestP />
          </div>
        </div>


        <div>
          <h3 className="text-4xl text-center font-semibold dance-font mb-4">Opening Hours</h3>
          <p className="mb-2 text-center">Everyday</p>
          <p className="text-center">10.00 Am - 10.00 Pm</p>
        </div>
      </div>

      <div className="mt-10  text-center text-white text-xl">
        © 2025 All Rights Reserved By Free Html Templates

        <p className="p-4"> Distributed By ThemeWagon</p>
      </div>
    </footer>
  );
}