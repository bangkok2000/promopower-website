export const SITE = {
  name: "PromoPower Pte Ltd",
  url: "https://promopower.com.sg",
  email: "admin@promopower.com.sg",
  /** Prototype placeholder — replace before production launch. */
  phone: "+65 6123 4567",
  phoneTel: "+6561234567",
  address: "65 Airport Boulevard, #03-37 Changi Airport Terminal 3, Singapore 819663",
  eaLicense: "20C0109",
  foundingDate: "2002",
} as const;

/** Form submissions are logged only until an email/CRM integration is connected. */
export const FORM_DEMO_MODE = process.env.NEXT_PUBLIC_FORM_DEMO_MODE !== "false";
