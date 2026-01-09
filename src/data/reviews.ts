export interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  location?: string;
  content: string;
  source: "google" | "checkatrade";
}

export const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    name: "Paula",
    rating: 5,
    date: "11 Sept 2025",
    location: "London",
    content:
      "Kayleigh was very responsive and the automated booking was seamless. The team turned up exactly when they said they would. Highly recommend Maid to Perfection!",
    source: "checkatrade",
  },
  {
    id: 2,
    name: "Fiona O'Regan",
    rating: 5,
    date: "August 2025",
    content:
      "Kayleigh runs a fantastic cleaning business. True to her word, she helped us with a deep clean on short notice and the personal touch is wonderful.",
    source: "google",
  },
  {
    id: 3,
    name: "Billy Beldom",
    rating: 5,
    date: "June 2025",
    content:
      "I recently had an end-of-tenancy clean and I'm extremely happy. From the instant quote to the final result, the team was professional and courteous.",
    source: "google",
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    rating: 5,
    date: "Oct 2025",
    location: "UK",
    content:
      "Excellent communication and a very professional, friendly tone. The price was fair and my home was left spotless. The automated reminders are so helpful.",
    source: "checkatrade",
  },
];
