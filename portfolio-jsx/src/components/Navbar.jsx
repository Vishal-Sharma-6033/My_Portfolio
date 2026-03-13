import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };
  return /* @__PURE__ */ React.createElement(
    motion.nav,
    {
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { type: "spring", duration: 0.6, bounce: 0 },
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-sm border-b border-border" : ""}`
    },
    /* @__PURE__ */ React.createElement("div", { className: "section-container flex items-center justify-between h-16" }, /* @__PURE__ */ React.createElement("a", { href: "#", className: "text-lg font-bold tracking-tight text-foreground" }, /* @__PURE__ */ React.createElement("span", { className: "text-accent" }, "<"), "Vishal Sharma", /* @__PURE__ */ React.createElement("span", { className: "text-accent" }, "/>")), /* @__PURE__ */ React.createElement("div", { className: "hidden md:flex items-center gap-8" }, navLinks.map((link) => /* @__PURE__ */ React.createElement(
      "a",
      {
        key: link.href,
        href: link.href,
        className: "text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200"
      },
      link.label
    )), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: toggleTheme,
        className: "p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors",
        "aria-label": "Toggle theme"
      },
      isDark ? /* @__PURE__ */ React.createElement(Sun, { size: 18 }) : /* @__PURE__ */ React.createElement(Moon, { size: 18 })
    ), /* @__PURE__ */ React.createElement(
      "a",
      {
        href: "/vishal_resume.pdf",
        download: "Vishal-Sharma-Resume.pdf",
        className: "bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
      },
      /* @__PURE__ */ React.createElement(Download, { size: 14, className: "inline mr-1.5 -mt-0.5" }),
      "Resume"
    )), /* @__PURE__ */ React.createElement("div", { className: "flex md:hidden items-center gap-2" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: toggleTheme,
        className: "p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
      },
      isDark ? /* @__PURE__ */ React.createElement(Sun, { size: 18 }) : /* @__PURE__ */ React.createElement(Moon, { size: 18 })
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "p-2 text-foreground"
      },
      isOpen ? /* @__PURE__ */ React.createElement(X, { size: 22 }) : /* @__PURE__ */ React.createElement(Menu, { size: 22 })
    ))),
    /* @__PURE__ */ React.createElement(AnimatePresence, null, isOpen && /* @__PURE__ */ React.createElement(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        className: "md:hidden bg-background border-b border-border overflow-hidden"
      },
      /* @__PURE__ */ React.createElement("div", { className: "section-container py-4 flex flex-col gap-3" }, navLinks.map((link) => /* @__PURE__ */ React.createElement(
        "a",
        {
          key: link.href,
          href: link.href,
          onClick: () => setIsOpen(false),
          className: "text-sm font-medium text-muted-foreground hover:text-foreground py-2"
        },
        link.label
      )), /* @__PURE__ */ React.createElement(
        "a",
        {
          href: "/vishal_resume.pdf",
          download: "Vishal-Sharma-Resume.pdf",
          className: "bg-accent text-accent-foreground px-4 py-2.5 rounded-lg text-sm font-medium text-center mt-2"
        },
        "Download Resume"
      ))
    ))
  );
};
var Navbar_default = Navbar;
export {
  Navbar_default as default
};
