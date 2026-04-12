import Link from "next/link";
import {
  FileText,
  Sparkles,
  Download,
  Clock,
  Shield,
  Star,
  ChevronRight,
  Users,
  Zap,
  MessageCircle,
} from "lucide-react";

export default function LandingPage() {
  const whatsappMessage = encodeURIComponent(
    "Check out CVDubai - build a professional CV in 5 minutes! Perfect for anyone job hunting in Dubai right now."
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-dubai-navy">
            <FileText className="text-dubai-gold" size={28} />
            CV<span className="text-dubai-gold">Dubai</span>
          </div>
          <Link
            href="/build"
            className="px-5 py-2 bg-dubai-gold text-white font-bold rounded-full text-sm hover:brightness-110 transition-all shadow-lg shadow-dubai-gold/20"
          >
            Build CV Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-dubai-navy to-[#0f2035] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Zap size={14} />
            Used by 2,800+ Dubai professionals this week
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Laid Off in Dubai?
            <br />
            <span className="text-dubai-gold">Get a Professional CV</span>
            <br />
            in 5 Minutes
          </h1>
          <p className="text-lg text-gray-300 mt-5 max-w-lg mx-auto leading-relaxed">
            Stop waiting weeks for a CV agency. Build a stunning, ATS-friendly CV
            right now from your phone. 3 premium templates designed for the UAE
            market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link
              href="/build"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dubai-gold text-dubai-navy font-bold text-lg rounded-full hover:brightness-110 transition-all shadow-xl shadow-dubai-gold/30"
            >
              Build My CV Now — Free
              <ChevronRight size={20} />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Clock size={14} /> 5 min to build
            </span>
            <span className="flex items-center gap-1">
              <Shield size={14} /> Secure payment
            </span>
            <span className="flex items-center gap-1">
              <Download size={14} /> Instant download
            </span>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="bg-dubai-off-white py-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-8 flex-wrap px-4 text-center">
          <div>
            <p className="text-2xl font-bold text-dubai-navy">2,847</p>
            <p className="text-xs text-gray-500">CVs Created</p>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <div>
            <p className="text-2xl font-bold text-dubai-navy">4.9/5</p>
            <p className="text-xs text-gray-500">User Rating</p>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <div>
            <p className="text-2xl font-bold text-dubai-navy">89%</p>
            <p className="text-xs text-gray-500">Got Interviews</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "1. Fill Your Details",
                desc: "Simple step-by-step form. Just fill in your experience, education, and skills.",
              },
              {
                icon: Sparkles,
                title: "2. AI Enhances It",
                desc: "Our AI polishes your CV with professional language optimized for the UAE market.",
              },
              {
                icon: Download,
                title: "3. Download & Share",
                desc: "Get your stunning PDF instantly. Share with employers and land interviews.",
              },
            ].map((step) => (
              <div key={step.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-dubai-gold/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="text-dubai-gold" size={28} />
                </div>
                <h3 className="font-bold text-dubai-navy text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-dubai-off-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dubai-navy text-center mb-4">
            Why CVDubai?
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-lg mx-auto">
            CV agencies charge 500+ AED and take days. We give you the same
            quality in 5 minutes for just 25 AED.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Sparkles,
                title: "AI-Powered Writing",
                desc: "Professional bullet points and summaries generated automatically",
              },
              {
                icon: Shield,
                title: "ATS-Friendly",
                desc: "Passes all Applicant Tracking Systems used by UAE companies",
              },
              {
                icon: Users,
                title: "Dubai-Focused",
                desc: "Templates and language optimized for the UAE job market",
              },
              {
                icon: Zap,
                title: "Ready in 5 Minutes",
                desc: "No account needed. Fill, preview, download. It's that simple.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-dubai-gold/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-dubai-gold" size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-dubai-navy mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">
            What Dubai Professionals Say
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah K.",
                role: "Marketing Manager",
                text: "Got 3 interview calls within a week of sending my CVDubai resume. The templates are so professional!",
              },
              {
                name: "Mohammed A.",
                role: "Software Engineer",
                text: "After getting laid off, I built my CV here in 5 minutes. Way better than what I paid 800 AED for before.",
              },
              {
                name: "Priya S.",
                role: "Finance Analyst",
                text: "The AI suggestions made my experience sound 10x more impressive. Best 25 AED I ever spent.",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-dubai-gold fill-dubai-gold"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-dubai-navy text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-dubai-navy text-white" id="pricing">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Simple, Affordable Pricing
          </h2>
          <p className="text-gray-400 mb-12 max-w-md mx-auto">
            CV agencies charge 500-2000 AED. Get the same professional quality
            for a fraction of the price.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Basic */}
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-left">
              <span className="text-xs font-bold text-dubai-gold uppercase tracking-wider">
                Most Popular
              </span>
              <h3 className="text-xl font-bold mt-2">Professional CV</h3>
              <p className="text-3xl font-bold text-dubai-gold mt-3">
                25 AED
                <span className="text-sm font-normal text-gray-400 ml-2">
                  one-time
                </span>
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>&#10003; High-quality PDF download</li>
                <li>&#10003; 3 premium templates</li>
                <li>&#10003; ATS-friendly format</li>
                <li>&#10003; AI-enhanced content</li>
              </ul>
              <Link
                href="/build"
                className="block mt-6 py-3 bg-dubai-gold text-dubai-navy font-bold rounded-xl text-center hover:brightness-110 transition-all"
              >
                Start Building — Free
              </Link>
            </div>

            {/* Premium */}
            <div className="p-6 bg-dubai-gold/10 rounded-2xl border border-dubai-gold/30 text-left">
              <span className="text-xs font-bold text-dubai-gold uppercase tracking-wider">
                Best Value
              </span>
              <h3 className="text-xl font-bold mt-2">Premium Package</h3>
              <p className="text-3xl font-bold text-dubai-gold mt-3">
                45 AED
                <span className="text-sm font-normal text-gray-400 ml-2">
                  one-time
                </span>
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>&#10003; Everything in Professional</li>
                <li>&#10003; Cover letter template</li>
                <li>&#10003; LinkedIn summary</li>
                <li>&#10003; Priority support</li>
              </ul>
              <Link
                href="/build"
                className="block mt-6 py-3 bg-dubai-gold text-dubai-navy font-bold rounded-xl text-center hover:brightness-110 transition-all"
              >
                Start Building — Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-dubai-off-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-dubai-navy mb-4">
            Your Next Job Starts With a Great CV
          </h2>
          <p className="text-gray-500 mb-8">
            Don&apos;t let a bad CV hold you back. Build a professional one in 5
            minutes and start getting interview calls.
          </p>
          <Link
            href="/build"
            className="inline-flex items-center gap-2 px-8 py-4 bg-dubai-gold text-dubai-navy font-bold text-lg rounded-full hover:brightness-110 transition-all shadow-xl shadow-dubai-gold/30"
          >
            Build My CV Now — It&apos;s Free to Start
            <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dubai-navy text-white py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-bold text-lg">
            <FileText className="text-dubai-gold" size={24} />
            CV<span className="text-dubai-gold">Dubai</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-whatsapp text-white font-semibold rounded-full text-sm hover:brightness-110 transition-all"
            >
              <MessageCircle size={16} />
              Share on WhatsApp
            </a>
          </div>
          <p className="text-xs text-gray-500">
            &copy; 2026 CVDubai. Built in Dubai, for Dubai.
          </p>
        </div>
      </footer>
    </div>
  );
}
