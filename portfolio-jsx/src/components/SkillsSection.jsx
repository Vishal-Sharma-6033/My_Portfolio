import React from "react";
import { motion } from "framer-motion";
import { container, fadeUpItem as item } from "@/lib/animations";
const categories = [
  {
    title: "Frontend",
    skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT Auth"]
  },
  {
    title: "Database",
    skills: ["MongoDB", "Mongoose"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render"]
  }
];
const SkillsSection = () => {
  return /* @__PURE__ */ React.createElement("section", { id: "skills", className: "py-16 bg-card/50" }, /* @__PURE__ */ React.createElement("div", { className: "section-container" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { type: "spring", duration: 0.4, bounce: 0 },
      className: "mb-12"
    },
    /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium tracking-widest uppercase text-accent mb-2" }, "Skills"),
    /* @__PURE__ */ React.createElement("h2", { className: "text-section font-bold text-foreground" }, "Technologies I ", /* @__PURE__ */ React.createElement("span", { className: "text-accent" }, "work with."))
  ), /* @__PURE__ */ React.createElement(
    motion.div,
    {
      variants: container,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true },
      className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
    },
    categories.map((cat) => /* @__PURE__ */ React.createElement(
      motion.div,
      {
        key: cat.title,
        variants: item,
        className: "bg-card rounded-xl p-6 card-shadow"
      },
      /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-foreground mb-4 text-card-title" }, cat.title),
      /* @__PURE__ */ React.createElement("ul", { className: "space-y-2.5" }, cat.skills.map((skill) => /* @__PURE__ */ React.createElement("li", { key: skill, className: "flex items-center gap-2.5 text-sm text-muted-foreground" }, /* @__PURE__ */ React.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-accent shrink-0" }), skill)))
    ))
  )));
};
var SkillsSection_default = SkillsSection;
export {
  SkillsSection_default as default
};
