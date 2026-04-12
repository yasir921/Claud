"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FileText, Shield, Loader2 } from "lucide-react";
import { Suspense } from "react";

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tier = (searchParams.get("tier") as "basic" | "premium") || "basic";
  const [loading, setLoading] = useState(false);

  const prices = {
    basic: { amount: "25 AED", usd: "~$7", name: "Professional CV" },
    premium: { amount: "45 AED", usd: "~$12", name: "Premium Package" },
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
    <div className="min-h-screen bg-dubai-off-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-center">
          <span className="flex items-center gap-2 font-bold text-dubai-navy">
            <FileText className="text-dubai-gold" size={24} />
            CV<span className="text-dubai-gold">Dubai</span>
          </span>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="max-w-md w-full space-y-6">
          {/* Order Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-dubai-navy mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-600">{selectedPrice.name}</span>
              <span className="font-bold text-dubai-navy">
                {selectedPrice.amount}
              </span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="font-bold text-dubai-navy">Total</span>
              <div className="text-right">
                <span className="text-2xl font-bold text-dubai-gold">
                  {selectedPrice.amount}
                </span>
                <p className="text-xs text-gray-400">{selectedPrice.usd} USD</p>
              </div>
            </div>
          </div>

          {/* What You Get */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-dubai-navy mb-3">
              What&apos;s Included:
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>&#10003; High-quality PDF download</li>
              <li>&#10003; 3 professional templates</li>
              <li>&#10003; ATS-optimized format</li>
              {tier === "premium" && (
                <>
                  <li>&#10003; Cover letter template</li>
                  <li>&#10003; LinkedIn summary</li>
                </>
              )}
            </ul>
          </div>

          {/* Pay Button */}
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full py-4 bg-dubai-gold text-dubai-navy font-bold text-lg rounded-2xl hover:brightness-110 transition-all shadow-xl shadow-dubai-gold/30 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Redirecting to payment...
              </>
            ) : (
              <>
                <Shield size={20} />
                Pay {selectedPrice.amount} — Secure Checkout
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <Shield size={12} />
            Powered by Stripe. Your payment info is encrypted and secure.
          </div>

          <button
            onClick={() => router.push("/preview")}
            className="w-full text-center text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            ← Back to preview
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="animate-spin text-dubai-gold" size={32} />
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
