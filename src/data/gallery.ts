export interface GalleryProject {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  children?: string[]; // Array of extra image paths
}

export const GALLERY_DATA: GalleryProject[] = [
  {
    id: 1,
    title: "Weekly Domestic Maintenance",
    category: "Domestic",
    imageUrl: "/Img/1.jpeg",
    children: ["/Img/2.jpeg", "/Img/3.jpeg", "/Img/4.jpeg", "/Img/5.jpeg"],
  },
  {
    id: 6,
    title: "High-Traffic Retail Cleaning",
    category: "Domestic",
    imageUrl: "/Img/6.jpeg",
    children: ["/Img/7.jpeg", "/Img/8.jpeg", "/Img/9.jpeg", "/Img/10.jpeg"],
  },
  {
    id: 11,
    title: "Carpet & Floor Care",
    category: "Domestic",
    imageUrl: "/Img/11.jpeg",
    children: [
      "/Img/12.jpeg",
      "/Img/13.jpeg",
      "/Img/14.jpeg",
      "/Img/15.jpeg",
      "/Img/16.jpeg",
      "/Img/17.jpeg",
    ],
  },
  {
    id: 18,
    title: "Full Commercial Deep Clean",
    category: "Commercial",
    imageUrl: "/Img/18.jpeg",
    children: [
      "/Img/19.jpeg",
      "/Img/20.jpeg",
      "/Img/21.jpeg",
      "/Img/22.jpeg",
      "/Img/23.jpeg",
      "/Img/24.jpeg",
      "/Img/25.jpeg",
      "/Img/26.jpeg",
    ],
  },
];

export const GALLERY_STATS = {
  projectCount: "1,500+",
  rating: "5.0",
  reviewCount: "320+",
};
