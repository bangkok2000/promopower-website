"use client";

import { useState, useRef } from "react";
import { submitContactInquiry } from "@/lib/forms";
import type { FormSubmitResult } from "@/lib/forms";
import { FORM_DEMO_MODE, SITE } from "@/lib/site";

export default function ContactUs() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    const result: FormSubmitResult = await submitContactInquiry(formData);
    setIsSubmitting(false);
    if (result.success) {
      setStep(4);
    } else {
      setError(result.error ?? "An error occurred. Please try again.");
    }
  };

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 sm:px-8 md:px-16 bg-charcoal-dark relative flex items-center justify-center">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-amber/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 sm:gap-16 relative z-10 w-full">
        <div className="lg:w-5/12 flex flex-col justify-center space-y-8 sm:space-y-10">
          <div>
            <span className="text-primary font-headline font-normal tracking-widest text-sm uppercase block mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-normal text-on-surface mb-6 leading-tight">
              Let&apos;s Discuss Your Campaign Requirements
            </h1>
            <p className="text-lg sm:text-xl text-on-surface-variant leading-relaxed mb-6">
              Share your objectives, timeline and staffing needs. Our team will review your request and
              recommend a practical workforce solution aligned with your campaign goals.
            </p>
            <div className="w-16 h-1 bg-primary/50 mb-10"></div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-on-surface">
              <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <div>
                <p className="text-sm text-on-surface-variant uppercase tracking-widest mb-1">Email</p>
                <a href={`mailto:${SITE.email}`} className="font-bold hover:text-primary transition-colors">
                  {SITE.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-on-surface">
              <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">phone</span>
              </div>
              <div>
                <p className="text-sm text-on-surface-variant uppercase tracking-widest mb-1">Phone</p>
                <a href={`tel:${SITE.phoneTel}`} className="font-bold hover:text-primary transition-colors">
                  {SITE.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-on-surface">
              <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">location_on</span>
              </div>
              <div>
                <p className="text-sm text-on-surface-variant uppercase tracking-widest mb-1">Address</p>
                <p className="font-bold">{SITE.address}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 p-6 bg-surface-container rounded-2xl border border-white/5 flex items-center gap-4 w-full max-w-sm">
            <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified_user
            </span>
            <div>
              <p className="font-bold text-on-surface text-sm uppercase tracking-wider">MOM Licensed Agency</p>
              <p className="text-on-surface-variant text-sm">EA LICENSE NO: {SITE.eaLicense}</p>
            </div>
          </div>
        </div>

        <div className="lg:w-7/12">
          <div className="bg-surface rounded-2xl p-6 sm:p-10 md:p-14 shadow-2xl border border-white/5 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
            {step < 4 && (
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-headline font-normal text-on-surface mb-2">Campaign Brief</h2>
                <p className="text-on-surface-variant text-sm mb-6">A short 3-step form to help us respond accurately.</p>
                {FORM_DEMO_MODE && (
                  <p className="text-xs text-accent-amber/80 mb-4">Demo mode: submissions are captured locally and not emailed yet.</p>
                )}
                <div className="flex justify-center gap-3 items-center">
                  <div className={`w-3 h-3 rounded-full ${step >= 1 ? "bg-primary shadow-[0_0_10px_rgba(255,140,0,0.5)]" : "bg-white/20"} transition-all`}></div>
                  <div className={`w-10 h-[2px] ${step >= 2 ? "bg-primary" : "bg-white/20"} transition-all`}></div>
                  <div className={`w-3 h-3 rounded-full ${step >= 2 ? "bg-primary shadow-[0_0_10px_rgba(255,140,0,0.5)]" : "bg-white/20"} transition-all`}></div>
                  <div className={`w-10 h-[2px] ${step >= 3 ? "bg-primary" : "bg-white/20"} transition-all`}></div>
                  <div className={`w-3 h-3 rounded-full ${step >= 3 ? "bg-primary shadow-[0_0_10px_rgba(255,140,0,0.5)]" : "bg-white/20"} transition-all`}></div>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center" role="alert">
                {error}
              </div>
            )}

            <form ref={formRef} className="space-y-8" noValidate>
              <div hidden={step !== 1} className={step === 1 ? "animate-in fade-in slide-in-from-right-4 duration-500" : undefined}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-3">
                    <label htmlFor="contact-service" className="block text-xs font-bold text-on-surface-variant px-1 uppercase tracking-widest text-[#FF8C00]">
                      Service requirement
                    </label>
                    <div className="relative">
                      <select id="contact-service" name="serviceType" defaultValue="" required className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                        <option value="" disabled>Select service type...</option>
                        <option value="brand-ambassadors">Brand Ambassadors</option>
                        <option value="product-promoters">Product Promoters</option>
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
                    <label htmlFor="contact-headcount" className="block text-xs font-bold text-on-surface-variant px-1 uppercase tracking-widest text-[#FF8C00]">
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
                    <label htmlFor="contact-date" className="block text-xs font-bold text-on-surface-variant px-1 uppercase tracking-widest text-[#FF8C00]">
                      Campaign start date
                    </label>
                    <input id="contact-date" name="campaignDate" className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20" type="date" />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="contact-location" className="block text-xs font-bold text-on-surface-variant px-1 uppercase tracking-widest text-[#FF8C00]">
                      Location(s)
                    </label>
                    <input id="contact-location" name="location" className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/30" placeholder="e.g. Orchard, VivoCity, islandwide" type="text" />
                  </div>
                </div>
                <div className="space-y-3 mb-10">
                  <label htmlFor="contact-notes" className="block text-xs font-bold text-on-surface-variant px-1 uppercase tracking-widest text-[#FF8C00]">
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
                  <label className="block text-xs font-bold text-on-surface-variant px-1 uppercase tracking-widest text-[#FF8C00]">
                    Your details
                  </label>
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
                <div className="pt-6 flex justify-between items-center">
                  <button type="button" onClick={prevStep} className="text-on-surface-variant hover:text-white font-bold transition-colors inline-flex items-center gap-2">
                    <span className="material-symbols-outlined">arrow_back</span>
                    Back
                  </button>
                  <button type="button" onClick={submitForm} disabled={isSubmitting} className="glow-button inline-flex items-center gap-2 text-on-primary font-headline font-normal px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100">
                    {isSubmitting ? "Sending Request..." : "Submit Enquiry"}
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
              </div>

              {step === 4 && (
                <div className="animate-in zoom-in-95 duration-500 text-center py-6 fade-in">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                    <span className="material-symbols-outlined text-4xl text-primary font-bold">check</span>
                  </div>
                  <h3 className="text-3xl font-headline font-normal text-on-surface mb-3">Thank You</h3>
                  <p className="text-lg text-on-surface-variant max-w-sm mx-auto">
                    Your enquiry has been received. Our team will review your request and get back to you shortly.
                  </p>
                  {FORM_DEMO_MODE && (
                    <p className="text-sm text-on-surface-variant/70 max-w-sm mx-auto mt-4">
                      Demo mode: this submission was logged for review and not emailed.
                    </p>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
