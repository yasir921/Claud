import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2026-03-25.dahlia",
});

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
