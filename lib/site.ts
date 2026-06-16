export const SITE = {
  name: "PromoPower Pte Ltd",
  url: "https://promopower.com.sg",
  email: "admin@promopower.com.sg",
  address: "65 Airport Boulevard, #03-37 Changi Airport Terminal 3, Singapore 819663",
  eaLicense: "20C0109",
  foundingDate: "2002",
} as const;

/** Demo mode when no Web3Forms key is set, or when NEXT_PUBLIC_FORM_DEMO_MODE=true. */
export const FORM_DEMO_MODE =
  process.env.NEXT_PUBLIC_FORM_DEMO_MODE === "true" || !process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
