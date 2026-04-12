"use client";

import { useRouter } from "next/navigation";
import { useCVStore } from "@/lib/cv-store";
import CVPreview from "@/components/preview/CVPreview";
import TemplateSelector from "@/components/preview/TemplateSelector";
import { FileText, Download, Share2, ArrowLeft } from "lucide-react";

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
    <div className="min-h-screen bg-dubai-off-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => router.push("/build")}
            className="flex items-center gap-2 text-dubai-navy font-medium text-sm"
          >
            <ArrowLeft size={18} />
            Edit CV
          </button>
          <span className="flex items-center gap-2 font-bold text-dubai-navy">
            <FileText className="text-dubai-gold" size={24} />
            CV<span className="text-dubai-gold">Dubai</span>
          </span>
          <div className="w-16" />
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Template Selector */}
        <div>
          <h2 className="text-sm font-bold text-dubai-navy mb-2">Choose Template</h2>
          <TemplateSelector
            selected={store.selectedTemplate}
            onChange={store.setTemplate}
          />
        </div>

        {/* CV Preview */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <CVPreview data={cvData} template={store.selectedTemplate} />
        </div>

        {/* Pricing CTAs */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-dubai-navy text-center">
            Download Your Professional CV
          </h2>

          {/* Basic Plan */}
          <button
            onClick={() => handleCheckout("basic")}
            className="w-full p-5 rounded-2xl bg-dubai-navy text-white text-left transition-all hover:shadow-lg active:scale-[0.99]"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-dubai-gold uppercase tracking-wider">
                  Most Popular
                </span>
                <h3 className="text-lg font-bold mt-0.5">Professional CV</h3>
                <ul className="text-sm text-gray-300 mt-2 space-y-1">
                  <li>&#10003; High-quality PDF download</li>
                  <li>&#10003; 3 premium templates</li>
                  <li>&#10003; ATS-friendly format</li>
                </ul>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-dubai-gold">25 AED</p>
                <p className="text-xs text-gray-400">~$7 USD</p>
              </div>
            </div>
            <div className="mt-4 py-2.5 bg-dubai-gold text-dubai-navy font-bold rounded-xl text-center flex items-center justify-center gap-2">
              <Download size={18} />
              Get My CV Now
            </div>
          </button>

          {/* Premium Plan */}
          <button
            onClick={() => handleCheckout("premium")}
            className="w-full p-5 rounded-2xl bg-white border-2 border-dubai-gold text-left transition-all hover:shadow-lg active:scale-[0.99]"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-dubai-gold uppercase tracking-wider">
                  Best Value
                </span>
                <h3 className="text-lg font-bold text-dubai-navy mt-0.5">
                  Premium Package
                </h3>
                <ul className="text-sm text-gray-500 mt-2 space-y-1">
                  <li>&#10003; Everything in Professional</li>
                  <li>&#10003; Cover letter template</li>
                  <li>&#10003; LinkedIn summary</li>
                </ul>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-dubai-navy">45 AED</p>
                <p className="text-xs text-gray-400">~$12 USD</p>
              </div>
            </div>
            <div className="mt-4 py-2.5 bg-dubai-navy text-white font-bold rounded-xl text-center flex items-center justify-center gap-2">
              <Download size={18} />
              Get Premium Package
            </div>
          </button>
        </div>

        {/* Share */}
        <div className="text-center pt-2 pb-8">
          <p className="text-sm text-gray-400 mb-3">
            Know someone who needs a CV?
          </p>
          <a
            href={`https://wa.me/?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-whatsapp text-white font-bold rounded-full hover:brightness-110 transition-all shadow-lg shadow-whatsapp/25"
          >
            <Share2 size={18} />
            Share on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
