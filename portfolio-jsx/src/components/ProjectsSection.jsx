import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { container, fadeUpItem as item } from "@/lib/animations";
const projects = [
  {
    title: "Retail_price_comparison_bot",
    description: "A full-stack MERN application that helps users find the best prices for products across local shops.",
    stack: ["React", "Node.js", "MongoDB", "Socket.IO"],
    github: "https://github.com/Vishal-Sharma-6033/Retail_price_comparison_bot.git",
    demo: "#",
    color: "from-amber-500/10 to-orange-500/10"
  },
  {
    title: "MiniTube",
    description: "MiniTube is a modern backend system designed for a content-sharing and community interaction platform where users can create, publish, and engage with multimedia content in multiple ways.",
    stack: [ "Node.js","Express.js", "MongoDB",],
    github: "https://github.com/Vishal-Sharma-6033/MiniTube.git",
    demo: "#",
    color: "from-amber-500/10 to-orange-500/10"
  }
];
const ProjectsSection = () => {
  return /* @__PURE__ */ React.createElement("section", { id: "projects", className: "py-24" }, /* @__PURE__ */ React.createElement("div", { className: "section-container" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { type: "spring", duration: 0.4, bounce: 0 },
      className: "mb-12"
    },
    /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium tracking-widest uppercase text-accent mb-2" }, "Projects"),
    /* @__PURE__ */ React.createElement("h2", { className: "text-section font-bold text-foreground" }, "Things I've ", /* @__PURE__ */ React.createElement("span", { className: "text-accent" }, "built."))
  ), /* @__PURE__ */ React.createElement(
    motion.div,
    {
      variants: container,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true },
      className: "grid md:grid-cols-2 gap-8"
    },
    projects.map((project) => /* @__PURE__ */ React.createElement(
      motion.div,
      {
        key: project.title,
        variants: item,
        whileHover: { scale: 1.02 },
        transition: { type: "spring", duration: 0.4, bounce: 0 },
        className: "bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-shadow duration-300 group"
      },
      /* @__PURE__ */ React.createElement("div", { className: `aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center` }, /* @__PURE__ */ React.createElement("span", { className: "text-4xl font-bold text-foreground/10" }, project.title.charAt(0))),
      /* @__PURE__ */ React.createElement("div", { className: "p-6" }, /* @__PURE__ */ React.createElement("h3", { className: "text-card-title font-bold text-foreground mb-2" }, project.title), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2" }, project.description), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2 mb-4" }, project.stack.map((tech) => /* @__PURE__ */ React.createElement(
        "span",
        {
          key: tech,
          className: "text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
        },
        tech
      ))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("a", { href: project.github, className: "text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 text-sm font-medium" }, /* @__PURE__ */ React.createElement(Github, { size: 16 }), " Code"), /* @__PURE__ */ React.createElement("a", { href: project.demo, className: "text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1.5 text-sm font-medium" }, /* @__PURE__ */ React.createElement(ExternalLink, { size: 16 }), " Live Demo")))
    ))
  )));
};
var ProjectsSection_default = ProjectsSection;
export {
  ProjectsSection_default as default
};
