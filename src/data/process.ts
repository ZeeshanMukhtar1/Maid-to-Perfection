import {
  ClipboardCheck,
  Sparkles,
  BellRing,
  HeartHandshake,
} from "lucide-react";

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}

export const PROCESS_DATA: ProcessStep[] = [
  {
    id: 1,
    title: "Instant Quote",
    description:
      "Submit our smart intake form and receive a tailored quote via WhatsApp or SMS in seconds.",
    icon: ClipboardCheck,
  },
  {
    id: 2,
    title: "Seamless Booking",
    description:
      "Choose your preferred cleaning slot online. You'll receive instant confirmation and 24-hour reminders.",
    icon: BellRing,
  },
  {
    id: 3,
    title: "Pro Cleaning",
    description:
      "Our DBS-checked cleaners check in automatically, ensuring they arrive on time, every time.",
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Quality Guaranteed",
    description:
      "After every job, we confirm you are 100% happy. Any issues are escalated directly to Kayleigh.",
    icon: HeartHandshake,
  },
];
