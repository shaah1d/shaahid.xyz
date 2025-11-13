import type { Experience } from "@/types";

export const experiencesConfig: Experience[] = [
  {
    title: "Web Developer",
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
"Building a custom frontend focused website to showcase the work done by the GemVeda",
"Tech: Astro, TypeScript, Tailwind CSS"
],
status: "Ongoing"
  },
  {
    title: "Full Stack Developer",
    employmentType: "Freelance",
    company: {
      name: "YuvaHR Services ",
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