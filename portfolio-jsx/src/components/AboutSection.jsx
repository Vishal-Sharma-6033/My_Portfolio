import React from "react";
import { motion } from "framer-motion";
import { container, fadeUpItem as item } from "@/lib/animations";
const highlights = [
  { label: "Years Coding", value: "3+" },
  { label: "Projects Built", value: "15+" },
  { label: "Technologies", value: "12+" }
];
const AboutSection = () => {
  return /* @__PURE__ */ React.createElement("section", { id: "about", className: "py-24" }, /* @__PURE__ */ React.createElement("div", { className: "section-container" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { type: "spring", duration: 0.4, bounce: 0 }
    },
    /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium tracking-widest uppercase text-accent mb-2" }, "About Me"),
    /* @__PURE__ */ React.createElement("h2", { className: "text-section font-bold text-foreground mb-8" }, "Passionate about building", /* @__PURE__ */ React.createElement("br", null), "things that ", /* @__PURE__ */ React.createElement("span", { className: "text-accent" }, "matter."))
  ), /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-2 gap-12 items-start" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { type: "spring", duration: 0.4, bounce: 0, delay: 0.1 }
    },
    /* @__PURE__ */ React.createElement("p", { className: "text-muted-foreground leading-relaxed mb-4 max-w-[65ch]" }, "I'm a MERN Stack Developer with a deep passion for creating scalable, user-centric web applications. My journey started with curiosity about how websites work and evolved into a full-time pursuit of building impactful digital products."),
    /* @__PURE__ */ React.createElement("p", { className: "text-muted-foreground leading-relaxed mb-6 max-w-[65ch]" }, "I specialize in the MongoDB, Express.js, React.js, and Node.js ecosystem, and I'm constantly expanding my toolkit with technologies like Socket.IO for real-time features, REST APIs, and cloud deployment solutions."),
    /* @__PURE__ */ React.createElement("p", { className: "text-muted-foreground leading-relaxed max-w-[65ch]" }, "Beyond the MERN stack, I work with JavaScript/TypeScript, Git, and various cloud platforms. I believe in writing clean, maintainable code and building applications that solve real problems.")
  ), /* @__PURE__ */ React.createElement(
    motion.div,
    {
      variants: container,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true },
      className: "grid grid-cols-3 gap-4"
    },
    highlights.map((h) => /* @__PURE__ */ React.createElement(
      motion.div,
      {
        key: h.label,
        variants: item,
        className: "bg-card rounded-xl p-6 text-center card-shadow"
      },
      /* @__PURE__ */ React.createElement("p", { className: "text-3xl font-bold text-accent mb-1" }, h.value),
      /* @__PURE__ */ React.createElement("p", { className: "text-xs font-medium text-muted-foreground tracking-wide uppercase" }, h.label)
    ))
  ))));
};
var AboutSection_default = AboutSection;
export {
  AboutSection_default as default
};
