import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram  } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
  return (
    <footer className="bg-red-700 py-16 text-black border-t border-pink-200">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
      <div className="flex flex-col items-center md:items-start">
        <h4 className="text-3xl font-extrabold text-white mb-4">SaiFashionZone by Raiba</h4>
        <p className="text-white mb-4 text-center md:text-left">
        Adorned with Elegance, Inspired by You, and Crafted with Love <FontAwesomeIcon  icon="fa-solid fa-heart" />
        </p>
        <div className="flex space-x-6 text-3xl mt-4">
          <FaFacebook className="text-white hover:text-yellow-400 transition cursor-pointer" />
          <FaInstagram className="text-white hover:text-yellow-400 transition cursor-pointer" />
          <FaTwitter className="text-white hover:text-yellow-400 transition cursor-pointer" />
        </div>
      </div>
      <div className="text-center md:text-right">
        <h5 className="text-2xl font-bold text-white  mb-4">Contact Us</h5>
        <p className="text-white ">
          3181 Street Name, City, India
          <br />
          Email: support@merabestie.com
          <br />
          Phone: +91 1234567890
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;