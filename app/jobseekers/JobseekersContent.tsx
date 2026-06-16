"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { submitJobseekerApplication } from "@/lib/forms";
import type { FormSubmitResult } from "@/lib/forms";
import { FORM_DEMO_MODE } from "@/lib/site";

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
      <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary font-headline font-normal tracking-widest text-sm uppercase block mb-4">The Process</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-normal text-on-surface">How Application Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative">
          <div className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 z-0"></div>

          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-surface border-2 border-primary/30 rounded-full flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,140,0,0.2)] group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500">
              <span className="font-headline font-normal text-2xl drop-shadow-md">1</span>
            </div>
            <h3 className="text-2xl font-headline font-normal text-on-surface mb-4">Submit Your Details</h3>
            <p className="text-on-surface-variant">Share your personal details, contact information and availability.</p>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center group mt-8 md:mt-0">
            <div className="w-20 h-20 bg-surface border-2 border-accent-amber/30 rounded-full flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,191,0,0.2)] group-hover:bg-accent-amber group-hover:text-charcoal-dark transition-colors duration-500">
              <span className="font-headline font-normal text-2xl drop-shadow-md">2</span>
            </div>
            <h3 className="text-2xl font-headline font-normal text-on-surface mb-4">Recruitment Review</h3>
            <p className="text-on-surface-variant">Our team reviews your profile and suitability for available assignments.</p>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center group mt-8 md:mt-0">
            <div className="w-20 h-20 bg-surface border-2 border-primary/30 rounded-full flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,140,0,0.2)] group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500">
              <span className="font-headline font-normal text-2xl drop-shadow-md">3</span>
            </div>
            <h3 className="text-2xl font-headline font-normal text-on-surface mb-4">Assignment Matching</h3>
            <p className="text-on-surface-variant">Suitable applicants are contacted for upcoming campaign opportunities.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 bg-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-surface-container rounded-2xl p-10 text-center border border-white/5 hover:border-primary/20 transition-colors">
            <span className="material-symbols-outlined text-5xl text-primary mb-6 block">diamond</span>
            <h3 className="text-xl font-headline font-normal text-on-surface mb-4">Professional Campaigns</h3>
            <p className="text-on-surface-variant text-sm">Support customer-facing assignments across multiple industries.</p>
          </div>
          <div className="bg-surface-container rounded-2xl p-10 text-center border border-white/5 hover:border-accent-amber/20 transition-colors">
            <span className="material-symbols-outlined text-5xl text-accent-amber mb-6 block">schedule</span>
            <h3 className="text-xl font-headline font-normal text-on-surface mb-4">Flexible Opportunities</h3>
            <p className="text-on-surface-variant text-sm">Apply for assignments based on your availability and profile fit.</p>
          </div>
          <div className="bg-surface-container rounded-2xl p-10 text-center border border-white/5 hover:border-primary/20 transition-colors">
            <span className="material-symbols-outlined text-5xl text-primary mb-6 block">payments</span>
            <h3 className="text-xl font-headline font-normal text-on-surface mb-4">Licensed Employer</h3>
            <p className="text-on-surface-variant text-sm">Join through a MOM-licensed agency with clear operational processes.</p>
          </div>
        </div>
      </section>

      <section id="apply" className="py-16 sm:py-32 px-6 sm:px-8 bg-charcoal-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-amber/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto bg-surface rounded-2xl p-6 sm:p-10 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 relative z-10 min-h-[500px] flex flex-col justify-center">
          {step < 4 && (
            <div className="mb-10 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-normal text-on-surface mb-6">Submit Your Application</h2>
              {FORM_DEMO_MODE && (
                <p className="text-xs text-accent-amber/80 mb-4">Demo mode: submissions are captured locally and not emailed yet.</p>
              )}
              <div className="flex justify-center gap-4 items-center">
                <div className={`w-3 h-3 rounded-full ${step >= 1 ? "bg-primary" : "bg-white/20"} transition-all shadow-[0_0_10px_rgba(255,140,0,0.5)]`}></div>
                <div className={`w-12 h-[2px] ${step >= 2 ? "bg-primary" : "bg-white/20"} transition-all`}></div>
                <div className={`w-3 h-3 rounded-full ${step >= 2 ? "bg-primary" : "bg-white/20"} transition-all shadow-[0_0_10px_rgba(255,140,0,0.5)]`}></div>
                <div className={`w-12 h-[2px] ${step >= 3 ? "bg-primary" : "bg-white/20"} transition-all`}></div>
                <div className={`w-3 h-3 rounded-full ${step >= 3 ? "bg-primary" : "bg-white/20"} transition-all shadow-[0_0_10px_rgba(255,140,0,0.5)]`}></div>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center" role="alert">
              {error}
            </div>
          )}

          <form ref={formRef} className="space-y-8" noValidate>
            <input type="hidden" name="pdpaConsent" value={isAgreed ? "true" : "false"} readOnly />

            <div hidden={step !== 1} className={step === 1 ? "animate-in fade-in slide-in-from-right-4 duration-500" : undefined}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-3">
                  <label htmlFor="js-fullname" className="block text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">Full Name</label>
                  <input id="js-fullname" name="fullName" className="w-full bg-background border border-white/10 rounded-full px-8 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20" placeholder="Jane Doe" type="text" required />
                </div>
                <div className="space-y-3">
                  <label htmlFor="js-dob" className="block text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">Date of Birth</label>
                  <input id="js-dob" name="dateOfBirth" className="w-full bg-background border border-white/10 rounded-full px-8 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none" type="date" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="js-age" className="block text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">Age</label>
                  <input id="js-age" name="age" className="w-full bg-background border border-white/10 rounded-full px-8 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20" placeholder="21" type="number" min="16" max="99" />
                </div>
                <div className="space-y-3 relative">
                  <label htmlFor="js-gender" className="block text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">Gender</label>
                  <select id="js-gender" name="gender" defaultValue="" className="w-full bg-background border border-white/10 rounded-full px-8 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                    <option value="" disabled>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-6 bottom-4 text-white/50 pointer-events-none">expand_more</span>
                </div>
                <div className="space-y-3">
                  <label htmlFor="js-email" className="block text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">Email Address</label>
                  <input id="js-email" name="email" className="w-full bg-background border border-white/10 rounded-full px-8 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20" placeholder="jane@example.com" type="email" required />
                </div>
                <div className="space-y-3">
                  <label htmlFor="js-phone" className="block text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">Contact Number</label>
                  <input id="js-phone" name="phone" className="w-full bg-background border border-white/10 rounded-full px-8 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20" placeholder="+65 9123 4567" type="tel" required />
                </div>
              </div>
              <div className="mb-8 space-y-3 relative">
                <label htmlFor="js-qualification" className="block text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">Highest Qualification Achieved</label>
                <select id="js-qualification" name="qualification" defaultValue="" className="w-full bg-background border border-white/10 rounded-full px-8 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                  <option value="" disabled>Select Qualification</option>
                  <option value="o_level">O/N Level</option>
                  <option value="a_level">A Level</option>
                  <option value="diploma">Diploma</option>
                  <option value="undergrad">Undergrad</option>
                </select>
                <span className="material-symbols-outlined absolute right-6 bottom-4 text-white/50 pointer-events-none">expand_more</span>
              </div>
              <div className="pt-2 flex justify-end">
                <button type="button" onClick={nextStep} className="glow-button inline-flex items-center gap-2 text-on-primary font-headline font-normal px-10 py-4 rounded-full hover:scale-105 transition-all">
                  Next Step <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>

            <div hidden={step !== 2} className={step === 2 ? "animate-in fade-in slide-in-from-right-4 duration-500" : undefined}>
              <div className="space-y-3 mb-8">
                <label htmlFor="js-portfolio" className="block text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">Portfolio / Profile Link</label>
                <input id="js-portfolio" name="portfolio" className="w-full bg-background border border-white/10 rounded-full px-8 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20" placeholder="https://instagram.com/janedoe" type="url" />
              </div>
              <div className="space-y-3">
                <label htmlFor="js-traits" className="block text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">Relevant experience or strengths</label>
                <textarea id="js-traits" name="traits" className="w-full bg-background border border-white/10 rounded-2xl px-8 py-6 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20" placeholder="e.g. Bilingual, highly energetic, experience with luxury brands..." rows={4}></textarea>
              </div>
              <div className="pt-10 flex justify-between items-center">
                <button type="button" onClick={prevStep} className="text-on-surface-variant hover:text-white font-bold transition-colors inline-flex items-center gap-2">
                  <span className="material-symbols-outlined">arrow_back</span> Back
                </button>
                <button type="button" onClick={nextStep} className="glow-button inline-flex items-center gap-2 text-on-primary font-headline font-normal px-10 py-4 rounded-full hover:scale-105 transition-all">
                  Final Step <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>

            <div hidden={step !== 3} className={step === 3 ? "animate-in fade-in slide-in-from-right-4 duration-500" : undefined}>
              <div className="space-y-3 pt-4">
                <label htmlFor="js-compcard" className="block text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest text-center mb-6">Upload CV / Supporting Document</label>
                <label htmlFor="js-compcard" className="w-full bg-background border-2 border-dashed border-white/10 hover:border-primary/50 rounded-2xl px-8 py-14 flex flex-col items-center justify-center transition-all cursor-pointer group">
                  <input id="js-compcard" name="compCard" type="file" accept=".pdf,.jpg,.jpeg,.png" className="sr-only" />
                  <span className="material-symbols-outlined text-5xl text-on-surface-variant mb-6 group-hover:text-primary transition-colors">cloud_upload</span>
                  <p className="text-on-surface font-bold text-lg text-center">Click to browse or drag and drop</p>
                  <p className="text-on-surface-variant text-sm mt-3">Max file size: 5MB (PDF, JPG, PNG)</p>
                </label>
              </div>

              <div className="pt-8 pb-4">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-1">
                    <input
                      type="checkbox"
                      className="appearance-none w-6 h-6 border-2 border-white/20 rounded-md bg-transparent checked:bg-primary checked:border-primary peer transition-all cursor-pointer flex-shrink-0"
                      checked={isAgreed}
                      onChange={(e) => setIsAgreed(e.target.checked)}
                    />
                    <span className="material-symbols-outlined absolute text-charcoal-dark font-bold opacity-0 peer-checked:opacity-100 transition-opacity text-sm pointer-events-none">check</span>
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

              <div className="pt-6 flex justify-between items-center border-t border-white/5 mt-4">
                <button type="button" onClick={prevStep} className="text-on-surface-variant hover:text-white font-bold transition-colors inline-flex items-center gap-2">
                  <span className="material-symbols-outlined">arrow_back</span> Back
                </button>
                <button type="button" onClick={submitForm} disabled={isSubmitting || !isAgreed} className="glow-button inline-flex items-center gap-2 text-on-primary font-headline font-normal px-12 py-5 rounded-full hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed">
                  {isSubmitting ? "Submitting..." : "Complete Profile"}
                </button>
              </div>
            </div>

            {step === 4 && (
              <div className="animate-in zoom-in-95 duration-500 text-center py-10 fade-in">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                  <span className="material-symbols-outlined text-5xl text-primary font-bold">check</span>
                </div>
                <h3 className="text-4xl font-headline font-normal text-on-surface mb-4">Application Received</h3>
                <p className="text-xl text-on-surface-variant max-w-md mx-auto">
                  Thank you for applying. Our recruitment team will review your profile and contact you if there is a suitable opportunity.
                </p>
                {FORM_DEMO_MODE && (
                  <p className="text-sm text-on-surface-variant/70 max-w-md mx-auto mt-4">
                    Demo mode: this submission was logged for review and not emailed.
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
