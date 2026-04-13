"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FileText, Shield, Loader2, CheckCircle, Lock, ArrowLeft } from "lucide-react";

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tier = (searchParams.get("tier") as "basic" | "premium") || "basic";
  const [loading, setLoading] = useState(false);

  const prices = {
    basic: { amount: "25 AED", usd: "~$7 USD", name: "Professional CV" },
    premium: { amount: "45 AED", usd: "~$12 USD", name: "Premium Package" },
  };
  const selectedPrice = prices[tier];

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      alert("Connection error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface to-white flex flex-col">
      <header className="glass border-b border-white/40">
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <button onClick={() => router.push("/preview")} className="flex items-center gap-2 text-body font-medium text-sm">
            <ArrowLeft size={18} /> Back
          </button>
          <span className="flex items-center gap-2 font-bold text-sm sm:text-base text-heading">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <FileText className="text-white" size={16} />
            </div>
            CV<span className="gradient-text">Dubai</span>
          </span>
          <div className="w-16" />
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-10">
        <div className="w-full max-w-sm sm:max-w-md space-y-4 sm:space-y-5 animate-fade-in-up">
          {/* Order Summary */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-border/50">
            <h2 className="text-base sm:text-lg font-extrabold text-heading mb-3 sm:mb-4">Order Summary</h2>
            <div className="flex justify-between items-center py-2.5 sm:py-3 border-b border-border/50">
              <span className="text-sm text-body">{selectedPrice.name}</span>
              <span className="font-bold text-sm sm:text-base text-heading">{selectedPrice.amount}</span>
            </div>
            <div className="flex justify-between items-center py-3 sm:py-4">
              <span className="font-bold text-sm sm:text-base text-heading">Total</span>
              <div className="text-right">
                <span className="text-2xl sm:text-3xl font-extrabold gradient-text">{selectedPrice.amount}</span>
                <p className="text-[10px] sm:text-xs text-muted">{selectedPrice.usd}</p>
              </div>
            </div>
          </div>

          {/* Included */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-border/50">
            <h3 className="font-bold text-sm sm:text-base text-heading mb-2 sm:mb-3">What&apos;s Included:</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                "High-quality PDF download",
                "3 professional templates",
                "ATS-optimized format",
                ...(tier === "premium" ? ["Cover letter template", "LinkedIn summary"] : []),
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-body">
                  <CheckCircle size={14} className="text-success flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pay */}
          <button onClick={handleCheckout} disabled={loading}
            className="w-full py-3.5 sm:py-4 btn-primary text-white font-bold text-sm sm:text-lg rounded-2xl shadow-xl disabled:opacity-50 flex items-center justify-center gap-2">
            {loading ? (
              <><Loader2 className="animate-spin" size={18} /> Redirecting to payment...</>
            ) : (
              <><Lock size={16} /> Pay {selectedPrice.amount} — Secure Checkout</>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs text-muted">
            <Shield size={12} /> Encrypted &amp; secure payment powered by Stripe
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
