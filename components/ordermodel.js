"use client";

import { useEffect } from "react";

export default function OrderModal({
  isOpen,
  onClose,
  product,
  defaultBottleSize,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "917829504543";

  const itemName =
    product?.name || defaultBottleSize || "your product";

  const message = encodeURIComponent(
    `Hello, I would like to order ${itemName} from Aradhana Natural Oils.`
  );

  const waUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {product?.name ||
            (defaultBottleSize
              ? `${defaultBottleSize} Bottle`
              : "Order Product")}
        </h2>

        {product?.price && (
          <p className="text-gray-500 mb-4">
            &#8377;{product.price}
          </p>
        )}

        <p className="text-gray-600 mb-6">
          Tap below to place your order via WhatsApp.
        </p>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition"
        >
          Order on WhatsApp
        </a>

        <button
          onClick={onClose}
          className="mt-3 w-full text-center text-gray-400 hover:text-gray-600 text-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}