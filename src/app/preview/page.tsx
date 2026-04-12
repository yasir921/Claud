"use client";

import { useRouter } from "next/navigation";
import { useCVStore } from "@/lib/cv-store";
import CVPreview from "@/components/preview/CVPreview";
import TemplateSelector from "@/components/preview/TemplateSelector";
import { FileText, Download, Share2, ArrowLeft, CheckCircle, MessageCircle } from "lucide-react";

export default function PreviewPage() {
  const router = useRouter();
  const store = useCVStore();
  const cvData = store.getCVData();

  const whatsappMessage = encodeURIComponent(
    `I just built my professional CV in 5 minutes! If you're job hunting in Dubai, check this out - it's amazing and super affordable. Build yours now!`
  );

  const handleCheckout = (tier: "basic" | "premium") => {
    router.push(`/checkout?tier=${tier}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface to-white">
      {/* Header */}
      <header className="glass border-b border-white/40 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <button onClick={() => router.push("/build")} className="flex items-center gap-2 text-body font-medium text-sm hover:text-heading transition-colors">
            <ArrowLeft size={18} /> Edit CV
          </button>
          <span className="flex items-center gap-2.5 font-bold text-heading">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <FileText className="text-white" size={16} />
            </div>
            CV<span className="gradient-text">Dubai</span>
          </span>
          <div className="w-16" />
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8 animate-fade-in-up">
        {/* Template Selector */}
        <div>
          <h2 className="text-sm font-bold text-heading mb-3">Choose Template</h2>
          <TemplateSelector selected={store.selectedTemplate} onChange={store.setTemplate} />
        </div>

        {/* CV Preview */}
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 border border-border/50">
          <CVPreview data={cvData} template={store.selectedTemplate} />
        </div>

        {/* Pricing CTAs */}
        <div className="space-y-4">
          <h2 className="text-xl font-extrabold text-heading text-center">
            Download Your <span className="gradient-text">Professional CV</span>
          </h2>

          {/* Basic */}
          <button onClick={() => handleCheckout("basic")} className="w-full p-6 rounded-2xl bg-white border-2 border-primary/20 text-left transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 active:scale-[0.99] relative overflow-hidden group">
            <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-bl-xl">MOST POPULAR</div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-heading mt-2">Professional CV</h3>
                <ul className="text-sm text-body mt-3 space-y-1.5">
                  {["High-quality PDF download", "3 premium templates", "ATS-friendly format"].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-success flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-right mt-2">
                <p className="text-3xl font-extrabold gradient-text">25</p>
                <p className="text-xs text-muted font-medium">AED (~$7)</p>
              </div>
            </div>
            <div className="mt-5 py-3 btn-primary text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-lg">
              <Download size={18} /> Get My CV Now
            </div>
          </button>

          {/* Premium */}
          <button onClick={() => handleCheckout("premium")} className="w-full p-6 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white text-left transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 active:scale-[0.99] relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-accent text-white text-[10px] font-bold rounded-bl-xl">BEST VALUE</div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold mt-2">Premium Package</h3>
                <ul className="text-sm text-white/80 mt-3 space-y-1.5">
                  {["Everything in Professional", "Cover letter template", "LinkedIn summary"].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-accent-light flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-right mt-2">
                <p className="text-3xl font-extrabold text-white">45</p>
                <p className="text-xs text-white/50 font-medium">AED (~$12)</p>
              </div>
            </div>
            <div className="mt-5 py-3 bg-white text-primary font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-lg hover:bg-white/90 transition-all">
              <Download size={18} /> Get Premium Package
            </div>
          </button>
        </div>

        {/* Share */}
        <div className="text-center pt-2 pb-10">
          <p className="text-sm text-muted mb-3">Know someone who needs a CV?</p>
          <a href={`https://wa.me/?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-whatsapp text-white font-bold rounded-full hover:brightness-110 transition-all shadow-lg shadow-whatsapp/20">
            <MessageCircle size={18} /> Share on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
