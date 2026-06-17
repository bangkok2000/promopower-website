"use client";

import Link from "next/link";
import PageContentRail from "@/components/PageContentRail";
import { useState, useRef } from "react";
import { submitContactInquiry } from "@/lib/forms";
import type { FormSubmitResult } from "@/lib/forms";
import { FORM_DEMO_MODE, SITE } from "@/lib/site";

export default function ContactUsContent() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const validateStep1 = () => {
    if (!formRef.current) return false;
    const formData = new FormData(formRef.current);
    if (!formData.get("serviceType") || !formData.get("headcount")) {
      setError("Please select a service type and estimated headcount.");
      return false;
    }
    setError(null);
    return true;
  };

  const validateStep3 = () => {
    if (!formRef.current) return false;
    if (!formRef.current.reportValidity()) {
      setError("Please complete all required contact fields.");
      return false;
    }
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
    const result: FormSubmitResult = await submitContactInquiry(formData);
    setIsSubmitting(false);
    if (result.success) {
      setStep(4);
    } else {
      setError(result.error ?? "An error occurred. Please try again.");
    }
  };

  return (
    <section className="page-section pb-24 sm:pb-32">
      <PageContentRail>
        <div className="grid items-start gap-10 xl:grid-cols-12 xl:gap-x-10">
          <div className="xl:col-span-5">
            <h2 className="text-2xl font-headline font-normal text-on-surface mb-6">Get in touch</h2>
            <div className="contact-detail-list">
              <div className="contact-detail-item">
                <div className="contact-detail-icon" aria-hidden="true">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="contact-detail-label">Email</p>
                  <a href={`mailto:${SITE.email}`} className="contact-detail-value hover:text-primary transition-colors">
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon" aria-hidden="true">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="contact-detail-label">Address</p>
                  <p className="contact-detail-value">{SITE.address}</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon" aria-hidden="true">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified_user
                  </span>
                </div>
                <div>
                  <p className="contact-detail-label">MOM Licensed Agency</p>
                  <p className="contact-detail-value">EA License No: {SITE.eaLicense}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-7">
            <div className="contact-form-panel min-h-[500px] flex flex-col justify-center">
              {step < 4 && (
                <div className="mb-10">
                  <h2 className="text-3xl font-headline font-normal text-on-surface mb-2">Campaign Brief</h2>
                  <p className="text-on-surface-variant text-sm mb-6">A short 3-step form to help us respond accurately.</p>
                  {FORM_DEMO_MODE && (
                    <p className="text-xs text-accent-amber/80 mb-4">Demo mode: submissions are captured locally and not emailed yet.</p>
                  )}
                  <div className="flex gap-3 items-center">
                    <div className={`w-3 h-3 rounded-full ${step >= 1 ? "bg-primary shadow-[0_0_10px_rgba(255,140,0,0.5)]" : "bg-white/20"} transition-all`}></div>
                    <div className={`w-10 h-[2px] ${step >= 2 ? "bg-primary" : "bg-white/20"} transition-all`}></div>
                    <div className={`w-3 h-3 rounded-full ${step >= 2 ? "bg-primary shadow-[0_0_10px_rgba(255,140,0,0.5)]" : "bg-white/20"} transition-all`}></div>
                    <div className={`w-10 h-[2px] ${step >= 3 ? "bg-primary" : "bg-white/20"} transition-all`}></div>
                    <div className={`w-3 h-3 rounded-full ${step >= 3 ? "bg-primary shadow-[0_0_10px_rgba(255,140,0,0.5)]" : "bg-white/20"} transition-all`}></div>
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

                <div hidden={step !== 1} className={step === 1 ? "animate-in fade-in slide-in-from-right-4 duration-500" : undefined}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-3">
                      <label htmlFor="contact-service" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                        Service requirement
                      </label>
                      <div className="relative">
                        <select id="contact-service" name="serviceType" defaultValue="" required className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                          <option value="" disabled>Select service type...</option>
                          <option value="brand-ambassadors">Brand Ambassadors</option>
                          <option value="event-personnel">Event Personnel</option>
                          <option value="retail-activation">Retail Activation Teams</option>
                          <option value="roadshow">Roadshows & Consumer Engagement</option>
                          <option value="campaign-support">Campaign Support & Coordination</option>
                          <option value="unsure">Not sure yet - need consultation</option>
                        </select>
                        <span className="absolute right-6 top-4 material-symbols-outlined pointer-events-none text-on-surface-variant">expand_more</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="contact-headcount" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                        Estimated headcount
                      </label>
                      <div className="relative">
                        <select id="contact-headcount" name="headcount" defaultValue="" required className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                          <option value="" disabled>Select estimated headcount...</option>
                          <option value="1-5">1 - 5 personnel</option>
                          <option value="6-20">6 - 20 personnel</option>
                          <option value="21+">21+ personnel</option>
                        </select>
                        <span className="absolute right-6 top-4 material-symbols-outlined pointer-events-none text-on-surface-variant">expand_more</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 flex justify-end">
                    <button type="button" onClick={nextStep} className="glow-button inline-flex items-center gap-2 text-on-primary font-headline font-normal px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                      Next: Timeline
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                </div>

                <div hidden={step !== 2} className={step === 2 ? "animate-in fade-in slide-in-from-right-4 duration-500" : undefined}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-3">
                      <label htmlFor="contact-date" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                        Campaign start date
                      </label>
                      <input id="contact-date" name="campaignDate" className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20" type="date" />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="contact-location" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                        Location(s)
                      </label>
                      <input id="contact-location" name="location" className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/30" placeholder="e.g. Orchard, VivoCity, islandwide" type="text" />
                    </div>
                  </div>
                  <div className="space-y-3 mb-10">
                    <label htmlFor="contact-notes" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                      Campaign brief (optional)
                    </label>
                    <textarea id="contact-notes" name="campaignBrief" rows={4} className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/30" placeholder="Share your campaign objective and staffing considerations."></textarea>
                  </div>
                  <div className="pt-6 flex justify-between items-center">
                    <button type="button" onClick={prevStep} className="text-on-surface-variant hover:text-white font-bold transition-colors inline-flex items-center gap-2">
                      <span className="material-symbols-outlined">arrow_back</span>
                      Back
                    </button>
                    <button type="button" onClick={nextStep} className="glow-button inline-flex items-center gap-2 text-on-primary font-headline font-normal px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                      Next: Contact Details
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                </div>

                <div hidden={step !== 3} className={step === 3 ? "animate-in fade-in slide-in-from-right-4 duration-500" : undefined}>
                  <div className="space-y-6 mb-10">
                    <label className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">Your details</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-fullname" className="sr-only">Full Name</label>
                        <input id="contact-fullname" name="fullName" className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/30" placeholder="Full Name" type="text" required />
                      </div>
                      <div>
                        <label htmlFor="contact-company" className="sr-only">Company Name</label>
                        <input id="contact-company" name="company" className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/30" placeholder="Company Name" type="text" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="sr-only">Work Email</label>
                      <input id="contact-email" name="email" className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/30" placeholder="Work Email" type="email" required />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="sr-only">Phone</label>
                      <input id="contact-phone" name="phone" className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/30" placeholder="Contact Number" type="tel" />
                    </div>
                  </div>

                  <div className="pt-2 pb-2">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-1">
                        <input
                          type="checkbox"
                          aria-label="I agree to the PromoPower Data Protection Policy"
                          className="appearance-none w-6 h-6 border-2 border-white/20 rounded-md bg-transparent checked:bg-primary checked:border-primary peer transition-all cursor-pointer flex-shrink-0"
                          checked={isAgreed}
                          onChange={(e) => setIsAgreed(e.target.checked)}
                        />
                        <span aria-hidden="true" className="material-symbols-outlined absolute text-charcoal-dark font-bold opacity-0 peer-checked:opacity-100 transition-opacity text-sm pointer-events-none">check</span>
                      </div>
                      <p className="text-sm text-on-surface-variant leading-relaxed text-left">
                        I consent to PromoPower collecting and using the information provided to respond to my enquiry, in line with the{" "}
                        <Link href="/privacy" className="text-primary hover:text-white transition-colors underline underline-offset-4 decoration-primary/30">
                          PromoPower Privacy Policy
                        </Link>{" "}
                        (Singapore PDPA).
                      </p>
                    </label>
                  </div>

                  <div className="pt-6 flex justify-between items-center">
                    <button type="button" onClick={prevStep} className="text-on-surface-variant hover:text-white font-bold transition-colors inline-flex items-center gap-2">
                      <span aria-hidden="true" className="material-symbols-outlined">arrow_back</span>
                      Back
                    </button>
                    <button type="button" onClick={submitForm} disabled={isSubmitting || !isAgreed} className="glow-button inline-flex items-center gap-2 text-on-primary font-headline font-normal px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed">
                      {isSubmitting ? "Sending Request..." : "Submit Enquiry"}
                      <span aria-hidden="true" className="material-symbols-outlined">send</span>
                    </button>
                  </div>
                </div>

                {step === 4 && (
                  <div className="animate-in zoom-in-95 duration-500 py-6 fade-in">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                      <span className="material-symbols-outlined text-4xl text-primary font-bold">check</span>
                    </div>
                    <h3 className="text-3xl font-headline font-normal text-on-surface mb-3">Thank You</h3>
                    <p className="text-lg text-on-surface-variant max-w-sm">
                      Your enquiry has been received. Our team will review your request and get back to you shortly.
                    </p>
                    {FORM_DEMO_MODE && (
                      <p className="text-sm text-on-surface-variant/70 max-w-sm mt-4">
                        Demo mode: this submission was logged for review and not emailed.
                      </p>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </PageContentRail>
    </section>
  );
}
