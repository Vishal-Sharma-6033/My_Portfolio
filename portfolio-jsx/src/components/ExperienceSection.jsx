import React from "react";
import { motion } from "framer-motion";
import { container, fadeLeftItem as item } from "@/lib/animations";
const events = [
  {
    year: "2024",
    title: "Started Web Development",
    description: "Began learning HTML, CSS, and JavaScript. Built small projects to understand core web development concepts and DOM manipulation."
  },
  {
    year: "2024",
    title: "JavaScript Projects",
    description: "Built projects like Tic-Tac-Toe, Music Player, and Weather App to strengthen JavaScript logic, UI design, and frontend fundamentals."
  },
  {
    year: "2025",
    title: "MERN Stack Development",
    description: "Learned MongoDB, Express.js, React.js, and Node.js. Started building full-stack applications with authentication and REST APIs."
  },
  {
    year: "2025",
    title: "Backend & API Development",
    description: "Focused on backend architecture including JWT authentication, database schema design, API security, and scalable server-side development."
  },
  {
    year: "2025",
    title: "Full Stack Projects",
    description: "Built real-world applications like MiniTube and SmartCampus ERP with role-based authentication, attendance, results, and cloud storage."
  },
  {
    year: "2026",
    title: "Advanced Backend & Real-Time Systems",
    description: "Exploring Socket.IO, real-time communication, scalable backend architecture, payment integration, and production-ready MERN applications."
  }
];
const ExperienceSection = () => {
  return /* @__PURE__ */ React.createElement("section", { id: "experience", className: "py-16 bg-card/50" }, /* @__PURE__ */ React.createElement("div", { className: "section-container" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { type: "spring", duration: 0.4, bounce: 0 },
      className: "mb-12"
    },
    /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium tracking-widest uppercase text-accent mb-2" }, "Journey"),
    /* @__PURE__ */ React.createElement("h2", { className: "text-section font-bold text-foreground" }, "My learning ", /* @__PURE__ */ React.createElement("span", { className: "text-accent" }, "timeline."))
  ), /* @__PURE__ */ React.createElement(
    motion.div,
    {
      variants: container,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true },
      className: "relative"
    },
    /* @__PURE__ */ React.createElement("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" }),
    events.map((event, idx) => /* @__PURE__ */ React.createElement(
      motion.div,
      {
        key: idx,
        variants: item,
        className: `relative flex items-start mb-8 last:mb-0 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`
      },
      /* @__PURE__ */ React.createElement("div", { className: "absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background -translate-x-1.5 mt-1.5 z-10" }),
      /* @__PURE__ */ React.createElement("div", { className: `ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}` }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-medium tracking-widest text-accent" }, event.year), /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-foreground mt-1 mb-1" }, event.title), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-muted-foreground leading-relaxed" }, event.description))
    ))
  )));
};
var ExperienceSection_default = ExperienceSection;
export {
  ExperienceSection_default as default
};
