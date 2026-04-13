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
  CheckCircle,
  ArrowRight,
  Layout,
  Award,
} from "lucide-react";

export default function LandingPage() {
  const whatsappMessage = encodeURIComponent(
    "Hey! Found this amazing CV builder made for Dubai professionals. You can build a professional CV in 5 minutes - really helped me refresh mine. Check it out:"
  );

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ─── Nav ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/40">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <FileText className="text-white" size={16} />
            </div>
            <span className="font-bold text-base sm:text-lg text-heading tracking-tight">
              CV<span className="gradient-text">Dubai</span>
            </span>
          </div>
          <Link
            href="/build"
            className="btn-primary px-4 py-2 sm:px-5 sm:py-2.5 text-white font-semibold rounded-full text-xs sm:text-sm shadow-lg"
          >
            Build My CV
          </Link>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background decorations */}
        <div className="absolute top-20 -left-20 w-48 sm:w-72 h-48 sm:h-72 bg-primary blob" />
        <div className="absolute top-40 -right-10 w-40 sm:w-56 h-40 sm:h-56 bg-accent blob" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-32 sm:h-40 bg-primary-light blob" />

        <div className="relative w-full max-w-2xl lg:max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-1.5 sm:gap-2 bg-primary/5 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-5 sm:mb-8 border border-primary/10">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-success animate-pulse" />
            Trusted by 2,800+ professionals across Dubai &amp; UAE
          </div>

          <h1
            className="animate-fade-in-up text-2xl sm:text-3xl lg:text-[2.75rem] xl:text-5xl font-extrabold text-heading leading-[1.15] tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            Ready for Your{" "}
            <span className="gradient-text">Next Opportunity</span>
            <br />
            in Dubai?
          </h1>

          <p
            className="animate-fade-in-up text-sm sm:text-base text-body mt-4 sm:mt-5 max-w-md sm:max-w-lg mx-auto leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Whether you&apos;re exploring new roles or making a career move,
            a great CV opens doors. Build yours in 5 minutes — designed
            specifically for the Dubai &amp; UAE job market.
          </p>

          <div
            className="animate-fade-in-up flex flex-col sm:flex-row gap-3 justify-center mt-6 sm:mt-8 lg:mt-10"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              href="/build"
              className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl"
            >
              Build My CV Now — Free
              <ArrowRight size={18} />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-4 text-body font-semibold rounded-2xl border border-border hover:bg-surface transition-all text-sm sm:text-base"
            >
              See How It Works
            </a>
          </div>

          {/* Upload existing resume CTA */}
          <p
            className="animate-fade-in-up text-xs sm:text-sm text-muted mt-3 sm:mt-4"
            style={{ animationDelay: "0.35s" }}
          >
            Already have a resume?{" "}
            <Link href="/build" className="text-primary font-semibold hover:underline">
              Upload it &amp; upgrade instantly
            </Link>
          </p>

          {/* Trust badges */}
          <div
            className="animate-fade-in-up flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 text-xs sm:text-sm text-muted"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-primary-light" /> 5 min
            </span>
            <span className="flex items-center gap-1.5">
              <Shield size={14} className="text-primary-light" /> Secure
            </span>
            <span className="flex items-center gap-1.5">
              <Download size={14} className="text-primary-light" /> Instant PDF
            </span>
          </div>
        </div>

        {/* Floating CV preview mockup — hidden on small, shown on large */}
        <div className="hidden lg:block relative w-full max-w-xs mx-auto mt-10 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="animate-float bg-white rounded-2xl shadow-2xl shadow-primary/10 border border-border p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold gradient-text">A</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="h-3 w-3/4 bg-heading/10 rounded-full" />
                <div className="h-2.5 w-1/2 bg-primary/10 rounded-full mt-2" />
                <div className="h-2 w-full bg-muted/20 rounded-full mt-2" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-surface-2 rounded-full" />
              <div className="h-2 w-4/5 bg-surface-2 rounded-full" />
              <div className="h-2 w-3/4 bg-surface-2 rounded-full" />
            </div>
            <div className="mt-3 pt-3 border-t border-border/50 flex gap-2">
              <div className="h-5 w-16 bg-primary/8 rounded-full" />
              <div className="h-5 w-20 bg-accent/8 rounded-full" />
              <div className="h-5 w-14 bg-primary/8 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Social Proof Strip ─── */}
      <section className="py-6 sm:py-8 bg-surface border-y border-border/50">
        <div className="w-full max-w-4xl mx-auto flex items-center justify-center gap-8 sm:gap-12 md:gap-16 flex-wrap px-4 sm:px-6">
          {[
            { value: "2,847", label: "CVs Created" },
            { value: "4.9/5", label: "User Rating" },
            { value: "89%", label: "Got Interviews" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-lg sm:text-xl lg:text-2xl font-extrabold gradient-text">
                {stat.value}
              </p>
              <p className="text-[10px] sm:text-xs text-muted mt-0.5 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" id="how-it-works">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-14">
            <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">Simple Process</span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-heading mt-2 sm:mt-3 tracking-tight">
              Three Steps to Your Dream CV
            </h2>
            <p className="text-sm sm:text-base text-body mt-2 sm:mt-3 max-w-md mx-auto">
              No accounts, no hassle. Just fill, preview, and download.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 stagger">
            {[
              {
                icon: FileText,
                title: "Upload or Fill Details",
                desc: "Upload your old resume to auto-fill, or start fresh with our simple step-by-step form.",
                color: "from-primary/10 to-primary/5",
                iconColor: "text-primary",
              },
              {
                icon: Sparkles,
                title: "AI Enhances It",
                desc: "Smart suggestions polish your CV with professional language for the UAE market.",
                color: "from-accent/10 to-accent/5",
                iconColor: "text-accent",
              },
              {
                icon: Download,
                title: "Download & Share",
                desc: "Get your stunning PDF instantly. Share with employers and start landing interviews.",
                color: "from-success/10 to-success/5",
                iconColor: "text-success",
              },
            ].map((step, i) => (
              <div
                key={step.title}
                className="card-hover relative bg-white rounded-2xl p-5 sm:p-7 border border-border/60 shadow-sm"
              >
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 text-3xl sm:text-4xl font-black text-surface-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-3 sm:mb-5`}>
                  <step.icon className={step.iconColor} size={20} />
                </div>
                <h3 className="font-bold text-heading text-base sm:text-lg mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-body text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-14">
            <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-heading mt-2 sm:mt-3 tracking-tight">
              Everything You Need to Get Hired
            </h2>
            <p className="text-sm sm:text-base text-body mt-2 sm:mt-3 max-w-lg mx-auto">
              CV agencies charge AED 500+ and take days. We deliver the same quality in 5 minutes for just AED 25.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 stagger">
            {[
              {
                icon: Sparkles,
                title: "AI-Powered Writing",
                desc: "Professional bullet points and summaries generated for you automatically",
              },
              {
                icon: Shield,
                title: "ATS-Friendly Format",
                desc: "Passes all Applicant Tracking Systems used by top UAE companies",
              },
              {
                icon: Layout,
                title: "3 Premium Templates",
                desc: "Modern, Executive, and Classic designs — all optimized for the Dubai market",
              },
              {
                icon: Zap,
                title: "Ready in 5 Minutes",
                desc: "No account needed. Fill in your details, preview, download. That simple.",
              },
              {
                icon: Users,
                title: "Dubai-Focused",
                desc: "Templates and content tailored specifically for the UAE job market",
              },
              {
                icon: Award,
                title: "Professional Quality",
                desc: "Same quality as AED 500+ agency CVs — at a fraction of the cost",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="card-hover flex gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-border/50 shadow-sm"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/8 to-accent/5 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-primary" size={18} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-heading text-sm sm:text-base mb-0.5 sm:mb-1">{feature.title}</h3>
                  <p className="text-body text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-14">
            <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">Testimonials</span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-heading mt-2 sm:mt-3 tracking-tight">
              Loved by Dubai Professionals
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 stagger">
            {[
              {
                name: "Sarah K.",
                role: "Marketing Manager, Dubai",
                text: "I was updating my CV for weeks until I found this. Uploaded my old resume, and it was transformed in minutes. Got 3 interview calls within a week!",
                avatar: "S",
              },
              {
                name: "Mohammed A.",
                role: "Software Engineer, Abu Dhabi",
                text: "During my career transition, this tool was a lifesaver. Built a stunning CV in 5 minutes — way better than what I paid AED 800 for at an agency.",
                avatar: "M",
              },
              {
                name: "Priya S.",
                role: "Finance Analyst, Dubai",
                text: "The AI rewrote my bullet points and suddenly my experience looked 10x more impressive. Best AED 25 I ever spent on my career.",
                avatar: "P",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="card-hover p-4 sm:p-6 bg-white rounded-2xl border border-border/50 shadow-sm"
              >
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-body text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-border/50">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-heading text-xs sm:text-sm">{t.name}</p>
                    <p className="text-[10px] sm:text-xs text-muted truncate">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-surface" id="pricing">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-14">
            <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">Pricing</span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-heading mt-2 sm:mt-3 tracking-tight">
              Unbeatable Value
            </h2>
            <p className="text-sm sm:text-base text-body mt-2 sm:mt-3 max-w-md mx-auto">
              Professional quality at a fraction of agency prices. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-2xl mx-auto">
            {/* Basic */}
            <div className="card-hover bg-white rounded-3xl p-5 sm:p-7 border border-border/60 shadow-sm relative">
              <div className="absolute -top-3 left-5 sm:left-6">
                <span className="px-3 py-1 bg-primary text-white text-[10px] sm:text-xs font-bold rounded-full shadow-md">
                  Most Popular
                </span>
              </div>
              <div className="mt-2 sm:mt-3">
                <h3 className="text-base sm:text-lg font-bold text-heading">Professional CV</h3>
                <div className="mt-2 sm:mt-3 flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold gradient-text">25</span>
                  <span className="text-base sm:text-lg font-semibold text-muted">AED</span>
                </div>
                <p className="text-[10px] sm:text-xs text-muted mt-1">One-time payment (~$7 USD)</p>
              </div>
              <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                {[
                  "High-quality PDF download",
                  "3 premium templates",
                  "ATS-friendly format",
                  "AI-enhanced content",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-body">
                    <CheckCircle size={14} className="text-success flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/build"
                className="btn-primary block mt-5 sm:mt-7 py-3 sm:py-3.5 text-white font-bold rounded-xl text-center shadow-lg text-sm sm:text-base"
              >
                Start Building — Free
              </Link>
            </div>

            {/* Premium */}
            <div className="card-hover bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-5 sm:p-7 text-white relative shadow-xl shadow-primary/20">
              <div className="absolute -top-3 left-5 sm:left-6">
                <span className="px-3 py-1 bg-accent text-white text-[10px] sm:text-xs font-bold rounded-full shadow-md">
                  Best Value
                </span>
              </div>
              <div className="mt-2 sm:mt-3">
                <h3 className="text-base sm:text-lg font-bold">Premium Package</h3>
                <div className="mt-2 sm:mt-3 flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">45</span>
                  <span className="text-base sm:text-lg font-semibold text-white/60">AED</span>
                </div>
                <p className="text-[10px] sm:text-xs text-white/50 mt-1">One-time payment (~$12 USD)</p>
              </div>
              <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                {[
                  "Everything in Professional",
                  "Cover letter template",
                  "LinkedIn summary",
                  "Priority support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                    <CheckCircle size={14} className="text-accent-light flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/build"
                className="block mt-5 sm:mt-7 py-3 sm:py-3.5 bg-white text-primary font-bold rounded-xl text-center hover:bg-white/90 transition-all shadow-lg text-sm sm:text-base"
              >
                Get Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="relative py-14 sm:py-18 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3" />
        <div className="absolute top-10 left-[10%] w-40 sm:w-60 h-40 sm:h-60 bg-primary blob" />
        <div className="absolute bottom-10 right-[10%] w-32 sm:w-48 h-32 sm:h-48 bg-accent blob" />

        <div className="relative w-full max-w-xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-heading tracking-tight">
            Your Next Chapter
            <br />
            <span className="gradient-text">Starts Here</span>
          </h2>
          <p className="text-sm sm:text-base text-body mt-3 sm:mt-4 max-w-md mx-auto leading-relaxed">
            The Dubai market moves fast — make sure your CV keeps up. Upload
            your old resume or start fresh, and walk away with something
            that gets interviews.
          </p>
          <Link
            href="/build"
            className="btn-primary inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl mt-6 sm:mt-8"
          >
            Build My CV Now — It&apos;s Free to Start
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-white border-t border-border/50 py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <FileText className="text-white" size={14} />
            </div>
            <span className="font-bold text-sm sm:text-base text-heading">
              CV<span className="gradient-text">Dubai</span>
            </span>
          </div>
          <a
            href={`https://wa.me/?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-whatsapp text-white font-semibold rounded-full text-xs sm:text-sm hover:brightness-110 transition-all shadow-md"
          >
            <MessageCircle size={14} />
            Share on WhatsApp
          </a>
          <p className="text-[10px] sm:text-xs text-muted">
            &copy; 2026 CVDubai. Built in Dubai, for Dubai.
          </p>
        </div>
      </footer>
    </div>
  );
}
