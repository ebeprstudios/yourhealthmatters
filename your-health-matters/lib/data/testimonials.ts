import type { Testimonial } from "@/lib/types";

/**
 * Patient testimonials.
 *
 * EMPTY STARTER. Populate only with anonymized, consent-confirmed entries.
 * Every testimonial must have:
 * - explicit written consent on file
 * - anonymized patient label
 * - factual "what changed" — no curative claims
 *
 * Educational framing only. Never imply diagnosis, cure, or treatment outcomes
 * that could be construed as medical advice.
 */

export const testimonials: Testimonial[] = [
  // Example structure (commented out):
  // {
  //   id: "t-001",
  //   patientLabel: "Patient A",
  //   primaryConcern: "Stabilizing blood glucose and improving lipid markers",
  //   whatChanged: "Energy improved within 30 days. Markers re-tested at 90 days showed favorable shifts.",
  //   protocolId: "p-001",
  //   durationOnProtocol: "90 days",
  //   consentToShare: true,
  // },
];

export const getTestimonialById = (id: string): Testimonial | undefined =>
  testimonials.find((t) => t.id === id);
