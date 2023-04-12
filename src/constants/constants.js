import { DiJsBadge } from "react-icons/di";
import {
  SiNestjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Icon } from "@iconify/react";
import { ImGit } from "react-icons/im";

export const projects = [
  {
    title: "Admin Dashboard",
    images: ["https://i.ibb.co/W6g39w3/image.png"],
    description: "Multi page and purpose Admin Dashboard",
    tags: ["React", "Tailwind"],
    source: "https://github.com/Daniellios/dashboard-main",
    visit: "https://effervescent-bonbon-b72539.netlify.app/",
    id: 7,
  },
  {
    title: "Mail Clone",
    description: "VK all Cup qualification task",
    images: ["/images/Mail.png"],
    tags: ["NextJS", "TypeScript", "Tailwind CSS", "Supabase"],
    source: "https://github.com/Daniellios/vk-all-cup",
    visit: "https://vk-all-cup.vercel.app/",
    id: 8,
  },
  {
    title: "Invoice App",
    description:
      "Store and manage the most important info about the rendered services in one place.",
    images: ["/images/InvoiceApp.jpg"],
    tags: [
      "React",
      "Redux",
      "NextJS",
      "TypeScript",
      "JavaScript",
      "React Styled Components",
    ],
    source: "https://github.com/Daniellios/invoice-app",
    visit: "https://invoice-app-delta.vercel.app/",
    id: 4,
  },
  {
    title: "Task Manager",
    description: "Task manager to keep track of things you need to do",
    images: ["/images/TaskManagerUI.png"],
    tags: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "NextJS",
      "Tailwind",
      "Framer Motion",
    ],
    source: "https://github.com/Daniellios/todo-app",
    visit: "https://todo-app-hazel-six.vercel.app",
    id: 2,
  },

  {
    title: "Hidden Object Game",
    isGame: true,
    description:
      "One of my projects on my previous position as a PixiJs developer",
    images: ["/images/Hidden.png"],
    tags: ["JavaScript", "TypeScript", "React", "PixiJs", "HTML", "CSS"],
    source: "https://daniellios.github.io/HO-test/",
    visit:
      "https://drive.google.com/drive/folders/1RgRW-RVp80i7Qs_fjVID8HbSXoIZPl48?usp=sharing",
    id: 0,
  },
  {
    title: "Yandex food ",
    isGame: true,
    description: "Playable ad for yandex-food",
    images: ["/images/Ya-food.jpg"],
    tags: ["JavaScript", "TypeScript", "React", "PixiJs", "HTML", "CSS"],
    source: "https://daniellios.github.io/yndx-food/",
    visit:
      "https://drive.google.com/drive/folders/18X62PfO4a8kYyR3h6n5pTH0RqOKAz8S1?usp=sharing",
    id: 11,
  },
  {
    title: "Mahjong Game",
    isGame: true,
    description: "This is a mahjong game I made for G5 Entertainment.",
    images: ["/images/Mahjong.png"],
    tags: ["JavaScript", "TypeScript", "React", "PixiJs", "HTML", "CSS"],
    source: "https://daniellios.github.io/SM-game/",
    visit:
      "https://drive.google.com/drive/folders/1AgifLkc0QmPan-ATlKTtLscLbLCB3586?usp=sharing",
    id: 1,
  },
];

export const HeaderTitles = [
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Contacts",
    link: "#contacts",
  },
];

export const Jobs = [
  {
    id: 0,
    title: "Fullstack Developer",
    company: "VIECO",
    tasks: [
      "Developed client app with React, TypeScript, Next.js, TailWind",
      "Developed admin dashboard panel",
      "Designed and developed REST API with NestJS, PostgreSQL",
      "Integration of fron-end and backend",
      "Architectural and business logic coordination",
    ],
    range: "September 2022 - Now",
  },
  {
    id: 1,
    title: "PixiJS Developer",
    company: "PlayableArt",
    tasks: [
      "Developed playable ads using JS, TS, React, PixiJS, HTML, CSS",
      "Contributed and maintained local framework",
      "Worked on scenarios of playbles",
      "Prepared and bundled final projects for clients",
    ],
    range: "December - June 2022",
  },
  {
    id: 2,
    title: "HTML Layout Designer",
    company: "Freelance",
    tasks: [
      "Web-site building with JS, HTML, SCSS",
      "Terms of refence preparation",
      "Bundle configuration (Parcel, Gulp)",
    ],
    range: "September - December 2021",
  },
];

export const TechIcons = [
  <SiReact size="3rem" color="rgb(97, 218, 251)" />,
  <SiRedux color="rgb(118, 74, 188)" size="3rem" />,
  <DiJsBadge size="3rem" color="#FFD600" />,
  <SiTypescript size="3rem" color="#0D61A9" />,
  <Icon icon="cib:next-js" height="48px" />,
  <SiNestjs size="3rem" color="#F50057"></SiNestjs>,
  <SiPostgresql size="3rem" color="#0277BD"></SiPostgresql>,
  <SiSass size="3rem" color="#F06292" />,
  <SiTailwindcss size="3rem" color="#00ACC1"></SiTailwindcss>,
  <ImGit size="3rem" color="#F4511E" />,
];

export const TimeLineData = [
  { year: 2016, text: "Entered Moscow Polytech University " },
  {
    year: 2020,
    text: "Graduated from university with Bachelor in Сomputer science and control systems",
  },
  { year: 2021, text: "Started learning Front-end development " },
  { year: 2021, text: "Got my first job in Front-end as a PixiJS developer" },
  { year: 2022, text: "Still honing and improving my skills" },
];
