import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
        <h1 className="text-2xl sm:text-3xl font-extrabold text-heading mb-2">Terms of Service</h1>
        <p className="text-sm text-muted mb-8">Last updated: 13 April 2026</p>

        <div className="prose prose-sm max-w-none text-body space-y-6 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-heading [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-heading [&_h3]:mt-4 [&_h3]:mb-2 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:leading-relaxed">

          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the CVDubai website and CV builder application (the &quot;Service&quot;) operated by CVDubai (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), located in Dubai, United Arab Emirates.
          </p>
          <p>
            By accessing or using our Service, you agree to be bound by these Terms. If you do not agree, please do not use the Service.
          </p>

          <h2>1. Eligibility</h2>
          <p>
            You must be at least 18 years of age to use this Service. By using the Service, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms under the laws of the United Arab Emirates.
          </p>

          <h2>2. Service Description</h2>
          <p>CVDubai provides an online CV/resume builder that allows you to:</p>
          <ul>
            <li>Enter or upload your professional information</li>
            <li>Use AI-powered tools to enhance your CV content</li>
            <li>Choose from professional CV templates</li>
            <li>Generate and download a PDF version of your CV</li>
          </ul>
          <p>
            The Service is a self-service tool. We do not guarantee employment outcomes or interview results.
          </p>

          <h2>3. Pricing and Payment</h2>
          <ul>
            <li><strong>Professional CV:</strong> AED 25 (one-time payment)</li>
            <li><strong>Premium Package:</strong> AED 45 (one-time payment) — includes CV, cover letter template, and LinkedIn summary</li>
          </ul>
          <p>
            All prices are in UAE Dirhams (AED). Payments are processed securely through Stripe. We accept major credit and debit cards.
          </p>
          <p>
            Building and previewing your CV is free. Payment is required only to download the final PDF.
          </p>

          <h2>4. Refund Policy</h2>
          <p>
            Due to the digital nature of our Service:
          </p>
          <ul>
            <li>Once your CV PDF has been successfully generated and made available for download, the digital service is considered fully performed.</li>
            <li>By completing your purchase, you acknowledge that the digital service will be immediately performed and you consent to waive any cooling-off period rights under applicable law.</li>
            <li>Refunds will be issued if the Service fails to generate your CV due to a technical error on our end.</li>
            <li>If you are unsatisfied with the quality, please contact us at <strong>support@cvdubai.com</strong> — we will work to resolve the issue or issue a refund at our discretion.</li>
          </ul>

          <h2>5. Your Content and Data</h2>
          <ul>
            <li>You retain ownership of all personal information and content you provide through the Service.</li>
            <li>Your CV data is stored locally in your browser (localStorage) and is not stored on our servers.</li>
            <li>You are responsible for the accuracy of the information you provide. Do not include false or misleading information in your CV.</li>
            <li>By using the AI enhancement features, you grant us a temporary, limited licence to process your text through our AI providers solely for the purpose of improving your CV content.</li>
          </ul>

          <h2>6. AI-Generated Content</h2>
          <p>
            Our Service uses artificial intelligence to suggest improvements to your CV content. You acknowledge that:
          </p>
          <ul>
            <li>AI-generated suggestions are provided as recommendations only — you should review and edit all content before finalising your CV.</li>
            <li>We do not guarantee the accuracy, completeness, or suitability of AI-generated content.</li>
            <li>You are solely responsible for the final content of your CV.</li>
          </ul>

          <h2>7. Intellectual Property</h2>
          <ul>
            <li>The Service, including its design, templates, code, and branding, is owned by CVDubai and protected under UAE and international intellectual property laws.</li>
            <li>The CV content you create using our templates belongs to you.</li>
            <li>You may not copy, reproduce, or redistribute our templates, designs, or Service for commercial purposes.</li>
          </ul>

          <h2>8. Prohibited Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any unlawful purpose</li>
            <li>Create CVs containing fraudulent, defamatory, or illegal content</li>
            <li>Attempt to circumvent payment requirements</li>
            <li>Use automated tools to access or scrape the Service</li>
            <li>Interfere with or disrupt the Service or its infrastructure</li>
            <li>Impersonate another person or misrepresent your identity</li>
          </ul>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by UAE law:
          </p>
          <ul>
            <li>The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied.</li>
            <li>We do not warrant that the Service will be uninterrupted, error-free, or secure.</li>
            <li>We are not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.</li>
            <li>Our total liability for any claim arising from the Service shall not exceed the amount you paid for the Service (AED 25 or AED 45, as applicable).</li>
            <li>We are not responsible for employment outcomes, interview results, or decisions made by employers based on your CV.</li>
          </ul>

          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless CVDubai from any claims, losses, damages, liabilities, costs, and expenses (including legal fees) arising from your use of the Service, your violation of these Terms, or your violation of any rights of a third party.
          </p>

          <h2>11. Governing Law and Disputes</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
          </p>

          <h2>12. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page with a revised date. Your continued use of the Service after changes constitutes acceptance of the modified Terms.
          </p>

          <h2>13. Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.
          </p>

          <h2>14. Contact Us</h2>
          <p>For questions about these Terms:</p>
          <ul>
            <li>Email: <strong>support@cvdubai.com</strong></li>
            <li>Location: Dubai, United Arab Emirates</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
