

import type { Metadata } from "next";
import  N8nPageClient from "./N8nPageClient";

export const metadata: Metadata = {
  title: "Self-Hosted n8n VPS Plans | Fast, Secure & Unlimited Workflows",

  description:
    "Host n8n on your own VPS with full root access  Unlimited workflows",

  keywords: [
    "n8n hosting",
    " n8n self hosted hosting",
    "n8n hosting unlimited workflows",
    "n8n hosting vs Zapier hosting",
    "how to self host n8n on VPS",
  ],
};

export default function Page() {
  return <N8nPageClient />;
}