import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <FileText className="text-white" size={16} />
            </div>
            <span className="font-bold text-sm sm:text-base text-heading">
              CV<span className="gradient-text">Dubai</span>
            </span>
          </Link>
          <Link href="/" className="flex items-center gap-1.5 text-sm text-body hover:text-heading transition-colors">
            <ArrowLeft size={16} /> Back
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-heading mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted mb-8">Last updated: 13 April 2026</p>

        <div className="prose prose-sm max-w-none text-body space-y-6 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-heading [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-heading [&_h3]:mt-4 [&_h3]:mb-2 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:leading-relaxed">

          <p>
            CVDubai (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the CVDubai website and CV builder application (the &quot;Service&quot;). This Privacy Policy explains how we collect, use, store, and protect your personal data in accordance with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (&quot;UAE PDPL&quot;) and applicable regulations.
          </p>

          <h2>1. Data Controller</h2>
          <p>
            CVDubai is the data controller responsible for processing your personal data. For any privacy inquiries, contact us at: <strong>privacy@cvdubai.com</strong>
          </p>

          <h2>2. Personal Data We Collect</h2>
          <p>We collect only the data you voluntarily provide when using our Service:</p>
          <ul>
            <li><strong>Identity Data:</strong> Full name, job title</li>
            <li><strong>Contact Data:</strong> Email address, phone number, city/location</li>
            <li><strong>Professional Data:</strong> Work experience, education history, skills, professional summary, LinkedIn profile URL</li>
            <li><strong>Payment Data:</strong> Processed securely by Stripe (our payment processor). We do not store your credit/debit card details.</li>
            <li><strong>Technical Data:</strong> Browser type, device information, IP address (collected automatically for security and analytics)</li>
          </ul>

          <h2>3. Legal Basis and Purpose of Processing</h2>
          <p>Under the UAE PDPL, we process your personal data based on:</p>
          <ul>
            <li><strong>Your consent:</strong> By entering your information and using our Service, you consent to the processing of your data for the purpose of generating your CV.</li>
            <li><strong>Performance of contract:</strong> To provide the CV generation service you have purchased.</li>
            <li><strong>Legitimate interest:</strong> To improve our Service, prevent fraud, and ensure security.</li>
          </ul>

          <h3>We use your data to:</h3>
          <ul>
            <li>Generate your professional CV and PDF document</li>
            <li>Process your payment</li>
            <li>Provide customer support</li>
            <li>Improve our Service</li>
          </ul>

          <h2>4. Data Storage and Retention</h2>
          <ul>
            <li><strong>CV Data (form inputs):</strong> Stored locally in your browser (localStorage) only. We do not store your CV data on our servers. When you close or clear your browser, this data is removed.</li>
            <li><strong>AI Processing:</strong> Text sent to our AI service for enhancement is processed in real-time and not stored after processing.</li>
            <li><strong>Payment Records:</strong> Transaction records are retained by Stripe in accordance with financial regulations for up to 7 years.</li>
            <li><strong>Technical Logs:</strong> Server logs are retained for up to 90 days for security purposes, then deleted.</li>
          </ul>

          <h2>5. Data Sharing and Cross-Border Transfers</h2>
          <p>We may share your data with the following third parties, solely for providing the Service:</p>
          <ul>
            <li><strong>Stripe Inc.</strong> (payment processing) — Data may be transferred to servers outside the UAE. Stripe maintains adequate data protection standards compliant with international frameworks.</li>
            <li><strong>Groq Inc.</strong> (AI text processing) — Text data sent for AI enhancement may be processed outside the UAE. Data is processed in real-time and not retained.</li>
            <li><strong>Vercel Inc.</strong> (hosting) — Our application is hosted on infrastructure that may be located outside the UAE.</li>
          </ul>
          <p>
            In accordance with Article 22 of the UAE PDPL, cross-border data transfers are conducted with appropriate safeguards. By using our Service, you consent to these transfers.
          </p>
          <p>We do not sell, rent, or trade your personal data to any third party for marketing purposes.</p>

          <h2>6. Your Rights Under UAE PDPL</h2>
          <p>Under the UAE PDPL, you have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data (note: CV data is stored locally in your browser — you can delete it by clearing your browser data)</li>
            <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
            <li><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
            <li><strong>Withdraw Consent:</strong> Withdraw your consent at any time by ceasing to use the Service and clearing your browser data</li>
            <li><strong>Complaint:</strong> Lodge a complaint with the UAE Data Office if you believe your data protection rights have been violated</li>
          </ul>
          <p>To exercise any of these rights, contact us at <strong>privacy@cvdubai.com</strong>.</p>

          <h2>7. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your data, including:
          </p>
          <ul>
            <li>HTTPS encryption for all data in transit</li>
            <li>Secure payment processing via Stripe (PCI DSS compliant)</li>
            <li>No server-side storage of CV personal data</li>
            <li>Regular security assessments</li>
          </ul>

          <h2>8. Cookies and Tracking</h2>
          <p>
            Our Service uses essential cookies required for the website to function (e.g., session management). We use localStorage to save your CV data in your browser for convenience. We do not use third-party advertising or tracking cookies.
          </p>

          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal data from minors. If you believe a minor has provided us with personal data, please contact us immediately.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of the Service after changes constitutes acceptance of the revised policy.
          </p>

          <h2>11. Contact Us</h2>
          <p>For privacy-related inquiries or to exercise your rights:</p>
          <ul>
            <li>Email: <strong>privacy@cvdubai.com</strong></li>
            <li>Location: Dubai, United Arab Emirates</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
