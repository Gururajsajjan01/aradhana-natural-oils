import products from "@/data/products.json";
import { NextResponse } from "next/server";

const defaultMessage = "Hello, I would like to know more about Aradhana Natural Oils.";

function cleanPhone(value) {
  return String(value || "917829504543").replace(/[^\d]/g, "");
}

function buildOrderMessage(productName) {
  if (!productName) {
    return defaultMessage;
  }

  return `Hello, I would like to order ${productName} from Aradhana Natural Oils.`;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const productId = typeof body.productId === "string" ? body.productId : "";
    const product = products.find((item) => item.id === productId);
    const productName = product?.name || body.productName || "";
    const phone = cleanPhone(process.env.WHATSAPP_PHONE_NUMBER);
    const message = buildOrderMessage(productName);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return NextResponse.json({
      ok: true,
      order: {
        productId: product?.id || null,
        productName: productName || null,
        message
      },
      whatsappUrl
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to create WhatsApp order link." },
      { status: 400 }
    );
  }
}
