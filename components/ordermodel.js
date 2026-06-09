"use client";

import React from "react";

export default function OrderModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const whatsappNumber = "YOUR_NUMBER_HERE";
  const message = "Hello, I want to order your product";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-2xl p-6 shadow-lg">

        <h2 className="text-xl font-bold mb-4 text-center">
          Place Your Order
        </h2>

        <p className="text-gray-600 text-center mb-6">
          Click below to continue on WhatsApp
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl"
        >
          Order on WhatsApp
        </a>

        <button
          onClick={onClose}
          className="mt-3 w-full text-center text-gray-500 hover:text-gray-700 text-sm"
        >
          Close
        </button>

      </div>
    </div>
  );
}