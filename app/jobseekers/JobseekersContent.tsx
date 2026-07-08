"use client";

import Link from "next/link";
import TrustCard from "@/components/TrustCard";
import { useState, useRef } from "react";
import { submitJobseekerApplication } from "@/lib/forms";
import type { FormSubmitResult } from "@/lib/forms";
import { FORM_DEMO_MODE } from "@/lib/site";

const processSteps = [
  {
    step: "1",
    title: "Submit Your Details",
    description: "Share your personal details, contact information and availability.",
  },
  {
    step: "2",
    title: "Recruitment Review",
    description: "Our team reviews your profile and suitability for available assignments.",
  },
  {
    step: "3",
    title: "Assignment Matching",
    description: "Suitable applicants are contacted for upcoming campaign opportunities.",
  },
];

const benefits = [
  {
    title: "Professional Campaigns",
    description: "Support customer-facing assignments across multiple industries.",
    icon: "campaign",
  },
  {
    title: "Flexible Opportunities",
    description: "Apply for assignments based on your availability and profile fit.",
    icon: "schedule",
  },
  {
    title: "Licensed Employer",
    description: "Join through a MOM-licensed agency with clear operational processes.",
    icon: "verified_user",
  },
];

export default function JobseekersContent() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const validateStep1 = () => {
    if (!formRef.current) return false;
    const formData = new FormData(formRef.current);
    const fullName = String(formData.get("fullName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();

    if (!fullName || !email || !phone) {
      setError("Full name, email, and contact number are required.");
      return false;
    }

    setError(null);
    return true;
  };

  const validateStep3 = () => {
    if (!isAgreed) {
      setError("Please accept the Data Protection Policy before submitting.");
      return false;
    }
    setError(null);
    return true;
  };

  const goToStep = (next: number) => {
    if (next === 2 && step === 1 && !validateStep1()) return;
    if (next === 4 && step === 3 && !validateStep3()) return;
    setStep(next);
  };

  const nextStep = () => goToStep(Math.min(step + 1, 4));
  const prevStep = () => goToStep(Math.max(step - 1, 1));

  const submitForm = async () => {
    if (!formRef.current || !validateStep3()) return;
    setIsSubmitting(true);
    setError(null);
    const formData = new FormData(formRef.current);
    formData.set("pdpaConsent", isAgreed ? "true" : "false");
    const result: FormSubmitResult = await submitJobseekerApplication(formData);
    setIsSubmitting(false);
    if (result.success) {
      setStep(4);
    } else {
      setError(result.error ?? "An error occurred. Please try again.");
    }
  };

  return (
    <>
      <section id="section-process" className="page-section-anchor">
          <h2 className="section-title">How Application Works</h2>
          <p className="page-intro mb-10 max-w-3xl">
            A straightforward three-step process to join the PromoPower roster for customer-facing campaign assignments.
          </p>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((item) => (
              <li key={item.step} className="content-card h-full">
                <div className="icon-badge mb-5">
                  <span className="font-headline text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-headline font-normal text-on-surface mb-3">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ol>
      </section>

      <section id="section-benefits" className="page-section-anchor">
          <h2 className="section-title">What To Expect</h2>
          <p className="page-intro mb-8 max-w-3xl">
            PromoPower supports jobseekers with structured onboarding, professional campaign environments and licensed employment agency processes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <TrustCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
            ))}
          </div>
      </section>

      <section id="section-apply" className="page-section-anchor pb-16 sm:pb-24">
          <div className="contact-form-panel flex min-h-0 flex-col justify-center sm:min-h-[500px]">
            {step < 4 && (
              <div className="mb-10">
                <h2 className="text-3xl font-headline font-normal text-on-surface mb-2">Submit Your Application</h2>
                <p className="text-on-surface-variant text-sm mb-6">A short 3-step form to help our recruitment team review your profile.</p>
                {FORM_DEMO_MODE && (
                  <p className="text-xs text-primary/80 mb-4">
                    Demo mode: submissions are validated but not emailed until production delivery is configured.
                  </p>
                )}
                <div className="flex gap-3 items-center">
                  <div className={`w-3 h-3 rounded-full ${step >= 1 ? "bg-primary shadow-[0_0_10px_rgba(255,140,0,0.5)]" : "bg-white/20"} transition-all`} />
                  <div className={`w-10 h-[2px] ${step >= 2 ? "bg-primary" : "bg-white/20"} transition-all`} />
                  <div className={`w-3 h-3 rounded-full ${step >= 2 ? "bg-primary shadow-[0_0_10px_rgba(255,140,0,0.5)]" : "bg-white/20"} transition-all`} />
                  <div className={`w-10 h-[2px] ${step >= 3 ? "bg-primary" : "bg-white/20"} transition-all`} />
                  <div className={`w-3 h-3 rounded-full ${step >= 3 ? "bg-primary shadow-[0_0_10px_rgba(255,140,0,0.5)]" : "bg-white/20"} transition-all`} />
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm" role="alert">
                {error}
              </div>
            )}

            <form ref={formRef} className="space-y-8" noValidate>
              <input type="hidden" name="pdpaConsent" value={isAgreed ? "true" : "false"} readOnly />
              <div className="absolute left-[-9999px]" aria-hidden="true">
                <label htmlFor="js-company-website">Company website</label>
                <input id="js-company-website" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div hidden={step !== 1} className={step === 1 ? "animate-in fade-in slide-in-from-right-4 duration-500" : undefined}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <label htmlFor="js-fullname" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      id="js-fullname"
                      name="fullName"
                      className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/30"
                      placeholder="Jane Doe"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="js-dob" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                      Date of Birth
                    </label>
                    <input
                      id="js-dob"
                      name="dateOfBirth"
                      className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      type="date"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="js-age" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                      Age
                    </label>
                    <input
                      id="js-age"
                      name="age"
                      className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/30"
                      placeholder="21"
                      type="number"
                      min="16"
                      max="99"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="js-gender" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                      Gender
                    </label>
                    <div className="relative">
                      <select
                        id="js-gender"
                        name="gender"
                        defaultValue=""
                        className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer pr-12"
                      >
                        <option value="" disabled>
                          Select Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-4 text-on-surface-variant pointer-events-none">expand_more</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="js-email" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      id="js-email"
                      name="email"
                      className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/30"
                      placeholder="jane@example.com"
                      type="email"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="js-phone" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                      Contact Number
                    </label>
                    <input
                      id="js-phone"
                      name="phone"
                      className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/30"
                      placeholder="+65 9123 4567"
                      type="tel"
                      required
                    />
                  </div>
                </div>
                <div className="mb-8 space-y-3">
                  <label htmlFor="js-qualification" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                    Highest Qualification Achieved
                  </label>
                  <div className="relative">
                    <select
                      id="js-qualification"
                      name="qualification"
                      defaultValue=""
                      className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer pr-12"
                    >
                      <option value="" disabled>
                        Select Qualification
                      </option>
                      <option value="o_level">O/N Level</option>
                      <option value="a_level">A Level</option>
                      <option value="diploma">Diploma</option>
                      <option value="undergrad">Undergrad</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-4 text-on-surface-variant pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="glow-button inline-flex items-center gap-2 text-on-primary font-headline font-normal px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    Next Step
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>

              <div hidden={step !== 2} className={step === 2 ? "animate-in fade-in slide-in-from-right-4 duration-500" : undefined}>
                <div className="space-y-3 mb-8">
                  <label htmlFor="js-portfolio" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                    Portfolio / Profile Link
                  </label>
                  <input
                    id="js-portfolio"
                    name="portfolio"
                    className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/30"
                    placeholder="https://instagram.com/janedoe"
                    type="url"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="js-traits" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                    Relevant experience or strengths
                  </label>
                  <textarea
                    id="js-traits"
                    name="traits"
                    className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/30"
                    placeholder="e.g. Bilingual, highly energetic, experience with luxury brands..."
                    rows={4}
                  />
                </div>
                <div className="form-step-actions">
                  <button type="button" onClick={prevStep} className="text-on-surface-variant hover:text-white font-bold transition-colors inline-flex items-center gap-2">
                    <span className="material-symbols-outlined">arrow_back</span>
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="glow-button inline-flex items-center gap-2 text-on-primary font-headline font-normal px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    Final Step
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>

              <div hidden={step !== 3} className={step === 3 ? "animate-in fade-in slide-in-from-right-4 duration-500" : undefined}>
                <div className="space-y-3">
                  <label htmlFor="js-compcard" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                    Upload CV / Supporting Document
                  </label>
                  <label
                    htmlFor="js-compcard"
                    className="w-full bg-background border-2 border-dashed border-white/10 hover:border-primary/50 rounded-xl px-8 py-14 flex flex-col items-center justify-center transition-all cursor-pointer group"
                  >
                    <input id="js-compcard" name="compCard" type="file" accept=".pdf,.jpg,.jpeg,.png" className="sr-only" />
                    <span className="material-symbols-outlined text-5xl text-on-surface-variant mb-4 group-hover:text-primary transition-colors">cloud_upload</span>
                    <p className="text-on-surface font-headline text-lg text-center">Click to browse or drag and drop</p>
                    <p className="text-on-surface-variant text-sm mt-2">Max file size: 5MB (PDF, JPG, PNG)</p>
                  </label>
                </div>

                <div className="pt-8 pb-2">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className="relative flex items-center justify-center mt-1">
                      <input
                        type="checkbox"
                        aria-label="I agree to the PromoPower Privacy Policy"
                        className="appearance-none w-6 h-6 border-2 border-white/20 rounded-md bg-transparent checked:bg-primary checked:border-primary peer transition-all cursor-pointer flex-shrink-0"
                        checked={isAgreed}
                        onChange={(e) => setIsAgreed(e.target.checked)}
                      />
                      <span aria-hidden="true" className="material-symbols-outlined absolute text-charcoal-dark font-bold opacity-0 peer-checked:opacity-100 transition-opacity text-sm pointer-events-none">
                        check
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed text-left">
                      I acknowledge and accept the{" "}
                      <Link href="/privacy" className="text-primary hover:text-white transition-colors underline underline-offset-4 decoration-primary/30">
                        PromoPower Privacy Policy
                      </Link>{" "}
                      and consent to the collection and use of my personal data for jobseeker assessment and campaign matching (Singapore PDPA).
                    </p>
                  </label>
                </div>

                <div className="form-step-actions border-t border-white/5 mt-4">
                  <button type="button" onClick={prevStep} className="text-on-surface-variant hover:text-white font-bold transition-colors inline-flex items-center gap-2">
                    <span aria-hidden="true" className="material-symbols-outlined">arrow_back</span>
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={submitForm}
                    disabled={isSubmitting || !isAgreed}
                    className="glow-button inline-flex items-center gap-2 text-on-primary font-headline font-normal px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Complete Profile"}
                    <span aria-hidden="true" className="material-symbols-outlined">send</span>
                  </button>
                </div>
              </div>

              {step === 4 && (
                <div className="animate-in zoom-in-95 duration-500 py-6 fade-in">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" aria-hidden="true" />
                    <span className="material-symbols-outlined text-4xl text-primary font-bold">check</span>
                  </div>
                  <h3 className="text-3xl font-headline font-normal text-on-surface mb-3">Application Received</h3>
                  <p className="text-lg text-on-surface-variant max-w-sm">
                    Thank you for applying. Our recruitment team will review your profile and contact you if there is a suitable opportunity.
                  </p>
                  {FORM_DEMO_MODE && (
                    <p className="text-sm text-on-surface-variant/70 max-w-sm mt-4">
                      Demo mode: this submission was validated but not emailed.
                    </p>
                  )}
                </div>
              )}
            </form>
          </div>
      </section>
    </>
  );
}
