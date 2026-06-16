import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | PromoPower",
  description:
    "How PromoPower collects, uses, discloses and protects personal data in line with the Singapore Personal Data Protection Act (PDPA).",
  alternates: { canonical: "/privacy" },
};

const lastUpdated = "16 June 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Privacy Policy"
        description="How PromoPower collects, uses, discloses and protects personal data in line with the Singapore Personal Data Protection Act (PDPA)."
      />

      <section className="page-section">
        <div className="page-container-narrow">
          <div className="content-card mb-10" role="note" aria-label="Document status">
            <p className="text-sm text-on-surface-variant leading-relaxed">
              <span className="font-headline text-accent-amber uppercase tracking-widest text-xs block mb-2">
                Draft — Pending Legal Review
              </span>
              This document is a working draft prepared for internal review. The final policy will be reviewed and
              approved by PromoPower&rsquo;s appointed counsel and Data Protection Officer before publication. Any
              references in current website forms or correspondence to a previously published policy remain in effect
              until this document is finalised.
            </p>
          </div>

          <div className="prose-block">
            <p className="text-sm text-on-surface-variant/70">Last updated: {lastUpdated}</p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">1. Introduction</h2>
            <p>
              {SITE.name} (&ldquo;PromoPower&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is a
              Singapore-incorporated company providing professional staffing solutions for promotions, retail
              activations, events, roadshows and customer engagement campaigns. We are committed to protecting personal
              data in accordance with the Personal Data Protection Act 2012 of Singapore (the &ldquo;PDPA&rdquo;).
            </p>
            <p>
              This policy explains how we collect, use, disclose and safeguard personal data provided through this
              website, our enquiry forms, our jobseeker registration process and other interactions with PromoPower.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">2. Personal data we collect</h2>
            <p>
              We collect personal data that you provide directly to us, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identification information (full name, date of birth, gender, nationality, NRIC/FIN where applicable)</li>
              <li>Contact information (email address, telephone number, mailing address)</li>
              <li>Employment-related information for jobseekers (work experience, availability, qualifications, photographs submitted as part of an application)</li>
              <li>Enquiry information for clients (organisation name, role, campaign requirements)</li>
              <li>Any additional information you choose to provide in correspondence with us</li>
            </ul>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">3. How we use personal data</h2>
            <p>We use personal data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responding to client enquiries and preparing staffing proposals</li>
              <li>Assessing jobseeker applications and matching candidates to suitable campaigns</li>
              <li>Administering employment, payroll and statutory obligations for engaged personnel</li>
              <li>Coordinating campaign deployment, briefings and on-site support</li>
              <li>Communicating campaign-related operational matters</li>
              <li>Complying with legal, regulatory and licensing obligations, including those of the Ministry of Manpower</li>
              <li>Protecting the legitimate interests of PromoPower, our clients and our personnel</li>
            </ul>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">4. Disclosure of personal data</h2>
            <p>
              We do not sell personal data. We may disclose personal data to the following categories of recipients,
              only to the extent required for the purposes set out above:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clients engaging our staffing services, in connection with a specific campaign deployment</li>
              <li>Service providers supporting our operations (for example, payroll processors and insurers)</li>
              <li>Regulatory and government authorities where required by law</li>
              <li>Professional advisers where reasonably necessary</li>
            </ul>
            <p>
              Where personal data is shared with third parties, we take reasonable steps to require such recipients to
              protect personal data in a manner consistent with this policy and the PDPA.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">5. Consent and withdrawal</h2>
            <p>
              By submitting personal data through our website forms or by engaging with PromoPower, you consent to the
              collection, use and disclosure of personal data in accordance with this policy.
            </p>
            <p>
              You may withdraw consent at any time by contacting our Data Protection Officer using the details below.
              Withdrawal of consent may affect our ability to respond to your enquiry, process your application or
              continue providing services that depend on the information concerned. We will inform you of the likely
              consequences before giving effect to a withdrawal request.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">6. Access and correction</h2>
            <p>
              You have the right to request access to, and correction of, personal data we hold about you. Requests
              should be submitted in writing to our Data Protection Officer. We may charge a reasonable fee for access
              requests as permitted under the PDPA, and will respond within the timeframes prescribed by law.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">7. Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected,
              or as required by applicable laws. When personal data is no longer required, we take reasonable steps to
              securely destroy, delete or anonymise it.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">8. Protection of personal data</h2>
            <p>
              We implement reasonable administrative, technical and physical safeguards designed to protect personal
              data against unauthorised access, collection, use, disclosure, copying, modification, disposal or similar
              risks. While we take such measures seriously, no method of transmission or storage is entirely secure, and
              we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">9. Cookies and website analytics</h2>
            <p>
              This website may use a limited number of essential cookies to support core functionality. We do not
              currently deploy advertising or behavioural-tracking cookies. If, in the future, we introduce analytics or
              third-party tracking, this policy will be updated and consent obtained where required.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">10. Children</h2>
            <p>
              PromoPower&rsquo;s services are intended for individuals aged 16 and above for jobseeker applications, and
              for organisations engaging our staffing services. We do not knowingly collect personal data from
              individuals below this age without the appropriate consent of a parent or legal guardian.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">11. International transfers</h2>
            <p>
              Personal data is primarily stored and processed within Singapore. Where personal data is transferred
              outside Singapore (for example, by service providers operating regional infrastructure), we take steps to
              ensure that the recipient is bound by obligations comparable to those required under the PDPA.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">12. Updates to this policy</h2>
            <p>
              We may update this policy from time to time. The most current version will always be available on this
              page, with the &ldquo;Last updated&rdquo; date revised accordingly. Material changes will be communicated
              through the website or other appropriate channels.
            </p>

            <h2 className="text-2xl font-headline font-normal text-on-surface mt-6">13. Data Protection Officer</h2>
            <p>
              If you have any questions about this policy, wish to withdraw consent, or wish to make an access or
              correction request, please contact our Data Protection Officer:
            </p>
            <ul className="list-none pl-0 space-y-1">
              <li>{SITE.name}</li>
              <li>Attention: Data Protection Officer</li>
              <li>{SITE.address}</li>
              <li>
                Email:{" "}
                <a className="text-primary hover:text-white transition-colors" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </li>

            </ul>

            <p className="text-sm text-on-surface-variant/70 mt-8">
              {SITE.name} is a MOM Licensed Employment Agency. EA License No: {SITE.eaLicense}.
            </p>

            <p className="text-sm">
              See also our{" "}
              <Link className="text-primary hover:text-white transition-colors" href="/terms">
                Terms of Use
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
