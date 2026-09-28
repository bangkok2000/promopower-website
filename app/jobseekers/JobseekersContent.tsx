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
    description: "Name, contact, availability, and any relevant experience. A CV or supporting file can be attached on the last step.",
  },
  {
    step: "2",
    title: "Recruitment Review",
    description: "The profile is reviewed against campaigns that are actually being staffed. Not every application is contacted.",
  },
  {
    step: "3",
    title: "Assignment Matching",
    description: "If a campaign fits your profile and availability, recruitment contacts you with the assignment details before you are rostered.",
  },
];

const benefits = [
  {
    title: "What The Shifts Are",
    description: "Promotions, retail activations, events and roadshows. You are briefed on the product and the site before the first shift.",
    icon: "campaign",
  },
  {
    title: "Work Is By Assignment",
    description: "There is no standing roster place. You are contacted when a campaign matches your availability and profile.",
    icon: "schedule",
  },
  {
    title: "Licensed Agency",
    description: "PromoPower Pte Ltd is a MOM licensed employment agency. EA License No. 20C0109.",
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
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary mb-4 font-label">
            Application Process
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">How Application Works</h2>
          <p className="text-slate-600 leading-relaxed mb-10 max-w-3xl">
            Three steps. Submitting the form puts you in the pool. It does not confirm a shift.
          </p>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((item) => (
              <li key={item.step} className="border-t border-slate-200 pt-5 h-full">
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-3 block">
                  Step {item.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ol>
      </section>

      <section id="section-benefits" className="page-section-anchor">
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary mb-4 font-label">
            Why Join
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">What To Expect</h2>
          <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
            The work is campaign shifts, not a permanent role. Read this before you apply.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <TrustCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
            ))}
          </div>
      </section>

      <section id="section-apply" className="page-section-anchor pb-16 sm:pb-24">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 flex min-h-0 flex-col justify-center sm:min-h-[500px]">
            {step < 4 && (
              <div className="mb-10">
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary mb-3 font-label">
                  Application Form
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Submit Your Application</h2>
                <p className="text-slate-600 text-sm mb-6">Name and contact first, then experience, then a file if you have one. Submitting this does not confirm a shift.</p>
                {FORM_DEMO_MODE && (
                  <p className="text-xs text-primary/80 mb-4">
                    Demo mode: submissions are validated but not emailed until production delivery is configured.
                  </p>
                )}
                <div className="flex gap-3 items-center">
                  <div className={`w-3 h-3 rounded-full ${step >= 1 ? "bg-primary shadow-[0_0_0_3px_rgba(0,87,168,0.15)]" : "bg-slate-300"} transition-all`} />
                  <div className={`w-10 h-[2px] ${step >= 2 ? "bg-primary" : "bg-slate-300"} transition-all`} />
                  <div className={`w-3 h-3 rounded-full ${step >= 2 ? "bg-primary shadow-[0_0_0_3px_rgba(0,87,168,0.15)]" : "bg-slate-300"} transition-all`} />
                  <div className={`w-10 h-[2px] ${step >= 3 ? "bg-primary" : "bg-slate-300"} transition-all`} />
                  <div className={`w-3 h-3 rounded-full ${step >= 3 ? "bg-primary shadow-[0_0_0_3px_rgba(0,87,168,0.15)]" : "bg-slate-300"} transition-all`} />
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
                      className="w-full bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400"
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
                      className="w-full bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
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
                      className="w-full bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400"
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
                        className="w-full bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer pr-12"
                      >
                        <option value="" disabled>
                          Select Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-4 text-slate-500 pointer-events-none">expand_more</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="js-email" className="block text-xs font-bold text-primary px-1 uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      id="js-email"
                      name="email"
                      className="w-full bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400"
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
                      className="w-full bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400"
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
                      className="w-full bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer pr-12"
                    >
                      <option value="" disabled>
                        Select Qualification
                      </option>
                      <option value="o_level">O/N Level</option>
                      <option value="a_level">A Level</option>
                      <option value="diploma">Diploma</option>
                      <option value="undergrad">Undergrad</option>
                      <option value="graduate">Graduate</option>
                      <option value="others">Others</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-4 text-slate-500 pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="glow-button inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
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
                    className="w-full bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400"
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
                    className="w-full bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400"
                    placeholder="e.g. Bilingual, highly energetic, experience with luxury brands..."
                    rows={4}
                  />
                </div>
                <div className="pt-6 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-slate-600 hover:text-primary font-semibold transition-colors inline-flex items-center gap-2">
                    <span className="material-symbols-outlined">arrow_back</span>
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="glow-button inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
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
                    className="w-full bg-white border-2 border-dashed border-slate-300 hover:border-primary/50 rounded-xl px-8 py-14 flex flex-col items-center justify-center transition-all cursor-pointer group"
                  >
                    <input id="js-compcard" name="compCard" type="file" accept=".pdf,.jpg,.jpeg,.png" className="sr-only" />
                    <span className="material-symbols-outlined text-5xl text-slate-400 mb-4 group-hover:text-primary transition-colors">cloud_upload</span>
                    <p className="text-slate-700 font-semibold text-lg text-center">Click to browse or drag and drop</p>
                    <p className="text-slate-500 text-sm mt-2">Max file size: 5MB (PDF, JPG, PNG)</p>
                  </label>
                </div>

                <div className="pt-8 pb-2">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className="relative flex items-center justify-center mt-1">
                      <input
                        type="checkbox"
                        aria-label="I agree to the PromoPower Privacy Policy"
                        className="appearance-none w-6 h-6 border-2 border-slate-300 rounded-md bg-white checked:bg-primary checked:border-primary peer transition-all cursor-pointer flex-shrink-0"
                        checked={isAgreed}
                        onChange={(e) => setIsAgreed(e.target.checked)}
                      />
                      <span aria-hidden="true" className="material-symbols-outlined absolute text-white font-bold opacity-0 peer-checked:opacity-100 transition-opacity text-sm pointer-events-none">
                        check
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed text-left">
                      I acknowledge and accept the{" "}
                      <Link href="/privacy" className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4 decoration-primary/30">
                        PromoPower Privacy Policy
                      </Link>{" "}
                      and consent to the collection and use of my personal data for jobseeker assessment and campaign matching (Singapore PDPA).
                    </p>
                  </label>
                </div>

                <div className="pt-6 flex justify-between border-t border-slate-200 mt-4">
                  <button type="button" onClick={prevStep} className="text-slate-600 hover:text-primary font-semibold transition-colors inline-flex items-center gap-2">
                    <span aria-hidden="true" className="material-symbols-outlined">arrow_back</span>
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={submitForm}
                    disabled={isSubmitting || !isAgreed}
                    className="glow-button inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Complete Profile"}
                    <span aria-hidden="true" className="material-symbols-outlined">send</span>
                  </button>
                </div>
              </div>

              {step === 4 && (
                <div className="animate-in zoom-in-95 duration-500 py-6 fade-in text-center">
                  <div className="w-20 h-20 bg-blue-50 border border-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping" aria-hidden="true" />
                    <span className="material-symbols-outlined text-4xl text-primary font-bold">check</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Application Received</h3>
                  <p className="text-lg text-slate-600 max-w-sm mx-auto">
                    Thank you for applying. Our recruitment team will review your profile and contact you if there is a suitable opportunity.
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
      </section>
    </>
  );
}
