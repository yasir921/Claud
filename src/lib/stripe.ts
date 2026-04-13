import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error("STRIPE_SECRET_KEY is not set in environment variables");
    }
    _stripe = new Stripe(key, {
      apiVersion: "2026-03-25.dahlia",
    });
  }
  return _stripe;
}

export const PRICES = {
  basic: {
    amount: 2500, // 25 AED in fils
    name: "Professional CV",
    description: "High-quality PDF CV with 3 premium templates",
  },
  premium: {
    amount: 4500, // 45 AED in fils
    name: "Premium CV Package",
    description: "CV + Cover Letter Template + LinkedIn Summary",
  },
} as const;
