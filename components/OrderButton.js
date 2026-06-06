"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function OrderButton({
  productId,
  productName,
  children = "Order on WhatsApp",
  className = ""
}) {
  const [loading, setLoading] = useState(false);

  async function handleOrder() {
    setLoading(true);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ productId, productName })
      });
      const data = await response.json();

      if (!response.ok || !data.whatsappUrl) {
        throw new Error(data.error || "Order link failed");
      }

      window.location.href = data.whatsappUrl;
    } catch {
      alert("WhatsApp order could not be opened. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleOrder}
      disabled={loading}
      className={`inline-flex items-center justify-center gap-2 rounded-md font-bold transition disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
    >
      <MessageCircle size={18} />
      {loading ? "Opening..." : children}
    </button>
  );
}
