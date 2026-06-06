import OrderButton from "./OrderButton";

export default function WhatsAppButton() {
  return (
    <OrderButton
      className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-soft hover:scale-105"
    >
      <span className="sr-only">Order on WhatsApp</span>
    </OrderButton>
  );
}
