"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useCVStore } from "@/lib/cv-store";
import {
  FileText,
  Download,
  Share2,
  CheckCircle,
  Loader2,
  MessageCircle,
  PartyPopper,
} from "lucide-react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const tier = searchParams.get("tier") || "basic";
  const store = useCVStore();
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const { generatePDF } = await import("@/lib/pdf-generator");
      await generatePDF(store.getCVData());
    } catch (error) {
      console.error("PDF generation error:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const whatsappMessage = encodeURIComponent(
    `I just created my professional CV in 5 minutes using CVDubai! If you're job hunting in Dubai, you NEED this. Build yours free: ${baseUrl}`
  );

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
        <div className="max-w-md w-full text-center space-y-6">
          {/* Success Animation */}
          <div className="relative inline-block">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <CheckCircle className="text-green-500" size={40} />
            </div>
            <PartyPopper
              className="absolute -top-2 -right-2 text-dubai-gold"
              size={24}
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-dubai-navy">
              Payment Successful!
            </h1>
            <p className="text-gray-500 mt-2">
              Your {tier === "premium" ? "Premium Package" : "Professional CV"}{" "}
              is ready for download
            </p>
            {sessionId && (
              <p className="text-xs text-gray-300 mt-1">Ref: {sessionId.slice(0, 20)}...</p>
            )}
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="w-full py-4 bg-dubai-gold text-dubai-navy font-bold text-lg rounded-2xl hover:brightness-110 transition-all shadow-xl shadow-dubai-gold/30 disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {downloading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Generating your CV...
              </>
            ) : (
              <>
                <Download size={20} />
                Download My CV (PDF)
              </>
            )}
          </button>

          {tier === "premium" && (
            <div className="bg-white rounded-2xl p-5 text-left border border-gray-100">
              <h3 className="font-bold text-dubai-navy mb-2">
                Premium Extras
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                Your premium package includes:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>&#10003; Cover letter template (included in PDF)</li>
                <li>&#10003; LinkedIn summary copied to clipboard</li>
              </ul>
            </div>
          )}

          {/* Share Section */}
          <div className="bg-dubai-navy rounded-2xl p-6 text-white">
            <h3 className="font-bold text-lg mb-2">
              Help Your Friends Too
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Know someone who got laid off? Share CVDubai with them. A great CV
              can change their life.
            </p>
            <a
              href={`https://wa.me/?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-whatsapp text-white font-bold rounded-xl hover:brightness-110 transition-all"
            >
              <MessageCircle size={20} />
              Share on WhatsApp
            </a>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "CVDubai - Professional CV Builder",
                    text: "Build a professional CV in 5 minutes! Perfect for job hunting in Dubai.",
                    url: baseUrl,
                  });
                }
              }}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
            >
              <Share2 size={18} />
              Share via Other Apps
            </button>
          </div>

          {/* Build another */}
          <button
            onClick={() => {
              store.reset();
              window.location.href = "/build";
            }}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            Build another CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="animate-spin text-dubai-gold" size={32} />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
