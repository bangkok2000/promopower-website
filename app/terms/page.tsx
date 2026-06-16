import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use | PromoPower",
  description:
    "The terms governing your use of the PromoPower website and the relationship between you and PromoPower Pte Ltd.",
  alternates: { canonical: "/terms" },
};

const lastUpdated = "16 June 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Terms of Use"
        description="The terms governing your use of the PromoPower website and the relationship between you and PromoPower Pte Ltd."
      />

      <section className="page-section">
        <div className="page-container-narrow">
          <div className="content-card mb-10" role="note" aria-label="Document status">
            <p className="text-sm text-on-surface-variant leading-relaxed">
              <span className="font-headline text-accent-amber uppercase tracking-widest text-xs block mb-2">
                Draft — Pending Legal Review
              </span>
              This document is a working draft prepared for internal review. The final terms will be reviewed and
              approved by PromoPower&rsquo;s appointed counsel before publication.
            </p>
          </div>

          <div className="prose-block">
            <p className="text-sm text-on-surface-variant/70">Last updated: {lastUpdated}</p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">1. Acceptance of these terms</h2>
            <p>
              These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of the website operated by{" "}
              {SITE.name} (&ldquo;PromoPower&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;). By
              accessing or using this website, you agree to be bound by these Terms. If you do not agree, please do not
              use this website.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">2. Information on this website</h2>
            <p>
              The information on this website is provided for general informational purposes regarding PromoPower&rsquo;s
              staffing solutions and related services. It does not constitute an offer, contract, or professional advice
              of any kind. While we take reasonable care to ensure accuracy, we make no warranty that the information is
              complete, current or free from error.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">3. Intellectual property</h2>
            <p>
              All content on this website, including text, graphics, logos, illustrations, photographs, icons,
              trademarks and the overall site design, is owned by PromoPower or its licensors and is protected under
              applicable copyright, trademark and other intellectual property laws. You may view and download content
              for personal, non-commercial reference purposes only. Any other use, including reproduction, distribution,
              modification or republication, requires our prior written consent.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">4. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use this website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorised access to any part of this website or related systems</li>
              <li>Interfere with the proper operation of this website, including by introducing malicious code</li>
              <li>Scrape, copy or systematically extract content for commercial purposes</li>
              <li>Submit information that is false, misleading or infringing of third-party rights</li>
            </ul>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">5. Submissions and forms</h2>
            <p>
              When you submit information through any form on this website, you represent that the information is
              accurate, that you have the right to share it and that you have read and understood our{" "}
              <Link className="text-primary hover:text-white transition-colors" href="/privacy">
                Privacy Policy
              </Link>
              . Submissions do not, by themselves, create any contractual relationship between you and PromoPower.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">6. Third-party links</h2>
            <p>
              This website may contain links to third-party websites that are not operated by PromoPower. We are not
              responsible for the content, accuracy or practices of any third-party site. Linking to a third-party site
              does not constitute an endorsement.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">7. Disclaimer of warranties</h2>
            <p>
              This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. To the fullest
              extent permitted by law, PromoPower disclaims all warranties, whether express or implied, including
              warranties of merchantability, fitness for a particular purpose and non-infringement. We do not warrant
              that the website will be uninterrupted, secure or error-free.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">8. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, PromoPower shall not be liable for any indirect, incidental,
              consequential, special or exemplary damages arising out of or in connection with your use of, or inability
              to use, this website, even if PromoPower has been advised of the possibility of such damages.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">9. Privacy</h2>
            <p>
              Your use of this website is also governed by our{" "}
              <Link className="text-primary hover:text-white transition-colors" href="/privacy">
                Privacy Policy
              </Link>
              , which forms part of these Terms.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">10. Changes to these terms</h2>
            <p>
              We may revise these Terms from time to time. The most current version will always be available on this
              page, with the &ldquo;Last updated&rdquo; date revised accordingly. Continued use of the website after any
              such change constitutes acceptance of the revised Terms.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">11. Governing law</h2>
            <p>
              These Terms are governed by, and shall be construed in accordance with, the laws of Singapore. Any dispute
              arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the
              courts of Singapore.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">12. Contact</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul className="list-none pl-0 space-y-1">
              <li>{SITE.name}</li>
              <li>{SITE.address}</li>
              <li>
                Email:{" "}
                <a className="text-primary hover:text-white transition-colors" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </li>
              <li>
                Telephone:{" "}
                <a className="text-primary hover:text-white transition-colors" href={`tel:${SITE.phoneTel}`}>
                  {SITE.phone}
                </a>
              </li>
            </ul>

            <p className="text-sm text-on-surface-variant/70 mt-8">
              {SITE.name} is a MOM Licensed Employment Agency. EA License No: {SITE.eaLicense}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
