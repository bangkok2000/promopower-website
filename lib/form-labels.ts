/** Readable labels for the select values on the Contact Us and Jobseekers forms. Keep in sync with those forms. */
const LABELS: Record<string, Record<string, string>> = {
  serviceType: {
    "brand-ambassadors": "Brand Ambassadors",
    "event-personnel": "Event Personnel",
    "retail-activation": "Retail Activation Teams",
    roadshow: "Roadshows & Consumer Engagement",
    "campaign-support": "Campaign Support & Coordination",
    unsure: "Not sure which service",
  },
  headcount: {
    "1-5": "1 - 5 personnel",
    "6-20": "6 - 20 personnel",
    "21+": "21+ personnel",
  },
  gender: { male: "Male", female: "Female" },
  qualification: {
    o_level: "O/N Level",
    a_level: "A Level",
    diploma: "Diploma",
    undergrad: "Undergrad",
    graduate: "Graduate",
    others: "Others",
  },
};

export function formLabel(field: keyof typeof LABELS, value: string): string {
  return LABELS[field]?.[value] ?? value;
}
