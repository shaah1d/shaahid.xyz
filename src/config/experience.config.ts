import type { Experience } from "@/types";

export const experiencesConfig: Experience[] = [
  {
    title: "Brand Design & Development",
    employmentType: "Freelance",
    company: {
      name: "Gemveda",
      url: "https://gemveda.ind.in",
    },
    location: {
      name: "Remote",
    }, 
    start: "November 2025",
    end: "December 2025",
   description: [
"Made the entire brand design from logo and color pallette to all the micro interactions, animations to all the blogs.",
"Connectd the form to send emails automatically and implemented SEO with page indexing",
"Tech: Framer Motion, TypeScript, Tailwind CSS"
],

  },
  {
    title: "Full Stack Developer",
    employmentType: "Freelance",
    company: {
      name: "yuvahr Services ",
      url: "https://www.yuvahr.com/",
    },
    location: {
      name: "Remote",
    },
    start: "August 2024",
    end: "September 2024",
   description: [
"Built a responsive web app for YuvaHR to connect IT professionals with companies",
"Used React, Next.js, and Material-UI for the frontend, Express.js for the backend",
"Tech: React, Next.js, Material-UI, Express.js, Nodemailer, Vercel"
],
  },
];