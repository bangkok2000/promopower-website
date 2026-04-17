"use client";

import Link from "next/link";
import { useState } from "react";

export default function Jobseekers() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));
  
  const submitForm = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center px-8 overflow-hidden bg-charcoal-dark border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-full max-w-3xl h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
        </div>
        <div className="relative z-10 max-w-4xl mt-16">
          <h1 className="text-5xl md:text-7xl font-headline font-normal text-on-surface tracking-tight mb-6">
            Be the Face of <span className="text-primary italic">Top Brands.</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-10">
            Looking for flexible, exciting work? Join PromoPower&apos;s elite roster and get paid to bring amazing campaigns to life.
          </p>
          <a href="#apply">
            <button className="glow-button px-10 py-5 rounded-full text-on-primary font-headline font-normal text-xl hover:scale-105 transition-transform flex items-center gap-3 mx-auto">
              Start Your Application <span className="material-symbols-outlined">arrow_downward</span>
            </button>
          </a>
        </div>
      </section>

      {/* The Timeline (3 Steps) */}
      <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-headline font-normal tracking-widest text-sm uppercase block mb-4">The Process</span>
          <h2 className="text-4xl md:text-5xl font-headline font-normal text-on-surface">3 Steps to Your First Gig</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 z-0"></div>
          
          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-surface border-2 border-primary/30 rounded-full flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,140,0,0.2)] group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500">
               <span className="font-headline font-normal text-2xl drop-shadow-md">1</span>
            </div>
            <h3 className="text-2xl font-headline font-normal text-on-surface mb-4">Submit Your Profile</h3>
            <p className="text-on-surface-variant">Drop your comp card, stats, and contact details below.</p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center group mt-8 md:mt-0">
            <div className="w-20 h-20 bg-surface border-2 border-accent-amber/30 rounded-full flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,191,0,0.2)] group-hover:bg-accent-amber group-hover:text-charcoal-dark transition-colors duration-500">
               <span className="font-headline font-normal text-2xl drop-shadow-md">2</span>
            </div>
            <h3 className="text-2xl font-headline font-normal text-on-surface mb-4">The Chemistry Session</h3>
            <p className="text-on-surface-variant">A quick chat to understand your vibe, strengths, and goals.</p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center group mt-8 md:mt-0">
            <div className="w-20 h-20 bg-surface border-2 border-primary/30 rounded-full flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,140,0,0.2)] group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500">
               <span className="font-headline font-normal text-2xl drop-shadow-md">3</span>
            </div>
            <h3 className="text-2xl font-headline font-normal text-on-surface mb-4">Get Booked</h3>
            <p className="text-on-surface-variant">Gain immediate access to our roster of premium brand activations.</p>
          </div>
        </div>
      </section>

      {/* The Perks */}
      <section className="py-24 px-8 md:px-16 bg-surface border-y border-white/5">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container rounded-2xl p-10 text-center border border-white/5 hover:border-primary/20 transition-colors">
              <span className="material-symbols-outlined text-5xl text-primary mb-6 block">diamond</span>
              <h3 className="text-xl font-headline font-normal text-on-surface mb-4">Top Brands</h3>
              <p className="text-on-surface-variant text-sm">Represent household names in tech, lifestyle, and retail.</p>
            </div>
            <div className="bg-surface-container rounded-2xl p-10 text-center border border-white/5 hover:border-accent-amber/20 transition-colors">
              <span className="material-symbols-outlined text-5xl text-accent-amber mb-6 block">schedule</span>
              <h3 className="text-xl font-headline font-normal text-on-surface mb-4">Flexible Work</h3>
              <p className="text-on-surface-variant text-sm">Take on activations that fit your personal schedule.</p>
            </div>
            <div className="bg-surface-container rounded-2xl p-10 text-center border border-white/5 hover:border-primary/20 transition-colors">
              <span className="material-symbols-outlined text-5xl text-primary mb-6 block">payments</span>
              <h3 className="text-xl font-headline font-normal text-on-surface mb-4">Prompt Payouts</h3>
              <p className="text-on-surface-variant text-sm">A reliable, fully MOM-licensed agency that values your time.</p>
            </div>
         </div>
      </section>

      {/* Frictionless Application Form */}
      <section id="apply" className="py-32 px-8 bg-charcoal-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-amber/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto bg-surface rounded-2xl p-10 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 relative z-10 min-h-[500px] flex flex-col justify-center">
          
          {step < 4 && (
            <div className="mb-10 text-center">
              <h2 className="text-4xl md:text-5xl font-headline font-normal text-on-surface mb-6">Drop Your Details.</h2>
              <div className="flex justify-center gap-4 items-center">
                 <div className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-white/20'} transition-all shadow-[0_0_10px_rgba(255,140,0,0.5)]`}></div>
                 <div className={`w-12 h-[2px] ${step >= 2 ? 'bg-primary' : 'bg-white/20'} transition-all`}></div>
                 <div className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-white/20'} transition-all shadow-[0_0_10px_rgba(255,140,0,0.5)]`}></div>
                 <div className={`w-12 h-[2px] ${step >= 3 ? 'bg-primary' : 'bg-white/20'} transition-all`}></div>
                 <div className={`w-3 h-3 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-white/20'} transition-all shadow-[0_0_10px_rgba(255,140,0,0.5)]`}></div>
              </div>
            </div>
          )}

          <form className="space-y-8">
            {/* STEP 1: Basic Info */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-3">
                      <label className="block text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">Full Name</label>
                      <input className="w-full bg-background border border-white/10 rounded-full px-8 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20" placeholder="Jane Doe" type="text" />
                  </div>
                  <div className="space-y-3">
                      <label className="block text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">Age</label>
                      <input className="w-full bg-background border border-white/10 rounded-full px-8 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20" placeholder="21" type="number" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                      <label className="block text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">Email Address</label>
                      <input className="w-full bg-background border border-white/10 rounded-full px-8 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20" placeholder="jane@example.com" type="email" />
                  </div>
                  <div className="space-y-3">
                      <label className="block text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">Contact Number</label>
                      <input className="w-full bg-background border border-white/10 rounded-full px-8 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20" placeholder="+65 9123 4567" type="tel" />
                  </div>
                </div>
                <div className="pt-10 flex justify-end">
                  <button type="button" onClick={nextStep} className="glow-button inline-flex items-center gap-2 text-on-primary font-headline font-normal px-10 py-4 rounded-full hover:scale-105 transition-all">
                    Next Step <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Vibe */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-3 mb-8">
                    <label className="block text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">Portfolio / Instagram Link</label>
                    <input className="w-full bg-background border border-white/10 rounded-full px-8 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20" placeholder="https://instagram.com/janedoe" type="url" />
                </div>
                <div className="space-y-3">
                    <label className="block text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">Tell us your strongest traits</label>
                    <textarea className="w-full bg-background border border-white/10 rounded-2xl px-8 py-6 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20" placeholder="e.g. Bilingual, highly energetic, experience with luxury brands..." rows={4}></textarea>
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
            )}

            {/* STEP 3: Comp Card */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-3 pt-4">
                   <label className="block text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest text-center mb-6">Upload Comp Card / CV</label>
                   <div className="w-full bg-background border-2 border-dashed border-white/10 hover:border-primary/50 rounded-2xl px-8 py-14 flex flex-col items-center justify-center transition-all cursor-pointer group">
                      <span className="material-symbols-outlined text-5xl text-on-surface-variant mb-6 group-hover:text-primary transition-colors">cloud_upload</span>
                      <p className="text-on-surface font-bold text-lg text-center">Click to browse or drag and drop</p>
                      <p className="text-on-surface-variant text-sm mt-3">Max file size: 5MB (PDF, JPG, PNG)</p>
                   </div>
                </div>
                <div className="pt-10 flex justify-between items-center">
                  <button type="button" onClick={prevStep} className="text-on-surface-variant hover:text-white font-bold transition-colors inline-flex items-center gap-2">
                     <span className="material-symbols-outlined">arrow_back</span> Back
                  </button>
                  <button type="button" onClick={submitForm} disabled={isSubmitting} className="glow-button inline-flex items-center gap-2 text-on-primary font-headline font-normal px-12 py-5 rounded-full hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100">
                    {isSubmitting ? 'Submitting...' : 'Complete Profile'}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Success state */}
            {step === 4 && (
              <div className="animate-in zoom-in-95 duration-500 text-center py-10 fade-in">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                   <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                   <span className="material-symbols-outlined text-5xl text-primary font-bold">check</span>
                </div>
                <h3 className="text-4xl font-headline font-normal text-on-surface mb-4">You&apos;re On The Team.</h3>
                <p className="text-xl text-on-surface-variant max-w-md mx-auto">Your profile has been deeply captured. We&apos;ll be in touch shortly to schedule your Chemistry Session.</p>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
