export type Project = {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string; // Placeholder for now, can be a color or URL
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Lumina Interface",
    category: "FinTech / Dashboard",
    year: "2025",
    description: "A high-performance financial analytics dashboard handling real-time data with WebSockets.",
    image: "/images/project-1.jpg", // We will handle missing images gracefully
    tags: ["Next.js", "D3.js", "Real-time"],
  },
  {
    id: 2,
    title: "Aura Commerce",
    category: "E-commerce / Fashion",
    year: "2024",
    description: "An award-winning e-commerce experience with 3D product visualization and seamless transitions.",
    image: "/images/project-2.jpg",
    tags: ["React Three Fiber", "Shopify", "Animation"],
  },
  {
    id: 3,
    title: "Neon Estate",
    category: "Real Estate / Luxury",
    year: "2024",
    description: "Luxury property listing platform with immersive video tours and interactive maps.",
    image: "/images/project-3.jpg",
    tags: ["Mapbox", "Video integration", "ISR"],
  },
  {
    id: 4,
    title: "Zenith Health",
    category: "Medical / AI",
    year: "2023",
    description: "AI-powered diagnostic assistant interface for medical professionals.",
    image: "/images/project-4.jpg",
    tags: ["OpenAI API", "Tailwind", "Secure"],
  },
];
