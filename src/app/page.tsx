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
    "Check out this CV builder - build a professional CV in 5 minutes! Perfect for anyone job hunting in Dubai right now."
  );

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ─── Nav ─── */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/40">
        <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <FileText className="text-white" size={18} />
            </div>
            <span className="font-bold text-lg text-heading tracking-tight">
              CV<span className="gradient-text">Dubai</span>
            </span>
          </div>
          <Link
            href="/build"
            className="btn-primary px-5 py-2.5 text-white font-semibold rounded-full text-sm shadow-lg"
          >
            Build My CV
          </Link>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative pt-28 pb-20 px-5">
        {/* Background decorations */}
        <div className="absolute top-20 left-[-10%] w-72 h-72 bg-primary blob" />
        <div className="absolute top-40 right-[-5%] w-56 h-56 bg-accent blob" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-primary-light blob" />

        <div className="relative max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-primary/10">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            2,800+ professionals built their CV this week
          </div>

          <h1 className="animate-fade-in-up text-5xl sm:text-6xl font-extrabold text-heading leading-[1.1] tracking-tight" style={{ animationDelay: "0.1s" }}>
            Build a{" "}
            <span className="gradient-text">Professional CV</span>
            <br />
            in 5 Minutes
          </h1>

          <p className="animate-fade-in-up text-lg sm:text-xl text-body mt-6 max-w-xl mx-auto leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Stop paying agencies AED 500+. Create a stunning, interview-winning
            CV from your phone — designed for the Dubai &amp; UAE job market.
          </p>

          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-3 justify-center mt-10" style={{ animationDelay: "0.3s" }}>
            <Link
              href="/build"
              className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 text-white font-bold text-lg rounded-2xl shadow-xl"
            >
              Build My CV Now — Free
              <ArrowRight size={20} />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-body font-semibold rounded-2xl border border-border hover:bg-surface transition-all"
            >
              See How It Works
            </a>
          </div>

          {/* Trust badges */}
          <div className="animate-fade-in-up flex items-center justify-center gap-6 sm:gap-8 mt-8 text-sm text-muted" style={{ animationDelay: "0.4s" }}>
            <span className="flex items-center gap-1.5">
              <Clock size={15} className="text-primary-light" /> 5 min
            </span>
            <span className="flex items-center gap-1.5">
              <Shield size={15} className="text-primary-light" /> Secure
            </span>
            <span className="flex items-center gap-1.5">
              <Download size={15} className="text-primary-light" /> Instant PDF
            </span>
          </div>
        </div>

        {/* Floating CV preview mockup */}
        <div className="relative max-w-sm mx-auto mt-14 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="animate-float bg-white rounded-2xl shadow-2xl shadow-primary/10 border border-border p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-2xl font-bold gradient-text">A</span>
              </div>
              <div>
                <div className="h-4 w-32 bg-heading/10 rounded-full" />
                <div className="h-3 w-24 bg-primary/10 rounded-full mt-2" />
                <div className="h-2 w-40 bg-muted/20 rounded-full mt-2" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-surface-2 rounded-full" />
              <div className="h-2 w-4/5 bg-surface-2 rounded-full" />
              <div className="h-2 w-3/4 bg-surface-2 rounded-full" />
            </div>
            <div className="mt-4 pt-3 border-t border-border/50 flex gap-2">
              <div className="h-5 w-16 bg-primary/8 rounded-full" />
              <div className="h-5 w-20 bg-accent/8 rounded-full" />
              <div className="h-5 w-14 bg-primary/8 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Social Proof Strip ─── */}
      <section className="py-8 bg-surface border-y border-border/50">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-10 sm:gap-16 flex-wrap px-5">
          {[
            { value: "2,847", label: "CVs Created" },
            { value: "4.9/5", label: "User Rating" },
            { value: "89%", label: "Got Interviews" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-extrabold gradient-text">
                {stat.value}
              </p>
              <p className="text-xs text-muted mt-0.5 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-20 px-5" id="how-it-works">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading mt-3 tracking-tight">
              Three Steps to Your Dream CV
            </h2>
            <p className="text-body mt-3 max-w-md mx-auto">
              No accounts, no hassle. Just fill, preview, and download.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 stagger">
            {[
              {
                icon: FileText,
                title: "Fill Your Details",
                desc: "Simple step-by-step form. Enter your experience, education, and skills in minutes.",
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
                className="card-hover relative bg-white rounded-2xl p-7 border border-border/60 shadow-sm"
              >
                <div className="absolute top-5 right-5 text-4xl font-black text-surface-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5`}>
                  <step.icon className={step.iconColor} size={24} />
                </div>
                <h3 className="font-bold text-heading text-lg mb-2">{step.title}</h3>
                <p className="text-body text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="py-20 px-5 bg-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading mt-3 tracking-tight">
              Everything You Need to Get Hired
            </h2>
            <p className="text-body mt-3 max-w-lg mx-auto">
              CV agencies charge AED 500+ and take days. We deliver the same quality in 5 minutes for just AED 25.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 stagger">
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
                className="card-hover flex gap-4 p-5 bg-white rounded-2xl border border-border/50 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/8 to-accent/5 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-heading mb-1">{feature.title}</h3>
                  <p className="text-body text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading mt-3 tracking-tight">
              Loved by Dubai Professionals
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 stagger">
            {[
              {
                name: "Sarah K.",
                role: "Marketing Manager",
                text: "Got 3 interview calls within a week of sending my new CV. The templates are incredibly professional!",
                avatar: "S",
              },
              {
                name: "Mohammed A.",
                role: "Software Engineer",
                text: "After getting laid off, I built my CV here in 5 minutes. Way better than what I paid AED 800 for before.",
                avatar: "M",
              },
              {
                name: "Priya S.",
                role: "Finance Analyst",
                text: "The AI suggestions made my experience sound 10x more impressive. Best AED 25 I ever spent on my career.",
                avatar: "P",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="card-hover p-6 bg-white rounded-2xl border border-border/50 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-body text-sm leading-relaxed mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-heading text-sm">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section className="py-20 px-5 bg-surface" id="pricing">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading mt-3 tracking-tight">
              Unbeatable Value
            </h2>
            <p className="text-body mt-3 max-w-md mx-auto">
              Professional quality at a fraction of agency prices. No hidden fees.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Basic */}
            <div className="card-hover bg-white rounded-3xl p-7 border border-border/60 shadow-sm relative">
              <div className="absolute -top-3 left-6">
                <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-md">
                  Most Popular
                </span>
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-bold text-heading">Professional CV</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold gradient-text">25</span>
                  <span className="text-lg font-semibold text-muted">AED</span>
                </div>
                <p className="text-xs text-muted mt-1">One-time payment (~$7 USD)</p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "High-quality PDF download",
                  "3 premium templates",
                  "ATS-friendly format",
                  "AI-enhanced content",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-body">
                    <CheckCircle size={16} className="text-success flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/build"
                className="btn-primary block mt-7 py-3.5 text-white font-bold rounded-xl text-center shadow-lg"
              >
                Start Building — Free
              </Link>
            </div>

            {/* Premium */}
            <div className="card-hover bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-7 text-white relative shadow-xl shadow-primary/20">
              <div className="absolute -top-3 left-6">
                <span className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full shadow-md">
                  Best Value
                </span>
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-bold">Premium Package</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">45</span>
                  <span className="text-lg font-semibold text-white/60">AED</span>
                </div>
                <p className="text-xs text-white/50 mt-1">One-time payment (~$12 USD)</p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Everything in Professional",
                  "Cover letter template",
                  "LinkedIn summary",
                  "Priority support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/90">
                    <CheckCircle size={16} className="text-accent-light flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/build"
                className="block mt-7 py-3.5 bg-white text-primary font-bold rounded-xl text-center hover:bg-white/90 transition-all shadow-lg"
              >
                Get Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="relative py-24 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3" />
        <div className="absolute top-10 left-[10%] w-60 h-60 bg-primary blob" />
        <div className="absolute bottom-10 right-[10%] w-48 h-48 bg-accent blob" />

        <div className="relative max-w-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight">
            Your Next Job Starts With
            <br />
            <span className="gradient-text">a Great CV</span>
          </h2>
          <p className="text-body mt-4 max-w-md mx-auto leading-relaxed">
            Don&apos;t let a bad CV hold you back. Build a professional one in 5
            minutes and start getting interview calls today.
          </p>
          <Link
            href="/build"
            className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 text-white font-bold text-lg rounded-2xl shadow-xl mt-8"
          >
            Build My CV Now — It&apos;s Free to Start
            <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-white border-t border-border/50 py-10 px-5">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <FileText className="text-white" size={16} />
            </div>
            <span className="font-bold text-heading">
              CV<span className="gradient-text">Dubai</span>
            </span>
          </div>
          <a
            href={`https://wa.me/?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-whatsapp text-white font-semibold rounded-full text-sm hover:brightness-110 transition-all shadow-md"
          >
            <MessageCircle size={16} />
            Share on WhatsApp
          </a>
          <p className="text-xs text-muted">
            &copy; 2026 CVDubai. Built in Dubai, for Dubai.
          </p>
        </div>
      </footer>
    </div>
  );
}
