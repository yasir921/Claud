"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useCVStore } from "@/lib/cv-store";
import {
  FileText, Download, Share2, CheckCircle, Loader2,
  MessageCircle, PartyPopper, Sparkles,
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
    <div className="min-h-screen bg-gradient-to-b from-surface to-white flex flex-col">
      <header className="glass border-b border-white/40">
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-center">
          <span className="flex items-center gap-2 font-bold text-sm sm:text-base text-heading">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <FileText className="text-white" size={16} />
            </div>
            CV<span className="gradient-text">Dubai</span>
          </span>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-10">
        <div className="w-full max-w-sm sm:max-w-md text-center space-y-5 sm:space-y-6 animate-fade-in-up">
          {/* Success */}
          <div className="relative inline-block">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto animate-scale-in">
              <CheckCircle className="text-success" size={32} />
            </div>
            <PartyPopper className="absolute -top-2 -right-2 text-primary animate-float" size={20} />
            <Sparkles className="absolute -bottom-1 -left-2 text-accent animate-float" size={16} style={{ animationDelay: "0.5s" }} />
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-heading">Payment Successful!</h1>
            <p className="text-sm text-body mt-2">
              Your {tier === "premium" ? "Premium Package" : "Professional CV"} is ready
            </p>
            {sessionId && (
              <p className="text-[10px] sm:text-xs text-muted mt-1">Ref: {sessionId.slice(0, 20)}...</p>
            )}
          </div>

          {/* Download */}
          <button onClick={handleDownload} disabled={downloading}
            className="w-full py-3.5 sm:py-4 btn-primary text-white font-bold text-base sm:text-lg rounded-2xl shadow-xl disabled:opacity-70 flex items-center justify-center gap-2">
            {downloading ? (
              <><Loader2 className="animate-spin" size={18} /> Generating your CV...</>
            ) : (
              <><Download size={18} /> Download My CV (PDF)</>
            )}
          </button>

          {tier === "premium" && (
            <div className="bg-white rounded-2xl p-4 sm:p-5 text-left border border-border/50 shadow-sm">
              <h3 className="font-bold text-sm sm:text-base text-heading mb-2 flex items-center gap-2">
                <Sparkles size={14} className="text-primary" /> Premium Extras
              </h3>
              <ul className="text-xs sm:text-sm text-body space-y-1.5">
                <li className="flex items-center gap-2"><CheckCircle size={13} className="text-success" /> Cover letter template included in PDF</li>
                <li className="flex items-center gap-2"><CheckCircle size={13} className="text-success" /> LinkedIn summary ready to copy</li>
              </ul>
            </div>
          )}

          {/* Share */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-4 sm:p-6 border border-primary/10">
            <h3 className="font-bold text-heading text-base sm:text-lg mb-1 sm:mb-2">Help Your Friends Too</h3>
            <p className="text-body text-xs sm:text-sm mb-4 sm:mb-5">
              Know someone who got laid off? Share CVDubai with them. A great CV can change their life.
            </p>
            <a href={`https://wa.me/?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-whatsapp text-white font-bold rounded-xl hover:brightness-110 transition-all shadow-lg shadow-whatsapp/20 text-sm">
              <MessageCircle size={18} /> Share on WhatsApp
            </a>
            <button onClick={() => {
              if (navigator.share) {
                navigator.share({ title: "CVDubai - Professional CV Builder", text: "Build a professional CV in 5 minutes!", url: baseUrl });
              }
            }} className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 bg-white text-body font-semibold rounded-xl border border-border/50 hover:bg-surface transition-all text-xs sm:text-sm">
              <Share2 size={16} /> Share via Other Apps
            </button>
          </div>

          <button onClick={() => { store.reset(); window.location.href = "/build"; }}
            className="text-xs sm:text-sm text-muted hover:text-primary transition-colors font-medium">
            Build another CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
