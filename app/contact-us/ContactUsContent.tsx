"use client";

import Link from "next/link";
import PageContentRail from "@/components/PageContentRail";
import PageEndLinks from "@/components/PageEndLinks";
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
      if (result.demo) {
        setError(null);
      }
    } else {
      setError(result.error ?? "An error occurred. Please try again.");
    }
  };

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white">
      <PageContentRail>
        <div className="grid items-start gap-10 xl:grid-cols-12 xl:gap-x-10">
          <div className="xl:col-span-5">
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary mb-4 font-label">
              Contact Information
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-primary/15 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-lg">mail</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Email</p>
                  <a href={`mailto:${SITE.email}`} className="text-slate-700 hover:text-primary transition-colors font-medium">
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-primary/15 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Address</p>
                  <p className="text-slate-700">{SITE.address}</p>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-primary/15 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified_user
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">MOM Licensed Agency</p>
                  <p className="text-slate-700">EA License No: {SITE.eaLicense}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 flex min-h-0 flex-col justify-center sm:min-h-[500px]">
              {step < 4 && (
                <div className="mb-10">
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary mb-3 font-label">
                    Enquiry Form
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Campaign Brief</h2>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Three steps: the service and headcount, the dates and locations, then your contact details. The reply is based on what you enter here.
                  </p>
                  {FORM_DEMO_MODE && (
                    <p className="text-xs text-primary/80 mb-4">
                      Demo mode: submissions are validated but not emailed until production delivery is configured.
                    </p>
                  )}
                  <div className="flex gap-3 items-center">
                    <div className={`w-3 h-3 rounded-full ${step >= 1 ? "bg-primary shadow-[0_0_0_3px_rgba(0,87,168,0.15)]" : "bg-slate-300"} transition-all`}></div>
                    <div className={`w-10 h-[2px] ${step >= 2 ? "bg-primary" : "bg-slate-300"} transition-all`}></div>
                    <div className={`w-3 h-3 rounded-full ${step >= 2 ? "bg-primary shadow-[0_0_0_3px_rgba(0,87,168,0.15)]" : "bg-slate-300"} transition-all`}></div>
                    <div className={`w-10 h-[2px] ${step >= 3 ? "bg-primary" : "bg-slate-300"} transition-all`}></div>
                    <div className={`w-3 h-3 rounded-full ${step >= 3 ? "bg-primary shadow-[0_0_0_3px_rgba(0,87,168,0.15)]" : "bg-slate-300"} transition-all`}></div>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm" role="alert">
                  {error}
                </div>
              )}

              <form ref={formRef} className="space-y-8" noValidate>
                <input type="hidden" name="pdpaConsent" value={isAgreed ? "true" : "false"} readOnly />
                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <label htmlFor="contact-company-website">Company website</label>
                  <input id="contact-company-website" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div hidden={step !== 1} className={step === 1 ? "animate-in fade-in slide-in-from-right-4 duration-500" : undefined}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-3">
                      <label htmlFor="contact-service" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                        Service requirement
                      </label>
                      <div className="relative">
                        <select id="contact-service" name="serviceType" defaultValue="" required className="w-full bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer pr-12">
                          <option value="" disabled>Select service type...</option>
                          <option value="brand-ambassadors">Brand Ambassadors</option>
                          <option value="event-personnel">Event Personnel</option>
                          <option value="retail-activation">Retail Activation Teams</option>
                          <option value="roadshow">Roadshows & Consumer Engagement</option>
                          <option value="campaign-support">Campaign Support & Coordination</option>
                          <option value="unsure">Not sure yet - need consultation</option>
                        </select>
                        <span className="absolute right-6 top-4 material-symbols-outlined pointer-events-none text-slate-500">expand_more</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="contact-headcount" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                        Estimated headcount
                      </label>
                      <div className="relative">
                        <select id="contact-headcount" name="headcount" defaultValue="" required className="w-full bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer pr-12">
                          <option value="" disabled>Select estimated headcount...</option>
                          <option value="1-5">1 - 5 personnel</option>
                          <option value="6-20">6 - 20 personnel</option>
                          <option value="21+">21+ personnel</option>
                        </select>
                        <span className="absolute right-6 top-4 material-symbols-outlined pointer-events-none text-slate-500">expand_more</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 flex justify-end">
                    <button type="button" onClick={nextStep} className="glow-button inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
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
                      <input id="contact-date" name="campaignDate" className="w-full bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400" type="date" />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="contact-location" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                        Location(s)
                      </label>
                      <input id="contact-location" name="location" className="w-full bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400" placeholder="e.g. Orchard, VivoCity, islandwide" type="text" />
                    </div>
                  </div>
                  <div className="space-y-3 mb-10">
                    <label htmlFor="contact-notes" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                      Campaign brief (optional)
                    </label>
                    <textarea id="contact-notes" name="campaignBrief" rows={4} className="w-full bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400" placeholder="Share your campaign objective and staffing considerations."></textarea>
                  </div>
                  <div className="pt-6 flex justify-between">
                    <button type="button" onClick={prevStep} className="text-slate-600 hover:text-primary font-semibold transition-colors inline-flex items-center gap-2">
                      <span className="material-symbols-outlined">arrow_back</span>
                      Back
                    </button>
                    <button type="button" onClick={nextStep} className="glow-button inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                      Next: Contact Details
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                </div>

                <div hidden={step !== 3} className={step === 3 ? "animate-in fade-in slide-in-from-right-4 duration-500" : undefined}>
                  <div className="space-y-6 mb-10">
                    <label className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">Your details</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="min-w-0">
                        <label htmlFor="contact-fullname" className="sr-only">Full Name</label>
                        <input id="contact-fullname" name="fullName" className="w-full bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400" placeholder="Full Name" type="text" required />
                      </div>
                      <div className="min-w-0">
                        <label htmlFor="contact-company" className="sr-only">Company Name</label>
                        <input id="contact-company" name="company" className="w-full bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400" placeholder="Company Name" type="text" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <label htmlFor="contact-email" className="sr-only">Work Email</label>
                      <input id="contact-email" name="email" className="w-full bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400" placeholder="Work Email" type="email" required />
                    </div>
                    <div className="min-w-0">
                      <label htmlFor="contact-phone" className="sr-only">Phone</label>
                      <input id="contact-phone" name="phone" className="w-full bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400" placeholder="Contact Number" type="tel" />
                    </div>
                  </div>

                  <div className="pt-2 pb-2">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-1">
                        <input
                          type="checkbox"
                          aria-label="I agree to the PromoPower Data Protection Policy"
                          className="appearance-none w-6 h-6 border-2 border-slate-300 rounded-md bg-white checked:bg-primary checked:border-primary peer transition-all cursor-pointer flex-shrink-0"
                          checked={isAgreed}
                          onChange={(e) => setIsAgreed(e.target.checked)}
                        />
                        <span aria-hidden="true" className="material-symbols-outlined absolute text-white font-bold opacity-0 peer-checked:opacity-100 transition-opacity text-sm pointer-events-none">check</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed text-left">
                        I consent to PromoPower collecting and using the information provided to respond to my enquiry, in line with the{" "}
                        <Link href="/privacy" className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4 decoration-primary/30">
                          PromoPower Privacy Policy
                        </Link>{" "}
                        (Singapore PDPA).
                      </p>
                    </label>
                  </div>

                  <div className="pt-6 flex justify-between">
                    <button type="button" onClick={prevStep} className="text-slate-600 hover:text-primary font-semibold transition-colors inline-flex items-center gap-2">
                      <span aria-hidden="true" className="material-symbols-outlined">arrow_back</span>
                      Back
                    </button>
                    <button type="button" onClick={submitForm} disabled={isSubmitting || !isAgreed} className="glow-button inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed">
                      {isSubmitting ? "Sending Request..." : "Submit Enquiry"}
                      <span aria-hidden="true" className="material-symbols-outlined">send</span>
                    </button>
                  </div>
                </div>

                {step === 4 && (
                  <div className="animate-in zoom-in-95 duration-500 py-6 fade-in text-center">
                    <div className="w-20 h-20 bg-blue-50 border border-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto relative">
                      <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping"></div>
                      <span className="material-symbols-outlined text-4xl text-primary font-bold">check</span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">Thank You</h3>
                    <p className="text-lg text-slate-600 max-w-sm mx-auto">
                      Your enquiry has been received. Our team will review your request and get back to you shortly.
                    </p>
                    {FORM_DEMO_MODE && (
                      <p className="text-sm text-slate-500 max-w-sm mx-auto mt-4">
                        Demo mode: this submission was validated but not emailed.
                      </p>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <PageEndLinks />
      </PageContentRail>
    </section>
  );
}
